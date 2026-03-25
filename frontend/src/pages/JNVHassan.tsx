import { Layout } from "@/components/layout/Layout";
import { PhaseGallery } from "@/components/gallery/PhaseGallery";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import bgHassan from "@/assets/bg-hassan.jpeg";

const galleryImages = [
  { src: "/during/hassan/a.jpeg", alt: "Images" },
  { src: "/during/hassan/aa.jpg", alt: "Images" },
  { src: "/during/hassan/aaa.jpg", alt: "Images" },
  { src: "/during/hassan/b.jpg", alt: "Images" },
  { src: "/during/hassan/bb.jpg", alt: "Images" },
  { src: "/during/hassan/bbb.jpg", alt: "Images" },
  { src: "/during/hassan/c.jpg", alt: "Images" },
  { src: "/during/hassan/cc.jpg", alt: "Images" },
  { src: "/during/hassan/ccc.jpg", alt: "Images" },
  { src: "/during/hassan/d.jpg", alt: "Images" },
  { src: "/during/hassan/dd.jpg", alt: "Images" },
  { src: "/during/hassan/ddd.jpg", alt: "Images" },
  { src: "/during/hassan/e.jpg", alt: "Images" },
  { src: "/during/hassan/ee.jpg", alt: "Images" },
  { src: "/during/hassan/eee.jpg", alt: "Images" },
  { src: "/during/hassan/f.jpg", alt: "Images" },
  { src: "/during/hassan/ff.jpg", alt: "Images" },
  { src: "/during/hassan/fff.jpg", alt: "Images" },
  { src: "/during/hassan/g.jpg", alt: "Images" },
  { src: "/during/hassan/gg.jpg", alt: "Images" },
  { src: "/during/hassan/ggg.jpg", alt: "Images" },
  { src: "/during/hassan/h.jpg", alt: "Images" },
  { src: "/during/hassan/hh.jpg", alt: "Images" },
  { src: "/during/hassan/hhh.jpg", alt: "Images" },
  { src: "/during/hassan/i.jpg", alt: "Images" },
  { src: "/during/hassan/ii.jpg", alt: "Images" },
  { src: "/during/hassan/iii.jpg", alt: "Images" },
  { src: "/during/hassan/j.jpg", alt: "Images" },
  { src: "/during/hassan/jj.jpg", alt: "Images" },
  { src: "/during/hassan/jjj.jpeg", alt: "Images" },
  { src: "/during/hassan/k.jpg", alt: "Images" },
  { src: "/during/hassan/kk.jpg", alt: "Images" },
  { src: "/during/hassan/l.jpg", alt: "Images" },
  { src: "/during/hassan/ll.jpg", alt: "Images" },
  { src: "/during/hassan/m.jpg", alt: "Images" },
  { src: "/during/hassan/mm.jpg", alt: "Images" },
  { src: "/during/hassan/n.jpg", alt: "Images" },
  { src: "/during/hassan/nn.jpg", alt: "Images" },
  { src: "/during/hassan/o.jpeg", alt: "Images" },
  { src: "/during/hassan/oo.jpeg", alt: "Images" },
  { src: "/during/hassan/p.jpeg", alt: "Images" },
  { src: "/during/hassan/pp.jpeg", alt: "Images" },
  { src: "/during/hassan/q.jpeg", alt: "Images" },
  { src: "/during/hassan/qq.jpeg", alt: "Images" },
  { src: "/during/hassan/r.jpeg", alt: "Images" },
  { src: "/during/hassan/rr.jpeg", alt: "Images" },
  { src: "/during/hassan/s.jpeg", alt: "Images" },
  { src: "/during/hassan/ss.jpeg", alt: "Images" },
  { src: "/during/hassan/t.jpeg", alt: "Images" },
  { src: "/during/hassan/tt.jpeg", alt: "Images" },
  { src: "/during/hassan/u.jpeg", alt: "Images" },
  { src: "/during/hassan/uu.jpeg", alt: "Images" },
  { src: "/during/hassan/v.jpeg", alt: "Images" },
  { src: "/during/hassan/vv.jpeg", alt: "Images" },
  { src: "/during/hassan/w.jpeg", alt: "Images" },
  { src: "/during/hassan/ww.jpeg", alt: "Images" },
  { src: "/during/hassan/x.jpeg", alt: "Images" },
  { src: "/during/hassan/xx.jpeg", alt: "Images" },
  { src: "/during/hassan/y.jpeg", alt: "Images" },
  { src: "/during/hassan/yy.jpeg", alt: "Images" },
  { src: "/during/hassan/z.jpeg", alt: "Images" },
  { src: "/during/hassan/zz.jpeg", alt: "Images" },
];

export default function JNVHassan() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero with animated background */}
        <AnimatedBackground
          image={bgHassan}
          // overlay="phase-during"
          animation="zoom"
          size="contain"
          className="py-32 md:py-32"
        >
          <div className="container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl text-white/90">
                JNV HASSAN
              </h1>
              
              <p className="text-lg text-white/90 md:text-xl">
                Celebrating our alumni achievements, reunions, and community contributions.
              </p>
            </div>
          </div>
        </AnimatedBackground>

        <PhaseGallery
          title="Navoadaya Moments"
          description="Highlights and activities from PM Shri Jawahar Navodaya Vidyalaya, Hassan."
          images={galleryImages}
          phaseColor="during"
        />
      </div>
    </Layout>
  );
}