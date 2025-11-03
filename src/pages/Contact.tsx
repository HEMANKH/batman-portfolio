import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Received",
      description: "The Bat-Signal has been activated. I'll respond soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bruce@wayneenterprises.com",
      href: "mailto:bruce@wayneenterprises.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) BAT-CAVE",
      href: "tel:+15552282283",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Wayne Manor, Gotham City",
      href: "#",
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4 pb-32">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center animate-fade-in">
          <h1 className="text-6xl font-['Orbitron'] font-black mb-4">
            <span className="hologram-text">ACTIVATE</span> THE <span className="text-primary">BAT-SIGNAL</span>
          </h1>
          <p className="text-xl font-['Rajdhani'] text-muted-foreground max-w-2xl mx-auto">
            Gotham needs you. I need you. Let's create something legendary.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="glass-card hologram-border animate-fade-in">
            <CardHeader>
              <CardTitle className="font-['Orbitron'] text-2xl hologram-text">
                Send a Message
              </CardTitle>
              <CardDescription className="font-['Rajdhani']">
                Fill out the form below and I'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="font-['Rajdhani'] font-medium">Name</label>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="font-['Rajdhani']"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="font-['Rajdhani'] font-medium">Email</label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="font-['Rajdhani']"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="font-['Rajdhani'] font-medium">Message</label>
                  <Textarea
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="font-['Rajdhani'] resize-none"
                  />
                </div>

                <Button type="submit" className="w-full font-['Rajdhani'] font-semibold" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="glass-card hologram-border hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all duration-300 cursor-pointer group"
                  onClick={() => info.href !== "#" && window.open(info.href, '_self')}
                >
                  <CardContent className="flex items-center gap-4 p-6">
                    <div className="p-4 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-['Rajdhani'] text-sm text-muted-foreground">
                        {info.label}
                      </div>
                      <div className="font-['Orbitron'] font-semibold hologram-text">
                        {info.value}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}

            {/* Additional Info Card */}
            <Card className="glass-card hologram-border">
              <CardHeader>
                <CardTitle className="font-['Orbitron'] text-xl hologram-text">
                  Response Time
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="font-['Rajdhani'] text-muted-foreground">
                  I typically respond to messages within <span className="text-primary font-semibold">24 hours</span>.
                  For urgent matters, the Bat-Signal is always on.
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  <span className="font-['Rajdhani'] text-sm">Currently Available</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
