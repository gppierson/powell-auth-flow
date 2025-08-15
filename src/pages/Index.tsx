import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Compass, MapPin, Waves } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Lake Powell Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/b50c893c-d40d-4b21-8cb8-9244adc918f3.png')`
        }}
      >
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-backdrop" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <div className="text-center space-y-8 max-w-2xl animate-fade-in">
          {/* App Logo and Branding */}
          <div className="space-y-6">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-card-glass backdrop-blur-md border border-white/20 shadow-depth mb-6">
              <img 
                src="/lovable-uploads/a4fdb4f2-606c-4b78-9692-2321c5a1aa7c.png" 
                alt="Lake Powell Navigator" 
                className="w-16 h-16 object-contain"
              />
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
              Lake Powell Navigator
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 drop-shadow-md max-w-lg mx-auto leading-relaxed">
              Your ultimate companion for exploring the beauty and wonder of Lake Powell
            </p>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            <div className="bg-card-glass backdrop-blur-md rounded-xl border border-white/20 p-6 text-center">
              <Compass className="w-8 h-8 text-primary-light mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Navigation</h3>
              <p className="text-white/70 text-sm">Professional GPS navigation and route planning</p>
            </div>
            
            <div className="bg-card-glass backdrop-blur-md rounded-xl border border-white/20 p-6 text-center">
              <MapPin className="w-8 h-8 text-primary-light mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Points of Interest</h3>
              <p className="text-white/70 text-sm">Discover hidden gems and popular destinations</p>
            </div>
            
            <div className="bg-card-glass backdrop-blur-md rounded-xl border border-white/20 p-6 text-center">
              <Waves className="w-8 h-8 text-primary-light mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Water Conditions</h3>
              <p className="text-white/70 text-sm">Real-time water levels and weather updates</p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                asChild
                className="text-lg px-8 py-4 h-auto"
              >
                <Link to="/signin">Sign In</Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                asChild
                className="text-lg px-8 py-4 h-auto border-white/30 bg-white/10 text-white hover:bg-white/20"
              >
                <Link to="/signup">Create Account</Link>
              </Button>
            </div>
            
            <p className="text-white/60 text-sm">
              Join thousands of explorers already navigating Lake Powell
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
