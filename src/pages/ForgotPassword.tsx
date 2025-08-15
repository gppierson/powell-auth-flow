import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/components/AuthLayout';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const { toast } = useToast();

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setEmailSent(true);
      toast({
        title: "Reset email sent!",
        description: "Check your inbox for password reset instructions.",
      });
    }, 1500);
  };

  if (emailSent) {
    return (
      <AuthLayout 
        title="Check Your Email" 
        subtitle="We've sent you a password reset link"
      >
        <div className="text-center space-y-6 animate-fade-in">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-white">
              We've sent a password reset link to <strong>{email}</strong>
            </p>
            <p className="text-sm text-white/70">
              If you don't see it in your inbox, check your spam folder.
            </p>
          </div>

          <div className="space-y-4">
            <Button 
              asChild
              className="h-14 w-full bg-white text-primary font-semibold text-base rounded-2xl hover:bg-white/90 active:scale-[0.98] transition-all duration-200 shadow-lg"
            >
              <Link to="/signin">Return to Sign In</Link>
            </Button>
            
            <Button 
              variant="outline" 
              onClick={() => {
                setEmailSent(false);
                setEmail('');
              }}
              className="h-14 w-full bg-transparent border-2 border-white/30 text-white font-semibold text-base rounded-2xl hover:bg-white/10 hover:border-white/50 active:scale-[0.98] transition-all duration-200"
            >
              Try Different Email
            </Button>
          </div>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout 
      title="Reset Password" 
      subtitle="Enter your email to receive reset instructions"
    >
      <form onSubmit={handleResetPassword} className="space-y-8">

        {/* Email Field */}
        <div className="space-y-3">
          <div className="relative group">
            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-14 pl-4 pr-4 bg-white/40 backdrop-blur-sm border-0 rounded-2xl text-white placeholder:text-white/70 focus:bg-white/50 focus:ring-2 focus:ring-white/40 transition-all duration-300 text-base font-medium"
              required
            />
            <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50 group-focus-within:text-white/80 transition-colors" />
          </div>
        </div>

        {/* Reset Instructions */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4">
          <p className="text-sm text-white/80">
            We'll send you an email with instructions to reset your password. 
            Make sure to check your spam folder if you don't see it within a few minutes.
          </p>
        </div>

        {/* Send Reset Email Button */}
        <Button 
          type="submit" 
          disabled={isLoading}
          className="h-14 w-full bg-white text-primary font-semibold text-base rounded-2xl hover:bg-white/90 active:scale-[0.98] transition-all duration-200 shadow-lg disabled:opacity-70"
        >
          {isLoading ? 'Sending Email...' : 'Send Reset Email'}
        </Button>

        {/* Help Text */}
        <div className="text-center pt-4">
          <p className="text-sm text-white/70">
            Remember your password?{' '}
            <Link 
              to="/signin" 
              className="text-white/90 hover:text-white underline font-medium"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </form>
    </AuthLayout>
  );
};

export default ForgotPassword;