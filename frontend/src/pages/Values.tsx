import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import bgValues from "@/assets/bg-ourteam.png";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Values() {
  return (
    <Layout>
      {/* ================= HERO SECTION ================= */}
      <AnimatedBackground
        image={bgValues}
        overlay="dark"
        animation="zoom"
        className="py-32 md:py-44"
      >
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl md:text-5xl font-bold text-white">
              Our Core Values
            </h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              The principles that shape our decisions, define our culture,
              and guide every initiative at ElevateU.
            </p>
          </div>
        </div>
      </AnimatedBackground>

      {/* ================= INTRO SECTION ================= */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Values That Drive Our Impact
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          At ElevateU, we believe sustainable change is built on strong
          principles. Our values are not just statements — they are commitments
          we practice daily while serving Navodaya students across India.
        </p>
      </section>

      {/* ================= VALUES GRID ================= */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">

            <Card className="shadow-md hover:shadow-xl transition duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  🤝 Community First
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We grow together and uplift one another. By fostering a strong
                  alumni-student network, we create a supportive ecosystem
                  where collaboration replaces competition.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-xl transition duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  🌍 Inclusivity
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Equal opportunity is at the heart of our mission. Every
                  Navodaya student — regardless of background — deserves access
                  to quality mentorship and career guidance.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-xl transition duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  ⭐ Excellence
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We strive for quality in everything we do — from workshops
                  and mentoring sessions to long-term program planning and
                  execution.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-xl transition duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  🛡 Integrity
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Transparency, honesty, and accountability define our actions.
                  We remain committed to ethical leadership and responsible
                  impact.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* ================= CULTURE SECTION ================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              Building a Culture of Purpose
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Our values shape how we collaborate, mentor, and lead. By
              embedding these principles into our everyday work, we ensure that
              our impact remains meaningful, measurable, and sustainable.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-6">
              A Commitment Beyond Words
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              At ElevateU, values are lived experiences. They define how we
              support students, engage alumni, and contribute to the broader
              Navodaya community.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-black text-white py-16 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Join a Community Built on Strong Values
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Be part of a mission-driven network that believes in integrity,
            inclusion, and collective growth.
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