"use client";

import { useEffect, useRef } from "react";

export default function CyberParticles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        // Resize handler
        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };
        window.addEventListener("resize", handleResize);

        // Particle Class
        class Particle {
            x: number;
            y: number;
            size: number;
            speedY: number;
            color: string;
            opacity: number;

            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height + height; // Start below
                this.size = Math.random() * 3 + 1; // 1 to 4px
                this.speedY = Math.random() * 1.5 + 0.5;
                this.opacity = Math.random() * 0.5 + 0.1;

                // Apocalyptic colors: Red, Orange, Amber, White
                const colors = ["rgba(220, 38, 38,", "rgba(234, 88, 12,", "rgba(255, 255, 255,", "rgba(245, 158, 11,"];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.y -= this.speedY; // Move up (like embers/ash)
                if (this.y < 0) {
                    this.y = height + Math.random() * 100;
                    this.x = Math.random() * width;
                }
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = `${this.color}${this.opacity})`;
                ctx.fillRect(this.x, this.y, this.size, this.size); // Square particles for digital feel
            }
        }

        const particleCount = 70;
        const particles: Particle[] = [];
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
            // Scatter initial Y positions
            particles[i].y = Math.random() * height;
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            particles.forEach((p) => {
                p.update();
                p.draw();
            });
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none mix-blend-screen"
            style={{ opacity: 0.6 }}
        />
    );
}
