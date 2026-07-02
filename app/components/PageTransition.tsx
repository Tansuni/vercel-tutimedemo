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
  scale: 0.05,
  opacity: 0,
  filter: "blur(20px) brightness(3)",
  duration: 0.6,
  ease: "expo.in",  // ここ
  onComplete: () => setDisplayed(children),
})
      .fromTo(
        content,
        {
          scale: 8,
          opacity: 0,
          filter: "blur(30px) brightness(3)",
        },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px) brightness(1)",
          duration: 0.6,
          ease: "power3.out",
        }
      );
  }, [pathname]);

  return (
    <div ref={contentRef} style={{ willChange: "transform, filter" }}>
      {displayed}
    </div>
  );
}