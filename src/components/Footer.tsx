const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl font-bold text-primary mb-2">SODAM</h3>
            <p className="text-background/80 mb-4 italic">સ્વાદ ને સોડમનો સંગમ</p>
            <p className="text-background/70 text-sm">
              Premium quality Hing (Asafoetida) since 1956
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-background/70 hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="text-background/70 hover:text-primary transition-colors">
                  Our Products
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>M.M. SHAH & CO.</li>
              <li>Kalupur, Ahmedabad-1, Gujarat</li>
              <li>
                <a href="tel:+919825609527" className="hover:text-primary transition-colors">
                  +91 98256 09527
                </a>
              </li>
              <li>
                <a href="mailto:contactsodamhing@gmail.com" className="hover:text-primary transition-colors break-all">
                  contactsodamhing@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.sodamhing.com" className="hover:text-primary transition-colors">
                  www.sodamhing.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/20 text-center">
          <p className="text-background/60 text-sm">
            © {currentYear} M.M. SHAH & CO. All rights reserved. | FSSAI Certified
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
