import { Shield, Sparkles, Award, Users, Leaf, CheckCircle } from "lucide-react";

const benefits = [
  {
    icon: Leaf,
    title: "Pure Ingredients",
    description: "100% natural asafoetida with no artificial additives or preservatives",
  },
  {
    icon: Shield,
    title: "Lab-Tested Quality",
    description: "Every batch undergoes rigorous quality checks and lab testing for purity",
  },
  {
    icon: Sparkles,
    title: "Aromatic Excellence",
    description: "Rich, authentic aroma that enhances the flavor of every dish",
  },
  {
    icon: Users,
    title: "Trusted by Chefs",
    description: "The preferred choice of professional chefs and home cooks alike",
  },
  {
    icon: Award,
    title: "Legacy Since 1956",
    description: "Nearly 7 decades of trust, quality, and customer satisfaction",
  },
  {
    icon: CheckCircle,
    title: "FSSAI Certified",
    description: "Fully compliant with food safety standards and regulations",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose <span className="text-primary">SODAM</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uncompromising quality, authentic taste, and a legacy of trust
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index}
                className="group p-8 rounded-xl bg-card border border-border hover:border-primary hover:shadow-soft transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-block p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-all">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
