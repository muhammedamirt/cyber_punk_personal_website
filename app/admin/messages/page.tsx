"use client";

import { motion } from "framer-motion";
import {
    MessageSquare,
    Trash2,
    Reply,
    MoreVertical,
    Radio,
    ArrowRight,
    Search,
    Clock,
    User,
    Terminal
} from "lucide-react";
import GlitchText from "../../components/GlitchText";

const messages = [
    { id: "COMM-01", sender: "Kaelen Node", email: "kaelen@nexus.com", subject: "Collaborative Protocol?", body: "I've reviewed your recent mission logs. The MERN architecture is solid. Are you open to a high-freq collab?", time: "2h ago", status: "NEW" },
    { id: "COMM-02", sender: "System-Admin", email: "root@local.sys", subject: "Buffer Overflow Warning", body: "Warning: Data stream in Node_04 is approaching capacity. Recommend manual purge.", time: "5h ago", status: "READ" },
    { id: "COMM-03", sender: "Unknown Unit", email: "anon@shadow.net", subject: "Project_X Intelligence", body: "The source code for the Red Protocol is leaking. Secure the perimeter.", time: "1d ago", status: "FLAGGED" },
    { id: "COMM-04", sender: "Recruit Scout", email: "hr@global.inc", subject: "Recruitment Invitation", body: "We need a Full Stack Warden for our Shinjuku Node. Respond with your credentials.", time: "2d ago", status: "READ" },
];

export default function MessageManagement() {
    return (
        <div className="space-y-10">
            {/* Header */}
            <div className="flex justify-between items-center bg-black/40 border border-red-900/10 p-8">
                <div>
                    <h1 className="text-3xl font-black text-white uppercase tracking-tighter">
                        <GlitchText text="Comm-Link Intercepts" trigger="always" />
                    </h1>
                    <div className="flex items-center gap-2 mt-2">
                        <Radio className="text-red-600 animate-pulse" size={16} />
                        <span className="text-[10px] text-red-800 font-bold tracking-[0.4em] uppercase">LINK_FREQUENCY: 432.1MHz</span>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="px-6 py-3 border border-red-950 bg-red-950/20 text-center">
                        <div className="text-[8px] text-gray-600 uppercase tracking-widest">Inbox Capacity</div>
                        <div className="text-lg font-black text-red-600">4 / 1000</div>
                    </div>
                </div>
            </div>

            {/* Inbox Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-[600px]">

                {/* Message List Sidebar */}
                <div className="lg:col-span-4 bg-black/40 border border-red-900/20 overflow-hidden flex flex-col">
                    <div className="p-4 border-b border-red-900/20">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-red-950" size={14} />
                            <input
                                type="text"
                                placeholder="FILTER_FREQUENCIES..."
                                className="w-full bg-black/60 border border-red-900/30 py-2 pl-10 pr-4 text-[10px] font-orbitron text-red-500 focus:outline-none focus:border-red-600 transition-colors placeholder:text-red-950"
                            />
                        </div>
                    </div>
                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                        {messages.map((msg, idx) => (
                            <div
                                key={msg.id}
                                className={`p-5 border-b border-red-900/10 cursor-pointer hover:bg-red-900/5 transition-all group relative ${msg.status === 'NEW' ? 'bg-red-900/5' : ''}`}
                            >
                                {msg.status === 'NEW' && (
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-1/2 bg-red-600 shadow-[0_0_10px_red]" />
                                )}
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-[9px] font-bold text-red-900 font-orbitron">{msg.id}</span>
                                    <span className="text-[8px] text-gray-700 font-orbitron uppercase">{msg.time}</span>
                                </div>
                                <h3 className={`text-xs font-bold uppercase mb-1 ${msg.status === 'NEW' ? 'text-white' : 'text-gray-500'}`}>{msg.sender}</h3>
                                <p className="text-[10px] text-gray-600 font-rajdhani line-clamp-1">{msg.subject}</p>

                                {msg.status === 'FLAGGED' && (
                                    <div className="mt-2 text-[7px] font-bold text-orange-700 uppercase tracking-widest border border-orange-950 px-1.5 w-fit">High_Priority</div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Message Content View */}
                <div className="lg:col-span-8 bg-black/60 border border-red-900/20 relative group flex flex-col">
                    <div className="absolute top-0 right-0 w-[60px] h-[60px] border-t border-r border-red-600/20 group-hover:border-red-600 transition-colors" />

                    {/* Toolbar */}
                    <div className="p-6 border-b border-red-900/20 flex justify-between items-center">
                        <div className="flex items-center gap-6">
                            <button className="text-gray-500 hover:text-red-500 transition-colors flex items-center gap-2"><Reply size={16} /><span className="text-[9px] font-bold uppercase tracking-widest">Respond</span></button>
                            <button className="text-red-900 hover:text-red-500 transition-colors flex items-center gap-2"><Trash2 size={16} /><span className="text-[9px] font-bold uppercase tracking-widest">Purge</span></button>
                        </div>
                        <MoreVertical className="text-gray-700" size={18} />
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 p-10 space-y-10 overflow-y-auto">
                        <div className="space-y-4">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-red-900/10">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-8 h-8 rounded-full border border-red-900/40 bg-red-900/10 flex items-center justify-center">
                                            <User size={16} className="text-red-700" />
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Kaelen Node</h2>
                                            <p className="text-[10px] text-red-800 font-bold font-orbitron lowercase">kaelen@nexus.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-[9px] text-gray-600 font-orbitron uppercase tracking-widest mb-1">Transmission Timestamp</div>
                                    <div className="text-[11px] text-red-900 font-bold font-orbitron uppercase">24.05.12 // 14:32:01</div>
                                </div>
                            </div>

                            <div className="py-6">
                                <div className="text-[10px] text-gray-700 font-orbitron uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                                    <ArrowRight size={10} className="text-red-800" /> Subject: Collaborative Protocol?
                                </div>
                                <div className="bg-red-950/5 border-l-2 border-red-900/30 p-8 font-rajdhani text-lg leading-relaxed text-gray-400">
                                    "I've reviewed your recent mission logs. The MERN architecture is solid. <span className="text-red-600 font-bold">Are you open to a high-freq collab?</span> We have a project that needs your specific brand of anime-infused tech aesthetic. The Shinjuku Node is waiting."
                                </div>
                            </div>
                        </div>

                        {/* Quick Reply (MOCK) */}
                        <div className="pt-10">
                            <div className="flex items-center gap-2 mb-4 text-red-950">
                                <Terminal size={14} />
                                <span className="text-[9px] font-bold font-orbitron uppercase tracking-widest">Awaiting Command Input...</span>
                            </div>
                            <div className="relative">
                                <textarea
                                    placeholder="TYPE_RESPONSE_LOG..."
                                    className="w-full bg-black/60 border border-red-900/20 p-6 text-sm font-rajdhani text-white focus:outline-none focus:border-red-600 transition-colors uppercase placeholder:text-gray-900 min-h-[150px]"
                                />
                                <button className="absolute bottom-4 right-4 px-8 py-3 bg-red-600 text-white font-bold text-[10px] tracking-[0.3em] uppercase clip-path-slant">
                                    EXECUTE_SEND
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
