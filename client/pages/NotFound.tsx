import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center glass p-8 rounded-2xl">
        <h1 className="text-4xl font-extrabold mb-2 brand-text">404</h1>
        <p className="text-white/70 mb-4">Oops! Page not found</p>
        <a href="/" className="brand-gradient inline-flex items-center justify-center px-4 py-2 rounded-2xl text-white">Return to Home</a>
      </div>
    </div>
  );
};

export default NotFound;
