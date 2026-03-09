import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { saveAssessmentResult } from "@/services/assessmentService";
import {
  ArrowLeft, Bot, AlertTriangle, Trophy, RefreshCcw, Sparkles, BookOpen,
  Volume2, StopCircle, MessageCircle, X, Send, ChevronDown, Loader2,
  Gamepad2, Check, Zap
} from "lucide-react";

import { curriculumDatabase } from "@/data/curriculum";
import type { AILesson } from "@/data/curriculum";

import { GoogleGenerativeAI } from "@google/generative-ai";

import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { useQuestionTracker } from "@/hooks/useQuestionTracker"; 
import PricingModal from "@/components/PricingModal";
import AuthModal from "@/components/AuthModal";

const PRAISE_WORDS = ["Terrific!", "Superb!", "Excellent!", "Correct!", "Great Job!", "Amazing!", "Wonderful!", "Perfect!", "Brilliant!", "Outstanding!"];
const LOADING_MESSAGES = ["Sharpening virtual pencils...", "Summoning the math wizards...", "Calculating the fun...", "Building your custom challenge...", "Double-checking the answers...", "Almost ready to learn!", "Loading the logic...", "Preparing the puzzle pieces..."];
const FUN_FACTS = [
  "The human brain has about 86 billion neurons.",
  "Your brain generates enough electricity to power a small bulb.",
  "Humans share 60% of their DNA with bananas.",
  "The heart beats about 100,000 times a day.",
  "Your body replaces most cells every 7–10 years.",
  "Skin is the largest organ of the body.",
  "The brain feels no pain itself.",
  "Humans blink around 20,000 times daily.",
  "Bones are stronger than steel by weight.",
  "Your nose can detect over 1 trillion smells.",
  "Blood travels about 12,000 miles in the body daily.",
  "The brain uses 20% of total energy.",
  "Humans are born with 300 bones, adults have 206.",
  "Your stomach acid can dissolve metal.",
  "The eye can distinguish 10 million colors.",
  "Muscles make up 40% of body weight.",
  "The brain is 60% fat.",
  "Humans shed millions of skin cells daily.",
  "A sneeze can travel at 160 km/h.",
  "The tongue has 8 muscle groups.",
  "Your body glows slightly due to biochemical reactions.",
  "The liver can regenerate itself.",
  "Hair grows faster in warm weather.",
  "Your ears never stop growing.",
  "The brain processes images in 13 milliseconds.",
  "Humans can survive weeks without food, days without water.",
  "The first computer bug was a real moth.",
  "The first website is still online today.",
  "Computers work using only 0s and 1s.",
  "The first mouse was made of wood.",
  "Email existed before the World Wide Web.",
  "The first hard drive weighed over 1 ton.",
  "More data was created in the last 5 years than ever before.",
  "Computers can perform billions of operations per second.",
  "Wi-Fi doesn't stand for anything—it's just a name.",
  "The first smartphone appeared in 1992.",
  "USB stands for Universal Serial Bus.",
  "The first webcam watched a coffee pot.",
  "Modern chips contain billions of transistors.",
  "The cloud is actually stored in physical servers.",
  "Over 90% of the world's money is digital.",
  "The QWERTY keyboard was designed to slow typing.",
  "A single Google search uses less energy than a light bulb.",
  "Computers never truly delete data instantly.",
  "Touchscreens sense electrical changes from your skin.",
  "The first programmer was Ada Lovelace.",
  "Computers generate heat due to electrical resistance.",
  "Programming languages exceed 700 types.",
  "HTML is not a programming language.",
  "Servers run 24/7 worldwide.",
  "The first calculator was the size of a desk.",
  "Modern laptops are thinner than magazines.",
  "AI can learn without being explicitly programmed.",
  "Machine learning improves with more data.",
  "AI can recognize faces faster than humans.",
  "Neural networks are inspired by the human brain.",
  "AI can detect diseases earlier than doctors.",
  "Chatbots use natural language processing.",
  "AI can generate art, music, and code.",
  "Self-driving cars use AI vision systems.",
  "AI never gets tired or bored.",
  "Machine learning models find hidden patterns.",
  "AI can translate languages in real time.",
  "Recommendation systems use ML algorithms.",
  "AI can beat humans in complex games.",
  "Training AI requires massive computing power.",
  "AI systems can adapt over time.",
  "Bias in AI comes from biased data.",
  "AI can predict trends from past behavior.",
  "Deep learning uses multi-layer networks.",
  "AI is used in fraud detection.",
  "Voice assistants rely on ML models.",
  "AI can generate realistic human faces.",
  "Large AI models require huge datasets.",
  "AI can optimize traffic systems.",
  "ML models improve through feedback loops.",
  "AI is widely used in healthcare.",
  "Smartphones are more powerful than moon-landing computers.",
  "Smartwatches can monitor heart health.",
  "Foldable phones use flexible glass.",
  "Cameras can see more detail than the human eye.",
  "Wireless charging uses electromagnetic fields.",
  "Bluetooth was named after a Viking king.",
  "Smart TVs are small computers.",
  "Modern batteries charge faster than ever before.",
  "Earbuds contain tiny powerful chips.",
  "Drones use GPS and AI together.",
  "Touchscreens detect electrical signals.",
  "Smart homes save energy automatically.",
  "Innovation often comes from solving small problems.",
  "Cameras can capture billions of colors.",
  "Wearables track sleep cycles.",
  "Modern sensors are smaller than grains of rice.",
  "Electric cars have fewer moving parts.",
  "Gadgets get lighter as tech improves.",
  "Sensors help phones rotate screens.",
  "Smart glasses use augmented reality.",
  "Innovation accelerates with cheaper hardware.",
  "Gadgets communicate using radio waves.",
  "Smart devices rely on firmware updates.",
  "Modern chips enable faster innovation.",
  "Gadgets collect data through sensors.",
  "Innovation often starts as a prototype.",
  "The brain learns better through visual content.",
  "Short study sessions improve retention.",
  "Teaching others improves understanding.",
  "Sleep strengthens memory.",
  "Active learning beats passive reading.",
  "Repetition builds long-term memory.",
  "Mistakes help the brain learn faster.",
  "Curiosity boosts learning speed.",
  "The brain learns patterns naturally.",
  "Learning changes brain structure.",
  "Focused study beats multitasking.",
  "Practice strengthens neural connections.",
  "Learning new skills delays cognitive decline.",
  "Reading improves vocabulary and empathy.",
  "Questions enhance understanding.",
  "Learning is faster with real examples.",
  "Feedback accelerates improvement.",
  "Motivation improves memory recall.",
  "Visual aids boost comprehension.",
  "The brain prefers chunked information.",
  "Learning styles vary by person.",
  "Writing improves memory retention.",
  "Learning activates multiple brain regions.",
  "Curiosity releases dopamine.",
  "Understanding beats memorization.",
  "Consistency improves learning outcomes.",
  "Learning is a lifelong process."
];

interface ChatMessage { role: 'user' | 'bot'; text: string; }

const LearningPage = () => {
  const { gradeId, subjectId, skillId } = useParams();

  // Refs to avoid stale closures on mobile WebView
  const lessonRef = useRef<AILesson | null>(null);
  const questionIndexRef = useRef(0);

  const [user, setUser] = useState(auth.currentUser);
  const { remaining, isLimitReached, incrementQuestion, hasSubscription, isAnonymous } = useQuestionTracker();

  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authView, setAuthView] = useState<"sign_in" | "sign_up">("sign_up");
  const [isPricingOpen, setIsPricingOpen] = useState(false);

  const [lesson, setLesson] = useState<AILesson | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loadingStep, setLoadingStep] = useState(0);
  const [funFactIndex, setFunFactIndex] = useState(Math.floor(Math.random() * FUN_FACTS.length));

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [isCorrectState, setIsCorrectState] = useState<boolean | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [isChatLoading, setIsChatLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const [gameType, setGameType] = useState<"catch" | "wordsearch" | "typing" | "bubblepop">("catch");

  // Ref to always hold the latest handleNextQuestion (fixes stale closure in setTimeout on Android WebView)
  const handleNextQuestionRef = useRef<() => void>(() => {});

  // Keep refs in sync with state
  useEffect(() => { lessonRef.current = lesson; }, [lesson]);
  useEffect(() => { questionIndexRef.current = currentQuestionIndex; }, [currentQuestionIndex]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const rand = Math.random();
    if (rand < 0.25) setGameType("catch");
    else if (rand < 0.50) setGameType("wordsearch");
    else if (rand < 0.75) setGameType("typing");
    else setGameType("bubblepop");
  }, []);

  const subjectData = curriculumDatabase[gradeId as string]?.[subjectId as string];
  const skill = subjectData?.topics?.flatMap((topic) => topic.skills)?.find((s) => s.id === skillId);

  useEffect(() => {
    if (quizCompleted && user && !user.isAnonymous && lesson) {
      const finalScore = Math.round((score / lesson.questions.length) * 100);
      saveAssessmentResult({
        topic: skill?.title || "Unknown Skill",
        subject: subjectData?.title || "General",
        score: finalScore,
        totalQuestions: lesson.questions.length,
        correctAnswers: score,
        type: "Quiz",
        difficulty: "Medium"
      });
    }
  }, [quizCompleted, user, lesson, score, skill, subjectData]);

  useEffect(() => {
    if (chatEndRef.current) chatEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages, isChatOpen]);

  useEffect(() => {
    if (skill && chatMessages.length === 0) {
      setChatMessages([{ role: 'bot', text: `Hi there! I notice you're working on ${skill.title}. I can search the web for explanations if you're stuck!` }]);
    }
  }, [skill, chatMessages.length]);

  useEffect(() => {
    if (!skill || !subjectData) {
      setError("Skill not found. Please check the URL.");
      setIsLoading(false);
      return;
    }

    if (isLimitReached && isAnonymous && !hasSubscription) {
      setIsLoading(false);
      setAuthModalOpen(true);
      return;
    }

    const fetchLesson = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
        if (!API_KEY) throw new Error("⚠️ VITE_GEMINI_API_KEY is not configured in your .env file");

        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
        const prompt = `Create a Quiz Lesson in JSON format. Skill: "${skill.title}" Grade: "${subjectData.title}" Generate a JSON object with: 1. "topicIntro": A short, encouraging introduction paragraph. 2. "questions": An array of exactly 20 multiple-choice questions. Each question must have: - "question": The question text. - "options": An array of 4 options (e.g. ["A) 1", "B) 2", "C) 3", "D) 4"]). - "correctAnswer": The correct option letter (e.g. "B"). - "explanation": A brief explanation of why it is correct. Return ONLY valid JSON. No markdown.`;

        const result = await model.generateContent(prompt);
        const text = result.response.text();
        const cleanText = text.replace(/```json\n?|```/g, "").trim();
        const data: AILesson = JSON.parse(cleanText);
        setLesson(data);
      } catch (err: any) {
        let errorMessage = "Unknown error occurred";
        let errorDetails = "";
        if (err.message?.includes("VITE_GEMINI_API_KEY")) { errorMessage = "API Key Not Found"; errorDetails = "Check your .env file"; }
        else if (err.message?.includes("API_KEY_INVALID") || err.status === 400) { errorMessage = "Invalid API Key"; errorDetails = "Your Gemini API key is invalid."; }
        else if (err.status === 403) { errorMessage = "API Key Restricted"; errorDetails = "Check API key restrictions in Google Cloud Console"; }
        else if (err.status === 429) { errorMessage = "Rate Limit Exceeded"; errorDetails = "Too many requests. Wait a moment and try again"; }
        else if (err.message?.includes("fetch")) { errorMessage = "Network Error"; errorDetails = "Check your internet connection"; }
        else if (err instanceof SyntaxError) { errorMessage = "JSON Parse Error"; errorDetails = "The AI returned invalid data"; }
        else { errorMessage = err.message || "Failed to load lesson"; errorDetails = err.status ? `Status Code: ${err.status}` : ""; }
        setError(`${errorMessage}${errorDetails ? ` - ${errorDetails}` : ""}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLesson();
  }, [skill, subjectData]);

  useEffect(() => {
    if (!isLoading) return;
    const interval = setInterval(() => { setLoadingStep((prev) => prev + 1); }, 6000);
    return () => clearInterval(interval);
  }, [isLoading]);

  useEffect(() => {
    if (!isLoading) return;
    setFunFactIndex(Math.floor(Math.random() * FUN_FACTS.length));
  }, [loadingStep, isLoading]);

  const handleSpeak = () => {
    if (!lesson) return;
    if (isSpeaking) { window.speechSynthesis.cancel(); setIsSpeaking(false); return; }
    setIsSpeaking(true);
    const currentQ = lesson.questions[currentQuestionIndex];
    let textToRead = "";
    if (currentQuestionIndex === 0) textToRead += `Topic Overview: ${lesson.topicIntro}. `;
    textToRead += `Question: ${currentQ.question}. Options: ${currentQ.options.join(". ")}.`;
    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.rate = 0.9;
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => { return () => window.speechSynthesis.cancel(); }, []);

  // ✅ handleNextQuestion uses refs to read latest lesson/index — safe against stale closures
  const handleNextQuestion = () => {
    const currentLesson = lessonRef.current;
    const currentIndex = questionIndexRef.current;
    if (!currentLesson) return;
    window.speechSynthesis.cancel();
    if (currentIndex < currentLesson.questions.length - 1) {
      const nextIndex = currentIndex + 1;
      questionIndexRef.current = nextIndex;
      setCurrentQuestionIndex(nextIndex);
    } else {
      setQuizCompleted(true);
    }
    setSelectedAnswer(null);
    setIsAnswerChecked(false);
    setIsCorrectState(null);
    setFeedbackMessage("");
  };

  // ✅ Keep the ref always pointing to the latest handleNextQuestion.
  // This is the critical fix: setTimeout on Android WebView captures a stale closure,
  // so we always call handleNextQuestionRef.current() instead of handleNextQuestion() directly.
  useEffect(() => {
    handleNextQuestionRef.current = handleNextQuestion;
  });

  // ✅ handleCheckAnswer — score update and question advance are fully decoupled from incrementQuestion
  const handleCheckAnswer = () => {
    if (isLimitReached && !hasSubscription) {
      if (isAnonymous) {
        setAuthView("sign_up");
        setAuthModalOpen(true);
      } else {
        setIsPricingOpen(true);
      }
      return;
    }
    if (!selectedAnswer || !lesson) return;
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    const currentQ = lesson.questions[currentQuestionIndex];
    const selectedLetter = selectedAnswer.split(/[).]/)[0].trim().toUpperCase();
    // Normalize correctAnswer: extract only the letter in case AI returns "B)" or "B."
    const correctLetter = currentQ.correctAnswer.split(/[).]/)[0].trim().toUpperCase();
    const isCorrect = selectedLetter === correctLetter;
    setIsCorrectState(isCorrect);
    setIsAnswerChecked(true);
    if (isCorrect) {
      // Use functional updater so score increment is never lost across re-renders
      setScore(prev => prev + 1);
      const randomPraise = PRAISE_WORDS[Math.floor(Math.random() * PRAISE_WORDS.length)];
      setFeedbackMessage(randomPraise);
      try { window.speechSynthesis.speak(new SpeechSynthesisUtterance(randomPraise)); } catch(e) {}
      // ✅ Use the ref so the timeout always calls the latest function on Android WebView
      setTimeout(() => handleNextQuestionRef.current(), 1500);
    } else {
      setFeedbackMessage(`The correct answer was ${correctLetter}.`);
      try { window.speechSynthesis.speak(new SpeechSynthesisUtterance(`Not quite. The correct answer was ${correctLetter}.`)); } catch(e) {}
    }
    // ✅ Fire-and-forget: don't await, don't let Firestore latency interfere with UI state
    incrementQuestion();
  };

  const handleRetry = () => { window.location.reload(); };

  const handleChatSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!chatInput.trim() || isChatLoading) return;
    const userMsg = chatInput;
    setChatInput("");
    setChatMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsChatLoading(true);
    try {
      const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
      if (!API_KEY) throw new Error("Missing VITE_GEMINI_API_KEY");
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });
      const result = await model.generateContent(`Math tutor context: ${lesson?.topicIntro}. User: ${userMsg}`);
      const text = result.response.text();
      if (text) setChatMessages(prev => [...prev, { role: 'bot', text }]);
    } catch (err) {
      setChatMessages(prev => [...prev, { role: 'bot', text: "Connection error." }]);
    } finally {
      setIsChatLoading(false);
    }
  };

  const backUrl = gradeId && subjectId ? `/grade/${gradeId}/subject/${subjectId}` : '/';

  return (
    <section className="py-8 bg-muted/30 min-h-screen flex flex-col relative pb-24">
      <div className="container mx-auto px-4 max-w-3xl flex-grow flex flex-col">
        <div className="mb-4 flex justify-between items-center">
          <Button variant="ghost" asChild className="pl-0 hover:bg-transparent hover:text-primary"><Link to={backUrl}><ArrowLeft className="w-4 h-4 mr-2" /> Back to Skills</Link></Button>
          {!hasSubscription && !quizCompleted && (
            <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-xs font-bold border border-yellow-200">
              {isLimitReached ? (isAnonymous ? "Total Limit Reached - Upgrade to Continue" : "Daily Limit Reached - Upgrade to Continue") : `${remaining} free questions left`}
            </div>
          )}
          {!isLoading && !quizCompleted && lesson && (
            <div className="flex items-center gap-4">
              <div className="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">Score: {Math.round((score / (currentQuestionIndex + 1)) * 100)}%</div>
              <div className="text-sm font-medium text-muted-foreground">Q: {currentQuestionIndex + 1}/{lesson.questions.length}</div>
            </div>
          )}
        </div>

        <Card className="border-primary/20 shadow-lg flex flex-col flex-grow overflow-hidden min-h-[600px] transition-all duration-300">
          <CardHeader className="bg-primary/5 border-b py-4 flex flex-row items-center justify-between">
            <CardTitle className="flex items-center text-primary text-lg"><Bot className="w-6 h-6 mr-2" /> {quizCompleted ? "Quiz Results" : `Topic: ${skill?.title || "Loading..."}`}</CardTitle>
            {!isLoading && !quizCompleted && (
              <Button variant="ghost" size="icon" onClick={handleSpeak} className={isSpeaking ? "text-red-500 animate-pulse" : "text-primary"}>
                {isSpeaking ? <StopCircle className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
              </Button>
            )}
          </CardHeader>

          <CardContent className="p-6 flex-grow flex flex-col relative">
            {isLoading && (
              <div className="flex flex-col items-center justify-center flex-grow h-full text-center p-8 animate-in fade-in duration-500">
                <h2 className="text-3xl font-extrabold text-primary mb-6 animate-pulse">Hold On while we are loading your lesson Content</h2>
                <div className="relative mb-8">
                  <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                  <div className="relative bg-white p-4 rounded-full shadow-xl border-2 border-primary/10"><Bot className="w-12 h-12 text-primary animate-bounce" /></div>
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2 transition-all duration-500">{LOADING_MESSAGES[loadingStep % LOADING_MESSAGES.length]}</h3>
                <div className="w-64 h-2 bg-gray-100 rounded-full mt-4 mb-8 overflow-hidden"><div className="h-full bg-primary animate-progress-infinite rounded-full" style={{ width: '100%', animation: 'progress 6s infinite ease-in-out' }} /></div>
                <div className="grid gap-6 max-w-md w-full">
                  <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl shadow-sm">
                    <div className="flex items-center justify-center gap-2 mb-2 text-blue-600"><Sparkles className="w-4 h-4" /><span className="text-xs font-bold uppercase tracking-wider">Did you know?</span></div>
                    <p className="text-blue-900 font-medium italic text-base">"{FUN_FACTS[funFactIndex]}"</p>
                  </div>
                </div>
              </div>
            )}

            {error && !isLoading && (
              <div className="flex flex-col items-center justify-center flex-grow text-destructive">
                <AlertTriangle className="w-12 h-12 mb-4" />
                <p className="text-lg font-semibold mb-2">Something went wrong</p>
                <p className="text-sm mb-4 text-center max-w-md">{error}</p>
                <div className="flex gap-3">
                  <Button onClick={() => window.location.reload()} variant="outline">Try Again</Button>
                  <Button onClick={() => window.open('https://ai.google.dev/gemini-api/docs/api-key', '_blank')} variant="secondary" size="sm">Get API Key</Button>
                </div>
                <p className="text-xs text-muted-foreground mt-4">Check the browser console (F12) for more details</p>
              </div>
            )}

            {lesson && !isLoading && !quizCompleted && (
              <div className="flex flex-col h-full">
                <div className="bg-blue-50 p-5 rounded-xl text-blue-900 mb-8 border border-blue-100 shadow-sm">
                  <div className="flex items-center gap-2 mb-2"><BookOpen className="w-5 h-5 text-blue-600" /><h4 className="font-bold text-sm uppercase tracking-wide text-blue-700">Concept Overview</h4></div>
                  <p className="text-base leading-relaxed opacity-90">{lesson.topicIntro}</p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4 leading-relaxed">{lesson.questions[currentQuestionIndex].question}</h3>
                  <div className="space-y-3">
                    {lesson.questions[currentQuestionIndex].options.map((option) => {
                      let btnClass = "w-full justify-start text-left py-4 text-base transition-all duration-200 ";
                      const selectedLetter = option.split(/[).]/)[0].trim().toUpperCase();
                      // ✅ Normalize correctAnswer the same way as handleCheckAnswer — handles "B", "B)", "B." etc.
                      const correctLetter = lesson.questions[currentQuestionIndex].correctAnswer.split(/[).]/)[0].trim().toUpperCase();
                      if (isAnswerChecked) {
                        if (selectedLetter === correctLetter) btnClass += "bg-green-100 border-green-500 text-green-900 font-medium";
                        else if (selectedAnswer === option) btnClass += "bg-red-100 border-red-500 text-red-900";
                        else btnClass += "opacity-50";
                      } else {
                        btnClass += selectedAnswer === option ? "border-primary bg-primary/10 ring-2 ring-primary text-primary font-medium" : "hover:bg-muted border-input";
                      }
                      return <Button key={option} variant="outline" className={btnClass} onClick={() => { if (!isAnswerChecked) setSelectedAnswer(option); }} disabled={isAnswerChecked}>{option}</Button>;
                    })}
                  </div>
                </div>
                <div className="mt-auto pt-4 border-t">
                  {!isAnswerChecked ? (
                    <Button className="w-full py-6 text-lg font-semibold shadow-lg hover:scale-[1.01] transition-transform" onClick={handleCheckAnswer} disabled={!selectedAnswer} size="lg">
                      {isLimitReached && !hasSubscription ? "Unlock Full Access" : "Submit"}
                    </Button>
                  ) : !isCorrectState && (
                    <Button className="w-full py-6 text-lg" onClick={handleNextQuestion} variant="secondary">Got it</Button>
                  )}
                </div>
              </div>
            )}

            {quizCompleted && lesson && (
              <div className="flex flex-col items-center justify-center flex-grow text-center animate-in zoom-in-95">
                <div className="w-32 h-32 bg-yellow-100 rounded-full flex items-center justify-center mb-6 shadow-inner"><Trophy className="w-16 h-16 text-yellow-600" /></div>
                <h2 className="text-4xl font-bold mb-2 text-primary">Fantastic!</h2>
                <p className="text-muted-foreground mb-8 text-lg">You have mastered this skill.</p>
                <div className="w-full max-w-md bg-card border p-8 rounded-xl mb-8 shadow-sm">
                  <div className="text-7xl font-black text-primary mb-2 tracking-tighter">{Math.round((score / lesson.questions.length) * 100)}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide font-semibold">SmartScore</div>
                </div>
                <div className="flex gap-4 w-full max-w-md">
                  <Button variant="outline" className="flex-1 h-12" asChild><Link to={backUrl}>Back to Skills</Link></Button>
                  <Button className="flex-1 h-12" onClick={handleRetry}><RefreshCcw className="w-4 h-4 mr-2" /> Practice Again</Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <AuthModal
          isOpen={authModalOpen}
          onClose={() => setAuthModalOpen(false)}
          view={authView}
          onAuthSuccess={() => { setAuthModalOpen(false); setIsPricingOpen(true); }}
        />
        <PricingModal
          isOpen={isPricingOpen}
          isLoggedIn={!!user}
          onClose={() => setIsPricingOpen(false)}
          onLoginClick={() => { setIsPricingOpen(false); setAuthView("sign_in"); setAuthModalOpen(true); }}
          isAnonymous={isAnonymous}
        />
      </div>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {isChatOpen && (
          <div className="bg-white w-80 h-96 rounded-2xl shadow-2xl border border-gray-200 flex flex-col mb-4 overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
            <div className="bg-gradient-to-r from-[#009f75] via-[#2181e1] to-[#cfb42a] p-4 text-white flex justify-between items-center shrink-0">
              <div><h3 className="font-bold text-sm">Do you need any help?</h3><p className="text-xs text-blue-100 opacity-90">Free Search Chatbot</p></div>
              <Button onClick={() => setIsChatOpen(false)} variant="ghost" size="icon" className="text-white hover:text-white/80 hover:bg-white/10 w-8 h-8"><X className="w-4 h-4" /></Button>
            </div>
            <div className="flex-grow p-4 overflow-y-auto bg-gray-50 space-y-3">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`flex items-start ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'bot' ? 'bg-indigo-100 text-indigo-600 mr-2' : 'bg-blue-100 text-blue-600 ml-2'}`}>
                    {msg.role === 'bot' ? <Bot className="w-4 h-4" /> : <div className="text-xs font-bold">You</div>}
                  </div>
                  <div className={`p-3 text-sm max-w-[80%] shadow-sm border ${msg.role === 'bot' ? 'bg-white rounded-2xl rounded-tl-none border-gray-100 text-gray-700' : 'bg-blue-600 rounded-2xl rounded-tr-none border-blue-600 text-white'}`}>{msg.text}</div>
                </div>
              ))}
              {isChatLoading && (
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-2"><Bot className="w-4 h-4" /></div>
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-sm text-gray-500 flex items-center gap-2"><Loader2 className="w-3 h-3 animate-spin" /> Thinking...</div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
            <div className="p-3 bg-white border-t border-gray-100 shrink-0">
              <form onSubmit={handleChatSubmit} className="relative">
                <input type="text" value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="Type your math question..." className="w-full pl-4 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm" />
                <button type="submit" disabled={isChatLoading || !chatInput.trim()} className="absolute right-2 top-1/2 transform -translate-y-1/2 w-7 h-7 bg-blue-600 rounded-full text-white flex items-center justify-center hover:bg-blue-700 transition-colors disabled:opacity-50"><Send className="w-3 h-3" /></button>
              </form>
              <h4 className="m-2 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#009f75] via-[#2181e1] to-[#cfb42a]">✨ Your AI Study Buddy</h4>
            </div>
          </div>
        )}
        <Button onClick={() => setIsChatOpen(!isChatOpen)} className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 ring-4 ring-blue-600/20 flex items-center justify-center ${isChatOpen ? 'bg-gray-700 hover:bg-gray-800' : 'bg-gradient-to-r from-[#009f75] via-[#2181e1] to-[#cfb42a] hover:scale-105'}`}>
          {isChatOpen ? <ChevronDown className="w-6 h-6" /> : <MessageCircle className="w-6 h-6 animate-pulse" />}
        </Button>
      </div>
    </section>
  );
};

export default LearningPage;