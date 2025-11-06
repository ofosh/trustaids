import { Heart, Facebook, Twitter, Instagram, Linkedin, X } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">TrustAid</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering communities through healing, peace, and sustainable
              growth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Our Programs
                </a>
              </li>
              <li>
                <a
                  href="#impact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Impact Stories
                </a>
              </li>
              <li>
                <a
                  href="#get-involved"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Get Involved
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold mb-4">Our Programs</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Trauma & Mental Health</li>
              <li className="text-muted-foreground">Peace Building</li>
              <li className="text-muted-foreground">Climate Action</li>
              <li className="text-muted-foreground">Livelihood Empowerment</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/share/1Pv2nnx2S4/?mibextid=qi2Omg"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} Trust Aid. All rights reserved. Built with love and
            hope.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
