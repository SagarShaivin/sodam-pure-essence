import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Instagram, MessageCircle } from "lucide-react";

const Contact = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/919825609527?text=Hello, I would like to know more about SODAM Hing products', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:contactsodamhing@gmail.com?subject=Inquiry about SODAM Hing';
  };

  return (
    <section className="py-20 bg-muted/30" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Reach out for bulk orders, distribution inquiries, or any questions about our products
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Information Card */}
          <Card className="animate-slide-up border-border/50">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Contact Information</CardTitle>
              <CardDescription>We're here to help with your queries</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Phone</p>
                  <a href="tel:+919825609527" className="text-muted-foreground hover:text-primary transition-colors">
                    +91 98256 09527
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Email</p>
                  <a href="mailto:contactsodamhing@gmail.com" className="text-muted-foreground hover:text-primary transition-colors break-all">
                    contactsodamhing@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-1">Address</p>
                  <p className="text-muted-foreground">
                    OPP. SWAMINARAYAN MANDIR,<br />
                    KALUPUR, AHMEDABAD-1,<br />
                    GUJARAT (A)
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="font-semibold text-foreground mb-3">Follow Us</p>
                <div className="flex gap-3">
                  <Button 
                    size="icon" 
                    variant="outline"
                    className="hover:bg-primary hover:text-foreground hover:border-primary transition-all"
                    onClick={() => window.open('#', '_blank')}
                  >
                    <Instagram className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Action Card */}
          <Card className="animate-slide-up border-border/50" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="font-heading text-2xl">Quick Actions</CardTitle>
              <CardDescription>Choose the best way to reach us</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button 
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white py-6 text-lg shadow-soft"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat on WhatsApp
              </Button>

              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-foreground py-6 text-lg shadow-soft"
                onClick={handleEmail}
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>

              <div className="pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-3">
                  <strong className="text-foreground">Business Hours:</strong>
                </p>
                <p className="text-sm text-muted-foreground">
                  Monday - Saturday: 9:00 AM - 7:00 PM<br />
                  Sunday: Closed
                </p>
              </div>

              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">For Bulk Orders:</strong><br />
                  Restaurants, distributors, and retailers - contact us for special pricing and terms.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
