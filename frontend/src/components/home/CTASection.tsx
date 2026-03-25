import { Link } from "react-router-dom";
import { ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="container">
        <div className="mx-auto max-w-3xl text-center">

          {/* Tag */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm text-primary">
            <Heart className="h-4 w-4 text-accent" />
            Be part of the change
          </div>

          <h2 className="mb-6 text-3xl font-bold tracking-tight text-primary md:text-4xl lg:text-5xl">
            Ready to Make a Difference?
          </h2>

          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            Whether you're a JNV alumni wanting to give back, or someone
            passionate about education, join our community of volunteers and help
            shape the future of Navodaya students.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">

            {/* Primary CTA */}
            <Button
              size="lg"
              className="bg-accent text-primary hover:bg-yellow-400 font-semibold"
              asChild
            >
              <Link to="/volunteer">
                Become a Volunteer
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            {/* Secondary CTA */}
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-white"
              asChild
            >
              <Link to="/contact">Contact Us</Link>
            </Button>

          </div>

        </div>
      </div>
    </section>
  );
}
