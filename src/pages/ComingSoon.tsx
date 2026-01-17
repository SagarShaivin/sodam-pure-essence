import { Button } from "@/components/ui/button";
import { ArrowLeft, Rocket } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

const ComingSoon = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const appName = searchParams.get('app') || 'This Platform';

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8 animate-bounce">
          <Rocket className="h-20 w-20 text-primary mx-auto" />
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
          Coming Soon!
        </h1>
        <p className="text-muted-foreground text-lg mb-2">
          SODAM Hing on
        </p>
        <p className="text-primary font-display text-2xl font-bold mb-6">
          {appName}
        </p>
        <p className="text-muted-foreground mb-8">
          We're working hard to bring our premium Hing to {appName}. Stay tuned for updates!
        </p>
        <Button 
          onClick={() => navigate('/')}
          className="bg-primary hover:bg-primary/90 text-foreground font-semibold px-6 py-3"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default ComingSoon;
