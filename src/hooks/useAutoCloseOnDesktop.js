'use client'
import { useEffect } from "react";

export function useAutoCloseOnDesktop(closeFn, breakpoint = 768) {
    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= breakpoint) {
                closeFn();
            }
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [closeFn, breakpoint]);
}
