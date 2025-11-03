import batmanHero from "@/assets/batman-signal-right.jpg";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden pb-32">
      {/* Batman Background with Bat-Signal from bottom right */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{ backgroundImage: `url(${batmanHero})` }}
      />
      
      {/* Bat-Signal pulsing on/off in the sky - top right */}
      <div className="absolute top-[10%] right-[20%] w-64 h-64 animate-signal-pulse pointer-events-none">
        <div className="w-full h-full bg-secondary/30 rounded-full blur-[80px]" />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center justify-start md:justify-center">
        <div className="max-w-4xl space-y-8 animate-fade-in">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-['Orbitron'] font-bold">
              <span className="text-white">Hi, I'm </span>
              <span className="hologram-text">Gadigatla Hemankh</span>
            </h2>
            
            <p className="text-2xl md:text-3xl font-['Rajdhani'] font-bold text-primary">
              AI Engineer
            </p>

            <div className="space-y-4 text-lg md:text-xl font-['Rajdhani'] text-muted-foreground max-w-3xl leading-relaxed">
              <p className="hologram-text">I'm passionate about turning data into insights...</p>
              <p>Crafting models that make a difference!</p>
              <p>Exploring data science to unlock hidden patterns.</p>
              <p>Building web apps that are both functional and fun! ✵</p>
              <p className="text-primary font-semibold">And I'm the universal coder</p>
              <p>Focused on delivering optimal solutions.</p>
            </div>

            <div className="pt-8">
              <Button 
                size="lg" 
                className="font-['Rajdhani'] font-semibold glass-card hologram-border hover:scale-105 transition-transform"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Decorative glow effects */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </div>
  );
};

export default Home;
