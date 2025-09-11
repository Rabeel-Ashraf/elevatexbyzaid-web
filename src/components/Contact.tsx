import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageCircle, Send, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24">
      <div className="container">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Get in <span className="text-gradient-primary">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about our community or want to explore partnership opportunities? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 bg-gradient-card shadow-premium border-0 animate-slide-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="John" 
                    required 
                    className="bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Doe" 
                    required 
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  required 
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  placeholder="How can we help you?" 
                  required 
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us more about your inquiry..." 
                  rows={5}
                  required 
                  className="bg-background/50"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-primary shadow-glow"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you're looking to join our community, explore business partnerships, 
                or have general inquiries, we're here to help you succeed.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-gradient-card shadow-md border-0">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <MessageCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">WhatsApp Community</h4>
                    <p className="text-muted-foreground text-sm">
                      Join our active community for instant support
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card shadow-md border-0">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-secondary rounded-lg">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email Support</h4>
                    <p className="text-muted-foreground text-sm">
                      support@elevatexbyzaid.com
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card shadow-md border-0">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-primary rounded-lg">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Business Inquiries</h4>
                    <p className="text-muted-foreground text-sm">
                      Available through WhatsApp channels
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-card shadow-md border-0">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-secondary rounded-lg">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Global Community</h4>
                    <p className="text-muted-foreground text-sm">
                      Serving learners worldwide
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="p-6 bg-gradient-primary rounded-2xl shadow-glow">
              <div className="text-white text-center">
                <h4 className="text-lg font-semibold mb-2">Response Time</h4>
                <p className="opacity-90 mb-4">
                  We typically respond within 24 hours during business days
                </p>
                <div className="flex justify-center space-x-4 text-sm">
                  <span>📧 Email: 24hrs</span>
                  <span>💬 WhatsApp: Instant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;