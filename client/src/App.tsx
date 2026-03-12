import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useState, useEffect } from "react";
import CinematicIntro from "./components/CinematicIntro";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import About from "./pages/About";
import Committees from "./pages/Committees";
import Preparation from "./pages/Preparation";
import Contact from "./pages/Contact";
import DelegationPortal from "./pages/DelegationPortal";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Landing} />
      <Route path={"/home"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/committees"} component={Committees} />
      <Route path={"/preparation"} component={Preparation} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/delegation-portal"} component={DelegationPortal} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Check if intro has been shown before
    const introShown = localStorage.getItem("introShown");
    if (introShown) {
      setShowIntro(false);
    }
  }, []);

  const handleIntroComplete = () => {
    setShowIntro(false);
    localStorage.setItem("introShown", "true");
  };

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          {showIntro && <CinematicIntro onComplete={handleIntroComplete} />}
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
