"use client";

import { useEffect, useState } from "react";
import { useRef } from "react";

export function LicensedEngineersBadge() {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-80px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let frame = 0;
    const totalFrames = 36;
    const timer = window.setInterval(() => {
      frame += 1;
      setCount(Math.min(3, Math.ceil((frame / totalFrames) * 3)));
      if (frame >= totalFrames) window.clearInterval(timer);
    }, 28);

    return () => window.clearInterval(timer);
  }, [isInView]);

  return (
    <div
      ref={ref}
      className={`mt-8 overflow-hidden rounded-lg border border-gold-500/35 bg-navy-950 text-white shadow-premium transition duration-700 ease-out ${
        isInView ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      }`}
    >
      <div className="grid items-center gap-4 p-5 sm:grid-cols-[auto_1fr] sm:p-6">
        <div className="text-center sm:text-left">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-gold-300">We Have</p>
          <p className="leading-none text-[7rem] font-black tracking-normal text-white sm:text-[8.5rem] md:text-[9.5rem]">
            {count}
          </p>
        </div>
        <div className="border-t border-white/12 pt-4 text-center sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0 sm:text-left">
          <p className="text-2xl font-black leading-tight text-white sm:text-3xl md:text-4xl">Licensed Structural Engineers</p>
          <p className="mt-3 max-w-xl text-sm font-semibold leading-7 text-white/72">
            In-house licensed structural engineering strength for audits, stability guidance, repair design and society project decisions.
          </p>
        </div>
      </div>
    </div>
  );
}
