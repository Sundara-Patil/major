import { Layout } from "@/components/layout/Layout";
import { PhaseGallery } from "@/components/gallery/PhaseGallery";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import bgBeforeJnv from "@/assets/bg-before-jnv.jpg";
import before from "@/assets/before.png";

const galleryImages = [
  { src: "/before/2.1.jpeg", alt: "IMAGE"},
  { src: "/before/2.2.jpeg", alt: "IMAGE"},
  { src: "/before/2.3.jpeg", alt: "IMAGE"},
  { src: "/before/2.5.jpeg", alt: "IMAGE"},
  { src: "/before/2.6.jpeg", alt: "IMAGE"},
  { src: "/before/2.7.jpeg", alt: "IMAGE"},
  { src: "/before/2.8.jpeg", alt: "IMAGE"},
  { src: "/before/2.9.jpeg", alt: "IMAGE"},
  { src: "/before/2.10.jpeg", alt: "IMAGE"},
  { src: "/before/2.11.jpeg", alt: "IMAGE"},
  { src: "/before/2.12.jpeg", alt: "IMAGE"},
  { src: "/before/2.13.jpeg", alt: "IMAGE"},
  { src: "/before/2.14.jpeg", alt: "IMAGE"},
  { src: "/before/2.15.jpeg", alt: "IMAGE"},
  { src: "/before/2.16.jpeg", alt: "IMAGE"},
  { src: "/before/2.17.jpeg", alt: "IMAGE"},
  { src: "/before/2.18.jpeg", alt: "IMAGE"},
  { src: "/before/2.19.jpeg", alt: "IMAGE"},
  { src: "/before/2.20.jpeg", alt: "IMAGE"},
  { src: "/before/2.21.jpeg", alt: "IMAGE"},
  { src: "/before/2.22.jpeg", alt: "IMAGE"},
  { src: "/before/2.23.jpeg", alt: "IMAGE"},
  { src: "/before/2.24.jpeg", alt: "IMAGE"},
];

export default function GalleryBeforeJNV() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero with animated background */}
        <AnimatedBackground
          image={bgBeforeJnv}
          // overlay="phase-before"
          animation="pan"
          className="py-16 md:py-24"
        >
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <img
                src={before}
                alt="Navodaya Elevate Logo"
                className="mx-auto mb-4 h-16 w-auto object-contain"
              />
              <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl text-white/90">
                Saṅkalpa
              </h1>

              <p className="text-lg text-white/90 md:text-xl">
                Capturing moments from our awareness camps, coaching sessions, and student preparation activities.
              </p>
            </div>
          </div>
        </AnimatedBackground>

        {/* Gallery Section */}
        <PhaseGallery
          title="Preparing the Next Navodayans"
          description=" A glimpse into our journey of preparing students for Navodaya Vidyalaya. These moments capture our awareness camps in rural communities, interactive counseling sessions with parents and students, intensive entrance exam coaching, mock tests, and mentorship activities led by dedicated volunteers. Through these programs, we aim to identify talented students, nurture their potential, and guide them towards securing admission into Jawahar Navodaya Vidyalayas."            images={galleryImages}
          phaseColor="before"
        />

        <section className="py-24 bg-white">
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">

              {/* Heading */}
              <h2 className="mb-6 text-4xl font-bold text-[#061E3C] md:text-5xl">
                Want to Help Aspiring Students?
              </h2>

              {/* Description */}
              <p className="mb-10 text-lg text-gray-600 md:text-xl">
                Join as a volunteer and help conduct awareness camps, create study materials, or mentor students preparing for JNVST entrance exam.
              </p>

              {/* Buttons */}
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

                {/* Primary */}
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

              </div>

            </div>
          </div>
        </section>

      </div>
    </Layout>
  );
}