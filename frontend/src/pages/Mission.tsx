import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { GraduationCap, Compass, Users, ArrowRight, Lightbulb, Rocket, Star } from "lucide-react";
import bgMission from "@/assets/bg-events.jpg";
import { Link } from "react-router-dom";

export default function Mission() {
  return (
    <Layout>
      {/* ================= HERO SECTION ================= */}
      <AnimatedBackground
        image={bgMission}
        overlay="dark"
        animation="zoom"
        className="py-32 md:py-44"
      >
        <div className="container text-center">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white">
              Our Mission
            </h1>
            <p className="text-lg md:text-xl text-white/90">
              We bridge the gap between potential and opportunity through
              mentorship, structured guidance, and community-driven support
              across every stage of a student’s journey.
            </p>
          </div>
        </div>
      </AnimatedBackground>

      {/* ================= WHY WE EXIST ================= */}
      <section className="py-20 bg-muted/40">
        <div className="container max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-6">Why This Mission Matters</h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Across India, thousands of students graduate from Jawahar Navodaya
            Vidyalayas with remarkable talent, resilience, and determination.
            These students often come from rural and underserved communities,
            carrying big dreams and the potential to achieve extraordinary things.
            Yet many of them face a common challenge — limited exposure to diverse
            career opportunities, mentorship, and structured guidance when making
            critical academic and professional decisions.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Without access to the right information or role models, students can
            sometimes feel uncertain about which path to pursue after school or
            during their higher education journey. This gap between potential and
            opportunity can limit their ability to fully explore what they are
            capable of achieving.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            ElevateU was created to bridge this gap. By connecting students with
            experienced Navodaya alumni, educators, and professionals, we provide
            the guidance, exposure, and inspiration needed to make confident
            decisions about their future. Through mentorship programs, career
            awareness sessions, and collaborative initiatives, we transform
            uncertainty into clarity, curiosity into learning, and ambition
            into meaningful achievement.
          </p>
        </div>
      </section>

      {/* ================= CORE FOCUS AREAS ================= */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Focus Areas
          </h2>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 text-center">
                <GraduationCap className="mx-auto h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Academic Support
                </h3>
                <p className="text-muted-foreground mb-4">
                  Structured guidance for entrance exams, higher education
                  pathways, scholarships, and skill development programs.
                </p>
                <p className="text-sm text-primary font-medium">
                  Workshops • Exam Prep • Higher Education Guidance
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 text-center">
                <Compass className="mx-auto h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Career Direction
                </h3>
                <p className="text-muted-foreground mb-4">
                  Helping students explore career opportunities with clarity,
                  confidence, and real-world insights from professionals.
                </p>
                <p className="text-sm text-secondary font-medium">
                  Career Talks • Industry Exposure • Skill Mapping
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 text-center">
                <Users className="mx-auto h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Mentorship Network
                </h3>
                <p className="text-muted-foreground mb-4">
                  Connecting students with alumni, educators, and industry
                  experts who guide, motivate, and support them continuously.
                </p>
                <p className="text-sm text-accent font-medium">
                  1-on-1 Mentorship • Alumni Connect • Peer Support
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 text-center">
                <Lightbulb className="mx-auto h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Skill Development
                </h3>
                <p className="text-muted-foreground mb-4">
                  Encouraging students to develop essential life and
                  professional skills such as communication, leadership,
                  and problem-solving.
                </p>
                <p className="text-sm text-primary font-medium">
                  Soft Skills • Leadership • Communication
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 text-center">
                <Rocket className="mx-auto h-12 w-12 text-secondary mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Career Opportunities
                </h3>
                <p className="text-muted-foreground mb-4">
                  Providing exposure to emerging careers, internships,
                  and professional pathways through alumni and
                  industry experts.
                </p>
                <p className="text-sm text-secondary font-medium">
                  Internships • Career Exploration • Industry Insights
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-8 text-center">
                <Star className="mx-auto h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3">
                  Leadership Development
                </h3>
                <p className="text-muted-foreground mb-4">
                  Inspiring students to become confident leaders who
                  contribute to society and guide future generations
                  of Navodaya students.
                </p>
                <p className="text-sm text-accent font-medium">
                  Confidence Building • Responsibility • Community Impact
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* ================= OUR APPROACH ================= */}
      <section className="py-20 bg-muted/40">
        <div className="container max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            How We Make an Impact
          </h2>

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

            <div>
              <h3 className="text-xl font-semibold mb-3">
                🔍 Identify Student Needs
              </h3>
              <p className="text-muted-foreground">
                We assess the academic and career challenges faced by
                Navodaya students through surveys, feedback forms,
                and direct interaction to understand the kind of
                guidance and support they truly need.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                🤝 Connect With Alumni Mentors
              </h3>
              <p className="text-muted-foreground">
                Our network of Navodaya alumni provides real-world
                insights, career advice, and mentorship based on
                their professional journeys and personal experiences.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                🎓 Conduct Workshops & Sessions
              </h3>
              <p className="text-muted-foreground">
                We organize structured guidance sessions covering
                career exploration, competitive exams, higher
                education opportunities, and practical skills
                needed for future success.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                🌱 Provide Ongoing Support
              </h3>
              <p className="text-muted-foreground">
                Our mentorship continues beyond individual sessions.
                We stay connected with students to track their
                progress, answer questions, and encourage continuous
                learning and development.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                🚀 Build Skills & Career Awareness
              </h3>
              <p className="text-muted-foreground">
                Through discussions, resources, and exposure to
                different career paths, we help students develop
                essential skills and gain clarity about the
                opportunities available to them.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">
                🌟 Inspire Future Alumni Leaders
              </h3>
              <p className="text-muted-foreground">
                By empowering today’s students with mentorship and
                guidance, we aim to nurture future alumni leaders
                who will continue supporting and uplifting the next
                generation of Navodaya students.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 text-center">
        <div className="container max-w-6xl">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Be Part of the Change?
          </h2>

          <p className="text-lg text-muted-foreground mb-4">
            Every Navodaya student carries immense potential waiting to be
            discovered. With the right guidance, mentorship, and exposure,
            that potential can transform into meaningful careers, confident
            leadership, and impactful contributions to society.
          </p>

          <p className="text-lg text-muted-foreground mb-4">
            Our initiative brings together passionate alumni, educators,
            and professionals who believe in giving back to the Navodaya
            community. By sharing knowledge, experiences, and opportunities,
            we aim to create a supportive ecosystem where students can
            explore possibilities and make informed decisions about their
            future.
          </p>

          <p className="text-lg text-muted-foreground mb-8">
            Whether you are a student looking for clarity, an alumnus eager
            to mentor, or someone who believes in empowering young minds,
            your involvement can make a lasting difference. Together, we can
            build a stronger network that uplifts and inspires the next
            generation of Navodaya leaders.
          </p>

          <Link to="/volunteer">
            <Button size="lg" className="gap-2">
              Join the Movement <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}