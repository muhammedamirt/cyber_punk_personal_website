"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Plus,
    Search,
    Edit,
    Trash2,
    Eye,
    X,
    Save,
    Image as ImageIcon,
    Terminal,
    Link as LinkIcon
} from "lucide-react";
import GlitchText from "../../components/GlitchText";

const initialProjects = [
    { id: "M-01", title: "Portfolio Website", stack: "Next.js, Tailwind", status: "STABLE", deploys: 12, image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000" },
    { id: "M-02", title: "E-Commerce Platform", stack: "React, Node.js", status: "OPTIMIZED", deploys: 8, image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000" },
    { id: "M-03", title: "Game Landing Page", stack: "Next.js, TS, GSAP", status: "STABLE", deploys: 24, image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000" },
    { id: "M-04", title: "Red Protocol", stack: "App Dev, Express", status: "BETA", deploys: 4, image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=1000" },
];

export default function ProjectManagement() {
    const [projects, setProjects] = useState(initialProjects);
    const [isEditing, setIsEditing] = useState(false);
    const [currentProject, setCurrentProject] = useState<any>(null);

    const handleEdit = (project: any) => {
        setCurrentProject(project);
        setIsEditing(true);
    };

    const handleSave = () => {
        setProjects(prev => prev.map(p => p.id === currentProject.id ? currentProject : p));
        setIsEditing(false);
    };

    return (
        <div className="space-y-10 pb-20">
            {/* Header */}
            <div className="flex justify-between items-center bg-black/40 border border-red-900/10 p-8">
                <div>
                    <h1 className="text-3xl font-black text-white uppercase tracking-tighter">
                        <GlitchText text="Mission Management" trigger="always" />
                    </h1>
                    <div className="flex items-center gap-2 mt-2">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full animate-ping" />
                        <span className="text-[10px] text-red-800 font-bold tracking-[0.4em] uppercase">DEPLOY_SERVER: ONLINE</span>
                    </div>
                </div>
                <button
                    onClick={() => handleEdit({ id: `M-0${projects.length + 1}`, title: "", stack: "", status: "BETA", deploys: 0, image: "" })}
                    className="flex items-center gap-3 px-8 py-4 bg-red-600 text-white font-bold text-xs tracking-[0.3em] uppercase clip-path-slant hover:scale-105 transition-all"
                >
                    <Plus size={16} />
                    Deploy New Mission
                </button>
            </div>

            {/* Toolbar */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between px-2">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-red-900" size={16} />
                    <input
                        type="text"
                        placeholder="SEARCH_MISSION_LOGS..."
                        className="w-full bg-black/40 border border-red-900/20 py-3 pl-12 pr-4 text-xs font-orbitron text-white focus:outline-none focus:border-red-600 transition-colors uppercase placeholder:text-gray-800"
                    />
                </div>
                <div className="flex gap-2">
                    {["ALL_LOGS", "ACTIVE", "ARCHIVED", "BETA"].map((filter) => (
                        <button key={filter} className="px-4 py-2 bg-black/20 border border-red-900/30 text-[9px] text-gray-500 font-bold tracking-widest uppercase hover:text-red-500 hover:border-red-600 transition-all">
                            {filter}
                        </button>
                    ))}
                </div>
            </div>

            {/* Mission List */}
            <div className="bg-black/40 border border-red-900/20 overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-red-900/20 bg-red-950/5">
                            <th className="p-6 text-[10px] text-red-700 tracking-widest uppercase">ID</th>
                            <th className="p-6 text-[10px] text-red-700 tracking-widest uppercase">Mission Title</th>
                            <th className="p-6 text-[10px] text-red-700 tracking-widest uppercase">Stack Trace</th>
                            <th className="p-6 text-[10px] text-red-700 tracking-widest uppercase">Status</th>
                            <th className="p-6 text-[10px] text-red-700 tracking-widest uppercase">Sync Count</th>
                            <th className="p-6 text-[10px] text-red-700 tracking-widest uppercase px-10 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-400 font-rajdhani">
                        {projects.map((project, idx) => (
                            <motion.tr
                                key={project.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.05 }}
                                className="border-b border-red-900/10 hover:bg-red-900/5 group transition-colors"
                            >
                                <td className="p-6 text-[10px] font-orbitron text-red-900 font-bold">{project.id}</td>
                                <td className="p-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 border border-red-900/20 group-hover:border-red-600/50 bg-red-900/5 flex items-center justify-center transition-colors overflow-hidden relative">
                                            {project.image ? (
                                                <img src={project.image} alt="" className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" />
                                            ) : (
                                                <ImageIcon size={16} className="text-red-950 group-hover:text-red-700 transition-colors" />
                                            )}
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white uppercase group-hover:text-red-500 transition-colors">{project.title}</div>
                                            <div className="text-[8px] text-gray-600 font-orbitron uppercase tracking-tighter truncate max-w-[150px]">
                                                {project.image || "NO_ASSET_LINKED"}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="p-6">
                                    <div className="flex gap-2 flex-wrap">
                                        {project.stack.split(",").map(s => (
                                            <span key={s} className="text-[8px] bg-black/60 border border-red-900/20 px-1.5 py-0.5 uppercase tracking-widest">{s.trim()}</span>
                                        ))}
                                    </div>
                                </td>
                                <td className="p-6">
                                    <div className="flex items-center gap-2">
                                        <div className={`w-1.5 h-1.5 rounded-full ${project.status === 'OPTIMIZED' ? 'bg-green-600 animate-pulse' : project.status === 'STABLE' ? 'bg-blue-600 shadow-[0_0_5px_blue]' : 'bg-orange-600 shadow-[0_0_5px_orange]'}`} />
                                        <span className="text-[10px] font-orbitron font-bold uppercase">{project.status}</span>
                                    </div>
                                </td>
                                <td className="p-6 text-[10px] font-orbitron text-gray-600">{project.deploys} SYNC_CYCLES</td>
                                <td className="p-6 text-right px-10">
                                    <div className="flex justify-end gap-4 opacity-50 group-hover:opacity-100 transition-opacity">
                                        <button onClick={() => handleEdit(project)} className="text-gray-500 hover:text-red-500 transition-colors"><Edit size={18} /></button>
                                        <button className="text-gray-500 hover:text-red-700 transition-colors"><Trash2 size={18} /></button>
                                    </div>
                                </td>
                            </motion.tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mission Editor Modal */}
            <AnimatePresence>
                {isEditing && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-[#0a0202] border border-red-600/30 w-full max-w-2xl p-8 relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-600 to-transparent animate-scan-slow" />

                            <div className="flex justify-between items-start mb-8">
                                <div>
                                    <h2 className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-3">
                                        <Terminal size={18} className="text-red-600" />
                                        Protocol Editor: {currentProject?.id}
                                    </h2>
                                    <p className="text-[10px] text-red-900 font-bold uppercase tracking-[0.3em] mt-1">Buffer_Modify_Mode_v4</p>
                                </div>
                                <button onClick={() => setIsEditing(false)} className="text-gray-500 hover:text-red-500 transition-colors">
                                    <X size={20} />
                                </button>
                            </div>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-orbitron text-gray-600 uppercase tracking-widest">Mission Title</label>
                                        <input
                                            type="text"
                                            value={currentProject?.title}
                                            onChange={(e) => setCurrentProject({ ...currentProject, title: e.target.value })}
                                            className="w-full bg-black/60 border border-red-900/30 p-3 text-xs font-orbitron text-white focus:border-red-600 transition-colors outline-none uppercase"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[9px] font-orbitron text-gray-600 uppercase tracking-widest">Sync Status</label>
                                        <select
                                            value={currentProject?.status}
                                            onChange={(e) => setCurrentProject({ ...currentProject, status: e.target.value })}
                                            className="w-full bg-black/60 border border-red-900/30 p-3 text-xs font-orbitron text-red-500 focus:border-red-600 transition-colors outline-none"
                                        >
                                            <option value="BETA">BETA_PROTOCOL</option>
                                            <option value="STABLE">STABLE_ENVIRONMENT</option>
                                            <option value="OPTIMIZED">OPTIMIZED_STREAM</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[9px] font-orbitron text-gray-600 uppercase tracking-widest">Stack Trace (Comma Separated)</label>
                                    <input
                                        type="text"
                                        value={currentProject?.stack}
                                        onChange={(e) => setCurrentProject({ ...currentProject, stack: e.target.value })}
                                        className="w-full bg-black/60 border border-red-900/30 p-3 text-xs font-orbitron text-gray-400 focus:border-red-600 transition-colors outline-none uppercase"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[9px] font-orbitron text-gray-600 uppercase tracking-widest">Main Asset Link (Image URL)</label>
                                    <div className="relative">
                                        <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-red-900" size={14} />
                                        <input
                                            type="text"
                                            value={currentProject?.image}
                                            onChange={(e) => setCurrentProject({ ...currentProject, image: e.target.value })}
                                            className="w-full bg-black/60 border border-red-900/30 p-3 pl-10 text-xs font-rajdhani text-gray-400 focus:border-red-600 transition-colors outline-none"
                                            placeholder="https://..."
                                        />
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-6">
                                    <button
                                        onClick={handleSave}
                                        className="flex-1 flex items-center justify-center gap-3 py-4 bg-red-600 text-white font-bold text-xs tracking-[0.4em] uppercase clip-path-slant hover:bg-white hover:text-black transition-all"
                                    >
                                        <Save size={16} />
                                        Commit Mission
                                    </button>
                                    <button
                                        onClick={() => setIsEditing(false)}
                                        className="px-8 py-4 bg-transparent border border-gray-800 text-gray-600 font-bold text-xs tracking-[0.4em] uppercase hover:border-red-600 hover:text-red-500 transition-all"
                                    >
                                        Abort
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Footer Stats */}
            <div className="flex justify-between items-center text-[9px] font-orbitron text-gray-600 uppercase tracking-widest px-2">
                <span>Displaying {projects.length}/100 Loaded Missions</span>
                <div className="flex gap-4">
                    <span>Storage: 452MB / 1GB</span>
                    <span>DB_Status: 12ms Response</span>
                </div>
            </div>
        </div>
    );
}
