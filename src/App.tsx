import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import Index from "./pages/Index";
import Explore from "./pages/Explore";
import Practice from "./pages/Practice";
import LiveClasses from "./pages/LiveClasses";
import Resources from "./pages/Resources";
import Curriculum from "./pages/Curriculum";
import NotFound from "./pages/NotFound";
import Perk from "./components/SubjectDetails/Prek";
import LearningPage from "./pages/LearningPage";
import HeroSection from "./components/HeroSection";
import ComingSoon from "./pages/ComingSoon"
import MembershipPage from "./pages/Membership";
import LegalPage from "./pages/Legal";
import HelpCenter from "./pages/helpcenter";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light" storageKey="edxly-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/assesment" element={<Practice />} />
            <Route path="/live-classes" element={<LiveClasses />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/hero" element={<HeroSection />} />
            <Route path="/membership" element={<MembershipPage />} />
            <Route path="/terms" element={<LegalPage />} />
            <Route path="/privacy" element={<LegalPage />} />
            <Route path="/help" element={<HelpCenter /> } />
            
          {/* Will update these six Components in V2 of the Project */}
            <Route path="/resources/study-guides" element={<ComingSoon />} />
            <Route path="/resources/worksheets" element={<ComingSoon />} />
            <Route path="/resources/student-portal" element={<ComingSoon />} />
            <Route path="/resources/admin-panel" element={<ComingSoon />} />
            <Route path="/resources/games" element={<ComingSoon />} />
            <Route path="/resources/parents" element={<ComingSoon />} />
          
            {/* Subject details */}
            <Route
              path="/grade/:gradeId/subject/:subjectId"
              element={<Perk />}
            />
            
            {/* Learning page */}
            <Route
              path="/learn/:gradeId/:subjectId/:skillId"
              element={<LearningPage />}
            />
<Route path="/learning/:grade/:subject/:topicId" element={<LearningPage />} />
            {/* 404 page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;