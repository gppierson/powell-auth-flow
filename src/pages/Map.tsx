import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Download, WifiOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Map = () => {
  const navigate = useNavigate();

  const handleDownloadNow = () => {
    navigate('/map-download');
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
            Lake Powell Map
          </h1>
        </div>

        <Card className="shadow-soft border-2 border-border/50 animate-slide-in">
          <CardHeader className="text-center pb-3">
            <div className="flex justify-center mb-2">
              <div className="bg-muted rounded-full p-3">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
            </div>
            
            <CardTitle className="text-lg text-foreground">
              Map Not Available Offline
            </CardTitle>
            
            <CardDescription className="text-sm text-muted-foreground px-4">
              You need to download the map first to navigate Lake Powell
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3 flex items-start gap-3">
              <WifiOff className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
              <div className="text-xs text-foreground">
                <p className="font-semibold mb-1">No Signal on the Lake</p>
                <p className="text-muted-foreground">
                  Once you're on Lake Powell, you won't have internet access. Download the map now while you're connected.
                </p>
              </div>
            </div>

            <div className="bg-muted/50 rounded-lg p-3 space-y-2">
              <h3 className="text-sm font-semibold text-foreground">What's included:</h3>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>All marinas and boat ramps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Popular beaches and coves</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Navigation waypoints</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Detailed lake topography</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-2 pt-2">
              <Button 
                onClick={handleDownloadNow}
                className="w-full flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download Map Now (45 MB)
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => console.log('Continue without map')}
                className="w-full"
              >
                Continue Without Map
              </Button>
            </div>

            <p className="text-xs text-muted-foreground text-center mt-3">
              Takes 30 seconds on WiFi
            </p>
          </CardContent>
        </Card>

        <div className="text-center mt-4">
          <Link 
            to="/welcome" 
            className="text-sm text-primary hover:text-primary-light transition-colors font-medium"
          >
            Back to Welcome
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Map;