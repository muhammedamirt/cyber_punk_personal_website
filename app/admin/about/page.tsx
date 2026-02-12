"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
    User,
    Zap,
    Briefcase,
    Camera,
    Save,
    Plus,
    Trash2,
    ChevronRight,
    Terminal,
    Settings,
    Layout
} from "lucide-react";
import GlitchText from "../../components/GlitchText";

export default function AboutManagement() {
    const [activeSection, setActiveSection] = useState("Basic_Ident");

    const sections = [
        { id: "Basic_Ident", label: "Basic Identity", icon: <User size={14} /> },
        { id: "Skill_Protocols", label: "Skill Protocols", icon: <Zap size={14} /> },
        { id: "Mission_History", label: "Mission History", icon: <Briefcase size={14} /> },
        { id: "Visual_Fragments", label: "Visual Fragments", icon: <Camera size={14} /> },
    ];

    return (
        <div className="space-y-12 pb-20">
            {/* Header */}
            <div className="flex justify-between items-center bg-black/40 border border-red-900/10 p-8">
                <div>
                    <h1 className="text-3xl font-black text-white uppercase tracking-tighter">
                        <GlitchText text="Neural Identity Fix" trigger="always" />
                    </h1>
                    <div className="flex items-center gap-2 mt-2">
                        <Settings className="text-red-600 animate-spin-slow" size={16} />
                        <span className="text-[10px] text-red-800 font-bold tracking-[0.4em] uppercase">IDENTITY_MODIFICATION_MODE : ON</span>
                    </div>
                </div>
                <button className="flex items-center gap-3 px-10 py-4 bg-red-600 text-white font-bold text-xs tracking-[0.3em] uppercase clip-path-slant hover:bg-white hover:text-black transition-all">
                    <Save size={16} />
                    Commit All Changes
                </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                {/* Left Sidebar (Sections) */}
                <div className="lg:col-span-4 space-y-8">
                    <div className="bg-black/40 border border-red-900/20 p-6 space-y-4">
                        <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mb-6 flex items-center gap-2">
                            <Terminal size={14} className="text-red-700" />
                            Identity Segments
                        </h2>
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                className={`w-full flex justify-between items-center p-4 border transition-all text-[11px] font-orbitron uppercase tracking-widest group ${activeSection === section.id
                                        ? "bg-red-900/20 border-red-600 text-white"
                                        : "bg-red-950/5 border-red-900/10 text-gray-500 hover:text-red-500 hover:border-red-600"
                                    }`}
                            >
                                <div className="flex items-center gap-3">
                                    {section.icon}
                                    {section.label}
                                </div>
                                <ChevronRight size={14} className={activeSection === section.id ? "translate-x-1" : "group-hover:translate-x-1 transition-transform"} />
                            </button>
                        ))}
                    </div>

                    <div className="bg-red-950/10 border border-red-900/20 p-6">
                        <div className="text-[9px] text-red-800 font-black uppercase mb-4 tracking-widest">Sys_Alert</div>
                        <p className="text-[11px] text-gray-500 font-rajdhani italic leading-relaxed">
                            "Modifying Neural Identity sections will trigger a global cache purge. Ensure all data strings are correctly formatted."
                        </p>
                    </div>
                </div>

                {/* Right Form Area */}
                <div className="lg:col-span-8 bg-black/40 border border-red-900/20 p-10 relative group min-h-[500px]">
                    <div className="absolute top-0 left-0 w-[40px] h-[40px] border-t border-l border-red-600/30" />

                    {/* Basic Identity Section */}
                    {activeSection === "Basic_Ident" && (
                        <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-500">
                            <div className="flex items-center gap-3 mb-6">
                                <User className="text-red-600" size={20} />
                                <h2 className="text-lg font-black text-white uppercase tracking-tight">Core Personal Data</h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[9px] font-orbitron text-gray-600 uppercase tracking-widest">Display Name</label>
                                    <input type="text" defaultValue="AMIR" className="w-full bg-black/60 border border-red-900/20 p-4 text-sm font-orbitron text-white focus:border-red-600 outline-none uppercase" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] font-orbitron text-gray-600 uppercase tracking-widest">Core Function (Role)</label>
                                    <input type="text" defaultValue="FULL STACK ARCHITECT" className="w-full bg-black/60 border border-red-900/20 p-4 text-sm font-orbitron text-red-600 focus:border-red-600 outline-none uppercase" />
                                </div>
                                <div className="space-y-2 md:col-span-2">
                                    <label className="text-[9px] font-orbitron text-gray-600 uppercase tracking-widest">Brief Bio Transmission</label>
                                    <textarea
                                        defaultValue="Building mission-critical MERN stack infrastructures. Merging detailed anime aesthetics with production-grade architecture."
                                        className="w-full bg-black/60 border border-red-900/20 p-4 text-sm font-rajdhani text-gray-400 focus:border-red-600 outline-none h-32 uppercase"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[9px] font-orbitron text-gray-600 uppercase tracking-widest">Main Avatar Asset (Link)</label>
                                    <input type="text" defaultValue="/anime_character.png" className="w-full bg-black/60 border border-red-900/20 p-4 text-xs font-rajdhani text-gray-500 focus:border-red-600 outline-none" />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Skill Protocols Section */}
                    {activeSection === "Skill_Protocols" && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                            <div className="flex justify-between items-center mb-10">
                                <div className="flex items-center gap-3">
                                    <Zap className="text-red-600 animate-pulse" size={20} />
                                    <h2 className="text-lg font-black text-white uppercase tracking-tight">Skill Matrix</h2>
                                </div>
                                <button className="flex items-center gap-2 text-[9px] font-bold text-red-900 hover:text-red-500 transition-colors uppercase tracking-widest">
                                    <Plus size={14} /> New Protocol
                                </button>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { name: "React/Next.js", level: 95, tag: "FRONTEND" },
                                    { name: "Node/Express", level: 90, tag: "BACKEND" },
                                ].map((skill, idx) => (
                                    <div key={idx} className="p-6 border border-red-900/10 bg-black/40 flex flex-col md:flex-row gap-6 items-center">
                                        <div className="flex-1 w-full flex flex-col md:flex-row gap-4">
                                            <input type="text" defaultValue={skill.name} className="flex-1 bg-black/80 border border-red-900/20 p-3 text-xs font-orbitron text-white focus:border-red-600 outline-none uppercase" />
                                            <input type="number" defaultValue={skill.level} className="w-full md:w-20 bg-black/80 border border-red-900/20 p-3 text-xs font-orbitron text-red-600 focus:border-red-600 outline-none" />
                                            <input type="text" defaultValue={skill.tag} className="w-full md:w-28 bg-black/80 border border-red-900/20 p-3 text-xs font-orbitron text-orange-600 focus:border-red-600 outline-none uppercase" />
                                        </div>
                                        <button className="text-red-900 hover:text-red-500 transition-colors"><Trash2 size={18} /></button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Mission History Section */}
                    {activeSection === "Mission_History" && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                            <div className="flex justify-between items-center mb-10">
                                <div className="flex items-center gap-3">
                                    <Briefcase className="text-red-600" size={20} />
                                    <h2 className="text-lg font-black text-white uppercase tracking-tight">Timeline Log</h2>
                                </div>
                                <button className="flex items-center gap-2 text-[9px] font-bold text-red-900 hover:text-red-500 transition-colors uppercase tracking-widest">
                                    <Plus size={14} /> Add Mission
                                </button>
                            </div>

                            <div className="space-y-6">
                                {[
                                    { title: "Lead Architect", company: "NEO_TECH", period: "2022 - PRESENT" },
                                    { title: "Full Stack Warden", company: "CORE_DEV", period: "2020 - 2022" },
                                ].map((exp, idx) => (
                                    <div key={idx} className="p-6 border border-red-900/10 bg-black/40 space-y-4">
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            <input type="text" defaultValue={exp.title} className="bg-black/60 border border-red-900/20 p-3 text-xs font-orbitron text-white outline-none uppercase" placeholder="TITLE" />
                                            <input type="text" defaultValue={exp.company} className="bg-black/60 border border-red-900/20 p-3 text-xs font-orbitron text-red-700 outline-none uppercase" placeholder="COMPANY" />
                                            <input type="text" defaultValue={exp.period} className="bg-black/60 border border-red-900/20 p-3 text-xs font-orbitron text-gray-500 outline-none uppercase" placeholder="PERIOD" />
                                        </div>
                                        <textarea className="w-full bg-black/60 border border-red-900/20 p-3 text-xs font-rajdhani text-gray-400 outline-none h-20 uppercase" placeholder="MISSION_DESCRIPTION..."></textarea>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Visual Fragments Section */}
                    {activeSection === "Visual_Fragments" && (
                        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                            <div className="flex justify-between items-center mb-10">
                                <div className="flex items-center gap-3">
                                    <Camera className="text-red-600" size={20} />
                                    <h2 className="text-lg font-black text-white uppercase tracking-tight">Asset Archive</h2>
                                </div>
                                <button className="flex items-center gap-2 text-[9px] font-bold text-red-900 hover:text-red-500 transition-colors uppercase tracking-widest">
                                    <Plus size={14} /> Upload Asset
                                </button>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[1, 2, 3, 4].map((idx) => (
                                    <div key={idx} className="group relative bg-[#050101] border border-red-900/20 p-4 space-y-4 transition-all hover:border-red-600">
                                        <div className="aspect-video bg-red-950/10 flex items-center justify-center border border-red-900/10 overflow-hidden">
                                            <ImageIcon size={32} className="text-red-950" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-[7px] font-orbitron text-gray-700 uppercase tracking-widest">Fragment Link</label>
                                            <input type="text" placeholder="https://..." className="w-full bg-black border border-red-900/30 p-2 text-[9px] font-rajdhani text-gray-500 outline-none" />
                                            <input type="text" placeholder="FRAGMENT_TITLE" className="w-full bg-black border border-red-900/30 p-2 text-[9px] font-orbitron text-red-900 outline-none uppercase" />
                                        </div>
                                        <button className="absolute top-2 right-2 p-1 text-red-950 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <Trash2 size={14} />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                </div>

            </div>
        </div>
    );
}
