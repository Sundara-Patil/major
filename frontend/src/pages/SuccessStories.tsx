import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import bgSuccess from "@/assets/bg-success.jpg";

const stories = [
  { name: "Rahul Kumar", role: "IIT Delhi → Google", batch: "JNV Varanasi 2014", story: "From a small village to software engineer at Google. JNV gave me the foundation, and this community gave me the wings to fly." },
  { name: "Priya Sharma", role: "AIIMS Doctor", batch: "JNV Jaipur 2012", story: "First doctor from her village, now serving at AIIMS. The guidance from senior Navodayans helped me crack NEET." },
  { name: "Amit Patel", role: "IAS Officer", batch: "JNV Ahmedabad 2010", story: "Cleared UPSC in first attempt, now a District Collector. The discipline and values I learned at JNV shaped my success." },
];

export default function SuccessStories() {
  return (
    <Layout>
      {/* Hero with animated background */}
      <AnimatedBackground
        image={bgSuccess}
        overlay="dark"
        animation="zoom"
        className="py-16 md:py-24"
      >
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-white">Success Stories</h1>
            <p className="text-lg text-white/90">Inspiring journeys of JNV alumni who are making a difference.</p>
          </div>
        </div>
      </AnimatedBackground>

      {/* Stories Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {stories.map((s) => (
              <Card key={s.name} className="bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all hover:-translate-y-1">
                <CardContent className="pt-6 text-center">
                  <Avatar className="h-16 w-16 mx-auto mb-4">
                    <AvatarFallback className="bg-primary text-primary-foreground text-lg">
                      {s.name.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <p className="text-sm text-primary font-medium">{s.role}</p>
                  <p className="text-xs text-muted-foreground mb-3">{s.batch}</p>
                  <p className="text-sm text-muted-foreground">{s.story}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}