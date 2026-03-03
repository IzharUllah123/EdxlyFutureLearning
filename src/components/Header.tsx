import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, Menu, X, Moon, Sun, User, BookOpen, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useTheme } from "./theme-provider";
import NavigationDropdown from "./NavigationDropdown";
import AuthModal from "./AuthModal";
import PricingModal from "./PricingModal";
import { auth } from "../firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";

// Search data - all searchable content mapped to project URL structure
export const searchData = [
  { 
    title: "Math", 
    category: "Subject", 
    href: "/grade/1/subject/math", 
    keywords: ["mathematics", "numbers", "algebra", "geometry", "calculus", "arithmetic", "addition", "subtraction"] 
  },
  { 
    title: "Language Arts", 
    category: "Subject", 
    href: "/grade/Pre-K/subject/language-arts", 
    keywords: ["reading", "writing", "grammar", "english", "vocabulary", "literacy", "spelling"] 
  },
  { 
    title: "Science", 
    category: "Subject", 
    href: "/grade/Pre-K/subject/science", 
    keywords: ["biology", "chemistry", "physics", "earth science", "nature", "experiments"] 
  },
  { 
    title: "Social Studies", 
    category: "Subject", 
    href: "/grade/Pre-K/subject/social-studies", 
    keywords: ["history", "geography", "civics", "culture", "government", "maps"] 
  },
  { 
    title: "Spanish", 
    category: "Subject", 
    href: "/grade/Pre-K/subject/spanish", 
    keywords: ["language", "español", "vocabulary", "foreign language", "translation"] 
  },
  { 
    title: "Home", 
    category: "Page", 
    href: "/", 
    keywords: ["courses", "home", "explore", "landing"] 
  },
  { 
    title: "Assesment & Progress", 
    category: "Page", 
    href: "/assesment", 
    keywords: ["exercises", "problems", "quiz", "test", "results", "tracking", "mastery", "performance report", "smartscore"] 
  },
  { 
    title: "Live Classes", 
    category: "Page", 
    href: "/live-classes", 
    keywords: ["virtual", "online", "teacher", "lessons", "zoom", "meetings", "real-time"] 
  },
  { 
    title: "Resources Hub", 
    category: "Page", 
    href: "/resources", 
    keywords: ["materials", "tools", "guides", "library", "help", "downloads"] 
  },
  { 
    title: "Membership & Plans", 
    category: "Page", 
    href: "/membership", 
    keywords: ["pricing", "subscription", "premium", "pro", "upgrade", "billing", "monthly", "yearly"] 
  },
  { 
    title: "AI Study Buddy", 
    category: "Feature", 
    href: "#", 
    keywords: ["ai chat", "tutor", "help", "assistant", "gemini", "huggingface", "study buddy", "chatbot"] 
  },
  { 
    title: "Educational Games", 
    category: "Resource", 
    href: "/resources/games", 
    keywords: ["fun", "interactive", "activities", "catch the items", "word search", "bubble pop", "typing speed"] 
  },
  { 
    title: "Study Guides", 
    category: "Resource", 
    href: "/resources/study-guides", 
    keywords: ["study", "materials", "notes", "revision", "cheat sheets"] 
  },
  { 
    title: "Worksheets", 
    category: "Resource", 
    href: "/resources/worksheets", 
    keywords: ["printable", "practice", "exercises", "pdf", "homework"] 
  },
];

const Header = () => {
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  // Support for forgot_password view
  const [authView, setAuthView] = useState<"sign_in" | "sign_up" | "forgot_password">("sign_in");
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const [userName, setUserName] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState("gb");
  const [isFlagDropdownOpen, setIsFlagDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof searchData>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (!auth) return;
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && !user.isAnonymous && user.emailVerified) {
        const name = user.displayName || user.email?.split('@')[0] || 'User';
        setUserName(name);
      } else {
        setUserName(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    if (confirm("Do you want to sign out?")) {
      try {
        await signOut(auth);
        window.location.reload(); 
      } catch (error) {
        console.error("Sign out error:", error);
      }
    }
  };

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      setIsSearchOpen(false);
      return;
    }
    const query = searchQuery.toLowerCase();
    const results = searchData.filter(item => {
      const titleMatch = item.title.toLowerCase().includes(query);
      const keywordMatch = item.keywords.some(keyword => keyword.includes(query));
      const categoryMatch = item.category.toLowerCase().includes(query);
      return titleMatch || keywordMatch || categoryMatch;
    }).slice(0, 6);
    setSearchResults(results);
    setIsSearchOpen(results.length > 0);
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSelect = (href: string) => {
    if (href === "#") {
      setIsPricingOpen(true);
    } else {
      navigate(href);
    }
    setSearchQuery("");
    setIsSearchOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      handleSearchSelect(searchResults[0].href);
    }
  };

  // Safe handler for both desktop and mobile
  const handleMembershipClick = (e?: React.MouseEvent) => {
    if (e && typeof e.preventDefault === 'function') {
      e.preventDefault();
    }
    setIsPricingOpen(true);
    setIsMenuOpen(false); // Close mobile menu if it was open
  };

  const navItems = [
    { name: "Assessment", href: "/assesment" },
    { name: "Live Classes", href: "/live-classes" },
    { name: "Resources", href: "/resources", hasDropdown: true },
    // { name: "Membership", href: "#", isMembership: true },
    { name: "Membership", href: "/membership" },
  ];

  const countries = [
    { code: "gb", label: "United Kingdom" },
    { code: "us", label: "United States" },
    { code: "au", label: "Australia" },
  ];

  return (
    <>
      <style>{`
        @keyframes slideDown { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
        .nav-link { position: relative; transition: all 0.3s ease; }
        .nav-link::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 2px; background: linear-gradient(90deg, hsl(var(--primary)), hsl(var(--secondary))); transition: width 0.3s ease; }
        .nav-link:hover::after { width: 100%; }
        .nav-link:hover { transform: translateY(-2px); }
        .header-icon:hover { transform: rotate(15deg) scale(1.1); }
        .logo-container:hover { transform: scale(1.05); filter: brightness(1.1); }
        .dropdown-enter { animation: slideDown 0.3s ease forwards; }
        .glass-header { 
          background: linear-gradient(90deg, rgba(236, 210, 255, 0.65) 0%, rgba(255, 255, 255, 0.75) 50%, rgba(210, 225, 255, 0.65) 100%); 
          border-bottom: 1px solid rgba(255, 255, 255, 0.4); 
          backdrop-blur: 8px;
        }
        .dark .glass-header { 
          background: linear-gradient(90deg, rgba(60, 40, 90, 0.55) 0%, rgba(20, 20, 30, 0.65) 50%, rgba(40, 60, 100, 0.55) 100%); 
          border-bottom: 1px solid rgba(255, 255, 255, 0.08); 
        }
      `}</style>
      
      <header className="sticky top-0 z-50 w-full glass-header">
        <div className="container flex h-16 items-center justify-between px-4">
          <Link to="/" className="flex items-center space-x-3 mr-12 shrink-0 logo-container">
            <img src="/Logo.jpeg" alt="EDXLY" className="h-10 w-10 rounded-lg object-cover" />
            <span className="text-xl font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              EDXLY
            </span>
          </Link>

          {/* <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <NavigationDropdown
                  key={item.name}
                  title={item.name}
                  items={[
                    { title: "Study Guides", href: "/resources/study-guides", description: "Comprehensive study materials" },
                    { title: "Worksheets", href: "/resources/worksheets", description: "Printable practice worksheets" },
                    { title: "Student Portal Features", href: "/resources/student-portal", description: "Everything students need for learning" },
                    { title: "Admin Panel Features", href: "/resources/admin-panel", description: "Comprehensive administrative tools" },
                    { title: "Educational Games", href: "/resources/games", description: "Fun learning games and activities" },
                    { title: "Parent Resources", href: "/resources/parents", description: "Tools and tips for parents" },
                  ]}
                />
              // ) : item.isMembership ? (
              //   <button
              //     key={item.name}
              //     onClick={handleMembershipClick}
              //     className="nav-link text-base text-foreground/80 hover:text-foreground font-medium"
              //   >
              //     {item.name}
              //   </button>
              ) 
              : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="nav-link text-base text-foreground/80 hover:text-foreground font-medium"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav> */}

          <nav className="hidden md:flex items-center space-x-6">
  {navItems.map((item) =>
    item.hasDropdown ? (
      <NavigationDropdown
        key={item.name}
        title={item.name}
        items={[
          { title: "Study Guides", href: "/resources/study-guides", description: "Comprehensive study materials" },
          { title: "Worksheets", href: "/resources/worksheets", description: "Printable practice worksheets" },
          { title: "Student Portal Features", href: "/resources/student-portal", description: "Everything students need for learning" },
          { title: "Admin Panel Features", href: "/resources/admin-panel", description: "Comprehensive administrative tools" },
          { title: "Educational Games", href: "/resources/games", description: "Fun learning games and activities" },
          { title: "Parent Resources", href: "/resources/parents", description: "Tools and tips for parents" },
        ]}
      />
    ) : (
      <Link
        key={item.name}
        to={item.href}
        className="nav-link text-base text-foreground/80 hover:text-foreground font-medium"
      >
        {item.name}
      </Link>
    )
  )}
</nav>

          <div className="hidden lg:flex items-center space-x-2 flex-1 max-w-xs mx-8" ref={searchRef}>
            <div className="relative flex-1 search-input-wrapper">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search subjects..."
                className="pl-10 pr-4 py-2 bg-muted/50 border-0 focus:bg-background transition-all text-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchResults.length > 0 && setIsSearchOpen(true)}
              />
              {isSearchOpen && searchResults.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-background border rounded-lg shadow-lg overflow-hidden z-50 dropdown-enter">
                  {searchResults.map((result, index) => (
                    <button
                      key={index}
                      onClick={() => handleSearchSelect(result.href)}
                      className="w-full px-4 py-3 text-left hover:bg-muted/50 transition-colors border-b last:border-b-0"
                    >
                      <div>
                        <div className="font-medium text-sm">{result.title}</div>
                        <div className="text-xs text-muted-foreground">{result.category}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="flex items-center gap-1 px-2 h-9 flag-btn"
                onClick={() => setIsFlagDropdownOpen(!isFlagDropdownOpen)}
              >
                <img 
                  src={`https://flagcdn.com/w40/${selectedCountry}.png`}
                  width="24" height="16" alt={selectedCountry}
                  className="rounded-[2px] object-cover"
                />
                <ChevronDown className="h-3 w-3 text-muted-foreground opacity-70" />
              </Button>
              {isFlagDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-16 z-20 bg-background border rounded-md shadow-lg py-1 overflow-hidden dropdown-enter">
                  {countries.map((country) => (
                    <button
                      key={country.code}
                      onClick={() => { setSelectedCountry(country.code); setIsFlagDropdownOpen(false); }}
                      className={`w-full flex justify-center py-2 hover:bg-muted ${selectedCountry === country.code ? "bg-muted" : ""}`}
                    >
                      <img src={`https://flagcdn.com/w40/${country.code}.png`} width="24" height="16" alt={country.label} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Button variant="ghost" size="icon" onClick={toggleTheme} className="h-9 w-9 header-icon">
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>

            <div className="hidden md:flex items-center space-x-2">
              {userName ? (
                <Button variant="ghost" className="flex items-center space-x-2 h-9 text-sm font-medium" onClick={handleSignOut}>
                  <User className="h-4 w-4" />
                  <span>{userName}</span>
                </Button>
              ) : (
                <>
                  <Button 
                    variant="ghost" 
                    className="h-9 text-sm font-medium" 
                    onClick={() => { setAuthView("sign_in"); setAuthModalOpen(true); }}
                  >
                    Sign In
                  </Button>
                  <Button 
                    className="btn-hero h-9 text-sm font-medium" 
                    onClick={() => { setAuthView("sign_up"); setAuthModalOpen(true); }}
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </div>

            <Button variant="ghost" size="icon" className="md:hidden h-9 w-9" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t glass-header dropdown-enter">
            <div className="container px-4 py-4 space-y-4">
              {/* <nav className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  item.isMembership ? (
                    <button
                      key={item.name}
                      onClick={(e) => handleMembershipClick(e)}
                      className="text-sm text-foreground/80 hover:text-foreground py-2 px-3 rounded-md hover:bg-muted transition-all text-left font-medium"
                    >
                      {item.name}
                    </button>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="text-sm text-foreground/80 hover:text-foreground py-2 px-3 rounded-md hover:bg-muted font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )
                ))}
              </nav> */}

              <nav className="flex flex-col space-y-2">
  {navItems.map((item) =>
    // item.isMembership ? (
    //   <button
    //     key={item.name}
    //     onClick={(e) => handleMembershipClick(e)}
    //     className="text-sm text-foreground/80 hover:text-foreground py-2 px-3 rounded-md hover:bg-muted transition-all text-left font-medium"
    //   >
    //     {item.name}
    //   </button>
    // ) : 
    item.hasDropdown ? (
      <div key={item.name}>
        <button
          onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
          className="w-full flex items-center justify-between text-sm text-foreground/80 hover:text-foreground py-2 px-3 rounded-md hover:bg-muted transition-all font-medium"
        >
          {item.name}
          <ChevronDown
            className={`h-4 w-4 transition-transform duration-200 ${mobileResourcesOpen ? "rotate-180" : ""}`}
          />
        </button>
        {mobileResourcesOpen && (
          <div className="ml-3 mt-1 flex flex-col space-y-1 border-l-2 border-primary/20 pl-3">
            {[
              { title: "Study Guides", href: "/resources/study-guides", description: "Comprehensive study materials" },
              { title: "Worksheets", href: "/resources/worksheets", description: "Printable practice worksheets" },
              { title: "Student Portal Features", href: "/resources/student-portal", description: "Everything students need for learning" },
              { title: "Admin Panel Features", href: "/resources/admin-panel", description: "Comprehensive administrative tools" },
              { title: "Educational Games", href: "/resources/games", description: "Fun learning games and activities" },
              { title: "Parent Resources", href: "/resources/parents", description: "Tools and tips for parents" },
            ].map((subItem) => (
              <Link
                key={subItem.href}
                to={subItem.href}
                className="py-2 px-2 rounded-md hover:bg-muted transition-colors"
                onClick={() => { setIsMenuOpen(false); setMobileResourcesOpen(false); }}
              >
                <div className="text-sm font-medium text-foreground/80 hover:text-foreground">{subItem.title}</div>
                <div className="text-xs text-muted-foreground">{subItem.description}</div>
              </Link>
            ))}
          </div>
        )}
      </div>
    ) : (
      <Link
        key={item.name}
        to={item.href}
        className="text-sm text-foreground/80 hover:text-foreground py-2 px-3 rounded-md hover:bg-muted font-medium"
        onClick={() => setIsMenuOpen(false)}
      >
        {item.name}
      </Link>
    )
  )}
</nav>

              <div className="flex flex-col space-y-2 pt-4 border-t">
                {userName ? (
                  <Button variant="ghost" className="justify-start h-9 text-sm font-medium" onClick={() => { handleSignOut(); setIsMenuOpen(false); }}>
                    <User className="h-4 w-4 mr-2" />
                    {userName}
                  </Button>
                ) : (
                  <>
                    <Button 
                      variant="ghost" 
                      className="justify-start h-9 text-sm font-medium" 
                      onClick={() => { setAuthView("sign_in"); setAuthModalOpen(true); setIsMenuOpen(false); }}
                    >
                      <User className="h-4 w-4 mr-2" />
                      Sign In
                    </Button>
                    <Button 
                      className="btn-hero justify-start h-9 text-sm font-medium" 
                      onClick={() => { setAuthView("sign_up"); setAuthModalOpen(true); setIsMenuOpen(false); }}
                    >
                      <BookOpen className="h-4 w-4 mr-2" />
                      Sign Up
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

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
          onClose={() => setIsPricingOpen(false)}
          isLoggedIn={!!userName}
          onLoginClick={() => {
            setIsPricingOpen(false);
            setAuthModalOpen(true);
            setAuthView("sign_in");
          }}
        />
      </header>
    </>
  );
};

export default Header;