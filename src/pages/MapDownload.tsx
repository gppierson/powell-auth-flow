
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { WifiOff, Download, MapPin, CheckCircle2, Map } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const MapDownload = () => {
  const navigate = useNavigate();
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadComplete, setDownloadComplete] = useState(false);
  const [showSkipWarning, setShowSkipWarning] = useState(false);

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
    setShowSkipWarning(true);
  };

  const confirmSkip = () => {
    setShowSkipWarning(false);
    navigate('/map');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center p-4 py-8">
      <div className="w-full max-w-lg mx-auto">
        <div className="text-center mb-6 animate-fade-in">
          <div className="flex justify-center mb-4">
            <div className="relative w-16 h-16 rounded-2xl shadow-medium bg-primary/10 flex items-center justify-center">
              <Map className="w-8 h-8 text-primary" />
              <Download className="w-4 h-4 text-primary absolute -bottom-1 -right-1 bg-background rounded-full p-0.5" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-foreground mb-2 bg-gradient-hero bg-clip-text text-transparent">
            Download Lake Powell Map
          </h1>
          
          <p className="text-sm text-muted-foreground">
            Your complete navigation guide - works without signal
          </p>
        </div>

        <Card className="shadow-soft border-2 border-border/50 animate-slide-in">
          <CardHeader className="text-center pb-3">
            <CardTitle className="text-lg text-foreground flex items-center justify-center gap-2">
              📍 No Cell Service on the Lake
            </CardTitle>
            
            <CardDescription className="text-sm text-muted-foreground px-4">
              Once you're on Lake Powell, you're offline. Get the map now while you have connection.
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <div className="bg-muted/50 rounded-lg p-3 space-y-2">
              <h3 className="text-sm font-semibold text-foreground">Why You Need This:</h3>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Navigate confidently - All waypoints, marinas, and coves marked</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Find hidden gems - Discover beaches and anchorages locals love</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>Stay safe - Never get lost, even in remote canyon areas</span>
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
                    {isDownloading ? "Downloading..." : "Get Map Now (5 MB)"}
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    onClick={handleSkip}
                    disabled={isDownloading}
                    className="w-full"
                  >
                    I Don't Want To Download
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
                : "Takes 30 seconds on WiFi"}
            </p>
          </CardContent>
        </Card>
      </div>

      <AlertDialog open={showSkipWarning} onOpenChange={setShowSkipWarning}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              When offline you won't have all the features.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmSkip}>Don't Download Offline Map</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default MapDownload;
