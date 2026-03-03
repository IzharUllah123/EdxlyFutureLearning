import React from "react";
import { Search, Book, CreditCard, GraduationCap, MessageSquare } from "lucide-react";
import { Input } from "../components/ui/input";

const HelpCenter = () => {
  const categories = [
    { icon: <Book className="h-6 w-6" />, title: "Getting Started", desc: "Learn how to set up your Edxly account." },
    { icon: <CreditCard className="h-6 w-6" />, title: "Billing & Refunds", desc: "Manage your Paddle subscription and payments." },
    { icon: <GraduationCap className="h-6 w-6" />, title: "Learning Tools", desc: "How to use AI Study Buddy and Live Classes." },
    { icon: <MessageSquare className="h-6 w-6" />, title: "Contact Support", desc: "Get in touch with our team in Pakistan." },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Search Section */}
      <div className="bg-primary/5 py-16 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">How can we help you?</h1>
          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input className="pl-10 h-12 bg-background" placeholder="Search for articles (e.g., 'refunds')..." />
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="container mx-auto py-16 px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, i) => (
          <div key={i} className="p-6 border rounded-xl hover:shadow-md transition-all cursor-pointer bg-card">
            <div className="text-primary mb-4">{cat.icon}</div>
            <h3 className="font-bold mb-2">{cat.title}</h3>
            <p className="text-sm text-muted-foreground">{cat.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpCenter;