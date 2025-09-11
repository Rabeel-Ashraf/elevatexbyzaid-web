import { Card } from "@/components/ui/card";
import { 
  BookOpen, 
  Download, 
  Users, 
  Clock, 
  Award, 
  Headphones,
  Code,
  Globe,
  Smartphone
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Premium Courses",
      description: "Access to $1000+ worth of premium courses across technology, business, and personal development",
      gradient: "bg-gradient-primary"
    },
    {
      icon: <Download className="h-6 w-6" />,
      title: "Digital Resources",
      description: "Exclusive tools, software, templates, and resources shared daily by industry professionals",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Community",
      description: "Connect with seasoned professionals, mentors, and like-minded learners from around the world",
      gradient: "bg-gradient-primary"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Round-the-clock community support and guidance from experienced members and moderators",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Skill Certification",
      description: "Earn recognized certificates upon course completion and showcase your achievements",
      gradient: "bg-gradient-primary"
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Live Sessions",
      description: "Participate in exclusive live workshops, Q&A sessions, and masterclasses with experts",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Coding Bootcamps",
      description: "Intensive programming courses covering web development, mobile apps, and emerging technologies",
      gradient: "bg-gradient-primary"
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Global Network",
      description: "Build connections across continents with our international community of tech professionals",
      gradient: "bg-gradient-secondary"
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Learning",
      description: "Learn on-the-go with our mobile-optimized content and offline download capabilities",
      gradient: "bg-gradient-primary"
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-subtle">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-gradient-primary">EXZ</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the comprehensive features and benefits that make EXZ the premier destination 
            for professional growth and skill development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card shadow-premium hover:shadow-glow transition-all duration-300 animate-slide-up border-0 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="space-y-4">
                <div className={`inline-flex p-3 rounded-xl ${feature.gradient} shadow-lg group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <Card className="p-8 bg-gradient-primary shadow-glow border-0">
              <div className="text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Career?</h3>
                <p className="text-lg opacity-90 mb-6">
                  Join thousands of successful professionals who have accelerated their growth with EXZ
                </p>
                <div className="flex justify-center space-x-8 text-center">
                  <div>
                    <div className="text-3xl font-bold">25K+</div>
                    <div className="text-sm opacity-80">Happy Members</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">500+</div>
                    <div className="text-sm opacity-80">Premium Courses</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">98%</div>
                    <div className="text-sm opacity-80">Success Rate</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;