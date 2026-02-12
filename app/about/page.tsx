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
    Calendar,
    MapPin,
    Briefcase,
    Mail,
    Terminal,
    ChevronRight,
    Camera,
    BookOpen,
    Cpu,
    Zap
} from "lucide-react";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const personalDetails = [
    { icon: <Calendar size={14} />, label: "10.04.1998" },
    { icon: <Mail size={14} />, label: "AMIR@CORE.SYS" },
    { icon: <MapPin size={14} />, label: "SHINJUKU_NODE" },
    { icon: <Briefcase size={14} />, label: "FULL_STACK_ARCH" },
];

const galleryImages = [
    { url: "https://images.unsplash.com/photo-1578632738980-43e72a5bef18?q=80&w=1000", title: "DATA_NODE_01" },
    { url: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1000", title: "DATA_NODE_02" },
    { url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000", title: "DATA_NODE_03" },
    { url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000", title: "DATA_NODE_04" },
];

const blogs = [
    { id: "LOG_88", date: "24.05.12", title: "Scaleable Protocols for MERN", tags: ["ARCH", "REDUX"] },
    { id: "LOG_92", date: "24.06.01", title: "GSAP Performance Benchmarks", tags: ["ANIM", "JS"] },
    { id: "LOG_95", date: "24.06.15", title: "The Psychology of Cyber UI", tags: ["UX", "RED"] },
];

const skillSet = [
    { name: "React/Next.js", level: 95, tag: "FRONTEND" },
    { name: "Node/Express", level: 90, tag: "BACKEND" },
    { name: "MongoDB/SQL", level: 85, tag: "DATABASE" },
    { name: "TypeScript", level: 92, tag: "CORE" },
    { name: "GSAP/Framer", level: 88, tag: "ANIMATION" },
    { name: "Docker/AWS", level: 75, tag: "DEVOPS" },
    { name: "Tailwind/CSS", level: 98, tag: "STYLING" },
    { name: "Redux/Zustand", level: 90, tag: "STATE" },
];

const experience = [
    { title: "Lead Architect", company: "NEO_TECH", period: "2022 - PRESENT", desc: "Spearheading high-frequency MERN stack protocols and system architecture." },
    { title: "Full Stack Warden", company: "CORE_DEV", period: "2020 - 2022", desc: "Managed end-to-end integration of scalable web environments." },
    { title: "Interface Scout", company: "PIXEL_LOGIC", period: "2018 - 2020", desc: "Derived advanced UI solutions with focus on performance and aesthetics." },
];

const techArsenal = ["VS CODE", "GITHUB", "POSTMAN", "FIGMA", "LINUX", "VERCEL", "DOCKER", "MONGO_DB", "JEST"];

export default function About() {
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
                            <GlitchText text="About Me" trigger="hover" />
                            <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-red-600/30" />
                        </h1>
                    </motion.div>
                    <p className="mt-3 text-[10px] font-orbitron text-orange-600 uppercase tracking-[0.6em] font-bold opacity-70">
                        <ScrambleText text="ACCESS_KEY: AMIR_SYS_v2.0" delay={500} />
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Vertical Deco Line (Left) */}
                    <div className="absolute -left-12 top-0 bottom-0 w-[1px] bg-red-900/10 hidden xl:flex flex-col items-center py-20 gap-32">
                        {[...Array(6)].map((_, i) => (
                            <div key={i} className="text-[7px] font-orbitron text-red-950/40 -rotate-90 whitespace-nowrap tracking-[0.5em]">
                                0x{Math.floor(Math.random() * 0xFFFF).toString(16).toUpperCase()} // STREAM_NODE_{i}
                            </div>
                        ))}
                    </div>

                    {/* Left Column */}
                    <div className="lg:col-span-12 xl:col-span-8 space-y-16">

                        {/* Info Box */}
                        <section className="reveal-section">
                            <div className="flex items-center gap-2 mb-4 opacity-60">
                                <Terminal size={14} className="text-red-600" />
                                <span className="text-[10px] font-orbitron text-gray-400 uppercase tracking-widest">RESUME.FILE</span>
                            </div>

                            <div className="bg-black/40 border border-red-900/30 p-6 md:p-8 relative group overflow-hidden backdrop-blur-xl">
                                <div className="absolute inset-x-0 h-[1px] bg-red-600/40 top-0 group-hover:animate-scan-slow pointer-events-none" />
                                <div className="flex flex-col md:flex-row gap-8 items-center">
                                    <div className="w-40 h-40 border border-red-900/60 overflow-hidden flex-shrink-0 relative group/avatar">
                                        <img src="/anime_character.png" className="w-full h-full object-cover object-top filter grayscale hover:grayscale-0 transition-all duration-700 relative z-10" alt="Avatar" />
                                        {/* RGB Ghost Layers */}
                                        <img src="/anime_character.png" className="absolute inset-0 w-full h-full object-cover object-top filter hue-rotate-[90deg] opacity-0 group-hover/avatar:opacity-40 group-hover/avatar:-translate-x-2 transition-all duration-300 pointer-events-none mix-blend-screen z-0" alt="Ghost Red" />
                                        <img src="/anime_character.png" className="absolute inset-0 w-full h-full object-cover object-top filter hue-rotate-[-90deg] opacity-0 group-hover/avatar:opacity-40 group-hover/avatar:translate-x-2 transition-all duration-300 pointer-events-none mix-blend-screen z-0" alt="Ghost Blue" />

                                        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red-500 z-30 opacity-0 group-hover/avatar:opacity-100 group-hover/avatar:-translate-x-1 group-hover/avatar:-translate-y-1 transition-all" />
                                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red-500 z-30 opacity-0 group-hover/avatar:opacity-100 group-hover/avatar:translate-x-1 group-hover/avatar:translate-y-1 transition-all" />
                                    </div>
                                    <div className="flex-1 space-y-4">
                                        <h3 className="text-2xl font-orbitron font-bold text-white uppercase flex items-center gap-2">
                                            <div className="w-2 h-2 bg-red-600 animate-pulse hidden md:block" />
                                            <GlitchText text="Amir" trigger="hover" />
                                        </h3>
                                        <p className="text-gray-400 font-rajdhani text-md leading-relaxed">
                                            Building mission-critical <span className="text-red-500 font-bold">MERN stack</span> infrastructures. Merging detailed <span className="text-orange-400">anime aesthetics</span> with production-grade architecture.
                                        </p>
                                        <div className="grid grid-cols-2 gap-4">
                                            {personalDetails.map((detail, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-[11px] text-gray-500 hover:text-red-500 transition-colors uppercase font-orbitron">
                                                    <span className="text-red-800">{detail.icon}</span>
                                                    {detail.label}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Skill Protocols */}
                        <section className="reveal-section">
                            <div className="flex items-center justify-between mb-8 pb-2 border-b border-red-900/10">
                                <div className="flex items-center gap-2">
                                    <Zap size={16} className="text-red-600 animate-pulse" />
                                    <h2 className="text-lg font-orbitron font-bold text-white tracking-[0.2em] uppercase">Skill Protocols</h2>
                                </div>
                                <span className="text-[10px] font-rajdhani text-gray-500 tracking-widest uppercase">SYSTM_OPTIMIZED: TRUE</span>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {skillSet.map((skill, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -3, borderColor: "rgba(220,38,38,0.4)", backgroundColor: "rgba(220,38,38,0.02)" }}
                                        className="bg-black/40 border border-red-900/20 p-4 relative group transition-colors overflow-hidden"
                                    >
                                        {/* Binary Noise Overlay on Hover */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] pointer-events-none text-[6px] font-mono text-red-500 break-all leading-none transition-opacity duration-500">
                                            {Array(50).fill("01").join("")}
                                            {Array(50).fill("10").join("")}
                                            {Array(50).fill("00").join("")}
                                            {Array(50).fill("11").join("")}
                                        </div>
                                        <div className="flex justify-between items-center mb-3">
                                            <span className="text-[9px] font-orbitron text-red-900 tracking-widest px-1.5 border border-red-950 bg-red-950/20">
                                                {skill.tag}
                                            </span>
                                            <span className="text-[10px] font-orbitron text-orange-600 italic">SYNC: {skill.level}%</span>
                                        </div>
                                        <h4 className="text-xs font-orbitron font-bold text-gray-300 group-hover:text-red-500 transition-colors uppercase mb-3">
                                            {skill.name}
                                        </h4>
                                        <div className="h-[1px] w-full bg-red-950/50 relative overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1.5, ease: "easeOut", delay: idx * 0.05 }}
                                                className="absolute top-0 left-0 h-full bg-red-600 shadow-[0_0_10px_rgba(220,38,38,0.8)]"
                                            />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Gallery Section */}
                        <section className="reveal-section">
                            <div className="flex items-center gap-2 mb-6">
                                <Camera size={16} className="text-red-600" />
                                <h2 className="text-lg font-orbitron font-bold text-white tracking-[0.2em] uppercase">Visual Fragments</h2>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {galleryImages.map((img, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="relative group aspect-[1/1] md:aspect-[3/4] overflow-hidden border border-red-900/20"
                                    >
                                        <img src={img.url} className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" alt={img.title} />
                                        <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        <div className="absolute bottom-2 left-2 text-[8px] font-orbitron text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                            {img.title}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Mission History */}
                        <section className="reveal-section">
                            <div className="flex items-center gap-2 mb-8">
                                <Briefcase size={16} className="text-red-700" />
                                <h2 className="text-lg font-orbitron font-bold text-white tracking-[0.2em] uppercase">Mission History</h2>
                            </div>
                            <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[1px] before:bg-red-900/30">
                                {experience.map((exp, idx) => (
                                    <div key={idx} className="relative pl-10 group">
                                        <div className="absolute left-0 top-[6px] w-[23px] h-[23px] bg-black border border-red-900 group-hover:border-red-600 transition-colors flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 bg-red-600 animate-pulse" />
                                        </div>
                                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-1">
                                            <h4 className="text-sm font-orbitron font-bold text-gray-200 uppercase">{exp.title} // {exp.company}</h4>
                                            <span className="text-[10px] font-orbitron text-red-800 tracking-widest">{exp.period}</span>
                                        </div>
                                        <p className="text-xs font-rajdhani text-gray-500 max-w-xl">{exp.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right Column */}
                    <div className="lg:col-span-12 xl:col-span-4 space-y-16">

                        {/* Blogs */}
                        <section className="reveal-section">
                            <div className="flex items-center gap-2 mb-6 text-red-600">
                                <BookOpen size={16} />
                                <h2 className="text-lg font-orbitron font-bold text-white tracking-[0.2em] uppercase">Data Logs</h2>
                            </div>
                            <div className="space-y-4">
                                {blogs.map((blog, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ x: 10, borderColor: "rgba(220,38,38,0.5)" }}
                                        className="p-4 border border-red-900/20 bg-black/40 cursor-pointer group transition-all"
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <span className="text-[10px] font-orbitron text-red-900">#{blog.id}</span>
                                            <span className="text-[10px] font-rajdhani text-orange-600 uppercase tracking-widest">{blog.date}</span>
                                        </div>
                                        <h4 className="text-sm font-orbitron font-bold text-gray-300 group-hover:text-red-500 transition-colors uppercase">
                                            {blog.title}
                                        </h4>
                                        <div className="mt-3 flex gap-2">
                                            {blog.tags.map(tag => (
                                                <span key={tag} className="text-[8px] font-orbitron text-red-800 border border-red-950 px-1">{tag}</span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        {/* Core Status */}
                        <section className="reveal-section">
                            <div className="bg-red-600/5 border border-red-900/40 p-6 flex flex-col items-center text-center">
                                <Cpu className="text-red-600 mb-2 animate-pulse" size={32} />
                                <h3 className="text-xs font-orbitron text-white tracking-[0.3em] uppercase mb-4">Core Status</h3>
                                <div className="w-full h-1 bg-red-950 rounded-full mb-2">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "85%" }}
                                        transition={{ duration: 1.5 }}
                                        className="h-full bg-red-600 shadow-[0_0_10px_red]"
                                    />
                                </div>
                                <span className="text-[9px] font-orbitron text-red-500 uppercase">Load: 85% / Status: OPTIMAL</span>
                            </div>
                        </section>

                        {/* Tech Arsenal */}
                        <section className="reveal-section">
                            <div className="bg-black/40 border border-red-900/20 p-6 backdrop-blur-md">
                                <h3 className="text-xs font-orbitron text-white tracking-[0.3em] uppercase mb-6 flex items-center gap-2">
                                    <Cpu size={14} className="text-red-600" />
                                    Tech_Arsenal
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {techArsenal.map((tool, idx) => (
                                        <span key={idx} className="text-[9px] font-orbitron text-gray-400 border border-red-900/30 px-2 py-1 hover:text-red-500 hover:border-red-600 transition-all cursor-default uppercase">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Footer Button */}
                <div className="flex justify-center pt-8 reveal-section">
                    <button className="group relative px-8 py-3 bg-transparent border border-red-500/40 text-red-500 font-orbitron font-bold text-[10px] tracking-[0.5em] overflow-hidden hover:text-white transition-all duration-300">
                        <div className="absolute inset-0 bg-red-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
                        <span className="relative z-10 flex items-center gap-2">
                            <Zap size={14} />
                            INITIALIZE_PROTOCOL_B
                        </span>
                    </button>
                </div>

            </motion.div>
        </main>
    );
}
