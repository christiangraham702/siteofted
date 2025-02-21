import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Brain, Code2, Database, Home, LineChart, Palette, Rocket } from "lucide-react"

const projects = [
  {
    title: "CourseLynx",
    description: "Leading operations and growth strategy as COO, driving user acquisition and platform development.",
    icon: <Rocket className="h-6 w-6" />,
    tech: ["React", "Node.js", "PostgreSQL"],
    details:
      "As COO of CourseLynx, I've been instrumental in developing growth strategies and optimizing operations. Our platform continues to expand its user base while maintaining high engagement metrics.",
  },
  {
    title: "Jarvis (Smart Home AI)",
    description: "AI-powered home assistant integrating automation and computer vision.",
    icon: <Home className="h-6 w-6" />,
    tech: ["Python", "TensorFlow", "OpenCV"],
    details:
      "Jarvis combines cutting-edge AI with practical home automation, featuring computer vision for security and smart device integration for seamless control.",
  },
  {
    title: "Blockchain Research",
    description: "Exploring decentralized systems and their applications in modern technology.",
    icon: <Database className="h-6 w-6" />,
    tech: ["Solidity", "Web3.js", "Ethereum"],
    details:
      "Research focused on blockchain scalability solutions and practical applications in decentralized finance and governance.",
  },
  {
    title: "LangGraph & LangSmith",
    description: "Experiments in AI workflow orchestration and language model optimization.",
    icon: <Brain className="h-6 w-6" />,
    tech: ["Python", "LangChain", "OpenAI"],
    details:
      "Developing sophisticated AI workflows using LangGraph and LangSmith, focusing on practical applications and performance optimization.",
  },
  {
    title: "GIS Analysis",
    description: "Coastal and intercoastal research using geographic information systems.",
    icon: <LineChart className="h-6 w-6" />,
    tech: ["Google Earth Engine", "Python", "GIS"],
    details: "Analyzing coastal patterns and changes using advanced GIS tools and Earth Engine capabilities.",
  },
  {
    title: "Fantasy Anime Concepts",
    description: "Creative world-building and concept development for anime scenarios.",
    icon: <Palette className="h-6 w-6" />,
    tech: ["Worldbuilding", "Storytelling", "Design"],
    details:
      "Developing unique fantasy worlds and narratives, combining traditional storytelling with modern anime aesthetics.",
  },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">Projects & Portfolio</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <div className="mb-4">{project.icon}</div>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <div key={tech} className="rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground">
                    {tech}
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <Code2 className="mr-2 h-4 w-4" />
                    Read More
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                    <DialogDescription className="pt-4">{project.details}</DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

