import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Waves, Star, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Paywall = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<'yearly' | 'monthly'>('yearly');

  // Lightweight SEO without extra dependencies
  useEffect(() => {
    document.title = "Go Premium – Lake Powell Navigator";

    const description = "Unlock all downloadable maps, smart waypoints, navigation tracking, and trip planning for Lake Powell.";
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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#2c5f88] to-[#4a7ba7]">
      {/* Background with Lake Powell image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{
          backgroundImage: `url('/lovable-uploads/b50c893c-d40d-4b21-8cb8-9244adc918f3.png')`,
        }}
        aria-hidden="true"
      />

      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center p-4 py-12">
        <article className="w-full max-w-sm mx-auto animate-fade-in">
          {/* Header */}
          <header className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white mb-3">
              Go Premium
            </h1>
            <p className="text-white/90 text-sm px-6 leading-relaxed">
              Unlock all downloadable maps, smart waypoints, navigation tracking, and trip planning for Lake Powell.
            </p>
          </header>

          {/* Timeline Card */}
          <section className="mb-6">
            <div className="relative bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-5">
              {/* Vertical connecting line */}
              <div className="absolute left-[45px] top-[40px] bottom-[40px] w-[2px] bg-white/20" aria-hidden="true" />
              
              <div className="relative flex gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 z-10">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="pt-0.5">
                  <h3 className="text-sm font-semibold text-white">Installed</h3>
                  <p className="text-xs text-white/80">Your profile is set. Welcome aboard.</p>
                </div>
              </div>

              <div className="relative flex gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 z-10">
                  <Waves className="w-5 h-5 text-white" />
                </div>
                <div className="pt-0.5">
                  <h3 className="text-sm font-semibold text-white">Today — Get instant access</h3>
                  <p className="text-xs text-white/80">Offline maps, tracking, waypoints, trip planning, and all the premium features.</p>
                </div>
              </div>

              <div className="relative flex gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 z-10">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div className="pt-0.5">
                  <h3 className="text-sm font-semibold text-white">Day 7 — Trial ends</h3>
                  <p className="text-xs text-white/80">Cancel anytime. Keep basic features forever.</p>
                </div>
              </div>

              <div className="relative flex gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0 z-10">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <div className="pt-0.5">
                  <h3 className="text-sm font-semibold text-white">Billed yearly</h3>
                  <p className="text-xs text-white/80">Transparent pricing. Manage in Settings.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Plans */}
          <div className="space-y-3 mb-6">
            {/* Yearly Plan */}
            <div
              className={`relative p-4 rounded-2xl cursor-pointer transition-all ${
                selectedPlan === 'yearly'
                  ? 'bg-gradient-to-r from-[#ff6b35] to-[#ff8a65] text-white shadow-lg scale-105'
                  : 'bg-white/10 backdrop-blur-sm text-white border border-white/20'
              }`}
              onClick={() => setSelectedPlan('yearly')}
            >
              {selectedPlan === 'yearly' && (
                <div className="absolute -top-3 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  SAVE 67%
                </div>
              )}
              <div className="space-y-1.5">
                <h3 className="text-xs font-medium uppercase tracking-wider opacity-90">Yearly Premium</h3>
                <p className="text-xl font-bold">Free trial for 1 week</p>
                <div className="flex items-baseline justify-between">
                  <span className="text-lg font-semibold">$39.99 / year</span>
                  <span className="text-sm opacity-80">$0.11 / day</span>
                </div>
              </div>
            </div>

            {/* Monthly Plan */}
            <div
              className={`p-4 rounded-2xl cursor-pointer transition-all ${
                selectedPlan === 'monthly'
                  ? 'bg-gradient-to-r from-[#ff6b35] to-[#ff8a65] text-white shadow-lg scale-105'
                  : 'bg-white/10 backdrop-blur-sm text-white border border-white/20'
              }`}
              onClick={() => setSelectedPlan('monthly')}
            >
              <div className="space-y-1.5">
                <h3 className="text-xs font-medium uppercase tracking-wider opacity-90">Monthly Premium</h3>
                <div className="flex items-baseline justify-between">
                  <span className="text-lg font-semibold">$9.99 / month</span>
                  <span className="text-sm opacity-80">$0.33 / day</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={handleStartTrial} 
            className="w-full h-14 text-base font-semibold rounded-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-lg"
          >
            Start free trial
          </Button>

          {/* Footer Text */}
          <div className="mt-4 text-center">
            <p className="text-white/80 text-xs">
              Then {selectedPlan === 'yearly' ? '$39.99 / year' : '$9.99 / month'}. Recurring billing. Cancel anytime.
            </p>
            <button className="mt-3 text-sm text-white/90 underline">
              Redeem code
            </button>
          </div>
        </article>
      </main>
    </div>
  );
};

export default Paywall;