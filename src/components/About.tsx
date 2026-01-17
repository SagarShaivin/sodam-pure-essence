import spicesImage from "@/assets/spices-collection.jpg";

const About = () => {
  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <img 
              src={spicesImage} 
              alt="Premium Indian Spices Collection" 
              className="rounded-2xl shadow-soft w-full h-auto object-cover"
            />
          </div>
          <div className="animate-fade-in">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Legacy</span>
            </h2>
            <div className="h-1 w-20 bg-primary mb-6"></div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              Since <strong className="text-foreground">1996</strong>, SODAM has been synonymous with purity, authenticity, and the rich heritage of Indian spices. Based in Ahmedabad, Gujarat, our premium Hing (Asafoetida) has been the secret ingredient in countless kitchens across India.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-4">
              At SODAM, we believe in delivering only the finest quality Hing – 100% authentic, free from artificial compounds, and crafted using traditional methods passed down through generations. Our commitment to purity means you get the real, unadulterated essence of asafoetida in every pinch.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Whether you're a home chef creating family favorites or a professional restaurateur crafting culinary masterpieces, SODAM Hing delivers the perfect balance of strength and flavor that elevates every dish.
            </p>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-display">28+</div>
                <div className="text-sm text-muted-foreground">Years of Trust</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-display">100%</div>
                <div className="text-sm text-muted-foreground">Natural & Pure</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary font-display">6</div>
                <div className="text-sm text-muted-foreground">Premium Ranges</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
