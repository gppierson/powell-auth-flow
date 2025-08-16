import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Anchor } from "lucide-react";
import { Link } from "react-router-dom";

const Welcome = () => {
  const [selectedMarina, setSelectedMarina] = useState<string>("");

  const marinas = [
    "Antelope Point Marina",
    "Wahweap Marina", 
    "Bullfrog Marina",
    "Halls Crossing Marina"
  ];

  const handleSetMarina = () => {
    // Here you would save the selected marina to user preferences
    console.log("Selected marina:", selectedMarina);
    // Redirect to main app or dashboard
  };

  const handleSkip = () => {
    // Skip marina selection and go to main app
    // Redirect to main app or dashboard
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center p-4 py-8">
      <div className="w-full max-w-lg mx-auto">
        <div className="text-center mb-6 animate-fade-in">
          <div className="flex justify-center mb-4">
            <img 
              src="/lovable-uploads/9ca600e0-ffc4-4e33-9b1a-8bd3d97c3757.png" 
              alt="Lake Powell Navigator Logo" 
              className="w-16 h-16 rounded-2xl shadow-medium"
            />
          </div>
          
          <h1 className="text-2xl font-bold text-foreground mb-2 bg-gradient-hero bg-clip-text text-transparent">
            Welcome to Lake Powell Navigator!
          </h1>
          
          <p className="text-sm text-muted-foreground">
            Account created successfully. Ready to explore!
          </p>
        </div>

        <Card className="shadow-soft border-2 border-border/50 animate-slide-in">
          <CardHeader className="text-center pb-3">
            <div className="flex justify-center mb-2">
              <div className="bg-gradient-warm rounded-full p-2">
                <Anchor className="w-5 h-5 text-secondary-foreground" />
              </div>
            </div>
            
            <CardTitle className="text-lg text-foreground flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Set Default Marina
            </CardTitle>
            
            <CardDescription className="text-sm text-muted-foreground">
              Choose your preferred starting point (optional)
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <RadioGroup value={selectedMarina} onValueChange={setSelectedMarina} className="space-y-2">
              {marinas.map((marina) => (
                <div key={marina} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value={marina} id={marina} />
                  <Label 
                    htmlFor={marina} 
                    className="flex-1 text-sm font-medium text-foreground cursor-pointer"
                  >
                    {marina}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex flex-col gap-2 pt-4">
              <Button 
                onClick={handleSetMarina}
                disabled={!selectedMarina}
                className="w-full"
              >
                Set Marina & Continue
              </Button>
              
              <Button 
                variant="outline" 
                onClick={handleSkip}
                className="w-full"
              >
                Skip for Now
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-3">
              You can change this later in settings
            </p>
          </CardContent>
        </Card>

        <div className="text-center mt-4">
          <Link 
            to="/" 
            className="text-sm text-primary hover:text-primary-light transition-colors font-medium"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;