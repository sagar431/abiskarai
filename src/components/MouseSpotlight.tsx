"use client";

import { useEffect, useRef } from "react";

export function MouseSpotlight() {
    const containerRef = useRef<HTMLDivElement>(null);
    const blobRef = useRef<HTMLDivElement>(null);
    const mousePosition = useRef({ x: 0, y: 0 });
    const blobPosition = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const container = containerRef.current;
        const blob = blobRef.current;

        if (!container || !blob) return;

        const handleMouseMove = (event: MouseEvent) => {
            const { clientX, clientY } = event;
            const rect = container.getBoundingClientRect();
            mousePosition.current = {
                x: clientX - rect.left,
                y: clientY - rect.top
            };
        };

        let animationFrameId: number;

        const updatePosition = () => {
            // Smooth lerp for the "following" effect
            const dx = mousePosition.current.x - blobPosition.current.x;
            const dy = mousePosition.current.y - blobPosition.current.y;

            blobPosition.current.x += dx * 0.05; // Adjust speed here (lower = slower/smoother)
            blobPosition.current.y += dy * 0.05;

            blob.style.transform = `translate(${blobPosition.current.x}px, ${blobPosition.current.y}px) translate(-50%, -50%)`;

            animationFrameId = requestAnimationFrame(updatePosition);
        };

        window.addEventListener("mousemove", handleMouseMove);
        updatePosition();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className="absolute inset-0 -z-10 overflow-hidden pointer-events-none"
            aria-hidden="true"
        >
            <div
                ref={blobRef}
                className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 blur-[120px] opacity-40 will-change-transform"
            />
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `linear-gradient(to right, #8882 1px, transparent 1px),
            linear-gradient(to bottom, #8882 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
                }}
            />
        </div>
    );
}
