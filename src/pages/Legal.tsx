import React from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ShieldCheck, FileText, RefreshCcw } from "lucide-react";
import { Button } from "../components/ui/button";

const LegalPage = () => {
  return (
    <div className="min-h-screen bg-background py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="mb-8 gap-2 hover:bg-muted">
            <ChevronLeft className="h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <div className="space-y-16">
          {/* SECTION: TERMS OF SERVICE */}
          <section id="terms" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <FileText className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Terms of Service
              </h1>
            </div>
            
            <div className="prose dark:prose-invert max-w-none text-muted-foreground space-y-6">
              <p className="text-sm font-medium">Last Updated: March 3, 2026</p>
              <p>Welcome to <strong>Edxly</strong>. By accessing our platform, you agree to comply with the following terms and conditions.</p>
              
              <h3 className="text-foreground font-semibold text-xl">1. Our Services</h3>
              <p>Edxly provides personalized K-12 educational resources, including interactive lessons, AI study assistance, and progress tracking.</p>

              <h3 className="text-foreground font-semibold text-xl">2. Payments & Billing</h3>
              <p>All subscription payments are processed through <strong>Paddle</strong>, our Merchant of Record. By subscribing, you agree to Paddle's terms of checkout.</p>

              <h3 className="text-foreground font-semibold text-xl">3. Refund Policy</h3>
              <p>We offer a <strong>14-day refund policy</strong> for all new subscribers. If you are not satisfied with the educational content, you may request a full refund within 14 days of your initial purchase.</p>
            </div>
          </section>

          <hr className="border-muted/50" />

          {/* SECTION: PRIVACY POLICY */}
          <section id="privacy" className="scroll-mt-20">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="h-8 w-8 text-secondary" />
              <h2 className="text-3xl font-bold text-foreground">Privacy Policy</h2>
            </div>
            
            <div className="prose dark:prose-invert max-w-none text-muted-foreground space-y-6">
              <p>At Edxly, we take the privacy of our students and parents seriously. We only collect data necessary to provide our educational services.</p>
              
              <ul className="list-disc pl-6 space-y-3">
                <li><strong>Personal Data:</strong> We collect your name and email to manage your account and save your learning progress.</li>
                <li><strong>Payment Privacy:</strong> We do not store your credit card or billing details. This sensitive information is handled exclusively by Paddle.</li>
                <li><strong>Usage Data:</strong> We analyze how you use the platform to improve our AI Study Buddy and lesson recommendations.</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;