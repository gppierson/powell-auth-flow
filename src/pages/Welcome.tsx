import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, MapPin, Anchor } from "lucide-react";
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
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto">
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="bg-gradient-hero rounded-full p-4 shadow-medium">
              <CheckCircle className="w-12 h-12 text-primary-foreground" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold text-foreground mb-4 bg-gradient-hero bg-clip-text text-transparent">
            Welcome to Lake Powell Navigator!
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Your account has been successfully created. You're ready to explore the beautiful waters of Lake Powell.
          </p>
        </div>

        <Card className="shadow-soft border-2 border-border/50 animate-slide-in">
          <CardHeader className="text-center pb-4">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-warm rounded-full p-3">
                <Anchor className="w-8 h-8 text-secondary-foreground" />
              </div>
            </div>
            
            <CardTitle className="text-2xl text-foreground flex items-center justify-center gap-2">
              <MapPin className="w-6 h-6 text-primary" />
              Set Your Default Marina
            </CardTitle>
            
            <CardDescription className="text-base text-muted-foreground">
              Choose your preferred starting point for navigation (you can change this later)
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <RadioGroup value={selectedMarina} onValueChange={setSelectedMarina} className="space-y-4">
              {marinas.map((marina) => (
                <div key={marina} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                  <RadioGroupItem value={marina} id={marina} />
                  <Label 
                    htmlFor={marina} 
                    className="flex-1 text-base font-medium text-foreground cursor-pointer"
                  >
                    {marina}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex flex-col sm:flex-row gap-3 pt-6">
              <Button 
                onClick={handleSetMarina}
                disabled={!selectedMarina}
                className="flex-1"
                size="lg"
              >
                Set Marina & Continue
              </Button>
              
              <Button 
                variant="outline" 
                onClick={handleSkip}
                className="flex-1"
                size="lg"
              >
                Skip for Now
              </Button>
            </div>

            <p className="text-sm text-muted-foreground text-center mt-4">
              Don't worry - you can always set or change your default marina later in your profile settings.
            </p>
          </CardContent>
        </Card>

        <div className="text-center mt-8">
          <Link 
            to="/" 
            className="text-primary hover:text-primary-light transition-colors font-medium"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;