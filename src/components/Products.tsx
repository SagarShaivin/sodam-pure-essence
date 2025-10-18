import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, MessageCircle } from "lucide-react";

const products = [
  {
    name: "SODAM Classic",
    description: "Perfect for everyday cooking with a mild, balanced aroma",
    strength: "Mild",
    badgeColor: "bg-accent/20 text-accent-foreground",
  },
  {
    name: "SODAM Premium",
    description: "Enhanced purity and aroma for authentic Indian recipes",
    strength: "Medium",
    badgeColor: "bg-primary/20 text-primary",
  },
  {
    name: "SODAM Gold",
    description: "Extra pure formulation for discerning home chefs",
    strength: "Medium-Strong",
    badgeColor: "bg-primary/30 text-primary",
  },
  {
    name: "SODAM Royal",
    description: "Restaurant-grade quality with robust flavor profile",
    strength: "Strong",
    badgeColor: "bg-secondary/30 text-secondary",
  },
  {
    name: "SODAM Supreme",
    description: "Maximum strength and aroma for professional kitchens",
    strength: "Extra Strong",
    badgeColor: "bg-secondary/40 text-secondary-foreground",
  },
  {
    name: "SODAM Ultra",
    description: "Our finest offering with unmatched purity and intensity",
    strength: "Ultra Strong",
    badgeColor: "bg-secondary/60 text-secondary-foreground",
  },
];

const deliveryApps = [
  { name: "Blinkit", url: "#" },
  { name: "Zepto", url: "#" },
  { name: "Instamart", url: "#" },
  { name: "BigBasket", url: "#" },
];

const Products = () => {
  const handleBulkOrder = () => {
    window.open('https://wa.me/919825609527?text=Hello, I would like to inquire about bulk orders for SODAM Hing', '_blank');
  };

  return (
    <section className="py-20 bg-muted/30" id="products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Premium <span className="text-primary">Range</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Six carefully crafted variants to suit every culinary need – from home kitchens to professional restaurants
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="animate-scale-in hover:shadow-premium transition-all duration-300 hover:-translate-y-2 border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="font-display text-2xl">{product.name}</CardTitle>
                  <Badge className={product.badgeColor}>{product.strength}</Badge>
                </div>
                <CardDescription className="text-base">{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-foreground mb-3">Available on:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {deliveryApps.map((app, appIndex) => (
                      <Button 
                        key={appIndex}
                        variant="outline" 
                        size="sm"
                        className="hover:bg-primary hover:text-foreground hover:border-primary transition-all"
                        onClick={() => window.open(app.url, '_blank')}
                      >
                        <ShoppingBag className="mr-2 h-3 w-3" />
                        {app.name}
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="ghost" 
                  className="w-full text-primary hover:text-primary hover:bg-primary/10"
                  onClick={handleBulkOrder}
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  Bulk Order Inquiry
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
