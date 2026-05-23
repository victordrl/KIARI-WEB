"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import * as I from "@/types/interface";

gsap.registerPlugin(SplitText);

const size = ["seccion-sm", "seccion-md", "seccion-lg", "seccion-xl"];

export default function SecDemo({
  size_i = 2,
  css
}: I.Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const playedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const title1 = title1Ref.current;
    const title2 = title2Ref.current;
    if (!section || !title1 || !title2) return;

    const ctx = gsap.context(() => {
      const split1 = new SplitText(title1, { type: "chars" });
      const split2 = new SplitText(title2, { type: "chars" });
      const chars = [...split1.chars, ...split2.chars];

      gsap.set(chars, {
        scaleY: () => Math.random() > 0.15 ? 0 : 1,
        transformOrigin: "50% 50%",
      });

      const tl = gsap.timeline({ paused: true });

      tl.to(chars, {
        scaleY: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: { each: 0.06, from: "random" },
      });

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !playedRef.current) {
            playedRef.current = true;
            tl.play();
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(section);
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`flex items-center bg-cover bg-center bg-no-repeat w-full h-screen ${size[size_i]} ${css}`}
    >
      <div className="flex flex-col justify-between w-full items-center py-12">
        <h1 ref={title1Ref} className="gigant-title" aria-label="SABALO">
          SÁBALO
        </h1>
        <h1 ref={title2Ref} className="gigant-title" aria-label="REY DE PLATA">
          REY DE PLATA
        </h1>
      </div>
    </section>
  );
}
