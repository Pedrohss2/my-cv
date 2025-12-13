"use client";

import { useEffect, useRef, useState } from "react";

export default function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
    const ref = useRef<T | null>(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                setInView(entry.isIntersecting);
            });
        }, options || { threshold: 0.2 });

        observer.observe(node);
        return () => observer.disconnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref.current]);

    return { ref, inView } as const;
}
