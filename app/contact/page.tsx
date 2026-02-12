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
            </div>

            <motion.div style={{ scale }} className="relative z-10 max-w-6xl mx-auto space-y-24">

                {/* Header Section */}
                <div className="text-center">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
                        <h1 className="text-3xl md:text-5xl font-orbitron font-black text-white uppercase tracking-[0.2em] relative inline-block group cursor-default">
                            <GlitchText text="Uplink Center" trigger="hover" />
                            <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-red-600/30" />
                        </h1>
                    </motion.div>
                    <p className="mt-3 text-[10px] font-orbitron text-orange-600 uppercase tracking-[0.6em] font-bold opacity-70">
                        <ScrambleText text="ESTABLISHING_COMM :: PROTOCOL_8" delay={500} />
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Left: Connection Info */}
                    <div className="lg:col-span-5 space-y-12">

                        <section className="reveal-section">
                            <div className="bg-black/40 border border-red-900/30 p-8 relative group overflow-hidden backdrop-blur-xl">
                                <div className="absolute inset-x-0 h-[1px] bg-red-600/40 top-0 animate-scan-slow pointer-events-none" />

                                <h3 className="text-sm font-orbitron font-bold text-white mb-8 tracking-[0.2em] uppercase flex items-center gap-3">
                                    <Radio className="text-red-600 animate-pulse" size={18} />
                                    Live Uplink
                                </h3>

                                <div className="space-y-8">
                                    <a href="mailto:amir@core.sys" className="group block">
                                        <div className="flex items-center gap-4 p-4 border border-red-900/10 bg-red-950/5 group-hover:bg-red-900/20 transition-all border-l-2 border-l-red-800 group-hover:border-l-red-500">
                                            <Mail className="text-red-700 group-hover:text-red-500 transition-colors" size={20} />
                                            <div>
                                                <span className="block text-[10px] text-gray-600 font-orbitron uppercase tracking-tighter">Secure Mail</span>
                                                <span className="text-white font-rajdhani text-lg group-hover:text-red-500 transition-colors uppercase">AMIR@CORE.SYS</span>
                                            </div>
                                        </div>
                                    </a>

                                    <div className="pt-6">
                                        <h4 className="text-[10px] font-orbitron text-gray-500 mb-4 tracking-widest uppercase opacity-50">Remote Nodes</h4>
                                        <div className="grid grid-cols-4 gap-4">
                                            {[
                                                { icon: <Github size={20} />, label: "GH" },
                                                { icon: <Linkedin size={20} />, label: "IN" },
                                                { icon: <Twitter size={20} />, label: "TW" },
                                                { icon: <Instagram size={20} />, label: "IG" }
                                            ].map((social, i) => (
                                                <button key={i} className="aspect-square flex items-center justify-center border border-red-900/20 text-red-900 hover:text-white hover:bg-red-900/40 hover:border-red-600 transition-all scale-100 hover:scale-105">
                                                    {social.icon}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="reveal-section">
                            <div className="bg-red-950/5 border-l border-red-600/30 p-6">
                                <p className="text-gray-500 font-rajdhani text-sm italic leading-relaxed">
                                    "Latency is the enemy of progress. I respond to all mission queries within a 24-hour cycle."
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* Right: Data Transmission Form */}
                    <div className="lg:col-span-7">
                        <section className="reveal-section">
                            <form className="bg-black/40 border border-red-900/30 p-8 md:p-10 relative overflow-hidden backdrop-blur-xl space-y-8">
                                <div className="absolute top-0 right-0 w-[40px] h-[40px] border-t border-r border-red-600/30" />
                                <div className="absolute bottom-0 left-0 w-[40px] h-[40px] border-b border-l border-red-600/30" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-1">
                                        <label className="text-[9px] font-orbitron text-gray-500 uppercase tracking-widest">Ident Name</label>
                                        <input
                                            type="text"
                                            placeholder="USER_ID"
                                            className="w-full bg-black/60 border border-red-900/20 p-4 text-white font-rajdhani focus:border-red-600 focus:outline-none transition-all placeholder:text-gray-800"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[9px] font-orbitron text-gray-500 uppercase tracking-widest">Freq Address</label>
                                        <input
                                            type="email"
                                            placeholder="EMAIL_HOST"
                                            className="w-full bg-black/60 border border-red-900/20 p-4 text-white font-rajdhani focus:border-red-600 focus:outline-none transition-all placeholder:text-gray-800"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[9px] font-orbitron text-gray-500 uppercase tracking-widest">Protocol Type</label>
                                    <div className="relative">
                                        <select className="w-full bg-black/60 border border-red-900/20 p-4 text-white font-rajdhani focus:border-red-600 focus:outline-none transition-all appearance-none cursor-pointer">
                                            <option>NEW_PROJECT_BUILD</option>
                                            <option>ARCHITECTURE_AUDIT</option>
                                            <option>STRATEGIC_COLLAB</option>
                                            <option>GENERAL_QUERY</option>
                                        </select>
                                        <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 text-red-900 pointer-events-none rotate-90" size={14} />
                                    </div>
                                </div>

                                <div className="space-y-1">
                                    <label className="text-[9px] font-orbitron text-gray-500 uppercase tracking-widest">Transmission Payload</label>
                                    <textarea
                                        rows={5}
                                        placeholder="ENCODE_MESSAGE_HERE..."
                                        className="w-full bg-black/60 border border-red-900/20 p-4 text-white font-rajdhani focus:border-red-600 focus:outline-none transition-all resize-none placeholder:text-gray-800"
                                    ></textarea>
                                </div>

                                <button className="w-full group relative flex items-center justify-center gap-4 bg-transparent border border-red-600/50 py-5 text-red-500 font-orbitron font-bold text-xs tracking-[0.4em] overflow-hidden hover:text-white transition-all duration-500">
                                    <div className="absolute inset-0 bg-red-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                                    <Send size={18} className="relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    <span className="relative z-10">INITIALIZE TRANSMISSION</span>
                                </button>
                            </form>
                        </section>
                    </div>
                </div>

                {/* Final Interactive Footer */}
                <div className="flex justify-center pt-8 reveal-section">
                    <div className="flex items-center gap-8 opacity-40">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping" />
                            <span className="text-[9px] font-orbitron text-gray-500 tracking-widest">SIGNAL_READY</span>
                        </div>
                        <div className="h-4 w-[1px] bg-red-900/30" />
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-600 rounded-full" />
                            <span className="text-[9px] font-orbitron text-gray-500 tracking-widest">UPLINK_STABLE</span>
                        </div>
                    </div>
                </div>

            </motion.div>
        </main>
    );
}
