
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-darkest p-4">
      <div className="text-center max-w-md animate-fadeIn">
        <div className="mb-8">
          <div className="w-16 h-16 bg-brand-green rounded-lg mx-auto mb-4 animate-float"></div>
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Button className="group" onClick={() => window.location.href = "/"}>
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Return to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
