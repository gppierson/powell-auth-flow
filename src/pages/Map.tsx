import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Map = () => {
  const navigate = useNavigate();

  const handleDownloadNow = () => {
    navigate('/map-download');
  };

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      {/* Blurred Lake Powell map background */}
      <div className="absolute inset-0">
        <svg
          className="w-full h-full opacity-30 blur-sm"
          viewBox="0 0 800 600"
          preserveAspectRatio="xMidYMid slice"
        >
          {/* Water/Lake background */}
          <rect width="800" height="600" fill="#2563eb" opacity="0.3" />
          
          {/* Lake Powell shape - simplified representation */}
          <path
            d="M 200 100 Q 250 150 220 200 T 180 300 Q 200 350 250 380 T 350 400 Q 400 380 420 350 L 450 320 Q 480 300 500 280 L 520 250 Q 550 220 580 200 T 650 150 Q 680 130 700 100"
            fill="#3b82f6"
            opacity="0.6"
          />
          <path
            d="M 150 250 Q 180 280 200 320 T 250 380 Q 280 400 320 410 L 350 400 Q 380 390 400 370"
            fill="#3b82f6"
            opacity="0.5"
          />
          <path
            d="M 400 200 Q 420 220 450 240 T 500 280 Q 530 300 560 310 L 580 300 Q 600 290 620 270"
            fill="#3b82f6"
            opacity="0.5"
          />
          
          {/* Marina/Point markers */}
          <circle cx="250" cy="200" r="5" fill="#ef4444" opacity="0.8" />
          <circle cx="400" cy="350" r="5" fill="#ef4444" opacity="0.8" />
          <circle cx="550" cy="250" r="5" fill="#ef4444" opacity="0.8" />
          <circle cx="650" cy="150" r="5" fill="#ef4444" opacity="0.8" />
          
          {/* Grid lines to simulate map */}
          <g stroke="#94a3b8" strokeWidth="0.5" opacity="0.3">
            <line x1="0" y1="100" x2="800" y2="100" />
            <line x1="0" y1="200" x2="800" y2="200" />
            <line x1="0" y1="300" x2="800" y2="300" />
            <line x1="0" y1="400" x2="800" y2="400" />
            <line x1="0" y1="500" x2="800" y2="500" />
            <line x1="100" y1="0" x2="100" y2="600" />
            <line x1="200" y1="0" x2="200" y2="600" />
            <line x1="300" y1="0" x2="300" y2="600" />
            <line x1="400" y1="0" x2="400" y2="600" />
            <line x1="500" y1="0" x2="500" y2="600" />
            <line x1="600" y1="0" x2="600" y2="600" />
            <line x1="700" y1="0" x2="700" y2="600" />
          </g>
        </svg>
      </div>
      
      {/* Content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
        <Card className="max-w-sm w-full bg-card/95 backdrop-blur-md shadow-soft border-2 border-border/50 animate-fade-in">
          <CardContent className="p-6 text-center space-y-4">
            <div className="flex justify-center mb-2">
              <div className="bg-muted rounded-full p-3">
                <Lock className="w-6 h-6 text-primary" />
              </div>
            </div>
            
            <h2 className="text-xl font-bold text-foreground">
              You Still Need to Download the Map
            </h2>
            
            <p className="text-sm text-muted-foreground">
              Download the Lake Powell map to navigate
            </p>

            <Button 
              onClick={handleDownloadNow}
              className="w-full flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Map (45 MB)
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Map;