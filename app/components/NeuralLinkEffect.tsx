"use client";

import { useEffect, useRef } from "react";

export default function NeuralLinkEffect() {
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
            initNodes();
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

        // Node Class
        interface Node {
            x: number;
            y: number;
            vx: number;
            vy: number;
            size: number;
        }

        let nodes: Node[] = [];
        const nodeCount = 60;

        const initNodes = () => {
            nodes = [];
            for (let i = 0; i < nodeCount; i++) {
                nodes.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 0.5,
                    vy: (Math.random() - 0.5) * 0.5,
                    size: Math.random() * 2 + 1,
                });
            }
        };

        initNodes();

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Update and draw nodes
            nodes.forEach(node => {
                node.x += node.vx;
                node.y += node.vy;

                if (node.x < 0 || node.x > width) node.vx *= -1;
                if (node.y < 0 || node.y > height) node.vy *= -1;

                ctx.beginPath();
                ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
                ctx.fillStyle = "rgba(153, 27, 27, 0.4)"; // Red nodes
                ctx.fill();

                // Connect to mouse
                if (mouseRef.current.active) {
                    const dx = mouseRef.current.x - node.x;
                    const dy = mouseRef.current.y - node.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 200) {
                        ctx.beginPath();
                        ctx.moveTo(mouseRef.current.x, mouseRef.current.y);
                        ctx.lineTo(node.x, node.y);

                        // Dynamic alpha based on distance
                        const alpha = (1 - dist / 200) * 0.4;
                        ctx.strokeStyle = `rgba(220, 38, 38, ${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();

                        // Add a small splash/glow at the node connection
                        if (dist < 50) {
                            ctx.beginPath();
                            ctx.arc(node.x, node.y, node.size * 2, 0, Math.PI * 2);
                            ctx.fillStyle = `rgba(220, 38, 38, ${alpha})`;
                            ctx.fill();
                        }
                    }
                }
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseout", handleMouseLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 pointer-events-none"
        />
    );
}
