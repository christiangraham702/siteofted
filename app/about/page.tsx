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
            I’m a student at UF who loves coding and thinks AI is borderline magic. Numbers and math have been my thing for as long as I can remember, and I spend an unreasonable amount of time spiraling into thoughts about the future—sometimes about technology, sometimes about whether we’re all living in a simulation.

At some point, I accidentally became obsessed with blockchain and decentralization, and now I can’t stop thinking about how to build a future where middlemen go extinct, systems are trustless, and people actually own their data.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="mb-4 text-2xl font-semibold">Vision & Goals</h2>
            <p className="text-muted-foreground">
            My mission? Simple. Build cool things, make people's lives better, and leave a legacy that's not just another failed startup. I firmly believe in the power of decentralization, AI, and hope to use them to make the coolest future possible. If it doesn’t push humanity forward, I’m probably not interested—unless it involves golf, I like golf.
            </p>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardContent className="p-6">
            <h2 className="mb-4 text-2xl font-semibold">Fun Facts</h2>
            <ul className="list-inside list-disc space-y-2 text-muted-foreground">
              <li>Big golf guy, disc golf and golf-golf.</li>
              <li>Big crypto guy, rough times right now.</li>
              <li>Optimistic about the future.</li>
              <li>Not a big central bank guy.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

