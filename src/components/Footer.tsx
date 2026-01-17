const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-display text-3xl font-bold text-primary mb-2">SODAM</h3>
            <p className="text-background/80 mb-4 italic">સ્વાદ ને સોડમનો સંગમ</p>
            <p className="text-background/70 text-sm">
              Premium quality Hing (Asafoetida) since 1996
            </p>
            <div className="mt-4">
              <a 
                href="https://www.instagram.com/sodamhing/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-background/70 hover:text-primary transition-colors text-sm"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @sodamhing
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button 
                  type="button"
                  onClick={() => scrollToSection('about')} 
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => scrollToSection('products')} 
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Our Products
                </button>
              </li>
              <li>
                <button 
                  type="button"
                  onClick={() => scrollToSection('contact')} 
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-primary mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-background/70">
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
