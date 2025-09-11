import { Card } from "@/components/ui/card";
import { Lightbulb, Target, Rocket, Heart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient-primary">Elevatexbyzaid (EXZ)</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Empowering the next generation of tech professionals through premium education and community support
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <Card className="p-8 bg-gradient-card shadow-premium border-0">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-primary rounded-lg">
                      <Lightbulb className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    At EXZ, we believe that quality education should be accessible to everyone. We're dedicated to 
                    breaking down barriers and providing premium learning resources that transform careers and lives.
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-secondary rounded-lg">
                      <Target className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    To create a global community of skilled professionals who support each other's growth and 
                    contribute to technological advancement across industries.
                  </p>
                </div>
              </Card>
            </div>

            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-primary rounded-xl shadow-lg">
                  <Rocket className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                  <p className="text-muted-foreground">
                    Every course and resource is carefully curated by industry experts to ensure 
                    maximum value and real-world applicability.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-secondary rounded-xl shadow-lg">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Community First</h3>
                  <p className="text-muted-foreground">
                    We foster a supportive environment where members help each other succeed, 
                    creating lasting professional relationships and friendships.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-gradient-subtle rounded-2xl border">
                <blockquote className="text-lg italic text-foreground/80">
                  "Education is the most powerful weapon you can use to change the world. 
                  At EXZ, we're putting that weapon in everyone's hands."
                </blockquote>
                <div className="mt-4 text-right">
                  <cite className="text-sm text-muted-foreground">— Zaid, Founder of EXZ</cite>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 text-primary">
              <span className="text-sm font-medium">Established 2024</span>
              <span className="w-1 h-1 bg-primary rounded-full"></span>
              <span className="text-sm font-medium">Trusted by 25K+ Learners</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;