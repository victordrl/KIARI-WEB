"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function ScrolltriggerSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const clipRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const videoBgRef = useRef<HTMLVideoElement>(null);
  const playedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const title1 = title1Ref.current;
    const title2 = title2Ref.current;
    const clip = clipRef.current;
    const img = imgRef.current;
    const videoBg = videoBgRef.current;
    if (!section || !title1 || !title2 || !clip || !img || !videoBg) return;

    const ctx = gsap.context(() => {
      const split1 = new SplitText(title1, { type: "chars" });
      const split2 = new SplitText(title2, { type: "chars" });
      const chars = [...split1.chars, ...split2.chars];

      gsap.set(chars, {
        scale: 0,
        rotation: () => Math.random() * 360 - 180,
      });

      gsap.set(clip, {
        clipPath: "inset(10% 50% 10% 50%)",
        yPercent: 100,
        scale: 0.5,
      });

      gsap.set(img, {
        scale: 2,
        yPercent: 40,
      });

      const tl = gsap.timeline({ paused: true });

      tl.to(chars, {
        scale: 1,
        duration: 0.5,
        rotation: 0,
        ease: "expo.out",
        stagger: { each: 0.04, from: "random" },
      });

      tl.fromTo(
        clip,
        { clipPath: "inset(10% 50% 10% 50%)", yPercent: 100, scale: 0.5 },
        {
          ease: "power3",
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 0.8,
          yPercent: 0,
          scale: 1,
        },
        ">-0.2"
      );

      tl.fromTo(
        img,
        { scale: 2, yPercent: 40 },
        { scale: 1.8, duration: 0.6, yPercent: 0 },
        "<"
      );

      tl.to(clip, { scale: 1.5, duration: 0.4, ease: "linear" });
      tl.to(img, { scale: 1.3, duration: 0.4, ease: "linear" }, "<");

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !playedRef.current) {
            playedRef.current = true;
            videoBg.play().catch(() => {});
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
    <section className="scrolltrigger-sec h-screen relative overflow-hidden bg-black" ref={sectionRef}>
      <video
        ref={videoBgRef}
        src="/video/orda.mp4"
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50 z-10" />

      <div className="absolute inset-0 z-20">
        <div ref={clipRef} data-videogrow="video" className="w-full h-full overflow-hidden flex items-center justify-center">
          <img
            ref={imgRef}
            src="/img/sabalo_naranja.png"
            alt=""
            className="max-h-[55vh] max-w-[70%] object-contain"
            loading="lazy"
          />
        </div>
      </div>

      <div className="absolute inset-0 z-30 pointer-events-none flex items-start justify-center pt-[20vh]">
        <h1
          ref={title1Ref}
          className="main-slogan text-[13rem] text-white text-center"
          aria-label="SABALO"
        >
          SABALO
        </h1>
      </div>

      <div className="absolute inset-0 z-[5] pointer-events-none flex items-end justify-center pb-[20vh]">
        <h1
          ref={title2Ref}
          className="main-slogan text-[13rem] text-white text-center"
          aria-label="REY DE PLATA"
        >
          REY DE PLATA
        </h1>
      </div>
    </section>
  );
}
