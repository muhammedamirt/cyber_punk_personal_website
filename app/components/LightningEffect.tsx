"use client";

import { useEffect, useRef } from "react";

export default function LightningEffect() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseRef = useRef({ x: 0, y: 0, active: false });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
        };

        const handleMouseLeave = () => {
            mouseRef.current.active = false;
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseout", handleMouseLeave);

        // Lightning Bolt Class
        interface Bolt {
            segments: { x: number; y: number }[];
            alpha: number;
            life: number;
        }

        let bolts: Bolt[] = [];

        const createBolt = (x: number, y: number) => {
            const segments = [{ x, y }];
            let currX = x;
            let currY = y;

            // Create a jagged path
            const length = Math.random() * 100 + 50; // Length of bolt
            const steps = 10;

            for (let i = 0; i < steps; i++) {
                currX += (Math.random() - 0.5) * 30; // Random horizontal jitter
                currY += (Math.random() - 0.5) * 30; // Random vertical jitter
                segments.push({ x: currX, y: currY });
            }

            bolts.push({ segments, alpha: 1, life: Math.random() * 10 + 5 });
        };

        const loop = () => {
            // Clear with fade effect for trail
            ctx.globalCompositeOperation = "destination-out";
            ctx.fillStyle = `rgba(0, 0, 0, 0.1)`;
            ctx.fillRect(0, 0, width, height);

            ctx.globalCompositeOperation = "lighter";

            // Spawn bolts near mouse if active
            if (mouseRef.current.active && Math.random() > 0.85) { // Chance to spawn
                // Spawn random bolts around the mouse
                const offsetX = (Math.random() - 0.5) * 200;
                const offsetY = (Math.random() - 0.5) * 200;
                createBolt(mouseRef.current.x + offsetX, mouseRef.current.y + offsetY);
            }

            // Draw Bolts
            for (let i = bolts.length - 1; i >= 0; i--) {
                const b = bolts[i];
                b.life--;
                b.alpha = b.life / 20;

                if (b.life <= 0) {
                    bolts.splice(i, 1);
                    continue;
                }

                ctx.beginPath();
                ctx.moveTo(b.segments[0].x, b.segments[0].y);
                for (let j = 1; j < b.segments.length; j++) {
                    ctx.lineTo(b.segments[j].x, b.segments[j].y);
                }

                // Glow
                ctx.shadowBlur = 15;
                ctx.shadowColor = "rgba(239, 68, 68, 0.8)"; // Red glow
                ctx.strokeStyle = `rgba(254, 215, 170, ${b.alpha})`; // Orange/Gold core
                ctx.lineWidth = 2;
                ctx.stroke();

                // Second inner stroke for brightness
                ctx.shadowBlur = 0;
                ctx.strokeStyle = `rgba(255, 255, 255, ${b.alpha})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }

            requestAnimationFrame(loop);
        };

        loop();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseout", handleMouseLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-20 pointer-events-none"
        />
    );
}
