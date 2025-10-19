import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToProducts = () => {
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/75"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="animate-fade-in">
          <p className="text-primary text-sm md:text-base tracking-widest uppercase mb-4 font-medium">
            Since 1956
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-primary drop-shadow-lg">
            SODAM
          </h1>
          <p className="font-display text-2xl md:text-3xl lg:text-4xl text-muted mb-4 italic">
            સ્વાદ ને સોડમનો સંગમ
          </p>
          <p className="text-xl md:text-2xl text-background/90 mb-8 max-w-2xl mx-auto font-light">
            The Pure Essence of Flavor – Premium Hing You Can Trust
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <Button 
              size="lg" 
              onClick={scrollToProducts}
              className="bg-primary hover:bg-primary/90 text-foreground font-semibold px-8 py-6 text-lg shadow-premium transition-all hover:scale-105"
            >
              Explore Our Range
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-primary text-primary hover:bg-primary hover:text-foreground font-semibold px-8 py-6 text-lg transition-all hover:scale-105"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
