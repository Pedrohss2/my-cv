"use client";

import * as React from "react";
import useInView from "../../hooks/useInView";

export default function SkillCard({ children }: { children: React.ReactNode }) {
    const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.2 });

    return (
        <div ref={ref} className={` skill-card reveal ${inView ? "in-view" : ""} flex flex-col items-center justify-center text-center `}>
            <div className="title">{children}</div>
        </div>
    );
}
