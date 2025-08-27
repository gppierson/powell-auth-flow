import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, Map as MapIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Map = () => {
  const navigate = useNavigate();

  const handleDownloadNow = () => {
    navigate('/map-download');
  };

  return (
    <div className="relative min-h-screen bg-background overflow-hidden">
      
      {/* Content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen p-4">
        <Card className="max-w-sm w-full bg-card/95 backdrop-blur-md shadow-soft border-2 border-border/50 animate-fade-in">
          <CardContent className="p-6 text-center space-y-4">
            <div className="flex justify-center mb-2">
              <div className="relative w-16 h-16 rounded-2xl shadow-medium bg-primary/10 flex items-center justify-center">
                <MapIcon className="w-8 h-8 text-primary" />
                <Download className="w-4 h-4 text-primary absolute -bottom-1 -right-1 bg-background rounded-full p-0.5" />
              </div>
            </div>
            
            <h2 className="text-xl font-bold text-foreground">
              Don't Forget Your Map
            </h2>
            
            <p className="text-sm text-muted-foreground">
              You'll need it once you're on the water
            </p>

            <Button 
              onClick={handleDownloadNow}
              className="w-full flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Map (52 MB)
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Map;