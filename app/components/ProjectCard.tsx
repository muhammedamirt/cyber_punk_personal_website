"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Eye } from "lucide-react";

interface ProjectProps {
    title: string;
    stack: string;
    image: string;
    link: string;
}

export default function ProjectCard({ title, stack, image, link }: ProjectProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.96 }}
            transition={{ duration: 0.4 }}
            className="group relative w-full border border-red-900/20 bg-black/60 overflow-hidden rounded-sm hover:border-red-600/50 transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0)] hover:shadow-[0_0_20px_rgba(220,38,38,0.2)]"
        >
            {/* Background Project Image with Glitch Effect on Hover */}
            <div className="relative h-[180px] w-full overflow-hidden">
                <motion.img
                    whileHover={{ scale: 1.1, rotate: 1 }}
                    transition={{ duration: 0.7 }}
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 brightness-50 group-hover:brightness-100"
                />

                {/* Animated Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-red-950/20 to-transparent opacity-80" />
                <div className="absolute inset-0 bg-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Scanning Laser Line */}
                <div className="absolute inset-x-0 h-[2px] bg-red-600/40 top-0 opacity-0 group-hover:opacity-100 group-hover:animate-scan-slow z-20" />

                {/* Floating Icon */}
                <div className="absolute top-3 right-3 p-1.5 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 z-30">
                    <Eye size={14} />
                </div>
            </div>

            {/* Content Area */}
            <div className="p-4 border-t border-red-900/40 relative">
                <h3 className="text-sm font-orbitron font-bold text-white mb-1 group-hover:text-red-500 transition-colors uppercase tracking-widest">
                    {title}
                </h3>
                <p className="text-[10px] font-rajdhani text-gray-500 tracking-[0.1em] mb-4 uppercase">
                    {stack}
                </p>

                {/* Industrial Access Button */}
                <Link href={link} className="inline-block w-full">
                    <div className="relative py-2.5 text-center bg-red-950/20 border border-red-900/40 hover:border-red-600/60 transition-all duration-300 overflow-hidden group/btn">
                        <div className="absolute inset-0 bg-red-600 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500" />
                        <span className="relative z-10 text-[9px] font-orbitron font-black text-gray-400 group-hover/btn:text-white transition-colors tracking-[0.4em] uppercase">
                            EXECUTE_LINK
                        </span>
                    </div>
                </Link>

                {/* Deco Stats */}
                <div className="flex justify-between items-center mt-3 opacity-30 group-hover:opacity-60 transition-opacity">
                    <div className="flex gap-1">
                        <div className="w-1 h-1 bg-red-600" />
                        <div className="w-1 h-1 bg-red-600" />
                    </div>
                    <span className="text-[7px] font-mono text-white">SYS_NODE_OK</span>
                </div>
            </div>

            {/* Accents */}
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-red-900 group-hover:border-red-600" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-red-900 group-hover:border-red-600" />
        </motion.div>
    );
}
