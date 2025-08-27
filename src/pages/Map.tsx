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
      {/* Blurred map background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600"
          style={{
            backgroundImage: `
              repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px),
              repeating-linear-gradient(-45deg, transparent, transparent 35px, rgba(255,255,255,.05) 35px, rgba(255,255,255,.05) 70px)
            `,
            filter: 'blur(3px)'
          }}
        />
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
              Map Offline Required
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