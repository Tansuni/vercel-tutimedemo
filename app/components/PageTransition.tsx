"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const contentRef = useRef<HTMLDivElement>(null);
  const [displayed, setDisplayed] = useState(children);

  useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    gsap.timeline()
      .to(content, {
        y: -60,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => setDisplayed(children),
      })
      .fromTo(
        content,
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
        }
      );
  }, [pathname]);

  return (
    <div ref={contentRef} style={{ willChange: "transform, opacity" }}>
      {displayed}
    </div>
  );
}