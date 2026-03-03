import { useState, useRef, useEffect } from "react";
import { Bot, Mic, MicOff, X, Send, Loader2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { auth } from "@/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import PricingModal from "@/components/PricingModal";
import AuthModal from "@/components/AuthModal";

interface ChatMessage {
  role: 'user' | 'bot';
  text: string;
}

const AIAssistantButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [isChatLoading, setIsChatLoading] = useState(false);
  const [searchCount, setSearchCount] = useState(0);
  const [user, setUser] = useState(auth.currentUser);
  const [hasSubscription, setHasSubscription] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authView, setAuthView] = useState<"sign_in" | "sign_up">("sign_up");
  
  const chatEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  const MAX_FREE_SEARCHES = 3;
  const isAnonymous = !user || user.isAnonymous;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      // Check subscription status
      if (currentUser && !currentUser.isAnonymous) {
        try {
          const idTokenResult = await currentUser.getIdTokenResult();
          setHasSubscription(!!idTokenResult.claims.stripeRole);
        } catch (error) {
          console.error("Error checking subscription:", error);
          setHasSubscription(false);
        }
      } else {
        setHasSubscription(false);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    // Load search count from localStorage
    const savedCount = localStorage.getItem('aiAssistantSearchCount');
    if (savedCount) {
      setSearchCount(parseInt(savedCount, 10));
    }

    // Initialize welcome message
    setChatMessages([{
      role: 'bot',
      text: hasSubscription 
        ? "Hi! I'm your AI Study Buddy. Ask me anything!"
        : `Hi! I'm your AI Study Buddy. You have ${MAX_FREE_SEARCHES - searchCount} free questions remaining. Ask me anything!`
    }]);
  }, []);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages]);

  useEffect(() => {
    // Initialize Speech Recognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setChatInput(transcript);
        setIsListening(false);
      };

      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  const handleVoiceInput = () => {
    if (!recognitionRef.current) {
      setChatMessages(prev => [...prev, { 
        role: 'bot', 
        text: "Voice recognition is not supported in your browser. Please type your question." 
      }]);
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  const handleChatSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!chatInput.trim() || isChatLoading) return;

    // Check limits
    if (!hasSubscription && searchCount >= MAX_FREE_SEARCHES) {
      if (isAnonymous) {
        setAuthView("sign_up");
        setAuthModalOpen(true);
      } else {
        setIsPricingOpen(true);
      }
      setChatMessages(prev => [...prev, {
        role: 'bot',
        text: `You've reached your ${MAX_FREE_SEARCHES} free questions limit. ${isAnonymous ? 'Sign up' : 'Upgrade'} to continue learning!`
      }]);
      return;
    }

    const userMsg = chatInput;
    setChatInput("");
    setChatMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsChatLoading(true);

    try {
      const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
      if (!API_KEY) {
        throw new Error("Missing VITE_GEMINI_API_KEY");
      }

      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      const context = `You are a helpful AI study assistant for students. Provide clear, educational answers. 
      Keep responses concise and student-friendly. If it's a math problem, show step-by-step solutions.`;

      const result = await model.generateContent(`${context}\n\nStudent question: ${userMsg}`);
      const text = result.response.text();

      if (text) {
        setChatMessages(prev => [...prev, { role: 'bot', text }]);
        
        // Increment search count only for non-subscribers
        if (!hasSubscription) {
          const newCount = searchCount + 1;
          setSearchCount(newCount);
          localStorage.setItem('aiAssistantSearchCount', newCount.toString());

          // Show remaining count
          const remaining = MAX_FREE_SEARCHES - newCount;
          if (remaining > 0 && remaining <= 2) {
            setTimeout(() => {
              setChatMessages(prev => [...prev, {
                role: 'bot',
                text: `You have ${remaining} free question${remaining === 1 ? '' : 's'} remaining.`
              }]);
            }, 1000);
          }
        }
      }
    } catch (err) {
      console.error("AI Assistant Error:", err);
      setChatMessages(prev => [...prev, { 
        role: 'bot', 
        text: "I'm having trouble connecting right now. Please try again in a moment." 
      }]);
    } finally {
      setIsChatLoading(false);
    }
  };

  const getButtonIcon = () => {
    if (isListening) return <MicOff className="h-6 w-6 animate-pulse" />;
    return <Bot className="h-6 w-6" />;
  };

  const getButtonClass = () => {
    let baseClass = "w-14 h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center";
    if (isListening) {
      return `${baseClass} bg-red-600 hover:bg-red-700 ring-4 ring-red-600/30 animate-pulse`;
    }
    if (isOpen) {
      return `${baseClass} bg-gray-700 hover:bg-gray-800 ring-4 ring-gray-600/20`;
    }
    return `${baseClass} bg-gradient-to-r from-[#009f75] via-[#2181e1] to-[#cfb42a] hover:scale-105 ring-4 ring-blue-600/20`;
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {isOpen && (
          <div className="bg-white w-80 h-96 rounded-2xl shadow-2xl border border-gray-200 flex flex-col mb-4 overflow-hidden animate-in slide-in-from-bottom-10 fade-in duration-300">
            <div className="bg-gradient-to-r from-[#009f75] via-[#2181e1] to-[#cfb42a] p-4 text-white flex justify-between items-center shrink-0">
              <div>
                <h3 className="font-bold text-sm flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  AI Study Buddy
                </h3>
                {!hasSubscription && (
                  <p className="text-xs text-white/90 opacity-90">
                    {searchCount}/{MAX_FREE_SEARCHES} free questions used
                  </p>
                )}
              </div>
              <Button
                onClick={() => setIsOpen(false)}
                variant="ghost"
                size="icon"
                className="text-white hover:text-white/80 hover:bg-white/10 w-8 h-8"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex-grow p-4 overflow-y-auto bg-gray-50 space-y-3">
              {chatMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex items-start ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      msg.role === 'bot'
                        ? 'bg-indigo-100 text-indigo-600 mr-2'
                        : 'bg-blue-100 text-blue-600 ml-2'
                    }`}
                  >
                    {msg.role === 'bot' ? (
                      <Bot className="w-4 h-4" />
                    ) : (
                      <div className="text-xs font-bold">You</div>
                    )}
                  </div>
                  <div
                    className={`p-3 text-sm max-w-[80%] shadow-sm border ${
                      msg.role === 'bot'
                        ? 'bg-white rounded-2xl rounded-tl-none border-gray-100 text-gray-700'
                        : 'bg-blue-600 rounded-2xl rounded-tr-none border-blue-600 text-white'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isChatLoading && (
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mr-2">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 text-sm text-gray-500 flex items-center gap-2">
                    <Loader2 className="w-3 h-3 animate-spin" /> Thinking...
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            <div className="p-3 bg-white border-t border-gray-100 shrink-0">
              <form onSubmit={handleChatSubmit} className="relative flex gap-2">
                <Button
                  type="button"
                  onClick={handleVoiceInput}
                  variant="outline"
                  size="icon"
                  className={`flex-shrink-0 ${isListening ? 'bg-red-50 border-red-300' : ''}`}
                >
                  {isListening ? <MicOff className="w-4 h-4 text-red-600" /> : <Mic className="w-4 h-4" />}
                </Button>
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder={isListening ? "Listening..." : "Ask anything..."}
                  disabled={isListening}
                  className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm"
                />
                <button
                  type="submit"
                  disabled={isChatLoading || !chatInput.trim() || isListening}
                  className="w-9 h-9 bg-blue-600 rounded-full text-white flex items-center justify-center hover:bg-blue-700 transition-colors disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        )}

        <Button
          onClick={() => setIsOpen(!isOpen)}
          className={getButtonClass()}
          aria-label="AI Assistant"
        >
          {getButtonIcon()}
        </Button>
      </div>

      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        view={authView}
        onAuthSuccess={() => {
          setAuthModalOpen(false);
          setIsPricingOpen(true);
        }}
      />

      <PricingModal
        isOpen={isPricingOpen}
        isLoggedIn={!!user}
        onClose={() => setIsPricingOpen(false)}
        onLoginClick={() => {
          setIsPricingOpen(false);
          setAuthView("sign_in");
          setAuthModalOpen(true);
        }}
        isAnonymous={isAnonymous}
      />
    </>
  );
};

export default AIAssistantButton;