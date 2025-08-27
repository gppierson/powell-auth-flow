import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Waves, Star, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Paywall = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<'yearly' | 'monthly'>('yearly');

  // Lightweight SEO without extra dependencies
  useEffect(() => {
    document.title = "Go Premium – Lake Powell Navigator";

    const description = "Unlock offline maps, waypoints, and tools. Free 7‑day trial.";
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Canonical
    const href = window.location.origin + "/paywall";
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', href);
  }, []);

  const handleStartTrial = () => {
    // Handle payment/trial logic here
    navigate('/map-download');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Scenic background to match app hero */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/b50c893c-d40d-4b21-8cb8-9244adc918f3.png')`,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-backdrop" aria-hidden="true" />

      <main className="relative z-10 min-h-screen flex items-center justify-center p-4 py-8">
        <article className="w-full max-w-2xl mx-auto animate-fade-in">
          {/* Header */}
          <header className="text-center mb-6 md:mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl bg-card-glass backdrop-blur-md border border-white/20 shadow-depth mb-4 md:mb-5">
              <img
                src="/lovable-uploads/9ca600e0-ffc4-4e33-9b1a-8bd3d97c3757.png"
                alt="Lake Powell Navigator logo"
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
                loading="lazy"
              />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
              Go Premium
            </h1>
            <p className="mt-2 text-white/85 text-sm md:text-base lg:text-lg max-w-xl mx-auto px-4">
              Unlock offline maps, smart waypoints, and navigation tools for Lake Powell.
            </p>
          </header>

          {/* Body - Stack on mobile, side by side on larger screens */}
          <section className="flex flex-col lg:grid lg:grid-cols-2 gap-4 lg:gap-5">
            {/* Timeline - Full width on mobile */}
            <div className="relative bg-card-glass/90 backdrop-blur-md rounded-xl lg:rounded-2xl border border-white/20 p-4 md:p-5 text-white/90 shadow-soft">
              <div className="absolute left-5 md:left-6 top-10 bottom-10 w-0.5 bg-white/25" aria-hidden="true" />

              <div className="relative flex gap-3 md:gap-4 mb-5 md:mb-6">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/15 border border-white/30 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div className="pt-0.5">
                  <h3 className="text-xs md:text-sm font-semibold text-white/90">Installed</h3>
                  <p className="text-xs md:text-sm text-white/75">Your profile is set. Welcome aboard.</p>
                </div>
              </div>

              <div className="relative flex gap-3 md:gap-4 mb-5 md:mb-6">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/15 border border-white/30 flex items-center justify-center shrink-0">
                  <Waves className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div className="pt-0.5">
                  <h3 className="text-sm md:text-base font-semibold text-white">Today — Get instant access</h3>
                  <p className="text-xs md:text-sm text-white/80">Offline maps, marina info, coves and waypoints.</p>
                </div>
              </div>

              <div className="relative flex gap-3 md:gap-4 mb-5 md:mb-6">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4 md:w-5 md:h-5 text-white/90" />
                </div>
                <div className="pt-0.5">
                  <h3 className="text-sm md:text-base font-semibold text-white">Day 7 — Trial ends</h3>
                  <p className="text-xs md:text-sm text-white/75">Cancel anytime. Keep basic features forever.</p>
                </div>
              </div>

              <div className="relative flex gap-3 md:gap-4">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0">
                  <CreditCard className="w-4 h-4 md:w-5 md:h-5 text-white/90" />
                </div>
                <div className="pt-0.5">
                  <h3 className="text-sm md:text-base font-semibold text-white">Billed yearly</h3>
                  <p className="text-xs md:text-sm text-white/75">Transparent pricing. Manage in Settings.</p>
                </div>
              </div>
            </div>

            {/* Plans - Full width on mobile */}
            <div className="space-y-3">
              <Card
                className={`relative p-4 md:p-5 rounded-xl lg:rounded-2xl cursor-pointer transition-all hover-scale backdrop-blur-md shadow-medium border border-white/30 ${
                  selectedPlan === 'yearly'
                    ? 'bg-gradient-warm text-secondary-foreground'
                    : 'bg-card-glass/80 text-white'
                }`}
                onClick={() => setSelectedPlan('yearly')}
              >
                {selectedPlan === 'yearly' && (
                  <div className="absolute -top-2.5 right-3 md:right-4 bg-primary text-primary-foreground px-2.5 md:px-3 py-0.5 md:py-1 rounded-full text-xs font-semibold shadow-soft">
                    SAVE 67%
                  </div>
                )}
                <div className="space-y-1">
                  <h3 className="text-xs md:text-sm font-medium opacity-90">YEARLY PREMIUM</h3>
                  <p className="text-xl md:text-2xl font-bold">Free trial for 1 week</p>
                  <div className="flex items-baseline justify-between">
                    <span className="text-base md:text-lg font-semibold">$39.99 / year</span>
                    <span className="text-xs md:text-sm opacity-90">$0.11 / day</span>
                  </div>
                </div>
              </Card>

              <Card
                className={`p-4 md:p-5 rounded-xl lg:rounded-2xl cursor-pointer transition-all hover-scale backdrop-blur-md shadow-soft border border-white/20 ${
                  selectedPlan === 'monthly' ? 'bg-gradient-warm text-secondary-foreground' : 'bg-card-glass/80 text-white'
                }`}
                onClick={() => setSelectedPlan('monthly')}
              >
                <div className="space-y-1">
                  <h3 className="text-xs md:text-sm font-medium opacity-90">MONTHLY PREMIUM</h3>
                  <div className="flex items-baseline justify-between">
                    <span className="text-base md:text-lg font-semibold">$9.99 / month</span>
                    <span className="text-xs md:text-sm opacity-90">$0.33 / day</span>
                  </div>
                </div>
              </Card>

              <Button 
                onClick={handleStartTrial} 
                size="full" 
                className="h-12 md:h-14 text-sm md:text-base font-semibold rounded-full mt-3 md:mt-4"
              >
                Start free trial
              </Button>

              <p className="text-center text-white/80 text-xs px-4">
                Then {selectedPlan === 'yearly' ? '$39.99 / year' : '$9.99 / month'}. Recurring billing. Cancel anytime.
              </p>

              <button className="story-link block mx-auto text-xs md:text-sm text-white/90">
                Redeem code
              </button>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default Paywall;
