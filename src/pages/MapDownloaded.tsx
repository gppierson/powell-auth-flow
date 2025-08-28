import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Map, CheckCircle2, RefreshCw, Trash2, HardDrive, Database } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
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

const MapDownloaded = () => {
  const navigate = useNavigate();
  const [showDeleteWarning, setShowDeleteWarning] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = () => {
    setIsRefreshing(true);
    // Simulate refresh
    setTimeout(() => {
      setIsRefreshing(false);
    }, 2000);
  };

  const handleDelete = () => {
    setShowDeleteWarning(true);
  };

  const confirmDelete = () => {
    setShowDeleteWarning(false);
    // Handle deletion logic here
    navigate('/map-download');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center p-4 py-8">
      <div className="w-full max-w-lg mx-auto">
        <div className="text-center mb-6 animate-fade-in">
          <div className="flex justify-center mb-4">
            <div className="relative w-16 h-16 rounded-2xl shadow-medium bg-primary/10 flex items-center justify-center">
              <Map className="w-8 h-8 text-primary" />
              <CheckCircle2 className="w-4 h-4 text-green-500 absolute -bottom-1 -right-1 bg-background rounded-full" />
            </div>
          </div>
          
          <h1 className="text-2xl font-bold text-foreground mb-2 bg-gradient-hero bg-clip-text text-transparent">
            Download Lake Powell Map
          </h1>
          
          <p className="text-sm text-muted-foreground">
            Your complete navigation guide - works without signal
          </p>
        </div>

        {/* Storage Information Card */}
        <Card className="shadow-soft border-2 border-border/50 mb-4 animate-slide-in">
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Total Storage Used</span>
                </div>
                <span className="text-sm font-semibold text-foreground">4.8 MB</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Database className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">Available Space</span>
                </div>
                <span className="text-sm font-semibold text-foreground">33.97 GB</span>
              </div>
              
              <p className="text-xs text-muted-foreground text-center pt-2">
                Offline maps are stored locally on your device for use without internet connection.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Available Maps Section */}
        <Card className="shadow-soft border-2 border-border/50 mb-4 animate-slide-in">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-foreground">Available Maps</CardTitle>
            <CardDescription className="text-sm text-muted-foreground">
              Download the maps you need for offline navigation.
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <div className="bg-muted/30 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                  <div>
                    <h3 className="text-sm font-semibold text-foreground">Satellite Map</h3>
                    <p className="text-xs text-muted-foreground">~350 MB • Downloaded</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleRefresh}
                    disabled={isRefreshing}
                    className="h-8 w-8"
                  >
                    <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                  </Button>
                  
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleDelete}
                    className="h-8 w-8 text-destructive hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Original Content Card */}
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
          </CardContent>
        </Card>
      </div>

      <AlertDialog open={showDeleteWarning} onOpenChange={setShowDeleteWarning}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Offline Map?</AlertDialogTitle>
            <AlertDialogDescription>
              This will remove the offline map from your device. You'll need to download it again to use offline navigation features.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={confirmDelete} className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
              Delete Map
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default MapDownloaded;