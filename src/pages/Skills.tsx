import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const skillCategories = [
  {
    category: "Combat Systems",
    description: "Frontend Technologies",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 95 },
      { name: "Vue.js", level: 85 },
    ],
  },
  {
    category: "Tactical Operations",
    description: "Backend Technologies",
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "Python / Django", level: 85 },
      { name: "GraphQL", level: 88 },
      { name: "PostgreSQL / MongoDB", level: 92 },
    ],
  },
  {
    category: "Intelligence Gathering",
    description: "DevOps & Tools",
    skills: [
      { name: "Docker / Kubernetes", level: 87 },
      { name: "AWS / Azure", level: 85 },
      { name: "CI/CD Pipelines", level: 90 },
      { name: "Git / GitHub", level: 95 },
    ],
  },
  {
    category: "Batcave Technology",
    description: "Specialized Skills",
    skills: [
      { name: "AI / Machine Learning", level: 82 },
      { name: "Cybersecurity", level: 88 },
      { name: "System Architecture", level: 90 },
      { name: "Performance Optimization", level: 93 },
    ],
  },
];

const tools = [
  "VS Code", "Figma", "Postman", "Jira", "Slack", "GitHub", "Docker", "Nginx",
  "Redis", "Webpack", "Vite", "Jest", "Cypress", "Terraform", "Ansible"
];

const Skills = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center animate-fade-in">
          <h1 className="text-6xl font-['Orbitron'] font-black mb-4">
            <span className="hologram-text">ARSENAL</span> & <span className="text-primary">CAPABILITIES</span>
          </h1>
          <p className="text-xl font-['Rajdhani'] text-muted-foreground max-w-2xl mx-auto">
            Every tool has its purpose. Every skill has been mastered.
          </p>
        </div>

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
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-['Rajdhani'] font-medium">{skill.name}</span>
                      <span className="text-sm font-['Orbitron'] font-bold hologram-text">
                        {skill.level}%
                      </span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Equipment */}
        <Card className="glass-card hologram-border animate-fade-in">
          <CardHeader>
            <CardTitle className="font-['Orbitron'] text-3xl text-center">
              <span className="text-primary">TOOLS</span> & <span className="hologram-text">EQUIPMENT</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 justify-center">
              {tools.map((tool, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="font-['Rajdhani'] text-sm px-4 py-2 hover:bg-primary/10 hover:border-primary transition-all cursor-pointer"
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
