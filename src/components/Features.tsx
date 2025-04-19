import { HardHat, Cable, CircuitBoard, Zap, Factory, Fuel } from "lucide-react";
import { Card } from "./ui/card";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Electrical Engineering Solution",
    description:
      "CZ Engineering providing engineering solution and consultancy services in Bangladesh. Our engineering solution includes the Electrical power, Automation, Instrumentation and control, in a word total industrial Solution.",
    icon: Zap,
  },
  {
    title: "Electrical distribution or Panel Board Design",
    description:
      "CZ Engineering design, manufacture, supply and install of electrical distribution board such MDB, FDB, DB, SDB, COS, and other enclosures. Our distribution board or panel board is 100% comply with the necessary standards.",
    icon: CircuitBoard,
  },
  {
    title: "Industrial Cable Line Solution",
    description:
      "CZ Engineering Supply, installation, and commissioning Low voltage, Medium Voltage and High voltage Cable laying solution with cable tray fabrication and erection to Different types of industries, major in Pharmaceutical plant and Power plant.",
    icon: Cable,
  },
  {
    title: "Steel Structure Fabrication & Erection",
    description:
      "CZ Engineering specializes in providing complete solutions including consulting, design, fabrication and erection of high-quality pre-engineered steel structure products.",
    icon: Factory,
  },
  {
    title: "Storage Tank Design and Drawing",
    description:
      "Tank Fabrication, Erection, Painting, Testing, Commissioning, Calibration and Internal Floating Roof Installation of New Construction Doom Roof / Cone Roof Petroleum, Petrochemical, Oil and Water Storage Tank including supply of all required materials.",
    icon: Fuel,
  },
  {
    title: "Civil Construction",
    description:
      "Engineering offer turnkey construction services for a wide variety of industrial and infrastructure projects involving comprehensive engineering and construction services.",
    icon: HardHat,
  },
];

const paragraphText =
  "CZ Engineering is a one of the prominent Power & Electric company in Bangladesh. CZ specialize in Industrial Engineering, Automation Solution & Industrial Maintenance. We are also one of the leading supplier of industrial products from OEM market. We are committed to contributing in the development of the nations and personal growth as a successful organization.";

export default function FeaturesSection() {
  const featureRefs = useRef<(HTMLDivElement | null)[]>([]);
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // ScrollTrigger to animate feature cards when they come into view
    gsap.utils.toArray(featureRefs.current).forEach((card, index) => {
      if (!card) return;

      ScrollTrigger.create({
        trigger: card as HTMLDivElement,
        start: "top 80%", // Trigger when the card is 80% visible from the top
        once: true, // Only trigger once
        onEnter: () => {
          gsap.fromTo(
            card as HTMLDivElement,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power3.out",
              delay: index * 0.2,
            }
          );
        },
      });
    });

    // Animate paragraph text
    const text = textRef.current;
    if (!text) return;

    const spans = text.querySelectorAll("span");

    ScrollTrigger.create({
      trigger: text,
      start: "top 80%",
      once: true,
      onEnter: () => {
        text.style.visibility = "visible";
        gsap.to(spans, {
          opacity: 1,
          y: 0,
          stagger: 0.01,
          duration: 1,
          ease: "power3.out",
        });
      },
    });
  }, []);

  return (
    <section className="py-16 px-8 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        About CZ Engineering
      </h2>
      <p
        className="text-center text-gray-600 mb-32"
        ref={textRef}
        style={{ visibility: "hidden" }}
      >
        {paragraphText.split("").map((char, i) => (
          <span key={i} style={{ opacity: 0, display: "inline-block" }}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <Card
            key={index}
            className="flex flex-col items-center text-center p-12 bg-gray-100 rounded-lg shadow-lg opacity-0"
            ref={(el) => {
              featureRefs.current[index] = el;
            }}
          >
            <feature.icon className="h-8 w-8 text-[#0D80CE]" />
            <h3 className="text-2xl font-semibold text-[#0D80CE] mb-3">
              {feature.title}
            </h3>
            <p className="text-base text-gray-600">{feature.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
