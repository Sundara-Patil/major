import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Button } from "@/components/ui/button";
import bgVision from "@/assets/bg-events.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Vision() {
  return (
    <Layout>
      {/* ================= HERO SECTION ================= */}
      <AnimatedBackground
        image={bgVision}
        overlay="dark"
        animation="zoom"
        className="py-32 md:py-44"
      >
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white">
              Our Vision
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              To build a future where every Navodaya student has access to
              mentorship, clarity, and opportunity — empowering them to lead,
              innovate, and uplift communities across India.
            </p>
          </div>
        </div>
      </AnimatedBackground>

      {/* ================= WHY VISION MATTERS ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Why This Vision Matters
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            Navodaya students are known for their curiosity, resilience, and
            determination. Across the country, thousands of talented students
            graduate from Jawahar Navodaya Vidyalayas every year with the
            potential to achieve remarkable things in academics, leadership,
            innovation, and public service.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            However, many students still face a common challenge — limited
            exposure to diverse career opportunities, lack of structured
            mentorship, and uncertainty about the paths available after
            school or during their higher education journey.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Our vision is to bridge this gap by creating a supportive ecosystem
            where experienced Navodaya alumni guide and inspire current
            students. Through mentorship, career awareness sessions, and
            collaborative learning platforms, we aim to ensure that every
            Navodaya student has access to the guidance, confidence, and
            opportunities needed to unlock their full potential — regardless
            of their background, location, or circumstances.
          </p>
        </div>
      </section>

      {/* ================= VISION PILLARS ================= */}

      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Vision in Action
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            <Card className="shadow-md hover:shadow-xl transition duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  🎯 Career Clarity for Every Student
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Structured exposure to diverse career opportunities,
                  competitive exams, higher education pathways, and skill
                  development programs.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-xl transition duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  🤝 Strong Alumni–Student Engagement
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Building a vibrant network where alumni actively mentor,
                  guide, and inspire students through real-world experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-xl transition duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  💡 Real-World Career Insights
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Helping students understand real career journeys through
                  alumni experiences, industry insights, and practical
                  guidance on making informed career choices.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-xl transition duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  🚀 Empowered Youth Leaders
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Nurturing confident, socially responsible leaders who
                  contribute meaningfully to society and inspire future
                  generations.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-xl transition duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  📚 Higher Education & Competitive Exam Guidance
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Providing insights on entrance exams, scholarships,
                  university admissions, and preparation strategies to
                  help students pursue higher education confidently.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-xl transition duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  🧠 Skill Development & Industry Readiness
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Encouraging students to develop practical skills,
                  communication abilities, and professional awareness
                  required to thrive in modern careers.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* ================= ROADMAP SECTION ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Long-Term Roadmap
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div>
            <h3 className="text-xl font-semibold mb-3">Phase 1 – Awareness & Connection</h3>
            <p className="text-gray-600 leading-relaxed">
              Reconnect Navodaya alumni with current students and create awareness
              about diverse career opportunities. Through interactive sessions,
              alumni talks, and career guidance programs, we aim to introduce
              students to different career paths, competitive exams, and higher
              education options so they can start exploring their future with clarity.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Phase 2 – Structured Mentorship</h3>
            <p className="text-gray-600 leading-relaxed">
              Build structured mentorship programs where Navodaya alumni regularly
              guide students through career decisions, exam preparation, and skill
              development. This phase focuses on creating continuous learning
              opportunities through workshops, webinars, and mentorship groups
              that provide practical insights from real-world experiences.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Phase 3 – National Impact</h3>
            <p className="text-gray-600 leading-relaxed">
              Establish a sustainable alumni-driven mentorship ecosystem that
              reaches Navodaya students across the country. By empowering alumni
              leaders and building long-term collaboration platforms, we aim to
              create a nationwide support system that continuously inspires,
              guides, and uplifts future generations of Navodaya students.
            </p>
          </div>

        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-black text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Together, We Can Shape the Future
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Whether you are a student seeking guidance or an alumnus ready to
            give back, your contribution can create lasting impact.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">
            <Link to="/volunteer">
            <Button size="lg" className="gap-2">
              Join as Volunteer <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          </div>

        </div>
      </section>
    </Layout>
  );
}