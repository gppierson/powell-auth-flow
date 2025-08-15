import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AuthLayout from '@/components/AuthLayout';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Sign in successful!",
        description: "Welcome back to Lake Powell Navigator.",
      });
    }, 1500);
  };

  return (
    <AuthLayout 
      title="Your Adventure Starts Here"
    >
      <form onSubmit={handleSignIn} className="space-y-8">
        {/* Input Fields Container */}
        <div className="space-y-4">
          {/* Email Field */}
          <div className="space-y-3">
            <div className="relative group">
              <Input
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 pl-4 pr-4 bg-white/20 backdrop-blur-sm border-0 rounded-2xl text-white placeholder:text-white/60 focus:bg-white/30 focus:ring-2 focus:ring-white/40 transition-all duration-300 text-base font-medium"
                required
              />
              <Mail className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50 group-focus-within:text-white/80 transition-colors" />
            </div>
          </div>

          {/* Password Field */}
          <div className="space-y-3">
            <div className="relative group">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-14 pl-4 pr-12 bg-white/20 backdrop-blur-sm border-0 rounded-2xl text-white placeholder:text-white/60 focus:bg-white/30 focus:ring-2 focus:ring-white/40 transition-all duration-300 text-base font-medium"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white/80 transition-colors p-1 rounded-lg hover:bg-white/10"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="text-right pt-2">
            <Link 
              to="/forgot-password" 
              className="text-sm text-white/80 hover:text-white transition-colors font-medium"
            >
              Forgot Password?
            </Link>
          </div>
        </div>

        {/* Primary Actions */}
        <div className="space-y-4">
          {/* Sign In Button */}
          <Button 
            type="submit" 
            disabled={isLoading}
            className="h-14 w-full bg-white text-primary font-semibold text-base rounded-2xl hover:bg-white/90 active:scale-[0.98] transition-all duration-200 shadow-lg disabled:opacity-70"
          >
            {isLoading ? 'Signing In...' : 'Sign In'}
          </Button>

          {/* Divider */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/20" />
            </div>
            <div className="relative flex justify-center">
              <span className="px-6 bg-transparent text-white/60 text-sm font-medium">or</span>
            </div>
          </div>

          {/* Create Account Button */}
          <Button 
            variant="outline" 
            asChild
            className="h-14 w-full bg-transparent border-2 border-white/30 text-white font-semibold text-base rounded-2xl hover:bg-white/10 hover:border-white/50 active:scale-[0.98] transition-all duration-200"
          >
            <Link to="/signup">Create New Account</Link>
          </Button>
        </div>
      </form>
    </AuthLayout>
  );
};

export default SignIn;