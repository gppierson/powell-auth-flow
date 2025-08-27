
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Map, Download, CheckCircle2, HardDrive, ChevronDown, ChevronUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const MapDownload = () => {
  const navigate = useNavigate();
  const [satelliteDownloading, setSatelliteDownloading] = useState(false);
  const [depthDownloading, setDepthDownloading] = useState(false);
  const [satelliteProgress, setSatelliteProgress] = useState(0);
  const [depthProgress, setDepthProgress] = useState(0);
  const [satelliteComplete, setSatelliteComplete] = useState(false);
  const [depthComplete, setDepthComplete] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  const handleSatelliteDownload = () => {
    setSatelliteDownloading(true);
    const interval = setInterval(() => {
      setSatelliteProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setSatelliteComplete(true);
          setSatelliteDownloading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const handleDepthDownload = () => {
    setDepthDownloading(true);
    const interval = setInterval(() => {
      setDepthProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setDepthComplete(true);
          setDepthDownloading(false);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const handleSkip = () => {
    navigate('/map');
  };

  const bothComplete = satelliteComplete && depthComplete;

  return (
    <div className="min-h-screen bg-background flex flex-col p-4 py-8">
      <div className="w-full max-w-md mx-auto flex-1 flex flex-col">
        {/* Header */}
        <div className="text-center mb-6 animate-fade-in">
          <div className="flex justify-center mb-4">
            <Map className="w-20 h-20 text-muted-foreground" strokeWidth={1.5} />
          </div>
          
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Offline Map Required
          </h1>
          
          <p className="text-sm text-muted-foreground px-4">
            Download the Lake Powell offline map to enable navigation features
          </p>
        </div>

        {/* Storage Info */}
        <div className="bg-muted/30 rounded-lg p-4 mb-6 space-y-3 animate-slide-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <HardDrive className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm text-foreground">Total Storage Used</span>
            </div>
            <span className="text-sm font-medium text-foreground">
              {bothComplete ? "550 MB" : satelliteComplete ? "350 MB" : depthComplete ? "200 MB" : "Zero KB"}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full border-2 border-muted-foreground" />
              <span className="text-sm text-foreground">Available Space</span>
            </div>
            <span className="text-sm text-muted-foreground">35.4 GB</span>
          </div>
          
          <p className="text-xs text-muted-foreground text-center pt-2">
            Offline maps are stored locally on your device for use without internet connection.
          </p>
        </div>

        {/* Available Maps */}
        <div className="flex-1 space-y-4">
          <h2 className="text-lg font-semibold text-foreground">Available Maps</h2>
          
          {/* Satellite Map */}
          <Card className="border-border/50">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mt-1">
                    <div className="w-6 h-6 rounded-full bg-primary/20" />
                  </div>
                  <div>
                    <h3 className="font-medium text-foreground">Satellite Map</h3>
                    <p className="text-sm text-muted-foreground">~350 MB</p>
                  </div>
                </div>
                {satelliteComplete ? (
                  <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm font-medium">Downloaded</span>
                  </div>
                ) : (
                  <Button 
                    onClick={handleSatelliteDownload}
                    disabled={satelliteDownloading}
                    size="sm"
                    className="px-6"
                  >
                    {satelliteDownloading ? "Downloading..." : "Download"}
                  </Button>
                )}
              </div>
              {satelliteDownloading && (
                <div className="mt-3">
                  <Progress value={satelliteProgress} className="h-1.5" />
                </div>
              )}
            </CardContent>
          </Card>

          {/* Depth Map */}
          <Card className="border-border/50">
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mt-1">
                      <div className="flex flex-col gap-0.5">
                        <div className="h-0.5 w-5 bg-primary/40" />
                        <div className="h-0.5 w-5 bg-primary/60" />
                        <div className="h-0.5 w-5 bg-primary/80" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground">Depth Map</h3>
                      <p className="text-sm text-muted-foreground">
                        2ft-200ft+ contours for safe navigation
                      </p>
                      <p className="text-sm text-muted-foreground">~200 MB</p>
                    </div>
                  </div>
                  {depthComplete ? (
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400">
                      <CheckCircle2 className="w-5 h-5" />
                      <span className="text-sm font-medium">Downloaded</span>
                    </div>
                  ) : (
                    <Button 
                      onClick={handleDepthDownload}
                      disabled={depthDownloading}
                      size="sm"
                      className="px-6"
                    >
                      {depthDownloading ? "Downloading..." : "Download"}
                    </Button>
                  )}
                </div>
                
                {/* Features Collapsible */}
                <Collapsible open={featuresOpen} onOpenChange={setFeaturesOpen}>
                  <CollapsibleTrigger className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {featuresOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    Features
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pt-2">
                    <ul className="text-xs text-muted-foreground space-y-1 pl-4">
                      <li>• 2ft minimum contour interval</li>
                      <li>• Color-coded depth zones</li>
                      <li>• Underwater hazard markers</li>
                      <li>• Safe navigation channels</li>
                    </ul>
                  </CollapsibleContent>
                </Collapsible>
                
                {depthDownloading && (
                  <Progress value={depthProgress} className="h-1.5" />
                )}
              </div>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card className="bg-muted/30 border-border/30">
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-base">📍</span>
                  <span className="text-sm font-medium text-foreground">No Cell Service on the Lake</span>
                </div>
                <p className="text-xs text-muted-foreground">
                  Once you're on Lake Powell, you're offline. Get the map now while you have connection.
                </p>
                
                <div className="space-y-2 pt-2">
                  <p className="text-xs font-medium text-foreground">Why You Need This:</p>
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
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 space-y-2">
          {bothComplete ? (
            <Button 
              onClick={() => navigate('/welcome')}
              className="w-full"
            >
              Continue to App
            </Button>
          ) : (
            <Button 
              variant="outline" 
              onClick={handleSkip}
              className="w-full"
            >
              Remind Me Later
            </Button>
          )}
        </div>

        <p className="text-xs text-muted-foreground text-center mt-3">
          Download the maps you need for offline navigation.
        </p>
      </div>
    </div>
  );
};

export default MapDownload;
