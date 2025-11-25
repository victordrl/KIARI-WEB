import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useGridZoomOut = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".galeria-container",
          start: "top top",
          end: () => window.innerHeight * 4,
          scrub: true,
          pin: ".galeria-grid",
          anticipatePin: 1,
        },
      });

      tl.set(".grid-item", { autoAlpha: 0 })
        .to(".grid-item", { autoAlpha: 1, duration: 0.1 }, 0.001)
        .from(".grid-layer", { scale: 3.3, ease: "none" });
    });

    return () => ctx.revert();
  }, []);
};
