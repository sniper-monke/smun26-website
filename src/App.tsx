import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { useState, useEffect, useCallback, lazy, Suspense } from "react";
import CinematicIntro from "./components/CinematicIntro";
import Landing from "./pages/Landing";
import ScrollToTop from "./components/ScrollToTop";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useLocation } from "wouter";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Committees = lazy(() => import("./pages/Committees"));
const OC = lazy(() => import("./pages/OC"));
const Preparation = lazy(() => import("./pages/Preparation"));
const Contact = lazy(() => import("./pages/Contact"));
const DelegationPortal = lazy(() => import("./pages/DelegationPortal"));
const NotFound = lazy(() => import("./pages/NotFound"));

function Router() {
   const [location] = useLocation();
  return (
    <Suspense fallback={<div className="min-h-screen bg-smun-navy" />}>
      <AnimatePresence mode="wait">
        <motion.div
          key={location}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          <Switch location={location}>
            <Route path="/" component={Landing} />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/committees" component={Committees} />
            <Route path="/oc" component={OC} />
            <Route path="/preparation" component={Preparation} />
            <Route path="/contact" component={Contact} />
            <Route path="/delegation-portal" component={DelegationPortal} />
            <Route path="/404" component={NotFound} />
            <Route component={NotFound} />
          </Switch>
        </motion.div>
      </AnimatePresence>
    </Suspense>
  );
}

function App() {
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === "undefined") {
      return false;
    }
    const seenIntro = window.sessionStorage.getItem("smun_intro_seen") === "1";
    return !seenIntro;
  });
  const reduceMotion = useReducedMotion();
  const handleIntroComplete = useCallback(() => {
    if (typeof window !== "undefined") {
      window.sessionStorage.setItem("smun_intro_seen", "1");
    }
    setShowIntro(false);
  }, []);

  useEffect(() => {
    if (!showIntro) return;

    const failSafe = window.setTimeout(() => {
      handleIntroComplete();
    }, 4500);

    return () => window.clearTimeout(failSafe);
  }, [showIntro, handleIntroComplete]);

  useEffect(() => {
    const warmUpRoutes = () => {
      void import("./pages/Home");
      void import("./pages/About");
      void import("./pages/Committees");
      void import("./pages/Preparation");
      void import("./pages/Contact");
      void import("./pages/DelegationPortal");
      void import("./pages/OC");
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const idleId = (window as Window & { requestIdleCallback: (cb: () => void) => number }).requestIdleCallback(
        warmUpRoutes
      );
      return () => {
        const cancelIdle = (window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback;
        if (cancelIdle) cancelIdle(idleId);
      };
    }

    const timeoutId = window.setTimeout(warmUpRoutes, 1200);
    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <AnimatePresence>
            {showIntro && (
              <motion.div
                key="cinematic-intro"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.02 }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                }
                className="fixed inset-0 z-[9999]"
              >
                <CinematicIntro onComplete={handleIntroComplete} />
              </motion.div>
            )}
          </AnimatePresence>

          <ScrollToTop />
          <Router />

        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
