import { Layout } from "@/components/layout/Layout";
import { PhaseGallery } from "@/components/gallery/PhaseGallery";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import bgChitradurga from "@/assets/bg-chitradurga.jpg";

const galleryImages = [
  { src: "/during/chitradurga/1.jpg", alt: "Images" },
  { src: "/during/chitradurga/2.jpg", alt: "Images" },
  { src: "/during/chitradurga/3.jpg", alt: "Images" },
  { src: "/during/chitradurga/4.jpg", alt: "Images" },
  { src: "/during/chitradurga/5.jpg", alt: "Images" },
  { src: "/during/chitradurga/6.jpg", alt: "Images" },
  { src: "/during/chitradurga/7.jpg", alt: "Images" },
  { src: "/during/chitradurga/8.jpg", alt: "Images" },
  { src: "/during/chitradurga/9.jpg", alt: "Images" },
  { src: "/during/chitradurga/10.jpg", alt: "Images" },
  { src: "/during/chitradurga/11.jpg", alt: "Images" },
  { src: "/during/chitradurga/12.jpg", alt: "Images" },
  { src: "/during/chitradurga/13.jpg", alt: "Images" },
  { src: "/during/chitradurga/14.jpg", alt: "Images" },
  { src: "/during/chitradurga/15.jpg", alt: "Images" },
  { src: "/during/chitradurga/16.jpg", alt: "Images" },
  { src: "/during/chitradurga/17.jpg", alt: "Images" },
  { src: "/during/chitradurga/18.jpg", alt: "Images" },
  { src: "/during/chitradurga/19.jpg", alt: "Images" },
  { src: "/during/chitradurga/20.jpg", alt: "Images" },
  { src: "/during/chitradurga/21.jpg", alt: "Images" },
  { src: "/during/chitradurga/22.jpg", alt: "Images" },
  { src: "/during/chitradurga/23.jpg", alt: "Images" },
  { src: "/during/chitradurga/24.jpg", alt: "Images" },
  { src: "/during/chitradurga/25.jpg", alt: "Images" },
  { src: "/during/chitradurga/26.jpg", alt: "Images" },
  { src: "/during/chitradurga/27.jpg", alt: "Images" },
  { src: "/during/chitradurga/28.jpg", alt: "Images" },
  { src: "/during/chitradurga/29.jpg", alt: "Images" },
  { src: "/during/chitradurga/30.jpg", alt: "Images" },
  { src: "/during/chitradurga/31.jpg", alt: "Images" },
  { src: "/during/chitradurga/32.jpg", alt: "Images" },
  { src: "/during/chitradurga/33.jpg", alt: "Images" },
  { src: "/during/chitradurga/34.jpg", alt: "Images" },
  { src: "/during/chitradurga/35.jpg", alt: "Images" },
  { src: "/during/chitradurga/36.jpg", alt: "Images" },
  { src: "/during/chitradurga/37.jpg", alt: "Images" },
  { src: "/during/chitradurga/38.jpg", alt: "Images" },
  { src: "/during/chitradurga/39.jpg", alt: "Images" },
  { src: "/during/chitradurga/40.jpg", alt: "Images" },
  { src: "/during/chitradurga/41.jpg", alt: "Images" },
  { src: "/during/chitradurga/42.jpg", alt: "Images" },
  { src: "/during/chitradurga/43.jpg", alt: "Images" },
  { src: "/during/chitradurga/44.jpg", alt: "Images" },
  { src: "/during/chitradurga/45.jpg", alt: "Images" },
  { src: "/during/chitradurga/46.jpg", alt: "Images" },
  { src: "/during/chitradurga/47.jpg", alt: "Images" },
  { src: "/during/chitradurga/48.jpg", alt: "Images" },
  { src: "/during/chitradurga/49.jpg", alt: "Images" },
];

export default function JNVChitradurga() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero with animated background */}
        <AnimatedBackground
          image={bgChitradurga}
          // overlay="phase-during"
          animation="zoom"
          size="contain"
          className="py-32 md:py-32"
        >
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl text-white/90">
                JNV CHITRADURGA
              </h1>
              
              <p className="text-lg text-white/90 md:text-xl">
                Celebrating our alumni achievements, reunions, and community contributions.
              </p>
            </div>
          </div>
        </AnimatedBackground>

        <PhaseGallery
          title="Navoadaya Moments"
          description="Highlights and activities from PM Shri Jawahar Navodaya Vidyalaya, Chitradurga."
          images={galleryImages}
          phaseColor="during"
        />
      </div>
    </Layout>
  );
}