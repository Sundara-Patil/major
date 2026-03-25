import { useEffect, useRef, useState } from "react";
import { Users, Award, Calendar, School } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
}

function StatCard({
  stat,
  inView,
}: {
  stat: {
    label: string;
    value: number;
    suffix: string;
    icon: any;
    description: string;
  };
  inView: boolean;
}) {
  const count = useCountUp(stat.value, 2000, inView);

  return (
    <div className="group text-center p-6 rounded-xl transition hover:bg-white hover:shadow-md">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-accent group-hover:text-primary">
        <stat.icon className="h-7 w-7" />
      </div>

      <div className="text-3xl font-bold text-primary md:text-4xl">
        {count.toLocaleString()}
        {stat.suffix}
      </div>

      <div className="mt-1 font-medium text-primary">{stat.label}</div>

      <p className="mt-1 text-sm text-muted-foreground">
        {stat.description}
      </p>
    </div>
  );
}

export function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  const BASE_VOLUNTEERS = 10;
  const [volunteerCount, setVolunteerCount] = useState(BASE_VOLUNTEERS);

  // Fetch volunteer count from Supabase
  useEffect(() => {
    const fetchVolunteerCount = async () => {
      const { count, error } = await supabase
        .from("api_volunteer")
        .select("*", { count: "exact", head: true });

      if (!error && count !== null) {
        setVolunteerCount(BASE_VOLUNTEERS + count);
      }
    };

    fetchVolunteerCount();
  }, []);

  const stats = [
    {
      label: "Active Volunteers",
      value: volunteerCount,
      suffix: "+",
      icon: Users,
      description: "Dedicated volunteers supporting students",
    },
    {
      label: "Students Helped",
      value: 400,
      suffix: "+",
      icon: Award,
      description: "Students guided through our programs",
    },
    {
      label: "Events Conducted",
      value: 50,
      suffix: "+",
      icon: Calendar,
      description: "Workshops, seminars, and awareness camps",
    },
    {
      label: "JNVs Covered",
      value: 3,
      suffix: "+",
      icon: School,
      description: "Schools across India reached",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-primary/0 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-primary md:text-4xl">
            Our Impact
          </h2>

          <p className="text-lg text-muted-foreground">
            Through the collective efforts of dedicated volunteers, alumni, and
            supporters, we are building a strong community that empowers Navodaya
            students at every stage of their journey.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}