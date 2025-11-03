import { Award, CheckCircle2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// 🔗 Add file paths for each certificate (PDFs in /public/certificates)
const certificates = [
  {
    title: "AI Advance",
    issuer: "Hexart.in",
    date: "2024",
    verified: true,
    file: "/AI_Advance-G.Hemankh.pdf",
  },
  {
    title: "AI Foundation",
    issuer: "Hexart.in",
    date: "2024",
    verified: true,
    file: "/AI_Foundation-G.Hemankh.pdf",
  },
  {
    title: "ChatGPT/Generative AI",
    issuer: "International Institute of Digital Technologies",
    date: "2024",
   
    file: "/CHAT-GPT.pdf",
  },
  {
    title: "ML-CONNECT",
    issuer: "SAGI RAMA KRISHNAM RAJU ENGINEERING COLLEGE",
    date: "2023",
   
    verified: true,
    file: "/G.HEMANKH (1).pdf",
  },
  {
    title: " Java Full Stack Development",
    issuer: "BlackBucks",
    date: "2024",
   
    verified: true,
    file: "/Gadigatla Hemankh.pdf",
  },
  {
    title: "GROWTHXPO",
    issuer: "SAGI RAMA KRISHNAM RAJU ENGINEERING COLLEGE",
    date: "2023",
    
    verified: true,
    file: "/GROWTHXPO.pdf",
  },
  {
    title: "Python",
    issuer: "Kaggle",
    date: "2024",
   
    verified: true,
    file: "/kagele1.pdf",
  },
  {
    title: "Intro to Programming",
    issuer: "Kaggle",
    date: "2024",
    verified: true,
    file: "/kagele3pdf",
  },
  {
    title: "intro to Machine learning",
    issuer: "Kaggle",
    date: "2024",
    
    verified: true,
    file: "/kagele2.pdf",
  },
];

const Certificates = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center animate-fade-in">
          <h1 className="text-6xl font-['Orbitron'] font-black mb-4">
            <span className="text-primary">CREDENTIALS</span> &{" "}
            <span className="hologram-text">HONORS</span>
          </h1>
          <p className="text-xl font-['Rajdhani'] text-muted-foreground max-w-2xl mx-auto">
            Trained by the best. Certified by the elite. Recognized worldwide.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card
                className="glass-card hologram-border hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all duration-300 animate-fade-in group hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Award className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="font-['Orbitron'] text-xl hologram-text mb-2">
                          {cert.title}
                        </CardTitle>
                        <CardDescription className="font-['Rajdhani'] text-sm">
                          {cert.issuer} • {cert.date}
                        </CardDescription>
                      </div>
                    </div>
                    {cert.verified && (
                      <Badge
                        variant="default"
                        className="font-['Rajdhani'] gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="font-['Rajdhani'] text-muted-foreground">
                    {cert.description}
                  </p>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card hologram-border p-8 text-center animate-float">
            <div className="text-5xl font-['Orbitron'] font-bold hologram-text mb-2">9</div>
            <div className="font-['Rajdhani'] text-muted-foreground">Certificates</div>
          </div>
          <div
            className="glass-card hologram-border p-8 text-center animate-float"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-5xl font-['Orbitron'] font-bold text-primary mb-2">5</div>
            <div className="font-['Rajdhani'] text-muted-foreground">Awards</div>
          </div>
          <div
            className="glass-card hologram-border p-8 text-center animate-float"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-5xl font-['Orbitron'] font-bold hologram-text mb-2">100%</div>
            <div className="font-['Rajdhani'] text-muted-foreground">Verified</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
