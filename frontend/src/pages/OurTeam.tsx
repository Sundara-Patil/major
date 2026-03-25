import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import bgOurteam from "@/assets/bg-ourteam.png";
import chetanImg from "@/assets/team/chetan.jpeg";
import sundaraImg from "@/assets/team/sundara.jpg";


const ourteam = [
  {
    name: "Chetan P Devanuru",
    role: "Founder Director",
    batch: "JNV Chikkamagaluru",
    content:
      "Volunteer",
    image: chetanImg,
  },
  {
    name: "Sundara Ambadas Patil",
    role: "Platform Developer",
    batch: "JNV Kalaburagi-II",
    content:
      "Volunteer",
    image: sundaraImg,
  },
];

export default function OurTeam() {
  return (
    <Layout>
      {/* Hero with animated background */}
      <AnimatedBackground
        image={bgOurteam}
        overlay="dark"
        animation="zoom"
        className="py-32 md:py-40"
      >
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold text-white">Our Team</h1>
            <p className="text-lg text-white/90">
              Meet the passionate Navodaya alumni working together to guide, mentor, and empower the next generation of students. 
              Through shared experiences and a commitment to giving back, our team strives to create opportunities and inspire meaningful journeys beyond school.
            </p>
          </div>
        </div>
      </AnimatedBackground>

      {/* About the Team */}
      <section className="py-16 md:py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
          <p className="text-muted-foreground text-lg text-6xl leading-relaxed">
            ElevateU is driven by passionate Navodaya alumni who believe in
            giving back to the community that shaped them. Our team works
            together to guide, mentor, and empower students so they can
            confidently pursue their academic and career aspirations.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-4">
            By sharing experiences, providing mentorship, and creating
            opportunities for learning, we aim to ensure that every Navodaya
            student receives the guidance needed to unlock their full potential.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet the Team
          </h2>

          <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
            {ourteam.map((s) => (
              <Card
                key={s.name}
                className="bg-card/80 backdrop-blur-sm hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <CardContent className="pt-6 text-center">
                  <Avatar className="h-28 w-28 mx-auto mb-4">
                    <AvatarImage
                      src={s.image}
                      alt={s.name}
                      className="object-cover"
                    />
                    <AvatarFallback>
                      {s.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>

                  <h3 className="font-bold text-lg">{s.name}</h3>
                  <p className="text-sm text-primary font-medium">{s.role}</p>
                  <p className="text-xs text-muted-foreground mb-3">
                    {s.batch}
                  </p>
                  <p className="text-sm text-muted-foreground">{s.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      {/* <section className="py-16 md:py-20 bg-muted/40">
        <div className="container"> */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Drives Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-md hover:shadow-xl transition duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Student First
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every initiative we create is focused on helping
                  students grow with confidence and clarity.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-xl transition duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Alumni Collaboration
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We believe alumni experiences can inspire and guide
                  students in meaningful ways.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-xl transition duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Opportunities
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Every Navodaya student can access to mentorship
                  and career guidance regardless of background.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-xl transition duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Future Leaders
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We aim to nurture confident leaders who will inspire and support the next generation.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-xl transition duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Continuous Learning
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  We encourage students to keep learning beyond the classroom by 
                  exploring new skills, knowledge, and real-world experiences.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-xl transition duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Community Support
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  A strong community creates stronger individuals. We promote a 
                  culture where students, alumni, and mentors support each other's growth.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Join the Team CTA */}
      <section className="py-20 text-center">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mentors & Advisors</h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Alongside our core team, we are supported by experienced
            Navodaya alumni, educators, and professionals who guide
            our initiatives and mentor students. Their insights and
            experiences help us design meaningful programs that truly
            benefit students across Navodaya schools.
          </p>
        </div>

        <div className="container max-w-3xl py-5">
          <h2 className="text-3xl font-bold mb-6">
            Want to Join Our Mission?
          </h2>

          <p className="text-lg text-muted-foreground mb-8">
            If you are a Navodaya alumnus passionate about mentoring
            students or contributing to educational initiatives,
            we welcome you to be part of our journey. Together,
            we can guide, inspire, and empower the next generation
            of Navodaya students.
          </p>

          <Link to="/volunteer">
            <Button size="lg">
              Become a Volunteer
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}