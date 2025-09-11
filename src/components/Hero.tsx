import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Award, Zap } from "lucide-react";
import heroBackground from "@/assets/exz-hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle"></div>
      <div 
        className="absolute inset-0 opacity-10 bg-center bg-cover"
        style={{ backgroundImage: `url(${heroBackground})` }}
      ></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 blur-xl animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 rounded-full bg-secondary/20 blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-primary/30 blur-lg animate-pulse delay-500"></div>

      <div className="container relative z-10 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20 animate-scale-in">
              🚀 Welcome to the Future of Learning
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Elevate Your Skills with{" "}
            <span className="text-gradient-primary">EXZ</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of learners in our premium tech community. Access exclusive courses, 
            cutting-edge tools, and professional support that transforms careers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-primary shadow-glow text-lg px-8 py-6 h-auto"
              onClick={() => document.getElementById('whatsapp')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Join Our Community
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 h-auto border-primary/20 hover:bg-primary/5"
            >
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto animate-slide-up">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-gradient-primary">25K+</div>
              <div className="text-sm text-muted-foreground">Active Members</div>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-gradient-primary">500+</div>
              <div className="text-sm text-muted-foreground">Premium Courses</div>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-gradient-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;