"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function ScrolltriggerSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [explainerOpen, setExplainerOpen] = useState(false);
  const playedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const video = videoRef.current;
    const img = imgRef.current;
    if (!section || !title || !video || !img) return;

    const ctx = gsap.context(() => {
      const splits = new SplitText(title, { type: "chars" });
      const chars = splits.chars;

      gsap.set(chars, {
        scale: 0,
        rotation: () => Math.random() * 360 - 180,
      });

      gsap.set(video, {
        clipPath: "inset(10% 50% 10% 50%)",
        yPercent: 100,
        scale: 0.5,
      });

      gsap.set(img, {
        scale: 2.8,
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
        video,
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
        { scale: 2.8, yPercent: 40 },
        { scale: 1.2, duration: 0.6, yPercent: 0 },
        "<"
      );

      tl.to(video, { scale: 0.9, duration: 0.4, ease: "linear" });
      tl.to(img, { scale: 1, duration: 0.4, ease: "linear" }, "<");

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
      className="scrolltrigger-sec h-screen relative overflow-hidden"
    >
      <div className="comp-video">
        <div
          ref={titleRef}
          data-videogrow="title"
          className="font-c size-screen overflow-cut"
          aria-label="SABALO - REY DE PLATA"
        >
          SABALO - REY DE PLATA
        </div>
      </div>
      <div className="layer">
        <div ref={videoRef} data-videogrow="video" className="sky-scroller">
          <img
            ref={imgRef}
            src="/img/sabalo_naranja.png"
            alt=""
            className="img-sky"
            loading="lazy"
          />
        </div>
      </div>
      <div className="layer flex-b z-3">
        <div className="explainer-w">
          <div className="explainer-comp">
            <label
              className="explainer-label"
              onClick={() => setExplainerOpen(!explainerOpen)}
            >
              <input
                type="checkbox"
                className="explainer-input"
                checked={explainerOpen}
                readOnly
              />
              <span className="explainer-span">
                <span className="explainer-he">Scroll with purpose</span>
                <span className="plus-icon-w">
                  <span
                    className={`plus-line ${explainerOpen ? "rotate" : ""}`}
                  />
                  <span className="plus-line" />
                </span>
              </span>
            </label>
            <div
              className={`explainer-expandable-w ${explainerOpen ? "open" : ""}`}
            >
              <div className="explainer-overflow">
                <div className="explainer-content-w">
                  <p className="explainer-par">
                    Start animations when elements enter the viewport, scrub
                    through timelines, pin elements in place, or snap to key
                    points as users scroll.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
