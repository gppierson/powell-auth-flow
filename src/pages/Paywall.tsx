import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Users, Star, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Paywall = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<'yearly' | 'monthly'>('yearly');

  const handleStartTrial = () => {
    // Handle payment/trial logic here
    navigate('/map-download');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-primary/20 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md mx-auto space-y-8">
        {/* Timeline/Progress indicators */}
        <div className="space-y-8 relative">
          {/* Vertical line connecting the dots */}
          <div className="absolute left-[22px] top-8 bottom-8 w-0.5 bg-primary/30" />
          
          {/* Step 1 */}
          <div className="flex gap-4 relative">
            <div className="w-11 h-11 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 text-primary" />
            </div>
            <div className="space-y-1 pt-1">
              <h3 className="text-sm font-medium text-muted-foreground">Get the app</h3>
              <p className="text-sm text-foreground">You successfully created your profile.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex gap-4 relative">
            <div className="w-11 h-11 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center shrink-0">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <div className="space-y-1 pt-1">
              <h3 className="text-base font-semibold text-foreground">Today - Get instant access</h3>
              <p className="text-sm text-muted-foreground">Navigate with confidence, explore with purpose.</p>
              <p className="text-sm text-muted-foreground">Access to offline maps, marina info, and navigation tools.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex gap-4 relative">
            <div className="w-11 h-11 rounded-full bg-muted border-2 border-muted-foreground/30 flex items-center justify-center shrink-0">
              <Star className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="space-y-1 pt-1">
              <h3 className="text-base font-semibold text-foreground">Day 7 - Trial ends</h3>
              <p className="text-sm text-muted-foreground">If you cancel before, you can still use the basic version.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex gap-4 relative">
            <div className="w-11 h-11 rounded-full bg-muted border-2 border-muted-foreground/30 flex items-center justify-center shrink-0">
              <CreditCard className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="space-y-1 pt-1">
              <h3 className="text-base font-semibold text-foreground">Billed yearly</h3>
              <p className="text-sm text-muted-foreground">Cancel whenever you want. Manage subscriptions through your account settings.</p>
            </div>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="space-y-3">
          {/* Yearly plan */}
          <Card 
            className={`relative p-4 cursor-pointer transition-all ${
              selectedPlan === 'yearly' 
                ? 'bg-gradient-warm border-2 border-primary shadow-medium' 
                : 'bg-card/80 border-muted-foreground/20 hover:bg-card'
            }`}
            onClick={() => setSelectedPlan('yearly')}
          >
            {selectedPlan === 'yearly' && (
              <div className="absolute -top-3 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                SAVE 67%
              </div>
            )}
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">YEARLY PREMIUM</h3>
              <p className="text-xl font-bold text-foreground">Free trial for 1 week</p>
              <div className="flex items-baseline justify-between">
                <span className="text-lg font-semibold text-foreground">$39.99 / year</span>
                <span className="text-sm text-muted-foreground">$0.11 / day</span>
              </div>
            </div>
          </Card>

          {/* Monthly plan */}
          <Card 
            className={`p-4 cursor-pointer transition-all ${
              selectedPlan === 'monthly' 
                ? 'bg-gradient-warm border-2 border-primary shadow-medium' 
                : 'bg-card/80 border-muted-foreground/20 hover:bg-card'
            }`}
            onClick={() => setSelectedPlan('monthly')}
          >
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-muted-foreground">MONTHLY PREMIUM</h3>
              <div className="flex items-baseline justify-between">
                <span className="text-lg font-semibold text-foreground">$9.99 / month</span>
                <span className="text-sm text-muted-foreground">$0.33 / day</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Start trial button */}
        <Button 
          onClick={handleStartTrial}
          size="full"
          className="h-14 text-base font-semibold"
        >
          Start trial
        </Button>

        {/* Footer text */}
        <div className="text-center space-y-2">
          <p className="text-xs text-muted-foreground">
            Then ${selectedPlan === 'yearly' ? '39.99' : '9.99'} / {selectedPlan === 'yearly' ? 'year' : 'month'}. Recurring billing. Cancel anytime.
          </p>
          <button className="text-sm text-primary hover:text-primary-light underline transition-colors">
            Redeem code
          </button>
        </div>
      </div>
    </div>
  );
};

export default Paywall;