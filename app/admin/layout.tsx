"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
    LayoutDashboard,
    Briefcase,
    User,
    MessageSquare,
    Settings,
    LogOut,
    Terminal,
    Cpu,
    Zap
} from "lucide-react";
import CyberHUD from "../components/CyberHUD";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const isLoginPage = pathname === "/admin/login";

    const menuItems = [
        { name: "Dashboard", icon: <LayoutDashboard size={18} />, href: "/admin" },
        { name: "Mission Log", icon: <Briefcase size={18} />, href: "/admin/projects" },
        { name: "Neural Identity", icon: <User size={18} />, href: "/admin/about" },
        { name: "Comm-Links", icon: <MessageSquare size={18} />, href: "/admin/messages" },
        { name: "Core Config", icon: <Settings size={18} />, href: "/admin/settings" },
    ];

    if (isLoginPage) {
        return (
            <div className="min-h-screen bg-[#0a0202] text-white font-orbitron overflow-hidden relative">
                <CyberHUD />
                <div className="relative z-10 w-full">
                    {children}
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0a0202] text-white font-orbitron relative overflow-x-hidden">
            <CyberHUD />

            {/* Mobile Header Toggle */}
            <div className="lg:hidden fixed top-0 left-0 w-full h-16 bg-black/80 backdrop-blur-md border-b border-red-900/20 z-[120] flex items-center justify-between px-6">
                <div className="flex items-center gap-3">
                    <Cpu className="text-red-600 animate-pulse" size={20} />
                    <h1 className="text-xs font-black tracking-widest text-white">AMIR_ADMIN</h1>
                </div>
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="p-2 border border-red-950 bg-red-950/20 text-red-600"
                >
                    <Terminal size={20} />
                </button>
            </div>

            {/* Sidebar */}
            <aside className={`fixed left-0 top-0 h-full w-64 bg-black/95 border-r border-red-900/30 backdrop-blur-xl z-[130] lg:z-[110] transition-transform duration-500 lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="p-8 border-b border-red-900/20">
                    <div className="flex items-center gap-3">
                        <Cpu className="text-red-600 animate-pulse" size={24} />
                        <div>
                            <h1 className="text-sm font-black tracking-[0.2em] text-white">AMIR_ADMIN</h1>
                            <span className="text-[8px] text-red-800 tracking-widest">v4.2.1-STABLE</span>
                        </div>
                    </div>
                </div>

                <nav className="p-4 mt-6 space-y-2">
                    {menuItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link key={item.name} href={item.href} onClick={() => setIsSidebarOpen(false)}>
                                <motion.div
                                    whileHover={{ x: 5, backgroundColor: "rgba(153, 27, 27, 0.1)" }}
                                    className={`flex items-center gap-4 px-4 py-3 rounded-sm transition-all relative group overflow-hidden ${isActive ? "bg-red-900/20 border-l-2 border-red-600 text-red-500" : "text-gray-500 hover:text-red-400"
                                        }`}
                                >
                                    {item.icon}
                                    <span className="text-[10px] font-bold uppercase tracking-widest">{item.name}</span>

                                    {isActive && (
                                        <div className="absolute right-4 w-1 h-1 bg-red-600 rounded-full animate-ping" />
                                    )}
                                </motion.div>
                            </Link>
                        );
                    })}
                </nav>

                <div className="absolute bottom-0 w-full p-4 border-t border-red-900/20">
                    <button className="flex items-center gap-4 px-4 py-3 text-gray-600 hover:text-red-500 transition-colors w-full group">
                        <LogOut size={18} className="group-hover:translate-x-1 transition-transform" />
                        <span className="text-[10px] font-bold uppercase tracking-widest">Shutdown</span>
                    </button>
                </div>
            </aside>

            {/* Overlay for mobile sidebar */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsSidebarOpen(false)}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[125] lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* Main Content Area */}
            <main className="lg:pl-64 min-h-screen relative overflow-y-auto pt-16 lg:pt-0 pb-20 lg:pb-0">
                <header className="h-16 border-b border-red-900/20 bg-black/40 backdrop-blur-md flex items-center justify-between px-6 lg:px-10 relative z-10 hidden lg:flex">
                    <div className="flex items-center gap-2">
                        <Terminal size={14} className="text-red-800" />
                        <span className="text-[10px] text-gray-500 uppercase tracking-[0.3em]">
                            Path: <span className="text-red-900">root://{pathname.replace("/", "")}</span>
                        </span>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="flex flex-col items-end">
                            <span className="text-[8px] text-gray-600 uppercase">Uptime</span>
                            <span className="text-[10px] text-red-600">99.8%</span>
                        </div>
                        <div className="w-10 h-10 border border-red-900/40 rounded-full flex items-center justify-center bg-red-900/10">
                            <Zap size={16} className="text-red-600" />
                        </div>
                    </div>
                </header>

                <div className="p-10 relative z-10">
                    {children}
                </div>
            </main>
        </div>
    );
}
