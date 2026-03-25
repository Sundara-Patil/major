import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Images } from "lucide-react";
import { useState } from "react";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface PhaseGalleryProps {
  title?: string;
  description?: string;
  images: GalleryImage[];
  phaseColor: "before" | "during" | "after";
}

export function PhaseGallery({ 
  title = "Gallery", 
  description,
  images, 
  phaseColor 
}: PhaseGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const colorClasses = {
    before: {
      bg: "bg-phase-before/10",
      border: "border-phase-before/20",
      text: "text-phase-before",
      sectionBg: "bg-phase-before/5",
      sectionBorder: "border-phase-before/10",
    },
    during: {
      bg: "bg-phase-during/10",
      border: "border-phase-during/20",
      text: "text-phase-during",
      sectionBg: "bg-phase-during/5",
      sectionBorder: "border-phase-during/10",
    },
    after: {
      bg: "bg-phase-after/10",
      border: "border-phase-after/20",
      text: "text-phase-after",
      sectionBg: "bg-phase-after/5",
      sectionBorder: "border-phase-after/10",
    },
  };

  const colors = colorClasses[phaseColor];

  return (
    <section className={`border-t ${colors.sectionBorder} ${colors.sectionBg} py-16 md:py-24`}>
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          {/* <div className={`mb-4 inline-flex items-center gap-2 rounded-full ${colors.bg} px-4 py-1.5`}> */}
            {/* <Images className={`h-4 w-4 ${colors.text}`} /> */}
            {/* <span className={`text-sm font-medium ${colors.text}`}>Gallery</span> */}
          {/* </div> */}
          <h2 className="mb-4 text-3xl font-bold">{title}</h2>
          {description && (
            <p className="text-muted-foreground">{description}</p>
          )}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((image, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden ${colors.border} bg-card/80 backdrop-blur-sm transition-transform hover:scale-[1.02]`}
            >
              <CardContent className="p-0">
                <AspectRatio ratio={4 / 3}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                    onClick={() => setSelectedImage(image.src)}
                  />
                </AspectRatio>
                {image.caption && (
                  <div className="p-3">
                    <p className="text-sm text-muted-foreground">{image.caption}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}