import { Link } from "react-router-dom";
import { BookOpen, GraduationCap, Rocket, ArrowRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { cn } from "@/lib/utils";
import bgBeforeJnv from "@/assets/bg-before-jnv.jpg";
import bgDuringJnv from "@/assets/bg-during-jnv.jpg";
import bgAfterJnv from "@/assets/bg-after-jnv.jpg";

const phases = [
  {
    title: "Saṅkalpa",
    description:
      "For students preparing for JNVST exam. Get study materials, application help, and coaching.",
    icon: BookOpen,
    href: "/before-jnv",
    features: ["Awareness Programs", "Study Materials", "Application Help", "Coaching Info"],
    bgImage: bgBeforeJnv,
  },
  {
    title: "Pravřtti",
    description:
      "For current JNV students. Access career guidance, skill development resources, and connect with mentors.",
    icon: GraduationCap,
    href: "/during-jnv",
    features: ["Career Guidance", "Skill Development", "Seminars", "Mentorship"],
    bgImage: bgDuringJnv,
  },
  {
    title: "Utkarsh",
    description:
      "For JNV alumni. Get higher education guidance, job opportunities, and give back to the community.",
    icon: Rocket,
    href: "/after-jnv",
    features: ["Higher Education", "Jobs & Internships", "Alumni Network", "Give Back"],
    bgImage: bgAfterJnv,
  },
];

export function PhasesSection() {
  return (
    <section className="bg-primary/5 py-20 md:py-28">
      <div className="container">

        {/* Section Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Support at Every Stage
          </h2>

          <p className="text-lg text-muted-foreground">
            The journey of a Navodaya student is filled with opportunities,
            learning experiences, and important life decisions. Our platform
            provides guidance and support at every phase — from preparing for
            the entrance exam, to developing skills during school, and finally
            helping alumni explore higher education, careers, and opportunities
            to give back to the community.
          </p>
        </div>

        {/* Phase Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {phases.map((phase, index) => (
            <AnimatedBackground
              key={phase.title}
              image={phase.bgImage}
              animation="zoom"
              className="rounded-xl"
            >
              <Card
                className={cn(
                  "group relative overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 bg-transparent border-0"
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>

                  {/* Icon */}
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/90 text-primary">
                    <phase.icon className="h-6 w-6" />
                  </div>

                  <CardTitle className="text-xl text-white">
                    {phase.title}
                  </CardTitle>

                  <CardDescription className="text-base text-white/90">
                    {phase.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="mb-6 space-y-2">
                    {phase.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-white/90"
                      >
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    className="w-full bg-accent text-primary hover:bg-yellow-400"
                    asChild
                  >
                    <Link to={phase.href}>
                      Explore
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </AnimatedBackground>
          ))}
        </div>
      </div>
    </section>
  );
}