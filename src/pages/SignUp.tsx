import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import AuthLayout from '@/components/AuthLayout';
import { Mail, Lock, Eye, EyeOff, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password mismatch",
        description: "Please make sure your passwords match.",
        variant: "destructive"
      });
      return;
    }

    if (!acceptTerms) {
      toast({
        title: "Terms required",
        description: "Please accept the terms and conditions to continue.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Account created successfully!",
        description: "Welcome to Lake Powell Navigator.",
      });
    }, 1500);
  };

  return (
    <AuthLayout 
      title="Create Account" 
      subtitle="Join the Lake Powell Navigator community"
    >
      <form onSubmit={handleSignUp} className="space-y-4">
        {/* Name Field */}
        <div className="space-y-3">
          <div className="relative group">
            <Input
              id="name"
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className="h-14 pl-4 pr-4 bg-white/40 backdrop-blur-sm border-0 rounded-2xl text-white placeholder:text-white/70 focus:bg-white/50 focus:ring-2 focus:ring-white/40 transition-all duration-300 text-base font-medium"
              required
            />
            <User className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/50 group-focus-within:text-white/80 transition-colors" />
          </div>
        </div>

        {/* Email Field */}
        <div className="space-y-3">
          <div className="relative group">
            <Input
              id="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="h-14 pl-4 pr-4 bg-white/40 backdrop-blur-sm border-0 rounded-2xl text-white placeholder:text-white/70 focus:bg-white/50 focus:ring-2 focus:ring-white/40 transition-all duration-300 text-base font-medium"
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
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className="h-14 pl-4 pr-12 bg-white/40 backdrop-blur-sm border-0 rounded-2xl text-white placeholder:text-white/70 focus:bg-white/50 focus:ring-2 focus:ring-white/40 transition-all duration-300 text-base font-medium"
              required
              minLength={8}
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

        {/* Confirm Password Field */}
        <div className="space-y-3">
          <div className="relative group">
            <Input
              id="confirmPassword"
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              className="h-14 pl-4 pr-12 bg-white/40 backdrop-blur-sm border-0 rounded-2xl text-white placeholder:text-white/70 focus:bg-white/50 focus:ring-2 focus:ring-white/40 transition-all duration-300 text-base font-medium"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-white/80 transition-colors p-1 rounded-lg hover:bg-white/10"
            >
              {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Terms Checkbox */}
        <div className="flex items-center space-x-3 pt-2">
          <Checkbox 
            id="terms" 
            checked={acceptTerms}
            onCheckedChange={(checked) => setAcceptTerms(checked === true)}
            className="data-[state=checked]:bg-primary data-[state=checked]:border-primary"
          />
          <Label 
            htmlFor="terms" 
            className="text-sm text-foreground cursor-pointer leading-relaxed"
          >
            I agree to the{' '}
            <Link to="/terms" className="text-primary-light hover:text-primary underline">
              Terms of Service
            </Link>
            {' '}and{' '}
            <Link to="/privacy" className="text-primary-light hover:text-primary underline">
              Privacy Policy
            </Link>
          </Label>
        </div>

        {/* Sign Up Button */}
        <Button 
          type="submit" 
          size="full" 
          disabled={isLoading}
          className="font-semibold mt-6"
        >
          {isLoading ? 'Creating Account...' : 'Create Account'}
        </Button>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/20" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-4 bg-card text-muted-foreground">Already have an account?</span>
          </div>
        </div>

        {/* Sign In Link */}
        <Button 
          variant="ghost" 
          size="full"
          asChild
          className="text-foreground hover:text-primary-light font-semibold"
        >
          <Link to="/signin">Sign In Instead</Link>
        </Button>
      </form>
    </AuthLayout>
  );
};

export default SignUp;