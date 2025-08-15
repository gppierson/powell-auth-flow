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
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center animate-fade-in">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-foreground">
              We've sent a password reset link to <strong>{email}</strong>
            </p>
            <p className="text-sm text-muted-foreground">
              If you don't see it in your inbox, check your spam folder.
            </p>
          </div>

          <div className="space-y-3">
            <Button size="full" asChild>
              <Link to="/signin">Return to Sign In</Link>
            </Button>
            
            <Button 
              variant="ghost" 
              size="full"
              onClick={() => {
                setEmailSent(false);
                setEmail('');
              }}
              className="text-foreground hover:text-primary-light"
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
      <form onSubmit={handleResetPassword} className="space-y-6">
        {/* Back to Sign In */}
        <div className="flex items-center space-x-2 text-sm">
          <ArrowLeft className="w-4 h-4" />
          <Link 
            to="/signin" 
            className="text-primary-light hover:text-primary transition-colors"
          >
            Back to Sign In
          </Link>
        </div>

        {/* Email Field */}
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium text-foreground">
            Email Address
          </Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              id="email"
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10 h-12 bg-white/50 border-white/30 focus:bg-white/70 focus:border-primary transition-all"
              required
            />
          </div>
        </div>

        {/* Reset Instructions */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-sm text-blue-800">
            We'll send you an email with instructions to reset your password. 
            Make sure to check your spam folder if you don't see it within a few minutes.
          </p>
        </div>

        {/* Send Reset Email Button */}
        <Button 
          type="submit" 
          size="full" 
          disabled={isLoading}
          className="font-semibold"
        >
          {isLoading ? 'Sending Email...' : 'Send Reset Email'}
        </Button>

        {/* Help Text */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Remember your password?{' '}
            <Link 
              to="/signin" 
              className="text-primary-light hover:text-primary underline"
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