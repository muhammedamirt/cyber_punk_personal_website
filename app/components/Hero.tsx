"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import CyberParticles from "./CyberParticles";
import LightningEffect from "./LightningEffect";
import ScrambleText from "./ScrambleText";
import GlitchText from "./GlitchText";
import { ChevronRight, Terminal, Zap } from "lucide-react";
import CyberButton from "./CyberButton";

export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const charRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Initial Fade In
        tl.fromTo(heroRef.current, { opacity: 0 }, { opacity: 1, duration: 1 });

        // Character Slide In
        tl.fromTo(charRef.current,
            { x: -30, opacity: 0 },
            { x: 0, opacity: 1, duration: 1.2 },
            "-=0.5"
        );

        // Main Text Reveal
        tl.fromTo(".hero-reveal",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.1, duration: 0.8 },
            "-=0.8"
        );

        // Continuous Floating Animation for Character
        gsap.to(charRef.current, {
            y: -15,
            duration: 4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Parallax Effect
        const handleMouseMove = (e: MouseEvent) => {
            if (!bgRef.current || !charRef.current) return;
            const x = (e.clientX / window.innerWidth - 0.5) * 15;
            const y = (e.clientY / window.innerHeight - 0.5) * 15;

            gsap.to(bgRef.current, {
                x: -x,
                y: -y,
                duration: 1.5,
                ease: "power2.out"
            });

            gsap.to(charRef.current, {
                x: x * 0.5,
                duration: 1.5,
                ease: "power2.out"
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);

    }, []);

    return (
        <section ref={heroRef} className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0a0202]">

            {/* Interactive Lightning Effect */}
            <LightningEffect />

            {/* Background System */}
            <div ref={bgRef} className="absolute inset-0 z-0 pointer-events-none scale-105">
                <div className="absolute inset-0 bg-[url('/bg_apocalypse.png')] bg-cover bg-center brightness-[0.25] contrast-125 opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-red-950/20" />

                {/* Red Glare Overlay */}
                <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-red-900/10 blur-[150px] rounded-full" />

                <CyberParticles />
            </div>

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-32 lg:pt-0">

                {/* Left: Content Area (Spans 7 cols) */}
                <div ref={textRef} className="col-span-1 lg:col-span-7 flex flex-col items-center lg:items-start space-y-8 z-20 order-2 lg:order-1">

                    <div className="hero-reveal flex items-center gap-2 opacity-60">
                        <Terminal size={14} className="text-red-700" />
                        <span className="text-[10px] font-orbitron text-gray-400 tracking-[0.5em] uppercase">LINK_STATUS :: ONLINE</span>
                    </div>

                    <div className="hero-reveal space-y-2">
                        <div className="relative group">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-orbitron font-black text-white uppercase tracking-tight leading-none group-hover:text-red-600 transition-colors duration-500 text-center lg:text-left">
                                <GlitchText text="Amir" trigger="always" />
                            </h1>
                            <div className="absolute -bottom-2 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 w-24 h-1 bg-red-600 shadow-[0_0_15px_red] group-hover:w-full transition-all duration-700" />
                        </div>
                    </div>

                    <div className="hero-reveal space-y-1 text-center lg:text-left">
                        <h2 className="text-lg md:text-xl font-orbitron font-bold text-red-500 uppercase tracking-[0.3em]">
                            <ScrambleText text="Full Stack Engineer" delay={500} />
                        </h2>
                        <h2 className="text-sm md:text-md font-orbitron font-medium text-orange-400/80 tracking-[0.4em]">
                            <ScrambleText text="Systems Architect" delay={1200} />
                        </h2>
                    </div>

                    <p className="hero-reveal max-w-lg text-gray-400 text-sm md:text-md leading-relaxed text-center lg:text-left font-rajdhani tracking-wide bg-gradient-to-r from-red-900/10 to-transparent p-6 border-l-2 lg:border-l border-red-900/40 backdrop-blur-sm">
                        Engineered for scale. Optimized for performance.
                        Developing <span className="text-red-500 font-bold font-orbitron">production-grade MERN solutions</span> that bridge
                        <span className="text-white font-bold ml-1 font-orbitron">complex system logic</span> with high-fidelity digital experiences.
                    </p>

                    <div className="hero-reveal flex flex-col sm:flex-row gap-6 w-full justify-center lg:justify-start pt-6 px-4 sm:px-0">
                        <CyberButton variant="primary" className="min-w-[220px]">
                            <Zap size={16} />
                            Initiate_Mission
                        </CyberButton>

                        <CyberButton variant="secondary" className="min-w-[220px]">
                            <Terminal size={14} />
                            Neural_Uplink
                        </CyberButton>
                    </div>

                    <div className="hero-reveal pt-8 hidden lg:block">
                        <div className="flex items-center gap-4 text-[9px] font-orbitron text-gray-600 uppercase tracking-widest">
                            <span className="flex items-center gap-1"><div className="w-1 h-1 bg-red-600 rounded-full animate-ping" /> CORE_SYNC: OPTIMAL</span>
                            <span>CPU_LOAD: 12%</span>
                            <span>SYSTM_UP: 99.9%</span>
                        </div>
                    </div>
                </div>

                {/* Right: Character Image (Spans 5 cols) */}
                <div ref={charRef} className="col-span-1 lg:col-span-5 relative h-[40vh] md:h-[50vh] lg:h-[80vh] flex items-end justify-center lg:justify-end order-1 lg:order-2">
                    <div className="relative w-full h-full max-w-[400px] lg:max-w-[550px] z-10 flex items-end">
                        <img
                            src="/anime_character.png"
                            alt="Anime Character"
                            className="w-full h-full object-contain object-bottom drop-shadow-[0_0_40px_rgba(220,38,38,0.4)] brightness-90 contrast-110 grayscale-[0.2] transition-all duration-1000"
                        />
                        {/* Shadow Gradient */}
                        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-[#0a0202] to-transparent z-20" />
                    </div>
                    {/* Decorative Ring */}
                    <div className="absolute bottom-[10%] -right-10 w-[250px] md:w-[400px] h-[250px] md:h-[400px] border border-red-900/10 rounded-full animate-spin-slow pointer-events-none" />
                </div>

            </div>

            {/* Background Branded Text */}
            <div className="absolute bottom-[5%] left-[5%] opacity-[0.03] pointer-events-none select-none hidden lg:block">
                <h1 className="text-[12vw] font-black text-white whitespace-nowrap leading-none font-orbitron">
                    SYSTEM_v2
                </h1>
            </div>
        </section>
    );
}
