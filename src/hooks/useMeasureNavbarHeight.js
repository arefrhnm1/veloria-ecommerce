'use client'
import { useEffect } from "react";

export function useMeasureNavbarHeight(ref) {
  useEffect(() => {
    if (!ref.current) return;

    const update = () => {
      const height = ref.current.offsetHeight;
      document.documentElement.style.setProperty(
        "--navbar-height",
        `${height}px`
      );
    };

    update();

    // در صورت ریسایز
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [ref]);
}
