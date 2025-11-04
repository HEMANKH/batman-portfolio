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
  "Tech Innovator",
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
      {/* 🎥 Visible Video Background */}
      <video
        src={batmanHero}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Optional light overlay for readability */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center justify-start md:justify-center">
        <div className="max-w-4xl space-y-8 animate-fade-in">
          <div className="space-y-6">
            {/* ✨ Heading with outline + shadow */}
            <h2 className="text-4xl md:text-5xl font-['Orbitron'] font-bold text-white drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] [text-stroke:1px_black]">
              Hi, I'm{" "}
              <span className="text-primary [text-stroke:1px_white] drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
                Gadigatla Hemankh
              </span>
            </h2>

            {/* Typing Effect Role */}
            <p className="text-2xl md:text-3xl font-['Rajdhani'] font-bold text-primary h-10 [text-stroke:1px_black] drop-shadow-[0_2px_4px_rgba(0,0,0,1)]">
              {text}
              <span className="border-r-2 border-primary ml-1 animate-pulse"></span>
            </p>

            {/* Intro Text */}
            <div className="space-y-4 text-lg md:text-xl font-['Rajdhani'] text-white max-w-3xl leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)] [text-stroke:0.5px_black]">
              <p>I'm passionate about turning data into insights...</p>
              <p>Crafting models that make a difference!</p>
              <p>Exploring data science to unlock hidden patterns.</p>
              <p>Building web apps that are both functional and fun! ✵</p>
              <p className="text-primary font-semibold [text-stroke:0.5px_black]">
                And I'm the Night coder
              </p>
              <p>Focused on delivering optimal solutions.</p>
            </div>

            {/* Resume Download Button */}
            <div className="pt-8">
              <a href="/Hemankh_resume.pdf" download>
                <Button
                  size="lg"
                  className="font-['Rajdhani'] font-semibold glass-card hover:scale-105 transition-transform"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
