import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function AuthorizedDistributorList() {
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // GSAP animation to make images scale up and down with a staggered delay
    gsap.to(imageRefs.current, {
      scale: 1.25, // Scale the images up to 1.25
      repeat: -1, // Repeat indefinitely
      yoyo: true, // Reverse the scale animation (to normal size)
      duration: 1, // Duration of the scale effect
      ease: "sine", // Smooth easing for scale
    });
  }, []);

  return (
    <div className="flex justify-center items-center gap-12 py-8">
      <div
        ref={(el) => {
          imageRefs.current[0] = el;
        }}
        className="flex flex-col items-center"
      >
        <img src="/images/mennekes.jpg" alt="MENNEKES" className="h-24" />
      </div>
      <div
        ref={(el) => {
          imageRefs.current[1] = el;
        }}
        className="flex flex-col items-center"
      >
        <img src="/images/klc.png" alt="KLC" className="h-24" />
      </div>
      <div
        ref={(el) => {
          imageRefs.current[2] = el;
        }}
        className="flex flex-col items-center"
      >
        <img src="/images/unilumin.jpg" alt="Unilumin" className="h-24" />
      </div>
    </div>
  );
}
