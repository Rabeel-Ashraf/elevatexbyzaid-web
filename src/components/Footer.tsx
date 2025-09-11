import { Button } from "@/components/ui/button";
import { MessageCircle, Mail, Globe, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-subtle border-t">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-primary">
                <span className="text-sm font-bold text-white">EXZ</span>
              </div>
              <span className="text-xl font-bold">Elevatexbyzaid</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Empowering the next generation of tech professionals through premium education, 
              exclusive resources, and a supportive global community.
            </p>
            <div className="flex space-x-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="border-primary/20 hover:bg-primary/5"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-primary/20 hover:bg-primary/5"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#whatsapp" className="text-muted-foreground hover:text-foreground transition-colors">
                  WhatsApp Groups
                </a>
              </li>
              <li>
                <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-muted-foreground">Premium Courses</span>
              </li>
              <li>
                <span className="text-muted-foreground">Digital Tools</span>
              </li>
              <li>
                <span className="text-muted-foreground">Expert Support</span>
              </li>
              <li>
                <span className="text-muted-foreground">Certifications</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8 border-t border-b border-border/50">
          <div className="text-center">
            <div className="text-2xl font-bold text-gradient-primary">25K+</div>
            <div className="text-sm text-muted-foreground">Community Members</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gradient-primary">500+</div>
            <div className="text-sm text-muted-foreground">Premium Courses</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gradient-primary">50+</div>
            <div className="text-sm text-muted-foreground">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gradient-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Expert Support</div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
            <span>© {currentYear} Elevatexbyzaid (EXZ) | All Rights Reserved.</span>
          </div>
          
          <div className="flex items-center space-x-2 text-muted-foreground text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>for the tech community</span>
            <Globe className="h-4 w-4 text-primary" />
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center pt-8">
          <div className="inline-flex items-center space-x-2 bg-gradient-primary/10 rounded-full px-4 py-2 text-primary">
            <span className="text-sm font-medium">🚀 Ready to elevate your skills?</span>
            <Button 
              size="sm" 
              className="bg-gradient-primary shadow-md ml-2"
              onClick={() => document.getElementById('whatsapp')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;