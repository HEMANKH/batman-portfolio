import { Download, Briefcase, GraduationCap, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const experience = [
  {
    role: "Senior Full Stack Developer",
    company: "Wayne Enterprises",
    period: "2021 - Present",
    description: "Leading development of enterprise-scale applications and mentoring junior developers in modern web technologies.",
  },
  {
    role: "Lead Frontend Developer",
    company: "Gotham Tech Solutions",
    period: "2019 - 2021",
    description: "Architected and implemented responsive web applications serving 1M+ users with 99.9% uptime.",
  },
  {
    role: "Full Stack Developer",
    company: "Arkham Digital",
    period: "2017 - 2019",
    description: "Developed scalable microservices and RESTful APIs, reducing server costs by 40%.",
  },
];

const education = [
  {
    degree: "Master of Computer Science",
    institution: "Gotham University",
    period: "2015 - 2017",
  },
  {
    degree: "Bachelor of Software Engineering",
    institution: "Wayne Tech Institute",
    period: "2011 - 2015",
  },
];

const Resume = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 text-center animate-fade-in">
          <h1 className="text-6xl font-['Orbitron'] font-black mb-4">
            <span className="text-primary">MISSION</span> <span className="hologram-text">PROFILE</span>
          </h1>
          <p className="text-xl font-['Rajdhani'] text-muted-foreground max-w-2xl mx-auto mb-8">
            A comprehensive overview of my journey from apprentice to master.
          </p>
          <Button size="lg" className="font-['Rajdhani'] font-semibold">
            <Download className="w-5 h-5 mr-2" />
            Download Full Resume
          </Button>
        </div>

        <div className="space-y-12">
          {/* Experience Section */}
          <Card className="glass-card hologram-border animate-fade-in">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-['Orbitron'] text-3xl hologram-text">
                  Experience
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-8">
              {experience.map((exp, index) => (
                <div key={index}>
                  {index > 0 && <Separator className="mb-8" />}
                  <div className="space-y-2">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <h3 className="font-['Orbitron'] text-xl hologram-text">
                        {exp.role}
                      </h3>
                      <span className="font-['Rajdhani'] text-sm text-muted-foreground">
                        {exp.period}
                      </span>
                    </div>
                    <p className="font-['Rajdhani'] text-primary font-semibold">
                      {exp.company}
                    </p>
                    <p className="font-['Rajdhani'] text-muted-foreground">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Education Section */}
          <Card className="glass-card hologram-border animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <GraduationCap className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="font-['Orbitron'] text-3xl hologram-text">
                  Education
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {education.map((edu, index) => (
                <div key={index}>
                  {index > 0 && <Separator className="mb-6" />}
                  <div className="space-y-2">
                    <div className="flex items-start justify-between flex-wrap gap-2">
                      <h3 className="font-['Orbitron'] text-xl hologram-text">
                        {edu.degree}
                      </h3>
                      <span className="font-['Rajdhani'] text-sm text-muted-foreground">
                        {edu.period}
                      </span>
                    </div>
                    <p className="font-['Rajdhani'] text-secondary font-semibold">
                      {edu.institution}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Key Achievements */}
          <Card className="glass-card hologram-border animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-['Orbitron'] text-3xl hologram-text">
                  Key Achievements
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3 font-['Rajdhani'] text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Led team of 8 developers to deliver $2M project 2 weeks ahead of schedule</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Reduced application load time by 60% through optimization techniques</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Implemented CI/CD pipeline reducing deployment time from 2 hours to 15 minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Mentored 15+ junior developers through code reviews and pair programming</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Published 3 technical articles reaching 50K+ developers worldwide</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resume;
