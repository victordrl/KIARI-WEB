"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import * as I from "@/types/interface";

gsap.registerPlugin(SplitText);

const size = ["seccion-sm", "seccion-md", "seccion-lg", "seccion-xl"];
const NUM_POINTS = 10;
const NUM_PATHS = 2;

export default function SecDemo({
  size_i = 2,
  css
}: I.Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const playedRef = useRef(false);
  const overlayRef = useRef<SVGSVGElement>(null);
  const pathRefs = useRef<SVGPathElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const isOpenedRef = useRef(false);
  const allPointsRef = useRef<number[][]>([[], []]);

  useEffect(() => {
    const section = sectionRef.current;
    const title1 = title1Ref.current;
    const title2 = title2Ref.current;
    const overlay = overlayRef.current;
    const paths = pathRefs.current;
    if (!section || !title1 || !title2 || !overlay || !paths[0] || !paths[1]) return;

    const ctx = gsap.context(() => {
      const split1 = new SplitText(title1, { type: "chars" });
      const split2 = new SplitText(title2, { type: "chars" });
      const chars = [...split1.chars, ...split2.chars];

      gsap.set(chars, {
        scaleY: () => Math.random() > 0.15 ? 0 : 1,
        transformOrigin: "50% 50%",
      });

      const tlLetters = gsap.timeline({ paused: true });

      tlLetters.to(chars, {
        scaleY: 1,
        duration: 1.2,
        ease: "power3.out",
        stagger: { each: 0.06, from: "random" },
      });

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !playedRef.current) {
            playedRef.current = true;
            tlLetters.play();
            observer.disconnect();
          }
        },
        { threshold: 0.3 }
      );

      observer.observe(section);

      const allPoints = allPointsRef.current;
      for (let i = 0; i < NUM_PATHS; i++) {
        allPoints[i] = [];
        for (let j = 0; j < NUM_POINTS; j++) {
          allPoints[i].push(100);
        }
      }

      const tl = gsap.timeline({
        onUpdate: () => render(paths, allPoints, isOpenedRef.current),
        defaults: { ease: "power2.inOut", duration: 0.9 },
      });
      tlRef.current = tl;

      function onClick() {
        if (!tl.isActive()) {
          isOpenedRef.current = !isOpenedRef.current;
          toggle(allPoints, tl, isOpenedRef.current);
        }
      }

      overlay.addEventListener("click", onClick);

      toggle(allPoints, tl, isOpenedRef.current);

      return () => {
        overlay.removeEventListener("click", onClick);
      };
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`relative flex items-center w-full h-screen overflow-hidden ${size[size_i]} ${css}`}
    >
      <video
        src="/video/orda.mp4"
        muted
        loop
        playsInline
        autoPlay
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 bg-black/50 z-5" />

      <div className="relative z-10 flex flex-col justify-between w-full items-center py-12 mix-blend-overlay ">
        <h1 ref={title1Ref} className="gigant-title" aria-label="SABALO">
          SÁBALO
        </h1>
        <h1 ref={title2Ref} className="gigant-title" aria-label="REY DE PLATA">
          REY DE PLATA
        </h1>
      </div>

      <svg
        ref={overlayRef}
        className="shape-overlays absolute inset-0 w-full h-full z-50 cursor-pointer"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff8709" />
            <stop offset="100%" stopColor="#f7bdf8" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffd9b0" />
            <stop offset="100%" stopColor="#ff8709" />
          </linearGradient>
        </defs>
        <path
          ref={(el) => { if (el) pathRefs.current[0] = el; }}
          className="shape-overlays__path"
          fill="url(#gradient2)"
        />
        <path
          ref={(el) => { if (el) pathRefs.current[1] = el; }}
          className="shape-overlays__path"
          fill="url(#gradient1)"
        />
      </svg>
    </section>
  );
}

function toggle(
  allPoints: number[][],
  tl: gsap.core.Timeline,
  isOpened: boolean
) {
  tl.progress(0).clear();

  const delayPointsMax = 0.3;
  const delayPerPath = 0.25;

  const pointsDelay: number[] = [];
  for (let i = 0; i < NUM_POINTS; i++) {
    pointsDelay[i] = Math.random() * delayPointsMax;
  }

  for (let i = 0; i < NUM_PATHS; i++) {
    const points = allPoints[i];
    const pathDelay = delayPerPath * (isOpened ? i : (NUM_PATHS - i - 1));

    for (let j = 0; j < NUM_POINTS; j++) {
      tl.to(points, {
        [j]: 0,
      }, pointsDelay[j] + pathDelay);
    }
  }
}

function render(
  paths: SVGPathElement[],
  allPoints: number[][],
  isOpened: boolean
) {
  for (let i = 0; i < NUM_PATHS; i++) {
    const path = paths[i];
    const points = allPoints[i];
    if (!path || !points) continue;

    let d = "";
    d += isOpened ? `M 0 0 V ${points[0]} C` : `M 0 ${points[0]} C`;

    for (let j = 0; j < NUM_POINTS - 1; j++) {
      const p = ((j + 1) / (NUM_POINTS - 1)) * 100;
      const cp = p - (1 / (NUM_POINTS - 1) * 100) / 2;
      d += ` ${cp} ${points[j]} ${cp} ${points[j + 1]} ${p} ${points[j + 1]}`;
    }

    d += isOpened ? ` V 100 H 0` : ` V 0 H 0`;
    path.setAttribute("d", d);
  }
}
