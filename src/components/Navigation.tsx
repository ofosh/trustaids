import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#programs", label: "Programs" },
    { href: "#impact", label: "Impact" },
    { href: "#get-involved", label: "Get Involved" },
    { href: "#contact", label: "Contact" }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
              <Heart className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">TrustAid</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <Button 
              className="gradient-primary hover:shadow-hover transition-smooth rounded-full"
              onClick={() => document.getElementById('get-involved')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Donate Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-primary/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium px-4 py-2"
                >
                  {link.label}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button 
                  className="w-full gradient-primary hover:shadow-hover transition-smooth rounded-full"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    document.getElementById('get-involved')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Donate Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
