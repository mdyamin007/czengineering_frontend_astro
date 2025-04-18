import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronLeftIcon, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Industrial",
    subtitle: "Power Solutions",
    description:
      "CZ Engineering is a one of the prominent Power & Electric company in Bangladesh...",
    image: "/images/slide_1.jpg",
  },
  {
    title: "Industrial",
    subtitle: "Plug & Socket",
    description:
      "CZ specialize in Industrial Engineering, Automation Solution & Industrial Maintenance...",
    image: "/images/slide_2.jpg",
  },
  {
    title: "Authorize Distributor",
    subtitle: "of KLC Filter",
    description:
      "We are also one of the leading supplier of industrial products from OEM market...",
    image: "/images/slide_3.jpg",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setFade(true);
    }, 300);
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      setFade(true);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const { title, subtitle, description, image } = slides[current];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-white">
      <img
        src={image}
        alt="Slide Background"
        className={cn(
          "absolute inset-0 w-full h-full object-cover object-center z-0 transition-opacity duration-700 ease-in-out",
          fade ? "opacity-100" : "opacity-0"
        )}
      />
      <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-700" />

      <div className="relative z-20 flex flex-col justify-center h-full px-8 md:px-24">
        <p className="text-sm font-medium uppercase tracking-widest text-gray-300">
          Welcome to CZ Engineering
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mt-2">{title}</h1>
        <h2 className="text-4xl md:text-6xl font-light mt-1 text-white/60">
          {subtitle}
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-white/80">{description}</p>
      </div>

      {/* Navigation buttons */}
      <div className="absolute top-1/2 right-1/8 transform -translate-y-1/2 z-30 flex flex-col space-y-2">
        <Button
          size="lg"
          variant="secondary"
          onClick={prevSlide}
          className="bg-[#0D80CE] rounded-none"
        >
          <ChevronLeftIcon className="text-white" />
        </Button>
        <Button
          size="lg"
          variant="secondary"
          onClick={nextSlide}
          className="bg-[#0D80CE] rounded-none"
        >
          <ChevronRight className="text-white" />
        </Button>
      </div>
    </div>
  );
}
