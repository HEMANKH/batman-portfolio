import { Award, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const certificates = [
  {
    title: "Advanced Combat Training",
    issuer: "League of Shadows",
    date: "2023",
    description:
      "Master-level certification in advanced coding techniques and system architecture.",
    verified: true,
  },
  {
    title: "Forensic Technology Specialist",
    issuer: "Gotham Police Academy",
    date: "2023",
    description:
      "Expert-level certification in cybersecurity and digital forensics.",
    verified: true,
  },
  {
    title: "Wayne Enterprises Innovation Award",
    issuer: "Wayne Tech Division",
    date: "2022",
    description:
      "Recognition for outstanding contribution to enterprise technology solutions.",
    verified: true,
  },
  {
    title: "Cloud Architecture Excellence",
    issuer: "Tech Guild of Gotham",
    date: "2022",
    description:
      "Advanced certification in cloud infrastructure, microservices, and scalable systems.",
    verified: true,
  },
  {
    title: "AI & Machine Learning Mastery",
    issuer: "Bat-Computer Institute",
    date: "2021",
    description:
      "Comprehensive training in artificial intelligence, deep learning, and predictive algorithms.",
    verified: true,
  },
  {
    title: "Full-Stack Web Development Professional",
    issuer: "Gotham Tech Academy",
    date: "2021",
    description:
      "Expertise in modern web frameworks like React, Node.js, and Next.js.",
    verified: true,
  },
  {
    title: "Data Science & Analytics Certification",
    issuer: "Oracle of Delphi Data Labs",
    date: "2020",
    description:
      "Advanced proficiency in data analysis, visualization, and machine learning workflows.",
    verified: true,
  },
  {
    title: "Cyber Defense Specialist",
    issuer: "National Cybersecurity Directorate",
    date: "2020",
    description:
      "Certified in digital threat analysis, penetration testing, and ethical hacking practices.",
    verified: true,
  },
  {
    title: "Quantum Computing Fundamentals",
    issuer: "Wayne Research Institute",
    date: "2019",
    description:
      "Research-based certification exploring qubits, entanglement, and quantum algorithms.",
    verified: true,
  },
  {
    title: "Blockchain Architecture Expert",
    issuer: "Gotham FinTech Council",
    date: "2019",
    description:
      "Certified in distributed ledger design, smart contract development, and Web3 integration.",
    verified: true,
  },
  {
    title: "DevOps Automation Specialist",
    issuer: "Stark Industries Labs (Joint Program)",
    date: "2018",
    description:
      "Mastery in CI/CD pipelines, container orchestration, and automated cloud deployment.",
    verified: true,
  },
  {
    title: "Augmented Reality System Design",
    issuer: "Lucius Fox Innovation Center",
    date: "2018",
    description:
      "Cutting-edge AR/VR certification focusing on immersive interfaces and real-time 3D systems.",
    verified: true,
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
            <Card
              key={index}
              className="glass-card hologram-border hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all duration-300 animate-fade-in group"
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
                    <Badge variant="default" className="font-['Rajdhani'] gap-1">
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
          ))}
        </div>

        {/* Achievement Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card hologram-border p-8 text-center animate-float">
            <div className="text-5xl font-['Orbitron'] font-bold hologram-text mb-2">12+</div>
            <div className="font-['Rajdhani'] text-muted-foreground">Certifications</div>
          </div>
          <div
            className="glass-card hologram-border p-8 text-center animate-float"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="text-5xl font-['Orbitron'] font-bold text-primary mb-2">8</div>
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
