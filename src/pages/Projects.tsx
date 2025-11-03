import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Bat-Signal Alert System",
    description: "Real-time notification system for critical alerts with custom webhook integrations",
    tech: ["React", "Node.js", "WebSocket", "MongoDB"],
    status: "Active",
  },
  {
    title: "Gotham Crime Analytics",
    description: "Advanced data visualization platform for crime pattern analysis and prediction",
    tech: ["Python", "D3.js", "TensorFlow", "PostgreSQL"],
    status: "Completed",
  },
  {
    title: "Wayne Enterprises Dashboard",
    description: "Enterprise resource planning system with real-time financial tracking",
    tech: ["Vue.js", "Express", "Redis", "Docker"],
    status: "Active",
  },
  {
    title: "Batcave Security System",
    description: "Multi-layer authentication and surveillance monitoring platform",
    tech: ["TypeScript", "NestJS", "GraphQL", "Kubernetes"],
    status: "Active",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center animate-fade-in">
          <h1 className="text-6xl font-['Orbitron'] font-black mb-4">
            <span className="hologram-text">MISSION</span> ARCHIVES
          </h1>
          <p className="text-xl font-['Rajdhani'] text-muted-foreground max-w-2xl mx-auto">
            Every mission is documented. Every villain defeated. Every challenge conquered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="glass-card hologram-border hover:shadow-[0_0_40px_hsl(var(--hologram-cyan)/0.4)] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="font-['Orbitron'] text-2xl hologram-text">
                    {project.title}
                  </CardTitle>
                  <Badge variant={project.status === "Active" ? "default" : "secondary"} className="font-['Rajdhani']">
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="font-['Rajdhani'] text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="font-['Rajdhani'] text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="default" size="sm" className="font-['Rajdhani']">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                  <Button variant="outline" size="sm" className="font-['Rajdhani']">
                    <Github className="w-4 h-4 mr-2" />
                    Source
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
