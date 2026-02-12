"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
import CyberParticles from "../components/CyberParticles";
import NeuralLinkEffect from "../components/NeuralLinkEffect";
import ProjectCard from "../components/ProjectCard";
import ScrambleText from "../components/ScrambleText";
import GlitchText from "../components/GlitchText";
import CyberButton from "../components/CyberButton";
import { ChevronRight, Terminal, Zap, Briefcase, Cpu } from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const projects = [
    {
        title: "Portfolio Website",
        stack: "Next.js, Tailwind, Framer Motion",
        image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "E-Commerce Platform",
        stack: "React, Node.js, MongoDB",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Game Landing Page",
        stack: "Next.js, TypeScript, GSAP",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop",
        link: "#"
    },
    {
        title: "Red Protocol",
        stack: "App Development, Express",
        image: "https://images.unsplash.com/photo-1592478411213-61535fdd861d?q=80&w=2070&auto=format&fit=crop",
        link: "#"
    }
];

export default function Portfolio() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.98]);

    useEffect(() => {
        const sections = document.querySelectorAll(".reveal-section");

        sections.forEach((section) => {
            gsap.fromTo(section, {
                opacity: 0,
                y: 30,
                clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)"
            }, {
                opacity: 1,
                y: 0,
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                duration: 1,
                scrollTrigger: {
                    trigger: section,
                    start: "top 90%",
                    toggleActions: "play none none reverse"
                }
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <main ref={containerRef} className="relative min-h-screen w-full bg-[#0a0202] pt-24 lg:pt-32 pb-20 lg:pb-40 px-4 overflow-hidden">

            {/* Background System */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('/bg_apocalypse.png')] bg-cover bg-center brightness-[0.2] contrast-150 fixed opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black" />
                <CyberParticles />
                <NeuralLinkEffect />
            </div>

            <motion.div style={{ scale }} className="relative z-10 max-w-7xl mx-auto space-y-24">

                {/* Header Section */}
                <div className="text-center">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                        <h1 className="text-3xl md:text-5xl font-orbitron font-black text-white uppercase tracking-[0.2em] relative inline-block group cursor-default">
                            <GlitchText text="Mission Portfolio" trigger="hover" />
                            <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-red-600/30" />
                        </h1>
                    </motion.div>
                    <p className="mt-3 text-[10px] font-orbitron text-orange-600 uppercase tracking-[0.6em] font-bold opacity-70">
                        <ScrambleText text="RETRIEVING_DATA :: ASSET_LOGS" delay={500} />
                    </p>
                </div>

                {/* Sub-Header / Status Bar */}
                <div className="reveal-section flex flex-col md:flex-row justify-between items-center bg-black/40 border border-red-900/20 p-4 md:p-6 backdrop-blur-md">
                    <div className="flex items-center gap-4 mb-4 md:mb-0">
                        <div className="p-2 border border-red-900/40 text-red-600 animate-pulse">
                            <Briefcase size={18} />
                        </div>
                        <div>
                            <h3 className="text-xs font-orbitron text-white tracking-widest uppercase mb-1">Active Projects</h3>
                            <div className="flex gap-2">
                                <span className="text-[9px] font-orbitron text-red-700 bg-red-950/20 px-1.5 border border-red-950">STATUS: STABLE</span>
                                <span className="text-[9px] font-orbitron text-gray-500">COUNT: 04</span>
                            </div>
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center gap-10">
                        <div className="flex flex-col items-end">
                            <span className="text-[9px] font-orbitron text-gray-600 uppercase tracking-tighter">Render Engine</span>
                            <span className="text-xs font-orbitron text-red-800">GSAP / FRAMER</span>
                        </div>
                        <div className="h-8 w-[1px] bg-red-900/20" />
                        <div className="flex flex-col items-end">
                            <span className="text-[9px] font-orbitron text-gray-600 uppercase tracking-tighter">Sync Rate</span>
                            <span className="text-xs font-orbitron text-green-800">100% OPTIMAL</span>
                        </div>
                    </div>
                </div>

                {/* Grid System */}
                <section className="reveal-section">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-12 lg:gap-16">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="project-container group"
                                whileHover={{ y: -10 }}
                            >
                                <div className="mb-4 flex items-center gap-2 opacity-50 text-red-900">
                                    <span className="text-[9px] font-orbitron tracking-[0.5em]">MISSION_ID: 00{index + 1}</span>
                                    <div className="h-[1px] flex-1 bg-red-900/20" />
                                </div>
                                <ProjectCard {...project} />
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Bottom Interactive Zone */}
                <div className="flex justify-center pt-8 reveal-section">
                    <div className="bg-black/80 border border-red-900/30 p-8 text-center max-w-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Cpu className="text-red-700 mx-auto mb-4 animate-spin-slow" size={32} />
                        <h4 className="text-sm font-orbitron font-bold text-white uppercase tracking-widest mb-4">Initialize Custom Protocol?</h4>
                        <p className="text-xs font-rajdhani text-gray-400 mb-6 uppercase tracking-wide">
                            The system is ready to adapt to your specific requirements. Deploy a custom mission payload today.
                        </p>
                        <CyberButton variant="primary" className="!tracking-[0.6em] w-full">
                            DEPLOY_PROPOSAL
                        </CyberButton>
                    </div>
                </div>

            </motion.div>
        </main>
    );
}
