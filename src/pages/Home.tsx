import batmanHero from "@/assets/bass.mp4";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";

const roles = [
  "AI Engineer",
  "Data Scientist",
  "Full-Stack Developer",
  "Machine Learning Engineer",
  "Problem Solver",
  "Tech Innovator"
];

const Home = () => {
  const [text, setText] = useState(roles[0]);
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = roles[index];

      if (!deleting && subIndex < fullText.length) {
        setSubIndex(subIndex + 1);
      } else if (deleting && subIndex > 0) {
        setSubIndex(subIndex - 1);
      } else if (!deleting && subIndex === fullText.length) {
        setDeleting(true);
      } else if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((index + 1) % roles.length);
      }

      setText(fullText.substring(0, subIndex));
    }, deleting ? 80 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, index, deleting]);

  return (
    <div className="min-h-screen relative overflow-hidden pb-32">
      {/* 🎥 Video Background */}
      <video
        src={batmanHero}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />

      {/* Optional glow or gradient overlays */}
      <div className="absolute top-[10%] right-[20%] w-64 h-64 animate-signal-pulse pointer-events-none">
        <div className="w-full h-full bg-secondary/30 rounded-full blur-[80px]" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center justify-start md:justify-center">
        <div className="max-w-4xl space-y-8 animate-fade-in">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-['Orbitron'] font-bold">
              <span className="text-white">Hi, I'm </span>
              <span className="hologram-text">Gadigatla Hemankh</span>
            </h2>

            {/* Typing Effect Role */}
            <p className="text-2xl md:text-3xl font-['Rajdhani'] font-bold text-primary h-10">
              {text}
              <span className="border-r-2 border-primary ml-1 animate-pulse"></span>
            </p>

            <div className="space-y-4 text-lg md:text-xl font-['Rajdhani'] text-muted-foreground max-w-3xl leading-relaxed">
              <p className="hologram-text">I'm passionate about turning data into insights...</p>
              <p>Crafting models that make a difference!</p>
              <p>Exploring data science to unlock hidden patterns.</p>
              <p>Building web apps that are both functional and fun! ✵</p>
              <p className="text-primary font-semibold">And I'm the Night coder</p>
              <p>Focused on delivering optimal solutions.</p>
            </div>
            <a href="/Hemankh_resume.pdf" download>
            <div className="pt-8">
              <Button
                size="lg"
                className="font-['Rajdhani'] font-semibold glass-card hologram-border hover:scale-105 transition-transform"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </div>
              </a>
          </div>
          {/*<a href="/siddardha_resume.pdf" download>
                  <Button
                    size="lg"
                    className="group bg-primary hover:bg-accent text-primary-foreground font-semibold px-8 py-6 text-lg rounded-lg shadow-lg hover:shadow-[0_0_30px_hsl(120_100%_50%/0.4)] transition-all duration-300"
                  >
                    <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                    Download Resume
                  </Button>
                </a>
              </div>

              {/* Right side - Additional visual space */}
              <div className="hidden lg:block" />
            </div>
          </div>
        </div>*/}

          {/* Floating Glow Effects */}
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse" />
          <div
            className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
