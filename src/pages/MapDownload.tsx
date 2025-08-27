import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, CheckCircle2, Map, ChevronDown, HardDrive, Clock, Waves, Globe } from "lucide-react";
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

  const handleRemindLater = () => {
    navigate('/map');
  };

  const totalStorageUsed = satelliteComplete && depthComplete ? '550 MB' : 
                           satelliteComplete ? '350 MB' : 
                           depthComplete ? '200 MB' : 'Zero KB';

  return (
    <div className="min-h-screen bg-background flex flex-col p-4 py-8">
      <div className="w-full max-w-lg mx-auto">
        {/* Header with icon */}
        <div className="text-center mb-8 animate-fade-in">
          <div className="flex justify-center mb-6">
            <div className="relative w-20 h-20 rounded-2xl shadow-medium bg-primary/10 flex items-center justify-center">
              <Map className="w-10 h-10 text-primary" />
              <Download className="w-5 h-5 text-primary absolute -bottom-1 -right-1 bg-background rounded-full p-0.5" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-foreground mb-2">
            Download Lake Powell Map
          </h1>
          
          <p className="text-base text-muted-foreground">
            Your complete navigation guide - works without signal
          </p>
        </div>

        {/* Storage Info Card */}
        <Card className="mb-6 shadow-soft border-border/50">
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">Total Storage Used</span>
                </div>
                <span className="text-sm font-medium text-foreground">{totalStorageUsed}</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">Available Space</span>
                </div>
                <span className="text-sm text-muted-foreground">34.26 GB</span>
              </div>
            </div>
            
            <p className="text-xs text-muted-foreground mt-3">
              Offline maps are stored locally on your device for use without internet connection.
            </p>
          </CardContent>
        </Card>

        {/* Available Maps Section */}
        <h2 className="text-lg font-semibold text-foreground mb-4">Available Maps</h2>
        
        <div className="space-y-4">
          {/* Satellite Map */}
          <Card className="shadow-soft border-border/50">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mt-1">
                    <Globe className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">Satellite Map</h3>
                    <p className="text-sm text-muted-foreground">~350 MB</p>
                    
                    {satelliteDownloading && (
                      <div className="mt-3">
                        <Progress value={satelliteProgress} className="h-2" />
                        <p className="text-xs text-muted-foreground mt-1">{satelliteProgress}%</p>
                      </div>
                    )}
                    
                    {satelliteComplete && (
                      <div className="flex items-center gap-1 mt-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span className="text-sm text-green-600 dark:text-green-400">Downloaded</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {!satelliteComplete && (
                  <Button 
                    onClick={handleSatelliteDownload}
                    disabled={satelliteDownloading}
                    size="sm"
                    className="ml-3"
                  >
                    {satelliteDownloading ? 'Downloading...' : 'Download'}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Depth Map */}
          <Card className="shadow-soft border-border/50">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center mt-1">
                    <Waves className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">Depth Map</h3>
                    <p className="text-sm text-muted-foreground">2ft-200ft+ contours for safe navigation</p>
                    <p className="text-sm text-muted-foreground">~200 MB</p>
                    
                    {depthDownloading && (
                      <div className="mt-3">
                        <Progress value={depthProgress} className="h-2" />
                        <p className="text-xs text-muted-foreground mt-1">{depthProgress}%</p>
                      </div>
                    )}
                    
                    {depthComplete && (
                      <div className="flex items-center gap-1 mt-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                        <span className="text-sm text-green-600 dark:text-green-400">Downloaded</span>
                      </div>
                    )}
                  </div>
                </div>
                
                {!depthComplete && (
                  <Button 
                    onClick={handleDepthDownload}
                    disabled={depthDownloading}
                    size="sm"
                    className="ml-3"
                  >
                    {depthDownloading ? 'Downloading...' : 'Download'}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Collapsible */}
        <Collapsible open={featuresOpen} onOpenChange={setFeaturesOpen} className="mt-4">
          <CollapsibleTrigger className="flex items-center gap-2 text-sm text-primary hover:text-primary-light transition-colors w-full">
            <ChevronDown className={`w-4 h-4 transition-transform ${featuresOpen ? 'rotate-180' : ''}`} />
            <span>Features</span>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-3">
            <Card className="shadow-soft border-border/50">
              <CardContent className="p-4">
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• 2ft minimum contour interval</li>
                  <li>• Color-coded depth zones</li>
                  <li>• Underwater hazard markers</li>
                  <li>• Safe navigation channels</li>
                </ul>
              </CardContent>
            </Card>
          </CollapsibleContent>
        </Collapsible>

        {/* Important Info Section */}
        <Card className="mt-6 shadow-soft border-border/50 bg-muted/30">
          <CardContent className="p-4">
            <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-3">
              📍 No Cell Service on the Lake
            </h3>
            <p className="text-xs text-muted-foreground mb-3">
              Once you're on Lake Powell, you're offline. Get the map now while you have connection.
            </p>
            
            <h4 className="text-xs font-semibold text-foreground mb-2">Why You Need This:</h4>
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
          </CardContent>
        </Card>

        {/* Bottom Text and Remind Me Later Button */}
        <div className="mt-6 space-y-3">
          <p className="text-xs text-muted-foreground text-center">
            Download the maps you need for offline navigation.
          </p>
          
          <Button 
            variant="outline" 
            onClick={handleRemindLater}
            className="w-full"
          >
            Remind Me Later
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MapDownload;