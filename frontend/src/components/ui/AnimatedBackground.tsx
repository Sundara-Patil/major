import { cn } from "@/lib/utils";

interface AnimatedBackgroundProps {
  image: string;
  overlay?: "light" | "dark" | "phase-before" | "phase-during" | "phase-after";
  animation?: "zoom" | "pan" | "parallax";
  size?: "cover" | "contain";
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function AnimatedBackground({
  image,
  overlay = "dark",
  animation = "zoom",
  className,
  children,
  size = "cover",
}: AnimatedBackgroundProps) {
  const overlayClasses = {
    light: "bg-background/70",
    dark: "bg-foreground/60",
    "phase-before": "bg-phase-before/70",
    "phase-during": "bg-phase-during/70",
    "phase-after": "bg-phase-after/70",
  };

  const animationClasses = {
    zoom: "animate-bg-zoom",
    pan: "animate-bg-pan",
    parallax: "animate-bg-parallax",
  };

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {/* Animated background image */}
      <div
        className={cn(
          "absolute inset-0 -z-20 bg-cover bg-center bg-no-repeat",
          animationClasses[animation]
        )}
        style={{ backgroundImage: `url(${image})` }}
      />
      {/* Overlay for readability */}
      <div className={cn("absolute inset-0 -z-10", overlayClasses[overlay])} />
      {/* Content */}
      {children}
    </div>
  );
}