import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useGsapPinSection(selector: string, extraScroll = 2000) {
  useLayoutEffect(() => {
    const section = document.querySelector(selector);
    if (!section) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${extraScroll}`, // cuánto dura el pin
        pin: true,
        pinSpacing: true,
        scrub: 1,
      });
    }, section);

    return () => ctx.revert();
  }, [selector, extraScroll]);
}
