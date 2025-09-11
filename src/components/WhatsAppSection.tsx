import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Users, Settings, Shield, ExternalLink } from "lucide-react";

const WhatsAppSection = () => {
  const channels = [
    {
      title: "EXZ Community Group",
      description: "Join our main discussion group for community support and networking",
      icon: <Users className="h-6 w-6" />,
      url: "https://chat.whatsapp.com/DH4ruattqaMJnRBjtEnkZt?mode=ems_copy_t",
      gradient: "bg-gradient-primary",
      members: "15K+ Members"
    },
    {
      title: "First Channel",
      description: "Premium courses and exclusive educational content daily",
      icon: <MessageCircle className="h-6 w-6" />,
      url: "https://whatsapp.com/channel/0029VatiaDCJ93wMr7iDWK2n",
      gradient: "bg-gradient-secondary",
      members: "8K+ Subscribers"
    },
    {
      title: "Main EXZ Channel",
      description: "Latest updates, announcements, and premium resources",
      icon: <Settings className="h-6 w-6" />,
      url: "https://whatsapp.com/channel/0029VazrkAC7oQhlRJdkBH3e",
      gradient: "bg-gradient-primary",
      members: "12K+ Subscribers"
    },
    {
      title: "Hacking & Security",
      description: "Advanced cybersecurity courses and ethical hacking tutorials",
      icon: <Shield className="h-6 w-6" />,
      url: "https://whatsapp.com/channel/0029Vb6xgMm6GcGAqOboYu30",
      gradient: "bg-gradient-secondary",
      members: "5K+ Subscribers"
    }
  ];

  return (
    <section id="whatsapp" className="py-24 bg-gradient-subtle">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Join Our <span className="text-gradient-primary">Premium Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with thousands of learners, access exclusive content, and accelerate your growth 
            through our WhatsApp channels and community groups.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {channels.map((channel, index) => (
            <Card 
              key={index} 
              className="p-8 bg-gradient-card shadow-premium hover:shadow-glow transition-all duration-300 animate-slide-up border-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-xl ${channel.gradient} text-white shadow-lg`}>
                  {channel.icon}
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{channel.title}</h3>
                  <p className="text-muted-foreground mb-4">{channel.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-primary font-medium">{channel.members}</span>
                    <Button 
                      className={`${channel.gradient} shadow-md hover:shadow-lg transition-all`}
                      onClick={() => window.open(channel.url, '_blank', 'noopener,noreferrer')}
                    >
                      Join Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground mb-6">
            All channels are <span className="text-primary font-semibold">100% FREE</span> and packed with premium content
          </p>
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse delay-200"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse delay-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppSection;