"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function ScrolltriggerSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [explainerOpen, setExplainerOpen] = useState(false);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const title = titleRef.current;
    const video = videoRef.current;
    const img = imgRef.current;
    if (!section || !title || !video || !img) return;

    const ctx = gsap.context(() => {
      const splits = new SplitText(title, { type: "chars" });
      const chars = splits.chars;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom bottom+=100%",
          invalidateOnRefresh: true,
          scrub: 1,
        },
      });

      gsap.set(chars, {
        scale: 0,
        rotation: () => Math.random() * 360 - 180,
      });

      tl.to(chars, {
        scale: 1,
        duration: 0.2,
        rotation: 0,
        ease: "expo.out",
        stagger: { each: 0.05, from: "random" },
      });

      tl.fromTo(
        video,
        { clipPath: "inset(10% 50% 10% 50%)", yPercent: 100 },
        {
          ease: "power3",
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1,
          yPercent: 0,
        },
        ".3"
      );

      tl.fromTo(
        video,
        { scale: 0.5 },
        { ease: "back.inOut(.2)", scale: 1, duration: 0.8 },
        "<"
      );

      tl.fromTo(
        img,
        { scale: 2.8, yPercent: 40 },
        { scale: 1.2, duration: 0.8, delay: 0.2, yPercent: 0 },
        "<"
      );

      tl.to(video, { scale: 0.9, ease: "linear" });
      tl.to(img, { scale: 1, ease: "linear" }, "<");
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="scrolltrigger"
      data-animate="videogrow"
      className="scrolltrigger-sec"
    >
      <div className="sticky-w">
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
          <div
            ref={videoRef}
            data-videogrow="video"
            className="sky-scroller"
          >
            <img
              ref={imgRef}
              src="/img/sabalo_naranja.png"
              alt=""
              className="img-sky"
              loading="lazy"
            />
          </div>
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
