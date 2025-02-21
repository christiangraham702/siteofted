import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="mb-8 text-4xl font-bold">About Me</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-2xl font-semibold">Personal Background</h2>
            <p className="text-muted-foreground">
              As a Mathematics major at the University of Florida, I&apos;ve developed a deep appreciation for
              problem-solving and analytical thinking. My academic journey has been complemented by my passion for
              blockchain technology and artificial intelligence, leading me to explore the intersection of mathematics,
              technology, and innovation.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-2xl font-semibold">Vision & Goals</h2>
            <p className="text-muted-foreground">
              My mission is clear: Building and investing in projects that push humanity forward. I believe in the power
              of decentralization and artificial intelligence to create meaningful change in how we live, work, and
              interact.
            </p>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardContent className="p-6">
            <h2 className="mb-4 text-2xl font-semibold">Fun Facts</h2>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>Avid reader of science fiction and philosophy</li>
              <li>Currently learning quantum computing fundamentals</li>
              <li>Passionate about exploring the convergence of AI and blockchain technology</li>
              <li>Enjoy conceptualizing and world-building for fantasy anime scenarios</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

