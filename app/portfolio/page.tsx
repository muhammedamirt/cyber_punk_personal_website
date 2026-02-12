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
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        link: "#"
    }
];

const miniProjects = [
    { id: "MINJI_01X", title: "Neural_Chat_v1", status: "STABLE", type: "AI_MOD" },
    { id: "MINJI_02X", title: "Binary_Vault", status: "STABLE", type: "SEC_MOD" },
    { id: "MINJI_03X", title: "Grid_Runner_JS", status: "STABLE", type: "EX_MOD" },
    { id: "MINJI_04X", title: "Core_Shield", status: "STABLE", type: "SYS_MOD" },
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

                {/* Main Grid System */}
                <section className="reveal-section">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-1 h-6 bg-red-600 shadow-[0_0_10px_red]" />
                        <h2 className="text-xl font-orbitron font-black text-white uppercase tracking-[0.4em]">Primary Deployment</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                className="project-container group"
                                whileHover={{ y: -10, scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
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

                {/* Mini Protocol Artifacts (Minji Sections) */}
                <section className="reveal-section">
                    <div className="flex items-center justify-between mb-10">
                        <div className="flex items-center gap-3">
                            <div className="w-1 h-6 bg-orange-600 shadow-[0_0_10px_orange]" />
                            <h2 className="text-xl font-orbitron font-black text-white uppercase tracking-[0.4em]">Mini Protocol Artifacts</h2>
                        </div>
                        <div className="text-[8px] font-orbitron text-gray-500 uppercase tracking-widest bg-red-950/20 px-3 py-1 border border-red-900/20 translate-y-1">
                            LOG: MINJI_SUBSYSTEM_v4
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {miniProjects.map((mini, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                whileHover={{ scale: 1.05, borderColor: "rgba(220,38,38,0.5)" }}
                                className="bg-black/40 border border-red-900/20 p-5 relative group overflow-hidden cursor-crosshair"
                            >
                                {/* Animated Scanline */}
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-600/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-linear" />

                                <div className="flex justify-between items-start mb-4">
                                    <span className="text-[10px] font-orbitron text-red-600">{mini.id}</span>
                                    <div className="flex gap-1">
                                        <div className="w-1 h-1 bg-red-600 animate-pulse" />
                                        <div className="w-1 h-1 bg-red-950" />
                                    </div>
                                </div>

                                <h4 className="text-md font-orbitron font-bold text-white mb-2 group-hover:text-red-500 transition-colors uppercase">
                                    {mini.title}
                                </h4>

                                <div className="flex items-center gap-2 mt-4 pt-4 border-t border-red-900/10">
                                    <span className="text-[8px] font-orbitron text-gray-500 uppercase tracking-tighter">TYPE: {mini.type}</span>
                                    <div className="h-2 w-[1px] bg-red-900/40" />
                                    <span className="text-[8px] font-orbitron text-green-600 uppercase tracking-tighter">{mini.status}</span>
                                </div>

                                {/* Industrial Accents */}
                                <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-red-950/40" />
                                <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-red-950/40" />
                            </motion.div>
                        ))}
                    </div>
                </section>

                {/* Neural matrix / Technical Nodes Section */}
                <section className="reveal-section">
                    <div className="flex items-center gap-3 mb-10">
                        <div className="w-1 h-6 bg-red-900" />
                        <h2 className="text-xl font-orbitron font-black text-white uppercase tracking-[0.4em]">Neural Matrix</h2>
                    </div>

                    <div className="bg-black/40 border border-red-900/10 p-10 relative overflow-hidden backdrop-blur-md">
                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />

                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 relative z-10">
                            {["REACT", "NODE", "GSAP", "AWS", "DOCR", "MONG"].map((tech, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.1 }}
                                    className="flex flex-col items-center gap-3"
                                >
                                    <div className="w-16 h-16 border border-red-900/40 flex items-center justify-center relative group/tech overflow-hidden">
                                        <div className="absolute inset-0 bg-red-600 opacity-0 group-hover/tech:opacity-10 group-hover/tech:scale-150 transition-all duration-500" />
                                        <span className="text-xs font-orbitron font-black text-red-950 group-hover:text-red-500 transition-colors">
                                            {tech}
                                        </span>
                                        {/* Corner Deco */}
                                        <div className="absolute top-0 left-0 w-1 h-1 bg-red-900" />
                                        <div className="absolute bottom-0 right-0 w-1 h-1 bg-red-900" />
                                    </div>
                                    <div className="w-full h-1 bg-red-950/30 overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "80%" }}
                                            transition={{ duration: 1, delay: i * 0.1 }}
                                            className="h-full bg-red-600 opacity-60"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Background Data Decoration */}
                        <div className="absolute bottom-4 right-4 text-[7px] font-mono text-red-950/40 leading-none pointer-events-none">
                            {Array(5).fill("0110111010101110101110101110101011101011101").join("\n")}
                        </div>
                    </div>
                </section>

                {/* Bottom Interactive Zone */}
                <div className="flex justify-center pt-8 reveal-section">
                    <div className="bg-black/80 border border-red-900/30 p-8 text-center max-w-2xl relative overflow-hidden group">
                        <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <Cpu className="text-red-700 mx-auto mb-4 animate-spin-slow" size={32} />
                        <h4 className="text-sm font-orbitron font-bold text-white uppercase tracking-widest mb-4">Initialize Custom Protocol?</h4>
                        <p className="text-xs font-rajdhani text-gray-400 mb-6 uppercase tracking-wide">
                            Ready to collaborate on high-scale engineering projects. Initiate a custom technical proposal and deploy your next mission.
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
