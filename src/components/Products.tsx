import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, MessageCircle } from "lucide-react";
import productTadka1008 from "@/assets/product-tadka-1008.png";
import productHing999 from "@/assets/product-hing-999.png";
import productHing333 from "@/assets/product-hing-333.png";
import productHing27 from "@/assets/product-hing-27.png";
import productAmratHing from "@/assets/product-amrat-hing.png";

const products = [
  {
    name: "Sodam Tadka Hing 1008",
    subtitle: "Premium Aromatic Blend",
    description: "Exceptional purity with a powerful aroma for signature dishes. Crafted from our finest grade, known for its intense fragrance and deep flavour. Perfect for professional kitchens and households that love a strong tadka.",
    strength: "Strong",
    sizes: "50g, 100g, 250g",
    badgeColor: "bg-secondary/40 text-secondary-foreground",
    image: productTadka1008,
  },
  {
    name: "Sodam Hing 999",
    subtitle: "Superior Quality",
    description: "High-quality hing for everyday chefs who love bold flavours. Delivers a bold, full-bodied aroma and consistent performance in every dish. Ideal for homes and restaurants seeking rich flavour without going to the highest premium tier.",
    strength: "Strong",
    sizes: "50g, 100g, 250g",
    badgeColor: "bg-secondary/40 text-secondary-foreground",
    image: productHing999,
  },
  {
    name: "Sodam Hing 333",
    subtitle: "Balanced & Versatile",
    description: "A smooth, balanced hing perfect for daily cooking. Has a pleasant fragrance and balanced potency—ideal for families who enjoy mild yet aromatic hing in everyday dishes.",
    strength: "Medium",
    sizes: "50g, 100g, 250g",
    badgeColor: "bg-primary/30 text-primary",
    image: productHing333,
  },
  {
    name: "Sodam Hing 27",
    subtitle: "Everyday Mild Aroma",
    description: "Reliable daily-use hing with a gentle, comforting aroma. Offers a soft, subtle aroma suitable for simple homestyle cooking. Perfect for customers who prefer a lighter hing presence.",
    strength: "Mild",
    sizes: "50g, 100g, 250g",
    badgeColor: "bg-accent/30 text-accent-foreground",
    image: productHing27,
  },
  {
    name: "Amrat Hing",
    subtitle: "Economy Range",
    description: "Budget-friendly hing for everyday kitchens and bulk buyers. Our most economical variant, made for households, canteens, and large-scale buyers who want a very mild aroma at an affordable price.",
    strength: "Mildest",
    sizes: "50g, 100g, 250g",
    badgeColor: "bg-muted/60 text-muted-foreground",
    image: productAmratHing,
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
            Five carefully crafted variants to suit every culinary need – from home kitchens to professional restaurants
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="animate-scale-in hover:shadow-premium transition-all duration-300 hover:-translate-y-2 border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {product.image && (
                <div className="relative w-full h-64 overflow-hidden rounded-t-lg bg-gradient-to-br from-muted/30 to-muted/50">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className={`w-full h-full ${index === 0 ? 'object-contain p-2' : 'object-cover'}`}
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <CardTitle className="font-display text-2xl mb-1">{product.name}</CardTitle>
                    <p className="text-sm font-semibold text-primary">{product.subtitle}</p>
                  </div>
                  <Badge className={product.badgeColor}>{product.strength}</Badge>
                </div>
                <CardDescription className="text-base mt-3">{product.description}</CardDescription>
                <p className="text-sm text-muted-foreground mt-3">
                  <span className="font-semibold">Sizes:</span> {product.sizes}
                </p>
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
