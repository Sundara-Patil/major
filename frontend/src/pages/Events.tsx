import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Calendar } from "lucide-react";
import bgEvents from "@/assets/bg-events.jpg";

const events = [
  { title: "Career in Technology", date: "Feb 15, 2025", type: "Webinar" },
  { title: "NEET Preparation Strategy", date: "Feb 22, 2025", type: "Workshop" },
  { title: "Public Speaking Masterclass", date: "Mar 1, 2025", type: "Workshop" },
  { title: "JNV Awareness Camp - Bihar", date: "Mar 10, 2025", type: "Camp" },
];

export default function Events() {
  return (
    <Layout>
      {/* Hero with animated background */}
      <AnimatedBackground
        image={bgEvents}
        overlay="dark"
        animation="zoom"
        className="py-32 md:py-40"
      >
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-white">Upcoming Events</h1>
            <p className="text-lg text-white/90">Join our workshops, seminars, and awareness programs.</p>
          </div>
        </div>
      </AnimatedBackground>

      {/* Events List */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-2xl mx-auto space-y-4">
            {events.map((event) => (
              <Card key={event.title} className="bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardContent className="flex items-center justify-between p-4">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{event.title}</p>
                      <p className="text-sm text-muted-foreground">{event.date} • {event.type}</p>
                    </div>
                  </div>
                  <Button size="sm">Register</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
