import { useEffect, useState, type ReactNode } from "react";
import { useLocation } from "@tanstack/react-router";
import logo from "@/assets/logo.png";

const PageTransition = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      return;
    }
    setVisible(true);
    const t = setTimeout(() => setVisible(false), 650);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      {children}
      <div
        aria-hidden
        className={`fixed inset-0 z-[9999] pointer-events-none flex items-center justify-center bg-white transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <img src={logo} alt="Arch General Contracting" className="h-20 w-auto animate-scale-in" />
      </div>
    </>
  );
};

export default PageTransition;
