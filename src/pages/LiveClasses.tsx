import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { auth, db, ensureAnonymousUser } from "../firebase/config";


import { onAuthStateChanged } from "firebase/auth";
import {
  doc,
  getDoc,
  setDoc,
  addDoc,
  collection,
  serverTimestamp
} from "firebase/firestore";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";

import {
  Video,
  VideoOff,
  Mic,
  MicOff,
  MessageCircle,
  Users,
  Settings,
  PhoneOff,
  Monitor,
  Send
} from "lucide-react";

interface Participant {
  id: string;
  name: string;
  role: "admin" | "tutor" | "student";
  videoEnabled: boolean;
  audioEnabled: boolean;
  isPresenting: boolean;
}

interface LiveClassData {
  id: string;
  title: string;
  description: string;
  tutor: string;
  startTime: string;
  status: "scheduled" | "live";
  participantsCount: number;
  zoomMeetingId?: string; // optional, for future Zoom integration
}

const LiveClasses = () => {
  // State
  const [isInCall, setIsInCall] = useState(false);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(true);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { id: 1, sender: "Admin", message: "Welcome to today's math lesson!", time: "2:00 PM", role: "admin" },
    { id: 2, sender: "John (Student)", message: "Thank you! I'm ready to learn.", time: "2:01 PM", role: "student" },
    { id: 3, sender: "Ms. Smith (Tutor)", message: "Let's start with addition problems.", time: "2:02 PM", role: "tutor" }
  ]);
const [currentUser, setCurrentUser] = useState<any>(null);
const [pendingClass, setPendingClass] = useState<LiveClassData | null>(null);

const [liveForm, setLiveForm] = useState({
  name: "",
  grade: "",
  subject: "",
  parentPhone: ""
});

  const [participants, setParticipants] = useState<Participant[]>([
    { id: "1", name: "Admin (You)", role: "admin", videoEnabled: true, audioEnabled: true, isPresenting: false },
    { id: "2", name: "Ms. Smith", role: "tutor", videoEnabled: true, audioEnabled: true, isPresenting: true },
    { id: "3", name: "John", role: "student", videoEnabled: true, audioEnabled: true, isPresenting: false },
    { id: "4", name: "Emma", role: "student", videoEnabled: false, audioEnabled: true, isPresenting: false }
  ]);

  const [upcomingClasses, setUpcomingClasses] = useState<LiveClassData[]>([
    {
      id: "1",
      title: "Already existing member",
      description: "Learn basic number recognition and counting skills",
      tutor: "Ms. Smith",
      startTime: "2:00 PM - 3:00 PM",
      status: "live",
      participantsCount: 4,
      zoomMeetingId: ""
    },
   ]);

  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [newRequest, setNewRequest] = useState({
    subject: "",
    grade: "",
    topic: "",
    preferredTime: "",
    notes: ""
  });

  const videoRef = useRef<HTMLVideoElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

useEffect(() => {
  ensureAnonymousUser();

  const unsub = onAuthStateChanged(auth, (user) => {
    setCurrentUser(user);

    if (user?.displayName) {
      setLiveForm((prev) => ({
        ...prev,
        name: user.displayName || ""
      }));
    }
  });

  return () => unsub();
}, []);

const handleJoinClick = async (cls: LiveClassData) => {
  if (!auth.currentUser) return;

  const userRef = doc(db, "users", auth.currentUser.uid);
  const snap = await getDoc(userRef);

  // First time → open form
  if (!snap.exists() || !snap.data()?.liveClassFormFilled) {
    setPendingClass(cls);
    setIsRequestModalOpen(true);
    return;
  }

  // Already filled → join directly
  joinCall(cls);
};


  // Handlers
  const handleSendMessage = () => {
    if (!message.trim()) return;
    const newMessage = {
      id: messages.length + 1,
      sender: "Admin (You)",
      message: message.trim(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      role: "admin" as const
    };
    setMessages([...messages, newMessage]);
    setMessage("");
  };
const joinCall = async (classData: LiveClassData) => {
  try {
    const res = await fetch("/api/zoom/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: classData.title }),
    });

    const data = await res.json();

    if (!data.joinUrl) throw new Error("Zoom link not created");

    // Student → join meeting
    window.open(data.joinUrl, "_blank");

    setIsInCall(true);
  } catch (err) {
    console.error("Zoom error:", err);
    alert("Unable to start live class");
  }
};


  const leaveCall = () => setIsInCall(false);

const handleRequestClassSubmit = async () => {
  // 1. Check if core objects exist
  if (!pendingClass || !auth.currentUser) return;

  // 2. MANDATORY FIELD VALIDATION
  // This checks if grade, subject, or parentPhone are empty strings or null
  if (!liveForm.grade || !liveForm.subject || !liveForm.parentPhone) {
    alert("Grade, Subject, and Parent Phone Number are required to continue.");
    return; // STOP execution here
  }

  const user = auth.currentUser;

  try {
    // 3. Save form data to Firebase
    await addDoc(collection(db, "liveClassForms"), {
      userId: user.uid,
      isAnonymous: user.isAnonymous,
      ...liveForm, // Contains grade, subject, parentPhone, and optional name
      createdAt: serverTimestamp()
    });

    // 4. Mark user profile as having filled the form
    await setDoc(
      doc(db, "users", user.uid),
      {
        liveClassFormFilled: true,
        name: liveForm.name || "Anonymous Student", // Handles optional name
        email: user.email || null,
        isAnonymous: user.isAnonymous
      },
      { merge: true }
    );

    setIsRequestModalOpen(false);
    joinCall(pendingClass);
    
  } catch (error) {
    console.error("Error submitting class request:", error);
    alert("Something went wrong. Please try again.");
  }
};


  // Render

  if (!isInCall) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Live Classes
            </h1>
            <Button onClick={() => setIsRequestModalOpen(true)}>Request a Live Class</Button>
          </div>

          <div className="grid gap-6">
            {upcomingClasses.map((cls) => (
              <Card key={cls.id} className="w-[50%] mx-auto mt-20 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex m-auto mb-6">
                      <CardTitle className=" text-xl">{cls.title}</CardTitle>
                      
                    </div>
                    {/* <Badge
                      className={`${
                        cls.status === "live"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {cls.status === "live" ? "Live Now" : "Scheduled"}
                    </Badge> */}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                                                
                      </div>
                      </div>
                   <Button className="flex m-auto"
  onClick={() => handleJoinClick(cls)}
  disabled={cls.status !== "live"}
>
  Join Zoom Live
</Button>

                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Request Live Class Modal */}
         <Dialog open={isRequestModalOpen} onOpenChange={setIsRequestModalOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Request a Live Class</DialogTitle>
      <DialogDescription>Fill out the form below to request a live class</DialogDescription>
    </DialogHeader>
    {/* Body inputs */}
 <div className="space-y-3">
  {/* Name - OPTIONAL (No asterisk) */}
  <Input
    placeholder="Student Name (Optional)"
    value={liveForm.name}
    onChange={(e) => setLiveForm({ ...liveForm, name: e.target.value })}
  />

  {/* Class - REQUIRED (*) */}
  <Input
    placeholder="Class / Grade *"
    required
    value={liveForm.grade}
    onChange={(e) => setLiveForm({ ...liveForm, grade: e.target.value })}
  />

  {/* Subject - REQUIRED (*) */}
  <Input
    placeholder="Subject *"
    required
    value={liveForm.subject}
    onChange={(e) => setLiveForm({ ...liveForm, subject: e.target.value })}
  />

  {/* Parent Phone - REQUIRED (*) */}
  <Input
    placeholder="Parent Phone Number *"
    required
    type="tel"
    value={liveForm.parentPhone}
    onChange={(e) => setLiveForm({ ...liveForm, parentPhone: e.target.value })}
  />
</div>

    <DialogFooter className="flex justify-end gap-2">
      <Button variant="outline" onClick={() => setIsRequestModalOpen(false)}>Cancel</Button>
      <Button onClick={handleRequestClassSubmit}>Submit</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>

        </div>
      </div>
    );
  }

  // In-call UI
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="border-b bg-card p-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold">{upcomingClasses[0].title}</h1>
          <p className="text-sm text-muted-foreground">with {upcomingClasses[0].tutor} • {participants.length} participants</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">Live</Badge>
          <Button variant="outline" size="sm">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Video / Presenter */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 p-4 bg-muted/20">
            <div className="grid grid-cols-2 gap-4 h-full">
              <div className="col-span-2 lg:col-span-1 relative bg-black rounded-lg overflow-hidden">
                <video ref={videoRef} className="w-full h-full object-cover" autoPlay muted poster="/placeholder.svg" />
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="bg-black/50 px-3 py-1 rounded-full text-sm">
                    {participants[1].name} - Presenting
                  </div>
                </div>
                <div className="absolute top-4 right-4">
                  <Button size="sm" variant="secondary">
                    <Monitor className="h-4 w-4 mr-1" />
                    Share Screen
                  </Button>
                </div>
              </div>

              {/* Participant videos */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
                {participants.slice(1).map((p) => (
                  <div key={p.id} className="relative bg-black rounded-lg overflow-hidden aspect-video">
                    {p.videoEnabled ? (
                      <video className="w-full h-full object-cover" autoPlay muted poster="/placeholder.svg" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-muted">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                            {p.name.charAt(0)}
                          </div>
                          <p className="text-sm text-muted-foreground">{p.name}</p>
                        </div>
                      </div>
                    )}
                    <div className="absolute bottom-2 left-2 text-white">
                      <div className="bg-black/50 px-2 py-1 rounded text-xs flex items-center gap-1">
                        {p.name}
                        {!p.audioEnabled && <MicOff className="h-3 w-3" />}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="border-t bg-card p-4 flex justify-center gap-4">
            <Button
              variant={isVideoEnabled ? "default" : "destructive"}
              size="lg"
              onClick={() => setIsVideoEnabled(!isVideoEnabled)}
            >
              {isVideoEnabled ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
            </Button>
            <Button
              variant={isAudioEnabled ? "default" : "destructive"}
              size="lg"
              onClick={() => setIsAudioEnabled(!isAudioEnabled)}
            >
              {isAudioEnabled ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
            </Button>
            <Button variant="outline" size="lg">
              <Monitor className="h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" onClick={() => setIsChatOpen(!isChatOpen)}>
              <MessageCircle className="h-5 w-5" />
            </Button>
            <Button variant="destructive" size="lg" onClick={leaveCall}>
              <PhoneOff className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Chat Sidebar */}
        {isChatOpen && (
          <div className="w-80 border-l bg-card flex flex-col">
            <div className="p-4 border-b">
              <h3 className="font-semibold">Class Chat</h3>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-3">
                {messages.map((msg) => (
                  <div key={msg.id} className="text-sm">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`font-medium ${
                          msg.role === "admin"
                            ? "text-primary"
                            : msg.role === "tutor"
                            ? "text-secondary"
                            : "text-foreground"
                        }`}
                      >
                        {msg.sender}
                      </span>
                      <span className="text-xs text-muted-foreground">{msg.time}</span>
                    </div>
                    <p className="text-muted-foreground">{msg.message}</p>
                  </div>
                ))}
                <div ref={chatEndRef} />
              </div>
            </div>




            {/* Message Input */}
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input
                  placeholder="Type a message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <Button size="sm" onClick={handleSendMessage}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveClasses;
