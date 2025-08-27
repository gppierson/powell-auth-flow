import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { WifiOff, Download, MapPin, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Progress } from "@/components/ui/progress";

const MapDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadComplete, setDownloadComplete] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate download progress
    const interval = setInterval(() => {
      setDownloadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloadComplete(true);
          setIsDownloading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const handleSkip = () => {
    // Navigate to main app
    console.log("Skipping map download");
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
            Download Offline Map
          </h1>
          
          <p className="text-sm text-muted-foreground">
            Essential for navigation at Lake Powell
          </p>
        </div>

        <Card className="shadow-soft border-2 border-border/50 animate-slide-in">
          <CardHeader className="text-center pb-3">
            <div className="flex justify-center mb-2">
              <div className="bg-destructive/10 rounded-full p-2">
                <WifiOff className="w-5 h-5 text-destructive" />
              </div>
            </div>
            
            <CardTitle className="text-lg text-foreground flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Limited Connectivity at Lake Powell
            </CardTitle>
            
            <CardDescription className="text-sm text-muted-foreground px-4">
              WiFi and cellular service are generally unavailable on the lake. Download the map now to ensure you can navigate safely.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-3 space-y-2">
              <h3 className="text-sm font-semibold text-foreground">Why download?</h3>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Navigate without internet connection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Access all waypoints and marina locations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>View detailed lake topography offline</span>
                </li>
              </ul>
            </div>

            {isDownloading && (
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground">Downloading map...</span>
                  <span className="text-foreground font-medium">{downloadProgress}%</span>
                </div>
                <Progress value={downloadProgress} className="h-2" />
              </div>
            )}

            {downloadComplete && (
              <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-950/30 p-3 rounded-lg">
                <CheckCircle2 className="w-4 h-4" />
                <span className="font-medium">Map downloaded successfully!</span>
              </div>
            )}

            <div className="flex flex-col gap-2 pt-2">
              {!downloadComplete ? (
                <>
                  <Button 
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className="w-full flex items-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    {isDownloading ? "Downloading..." : "Download Map (45 MB)"}
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={handleSkip}
                    disabled={isDownloading}
                    className="w-full"
                  >
                    Download Later
                  </Button>
                </>
              ) : (
                <Button 
                  onClick={() => console.log('Continue to app')}
                  className="w-full"
                >
                  Continue to App
                </Button>
              )}
            </div>

            <p className="text-xs text-muted-foreground text-center mt-3">
              {downloadComplete 
                ? "You're all set for offline navigation!" 
                : "Recommended: Download now while connected"}
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

export default MapDownload;