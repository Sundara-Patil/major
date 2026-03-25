import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import bgHero from "@/assets/bg-hero.jpg";

export function HeroSection() {
  return (
    <AnimatedBackground
      image={bgHero}
      // overlay="dark"
      animation="zoom"
      className="py-20 md:py-32"
    >
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-1.5 text-sm backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary"></span>
            </span>
            Volunteer-driven initiative for JNV students
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-balance">
             <span className="text-primary text-white/90">Empowering Navodaya Students at Every Step</span>
          </h1>

          <p className="mb-8 text-lg text-muted-foreground md:text-xl text-balance text-white/60">
            From entrance exam preparation to career success, we support JNV
            students through our community of dedicated volunteers and alumni.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button size="lg" asChild>
              <Link to="/volunteer">
                Join as Volunteer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </AnimatedBackground>
  );
}