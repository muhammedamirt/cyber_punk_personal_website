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
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.5 }}
            className="group relative w-full border-glow-red bg-black/60 overflow-hidden rounded-sm"
        >
            {/* Background Project Image with Glitch Effect on Hover */}
            <div className="relative h-[220px] w-full overflow-hidden">
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 brightness-50 group-hover:brightness-100"
                />

                {/* Animated Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-red-950/20 to-transparent opacity-80" />
                <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Floating Icon */}
                <div className="absolute top-4 right-4 p-2 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <Eye size={18} />
                </div>
            </div>

            {/* Content Area */}
            <div className="p-5 border-t border-red-900/40 relative">
                <h3 className="text-xl font-orbitron font-bold text-white mb-2 group-hover:text-red-500 transition-colors tracking-tight">
                    {title}
                </h3>
                <p className="text-xs font-rajdhani text-gray-500 tracking-[0.2em] mb-6 uppercase">
                    {stack}
                </p>

                {/* View Project Button - The one from the image with enhanced animation */}
                <Link href={link} className="inline-block w-full">
                    <div className="relative py-3 text-center bg-red-950/40 border border-red-600/50 clip-path-cyber overflow-hidden group/btn">
                        <div className="absolute inset-0 bg-red-600 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-300 ease-out" />
                        <span className="relative z-10 text-xs font-bold text-red-500 group-hover/btn:text-white transition-colors tracking-widest uppercase flex items-center justify-center gap-2">
                            Access Mission
                        </span>
                    </div>
                </Link>
            </div>

            {/* Accents - Animated corner glow */}
            <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="absolute bottom-0 right-0 w-full h-[1px] bg-gradient-to-l from-red-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </motion.div>
    );
}
