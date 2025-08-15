import React from 'react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const AuthLayout = ({ children, title, subtitle }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Lake Powell Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/b50c893c-d40d-4b21-8cb8-9244adc918f3.png')`
        }}
      >
        {/* Light overlay for text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <div className="w-full max-w-md space-y-8 animate-fade-in">
          {/* App Branding */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-card-glass backdrop-blur-md border border-white/20 shadow-depth mb-6">
              <img 
                src="/lovable-uploads/a4fdb4f2-606c-4b78-9692-2321c5a1aa7c.png" 
                alt="Lake Powell Navigator" 
                className="w-12 h-12 object-contain"
              />
            </div>
            <h1 className="text-3xl font-bold text-white drop-shadow-lg">
              Lake Powell Navigator
            </h1>
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-white/90">{title}</h2>
              {subtitle && (
                <p className="text-white/70 text-sm">{subtitle}</p>
              )}
            </div>
          </div>

          {/* Auth Form Container */}
          <div className="space-y-6">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;