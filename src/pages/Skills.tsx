import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    category: "Combat Systems",
    description: "Frontend Technologies",
    skills: ["React / Next.js", "TypeScript", "Tailwind CSS", "Vue.js"],
  },
  {
    category: "Tactical Operations",
    description: "Backend Technologies",
    skills: ["Node.js / Express", "Python / Django", "GraphQL", "PostgreSQL / MongoDB"],
  },
  {
    category: "Intelligence Gathering",
    description: "DevOps & Tools",
    skills: ["Docker / Kubernetes", "AWS / Azure", "CI/CD Pipelines", "Git / GitHub"],
  },
  {
    category: "Batcave Technology",
    description: "Specialized Skills",
    skills: [
      "AI / Machine Learning",
      "Cybersecurity",
      "System Architecture",
      "Performance Optimization",
    ],
  },
];

const tools = [
  "VS Code",
  "Figma",
  "Postman",
  "Jira",
  "Slack",
  "GitHub",
  "Docker",
  "Nginx",
  "Redis",
  "Webpack",
  "Vite",
  "Jest",
  "Cypress",
  "Terraform",
  "Ansible",
];

const Skills = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center animate-fade-in">
          <h1 className="text-6xl font-['Orbitron'] font-black mb-4">
            <span className="hologram-text">ARSENAL</span> &{" "}
            <span className="text-primary">CAPABILITIES</span>
          </h1>
          <p className="text-xl font-['Rajdhani'] text-muted-foreground max-w-2xl mx-auto">
            Every tool has its purpose. Every skill has been mastered.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, catIndex) => (
            <Card
              key={catIndex}
              className="glass-card hologram-border hover:shadow-[0_0_40px_hsl(var(--hologram-cyan)/0.4)] transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              <CardHeader>
                <CardTitle className="font-['Orbitron'] text-2xl hologram-text">
                  {category.category}
                </CardTitle>
                <p className="font-['Rajdhani'] text-sm text-muted-foreground">
                  {category.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="font-['Rajdhani'] text-sm px-4 py-2 
                        bg-primary/5 border-primary/40 text-primary 
                        hover:bg-primary/10 hover:border-primary 
                        transition-all cursor-pointer shadow-[0_0_10px_hsl(var(--primary)/0.3)]"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools Section */}
        <Card className="glass-card hologram-border animate-fade-in">
          <CardHeader>
            <CardTitle className="font-['Orbitron'] text-3xl text-center">
              <span className="text-primary">TOOLS</span> &{" "}
              <span className="hologram-text">EQUIPMENT</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {tools.map((tool, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="font-['Rajdhani'] text-sm px-4 py-2 
                    bg-primary/5 border-primary/40 text-primary 
                    hover:bg-primary/10 hover:border-primary 
                    transition-all cursor-pointer shadow-[0_0_10px_hsl(var(--primary)/0.3)]"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
