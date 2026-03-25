import { Layout } from "@/components/layout/Layout";
import { PhaseGallery } from "@/components/gallery/PhaseGallery";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import bgDavanagere from "@/assets/bg-davanagere.jpeg";

const galleryImages = [
  { src: "/during/davanagere/1.jpeg", alt: "Images" },
  { src: "/during/davanagere/2.jpeg", alt: "Images" },
  { src: "/during/davanagere/3.jpeg", alt: "Images" },
  { src: "/during/davanagere/4.jpeg", alt: "Images" },
  { src: "/during/davanagere/5.jpeg", alt: "Images" },
  { src: "/during/davanagere/6.jpeg", alt: "Images" },
  { src: "/during/davanagere/7.jpeg", alt: "Images" },
  { src: "/during/davanagere/8.jpeg", alt: "Images" },
  { src: "/during/davanagere/9.jpeg", alt: "Images" },
  { src: "/during/davanagere/10.jpeg", alt: "Images" },
  { src: "/during/davanagere/11.jpeg", alt: "Images" },
  { src: "/during/davanagere/12.jpeg", alt: "Images" },
  { src: "/during/davanagere/13.jpeg", alt: "Images" },
  { src: "/during/davanagere/14.jpeg", alt: "Images" },
  { src: "/during/davanagere/15.jpeg", alt: "Images" },
  { src: "/during/davanagere/16.jpeg", alt: "Images" },
  { src: "/during/davanagere/17.jpeg", alt: "Images" },
  { src: "/during/davanagere/18.jpeg", alt: "Images" },
  { src: "/during/davanagere/19.jpeg", alt: "Images" },
  { src: "/during/davanagere/20.jpeg", alt: "Images" },
  { src: "/during/davanagere/21.jpeg", alt: "Images" },
  { src: "/during/davanagere/22.jpeg", alt: "Images" },
  { src: "/during/davanagere/23.jpeg", alt: "Images" },
  { src: "/during/davanagere/24.jpeg", alt: "Images" },
  { src: "/during/davanagere/25.jpeg", alt: "Images" },
  { src: "/during/davanagere/26.jpeg", alt: "Images" },
  { src: "/during/davanagere/27.jpeg", alt: "Images" },
  { src: "/during/davanagere/28.jpeg", alt: "Images" },
  { src: "/during/davanagere/29.jpeg", alt: "Images" },
  { src: "/during/davanagere/30.jpeg", alt: "Images" },
  { src: "/during/davanagere/31.jpeg", alt: "Images" },
  { src: "/during/davanagere/32.jpeg", alt: "Images" },
  { src: "/during/davanagere/33.jpeg", alt: "Images" },
  { src: "/during/davanagere/34.jpeg", alt: "Images" },
  { src: "/during/davanagere/35.jpeg", alt: "Images" },
  { src: "/during/davanagere/36.jpeg", alt: "Images" },
  { src: "/during/davanagere/37.jpeg", alt: "Images" },
  { src: "/during/davanagere/38.jpeg", alt: "Images" },
  { src: "/during/davanagere/39.jpeg", alt: "Images" },
  { src: "/during/davanagere/40.jpeg", alt: "Images" },
  { src: "/during/davanagere/41.jpeg", alt: "Images" },
  { src: "/during/davanagere/42.jpeg", alt: "Images" },
  { src: "/during/davanagere/43.jpeg", alt: "Images" },
  { src: "/during/davanagere/44.jpeg", alt: "Images" },
  { src: "/during/davanagere/45.jpeg", alt: "Images" },
  { src: "/during/davanagere/46.jpeg", alt: "Images" },
  { src: "/during/davanagere/47.jpeg", alt: "Images" },
  { src: "/during/davanagere/48.jpeg", alt: "Images" },
  { src: "/during/davanagere/49.jpeg", alt: "Images" },
  { src: "/during/davanagere/50.jpeg", alt: "Images" },
  { src: "/during/davanagere/51.jpeg", alt: "Images" },
  { src: "/during/davanagere/52.jpeg", alt: "Images" },
  { src: "/during/davanagere/53.jpeg", alt: "Images" },
  { src: "/during/davanagere/54.jpeg", alt: "Images" },
  { src: "/during/davanagere/55.jpeg", alt: "Images" },
  { src: "/during/davanagere/56.jpeg", alt: "Images" },
  { src: "/during/davanagere/57.jpeg", alt: "Images" },
  { src: "/during/davanagere/58.jpeg", alt: "Images" },
  { src: "/during/davanagere/59.jpeg", alt: "Images" },
  { src: "/during/davanagere/60.jpeg", alt: "Images" },
  { src: "/during/davanagere/61.jpeg", alt: "Images" },
  { src: "/during/davanagere/62.jpeg", alt: "Images" },
  { src: "/during/davanagere/63.jpeg", alt: "Images" },
  { src: "/during/davanagere/64.jpeg", alt: "Images" },
  { src: "/during/davanagere/65.jpeg", alt: "Images" },
  { src: "/during/davanagere/66.jpeg", alt: "Images" },
  { src: "/during/davanagere/67.jpeg", alt: "Images" },
  { src: "/during/davanagere/68.jpeg", alt: "Images" },
  { src: "/during/davanagere/69.jpeg", alt: "Images" },
  { src: "/during/davanagere/70.jpeg", alt: "Images" },
  { src: "/during/davanagere/71.jpeg", alt: "Images" },
  { src: "/during/davanagere/72.jpeg", alt: "Images" },
  { src: "/during/davanagere/73.jpeg", alt: "Images" },
  { src: "/during/davanagere/74.jpeg", alt: "Images" },
  { src: "/during/davanagere/75.jpeg", alt: "Images" },
  { src: "/during/davanagere/76.jpeg", alt: "Images" },
  { src: "/during/davanagere/77.jpeg", alt: "Images" },
  { src: "/during/davanagere/78.jpeg", alt: "Images" },
  { src: "/during/davanagere/79.jpeg", alt: "Images" },
  { src: "/during/davanagere/80.jpeg", alt: "Images" },
  { src: "/during/davanagere/81.jpeg", alt: "Images" },
  { src: "/during/davanagere/82.jpeg", alt: "Images" },
  { src: "/during/davanagere/83.jpeg", alt: "Images" },
  { src: "/during/davanagere/84.jpeg", alt: "Images" },
  { src: "/during/davanagere/85.jpeg", alt: "Images" },
  { src: "/during/davanagere/86.jpeg", alt: "Images" },
  { src: "/during/davanagere/87.jpeg", alt: "Images" },
];

export default function JNVDavanagere() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero with animated background */}
        <AnimatedBackground
          image={bgDavanagere}
          // overlay="phase-during"
          animation="zoom"
          size="contain"
          className="py-32 md:py-32"
        >
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl text-white/90">
                JNV DAVANAGERE
              </h1>
              
              <p className="text-lg text-white/90 md:text-xl">
                Celebrating our alumni achievements, reunions, and community contributions.
              </p>
            </div>
          </div>
        </AnimatedBackground>

        <PhaseGallery
          title="Navoadaya Moments"
          description="Highlights and activities from PM Shri Jawahar Navodaya Vidyalaya, Davanagere."
          images={galleryImages}
          phaseColor="during"
        />
      </div>
    </Layout>
  );
}