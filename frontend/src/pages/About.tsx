import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Target, Eye, Heart, Users } from "lucide-react";
import bgAbout from "@/assets/bg-about.jpg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <Layout>
      <AnimatedBackground
        image={bgAbout}
        overlay="dark"
        animation="zoom"
        className="py-32 md:py-40"
      >
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-white">About Us</h1>
            <p className="text-lg text-white/90">
              A volunteer-driven initiative empowering Navodaya students at every stage of their journey.
            </p>
          </div>
        </div>
      </AnimatedBackground>

      {/* Content Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">

            <Link to="/our-mission" className="block">
              <Card className="bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Target className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Our Mission</h3>
                  <p className="text-muted-foreground">To provide comprehensive support to JNV students through community-driven initiatives, from entrance exam preparation to career success.</p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/our-vision" className="block">
              <Card className="bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Eye className="h-10 w-10 text-secondary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Our Vision</h3>
                  <p className="text-muted-foreground">A future where every Navodaya student has access to guidance, mentorship, and opportunities to achieve their full potential.</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/our-values" className="block">
              <Card className="bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Heart className="h-10 w-10 text-accent mb-4" />
                  <h3 className="text-xl font-bold mb-2">Our Values</h3>
                  <p className="text-muted-foreground">Community, inclusivity, excellence, and the spirit of giving back. We believe in empowering others through education.</p>
                </CardContent>
              </Card>
            </Link>
            <Link to="/our-team" className="block">
              <Card className="bg-card/80 backdrop-blur-sm hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="pt-6">
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Our Team</h3>
                  <p className="text-muted-foreground">
                    A network of 500+ volunteers including JNV alumni, educators, and professionals dedicated to making a difference.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}