import { useState, useEffect, useRef, ReactNode, cloneElement, isValidElement } from "react";
import { useLocation } from "react-router-dom";

const PageTransition = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const [phase, setPhase] = useState<"idle" | "cover" | "reveal">("idle");
  
  // Capture the actual rendered content
  const [frozenContent, setFrozenContent] = useState<ReactNode>(null);
  const [showNew, setShowNew] = useState(true);
  
  // Track previous path
  const prevPath = useRef(location.pathname);
  const isFirstMount = useRef(true);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // First mount - no transition
    if (isFirstMount.current) {
      isFirstMount.current = false;
      prevPath.current = location.pathname;
      return;
    }

    // Route changed
    if (prevPath.current !== location.pathname) {
      // Capture snapshot of current DOM before route changes
      if (contentRef.current) {
        const snapshot = contentRef.current.innerHTML;
        setFrozenContent(
          <div dangerouslySetInnerHTML={{ __html: snapshot }} />
        );
      }
      
      // Hide new content, show frozen old content
      setShowNew(false);
      
      // Start cover animation
      setPhase("cover");
      
      // After cover completes - swap content
      const swapTimer = setTimeout(() => {
        prevPath.current = location.pathname;
        setShowNew(true);
        setFrozenContent(null);
        setPhase("reveal");
      }, 400);

      // Animation complete
      const endTimer = setTimeout(() => {
        setPhase("idle");
      }, 850);

      return () => {
        clearTimeout(swapTimer);
        clearTimeout(endTimer);
      };
    }
  }, [location.pathname]);

  // Overlay transform
  const getTransform = () => {
    switch (phase) {
      case "idle": return "translateX(-100%)";
      case "cover": return "translateX(0%)";
      case "reveal": return "translateX(100%)";
      default: return "translateX(-100%)";
    }
  };

  const getTransition = (delay: number) => {
    if (phase === "idle") return "none";
    return `transform 380ms cubic-bezier(0.4, 0, 0.2, 1) ${delay}ms`;
  };

  return (
    <>
      {/* Frozen old content - shown during cover phase */}
      {frozenContent && !showNew && (
        <div className="absolute inset-0 overflow-hidden">
          {frozenContent}
        </div>
      )}
      
      {/* Actual content - hidden during cover, shown during reveal */}
      <div 
        ref={contentRef}
        style={{ 
          visibility: showNew ? 'visible' : 'hidden',
          position: showNew ? 'relative' : 'absolute',
        }}
      >
        {children}
      </div>
      
      {/* Transition overlay layers */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 9998,
          backgroundColor: "hsl(var(--background))",
          transform: getTransform(),
          transition: getTransition(40),
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 9999,
          backgroundColor: "hsl(var(--secondary))",
          transform: getTransform(),
          transition: getTransition(20),
        }}
      />
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          zIndex: 10000,
          backgroundColor: "hsl(var(--primary))",
          transform: getTransform(),
          transition: getTransition(0),
        }}
      />
    </>
  );
};

export default PageTransition;
