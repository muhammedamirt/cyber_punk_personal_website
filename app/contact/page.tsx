"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { motion, useScroll, useTransform } from "framer-motion";
import CyberParticles from "../components/CyberParticles";
import NeuralLinkEffect from "../components/NeuralLinkEffect";
import ScrambleText from "../components/ScrambleText";
import GlitchText from "../components/GlitchText";
import {
    Mail,
    Send,
    Github,
    Twitter,
    Linkedin,
    Instagram,
    Terminal,
    ChevronRight,
    Zap,
    Cpu,
    Radio
} from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export default function Contact() {
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
        <main ref={containerRef} className="relative min-h-screen w-full bg-[#0a0202] pt-32 pb-40 px-4 overflow-hidden">

            {/* Background System */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-[url('/bg_apocalypse.png')] bg-cover bg-center brightness-[0.2] contrast-150 fixed opacity-60" />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/20 to-black" />
                <CyberParticles />
                <NeuralLinkEffect />

                {/* Unique Contact HUD Overlays */}
                <div className="absolute top-1/4 left-10 w-[1px] h-1/2 bg-gradient-to-b from-transparent via-red-900/30 to-transparent" />
                <div className="absolute top-1/4 right-10 w-[1px] h-1/2 bg-gradient-to-b from-transparent via-red-900/30 to-transparent" />
            </div>

            <motion.div style={{ scale }} className="relative z-10 max-w-7xl mx-auto space-y-24">

                {/* Header Section */}
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-4 bg-red-600/5 blur-xl group-hover:bg-red-600/10 transition-all duration-700" />
                        <h1 className="text-4xl md:text-6xl font-orbitron font-black text-white uppercase tracking-[0.3em] relative">
                            <GlitchText text="Uplink Center" trigger="always" />
                        </h1>
                    </motion.div>
                    <div className="mt-6 flex items-center gap-6">
                        <div className="h-[1px] w-12 bg-red-900/40" />
                        <p className="text-[10px] font-orbitron text-orange-600 uppercase tracking-[0.6em] font-bold">
                            <ScrambleText text="ESTABLISHING_COMM :: PROTOCOL_8" delay={500} />
                        </p>
                        <div className="h-[1px] w-12 bg-red-900/40" />
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Left: Terminal Hub & Social Uplink */}
                    <div className="lg:col-span-5 space-y-10">

                        {/* Connection Status Module */}
                        <section className="reveal-section relative">
                            <div className="bg-black/60 border border-red-900/40 p-10 relative overflow-hidden group backdrop-blur-2xl">
                                {/* Industrial Grid Background */}
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.05)_1px,transparent_1px)] bg-[size:20px_20px] opacity-30" />

                                <div className="relative z-10">
                                    <div className="flex items-center justify-between mb-10">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-6 bg-red-600 shadow-[0_0_15px_red] animate-pulse" />
                                            <h3 className="text-sm font-orbitron font-black text-white tracking-widest uppercase">Live Uplink</h3>
                                        </div>
                                        <div className="flex gap-1 items-end h-4">
                                            {[0.4, 0.7, 1, 0.6, 0.9].map((h, i) => (
                                                <motion.div
                                                    key={i}
                                                    animate={{ height: [`${h * 100}%`, `${(1 - h) * 100}%`, `${h * 100}%`] }}
                                                    transition={{ repeat: Infinity, duration: 1, delay: i * 0.1 }}
                                                    className="w-1 bg-red-600/60"
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    <div className="space-y-8">
                                        <motion.a
                                            href="mailto:contact@amir.dev"
                                            whileHover={{ x: 10 }}
                                            className="group block relative"
                                        >
                                            <div className="p-6 bg-red-950/10 border border-red-900/20 group-hover:border-red-600/50 transition-all">
                                                <div className="flex items-center gap-5">
                                                    <div className="p-3 bg-red-900/20 text-red-600 group-hover:bg-red-600 group-hover:text-black transition-all">
                                                        <Mail size={24} />
                                                    </div>
                                                    <div>
                                                        <span className="block text-[8px] font-orbitron text-gray-600 uppercase tracking-[0.2em] mb-1">Direct Terminal</span>
                                                        <span className="text-white font-rajdhani text-xl tracking-wider group-hover:text-red-500 transition-colors">AAMIRR.DEV@CORE.SYS</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <ChevronRight className="text-red-600" />
                                            </div>
                                        </motion.a>

                                        <div className="pt-6">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="h-[1px] flex-1 bg-red-900/20" />
                                                <span className="text-[10px] font-orbitron text-gray-500 tracking-widest uppercase">Peripheral Nodes</span>
                                                <div className="h-[1px] flex-1 bg-red-900/20" />
                                            </div>

                                            <div className="grid grid-cols-2 gap-4">
                                                {[
                                                    { icon: <Github size={20} />, label: "GitHub", tag: "CORE_REPOS", color: "hover:text-white" },
                                                    { icon: <Linkedin size={20} />, label: "LinkedIn", tag: "NEURAL_LINK", color: "hover:text-blue-500" },
                                                    { icon: <Twitter size={20} />, label: "X_Corp", tag: "SIGNAL_NODE", color: "hover:text-gray-400" },
                                                    { icon: <Instagram size={20} />, label: "Insta", tag: "@_.AAMIRR__", color: "hover:text-pink-500" }
                                                ].map((social, i) => (
                                                    <motion.button
                                                        key={i}
                                                        whileHover={{ y: -5, backgroundColor: "rgba(127, 29, 29, 0.2)" }}
                                                        className="flex flex-col p-4 border border-red-900/20 bg-black/40 text-left group/node"
                                                    >
                                                        <div className={`text-red-900 ${social.color} transition-colors mb-3`}>
                                                            {social.icon}
                                                        </div>
                                                        <span className="text-[10px] font-orbitron text-white group-hover/node:text-red-500 transition-colors">{social.label}</span>
                                                        <span className="text-[7px] font-orbitron text-gray-600 tracking-tighter">{social.tag}</span>
                                                    </motion.button>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Industrial Decorations */}
                                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-red-600 z-20" />
                                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-red-600 z-20" />
                            </div>
                        </section>

                        {/* Quote Module */}
                        <section className="reveal-section">
                            <div className="p-8 border-l-2 border-red-600 bg-gradient-to-r from-red-600/5 to-transparent backdrop-blur-sm">
                                <Terminal size={14} className="text-red-600 mb-4" />
                                <p className="text-gray-400 font-rajdhani text-lg italic leading-relaxed tracking-wide">
                                    "Efficiency and precision are the cornerstones of high-performance systems. I respond to all technical queries within a <span className="text-white font-bold font-orbitron">24-hour cycle</span>."
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* Right: Transmission Command Center */}
                    <div className="lg:col-span-7">
                        <section className="reveal-section relative">
                            <div className="absolute -inset-0.5 bg-gradient-to-br from-red-600/20 to-transparent blur opacity-20" />
                            <form className="bg-black/80 border border-red-900/30 p-10 md:p-14 relative overflow-hidden backdrop-blur-3xl space-y-10 group/form">

                                <div className="flex items-center justify-between mb-4">
                                    <div className="text-[10px] font-orbitron text-red-600 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping" />
                                        COMMAND_INPUT_ACTIVE
                                    </div>
                                    <div className="text-[10px] font-orbitron text-gray-600 uppercase tracking-widest">
                                        Buffer: 0KB / 1024KB
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                    <div className="group/input relative space-y-2">
                                        <label className="text-[9px] font-orbitron text-gray-500 uppercase tracking-[0.3em] pl-1 group-focus-within/input:text-red-500 transition-colors">Ident Name</label>
                                        <input
                                            type="text"
                                            placeholder="GUEST_ID"
                                            className="w-full bg-red-950/5 border border-red-900/30 p-5 text-white font-rajdhani focus:bg-red-900/10 focus:border-red-600 focus:outline-none transition-all placeholder:text-gray-800 tracking-widest text-lg"
                                        />
                                        <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-red-600 group-focus-within/input:w-full transition-all duration-500" />
                                    </div>
                                    <div className="group/input relative space-y-2">
                                        <label className="text-[9px] font-orbitron text-gray-500 uppercase tracking-[0.3em] pl-1 group-focus-within/input:text-red-500 transition-colors">Freq Address</label>
                                        <input
                                            type="email"
                                            placeholder="UPLINK_SOURCE"
                                            className="w-full bg-red-950/5 border border-red-900/30 p-5 text-white font-rajdhani focus:bg-red-900/10 focus:border-red-600 focus:outline-none transition-all placeholder:text-gray-800 tracking-widest text-lg"
                                        />
                                        <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-red-600 group-focus-within/input:w-full transition-all duration-500" />
                                    </div>
                                </div>

                                <div className="group/input relative space-y-2">
                                    <label className="text-[9px] font-orbitron text-gray-500 uppercase tracking-[0.3em] pl-1 group-focus-within/input:text-red-500 transition-colors">Protocol Selection</label>
                                    <div className="relative">
                                        <select className="w-full bg-red-950/5 border border-red-900/30 p-5 text-white font-rajdhani focus:bg-red-900/10 focus:border-red-600 focus:outline-none transition-all appearance-none cursor-pointer tracking-widest text-lg">
                                            <option>NEW_PROJECT_BUILD</option>
                                            <option>ARCHITECTURE_AUDIT</option>
                                            <option>STRATEGIC_COLLAB</option>
                                            <option>GENERAL_QUERY</option>
                                        </select>
                                        <ChevronRight className="absolute right-6 top-1/2 -translate-y-1/2 text-red-900 pointer-events-none rotate-90" size={18} />
                                    </div>
                                </div>

                                <div className="group/input relative space-y-2">
                                    <label className="text-[9px] font-orbitron text-gray-500 uppercase tracking-[0.3em] pl-1 group-focus-within/input:text-red-500 transition-colors">Transmission Payload</label>
                                    <textarea
                                        rows={6}
                                        placeholder="ENCODE_MESSAGE_HERE..."
                                        className="w-full bg-red-950/5 border border-red-900/30 p-5 text-white font-rajdhani focus:bg-red-900/10 focus:border-red-600 focus:outline-none transition-all resize-none placeholder:text-gray-800 tracking-widest text-lg"
                                    ></textarea>
                                    <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-red-600 group-focus-within/input:w-full transition-all duration-500" />
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.01 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full group/btn relative flex items-center justify-center gap-6 bg-red-600 py-6 text-black font-orbitron font-black text-sm tracking-[0.6em] overflow-hidden transition-all duration-300"
                                >
                                    <div className="absolute inset-0 bg-white translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500 opacity-20" />
                                    <Send size={20} className="relative z-10 group-hover/btn:rotate-12 transition-transform" />
                                    <span className="relative z-10">INITIALIZE TRANSMISSION</span>
                                </motion.button>

                                {/* Bottom Form Decoration */}
                                <div className="flex justify-between items-center pt-8 border-t border-red-900/10 opacity-20">
                                    <div className="text-[8px] font-mono whitespace-nowrap overflow-hidden w-full text-red-900">
                                        {Array(50).fill("A-X-Z ").join("")}
                                    </div>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>

                {/* Status Bar Footer */}
                <div className="flex justify-center pt-12 reveal-section">
                    <div className="bg-black/60 border border-red-900/20 px-10 py-4 flex items-center gap-12 opacity-60 hover:opacity-100 transition-opacity backdrop-blur-xl">
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-600 rounded-full shadow-[0_0_8px_green]" />
                            <span className="text-[9px] font-orbitron text-gray-500 tracking-[0.2em] uppercase">Signal: Optimal</span>
                        </div>
                        <div className="h-6 w-[1px] bg-red-900/40" />
                        <div className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse shadow-[0_0_8px_red]" />
                            <span className="text-[9px] font-orbitron text-gray-500 tracking-[0.2em] uppercase">Link: Secure</span>
                        </div>
                        <div className="h-6 w-[1px] bg-red-900/40" />
                        <div className="flex items-center gap-3 text-[9px] font-orbitron text-gray-500 tracking-[0.2em] uppercase">
                            Encryption: AES_256
                        </div>
                    </div>
                </div>

            </motion.div>
        </main>
    );
}
