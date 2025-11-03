import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Watch Wave",
    description:
      "A sleek platform for discovering, reviewing, and tracking your favorite movies and TV shows.",
    tech: ["React", "TailwindCSS", "TMDB API", "Firebase"],
    status: "Active",
    demo: "https://watchwave-delta.vercel.app/home.html",
    github: "https://github.com/hemankh",
  },
  {
    title: "Movie List",
    description:
      "A simple yet powerful app for managing and sharing your personalized movie watchlist.",
    tech: ["Next.js", "TypeScript", "Supabase", "Vercel"],
    status: "Completed",
    demo: "https://movies-interface-pink.vercel.app/netflix.html",
    github: "https://github.com/hemankh",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-16 text-center animate-fade-in">
          <h1 className="text-6xl font-['Orbitron'] font-black mb-4">
            <span className="hologram-text">MISSION</span> ARCHIVES
          </h1>
          <p className="text-xl font-['Rajdhani'] text-muted-foreground max-w-2xl mx-auto">
            A collection of my cinematic and creative projects — crafted with precision and passion.
          </p>
        </div>

        {/* Projects Grid */}
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
                  <Badge
                    variant={project.status === "Active" ? "default" : "secondary"}
                    className="font-['Rajdhani']"
                  >
                    {project.status}
                  </Badge>
                </div>
                <CardDescription className="font-['Rajdhani'] text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="font-['Rajdhani'] text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <Button
                    asChild
                    variant="default"
                    size="sm"
                    className="font-['Rajdhani']"
                  >
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="font-['Rajdhani']"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
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
