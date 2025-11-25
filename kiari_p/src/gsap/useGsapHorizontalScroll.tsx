import { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function useGsapHorizontalScroll(selector: string) {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray<HTMLElement>(selector);

    const ctx = gsap.context(() => {
      sections.forEach((section, index) => {
        const wrapper = section.querySelector(".wrapper") as HTMLElement;
        if (!wrapper) return;

        const scrollWidth = wrapper.scrollWidth;
        const viewportWidth = section.offsetWidth;

        const fromX = index % 2 === 0 ? -scrollWidth : viewportWidth;
        const toX = index % 2 === 0 ? 0 : -(scrollWidth - viewportWidth);

        gsap.fromTo(
          wrapper,
          { x: fromX },
          {
            x: toX,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              scrub: 0.5,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, [selector]);
}
