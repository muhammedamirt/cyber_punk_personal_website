"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const navRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    // Hide Navbar on all admin pages
    if (pathname.startsWith("/admin")) return null;

    useEffect(() => {
        gsap.fromTo(
            navRef.current,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        );
    }, []);

    return (
        <>
            <nav ref={navRef} className="fixed w-full z-[100] top-0 left-0 pt-6 pr-6 lg:pr-10 px-6">
                <div className="flex justify-between lg:justify-end items-center">
                    {/* Logo/Brand for Mobile */}
                    <Link href="/" className="lg:hidden text-red-600 font-orbitron font-black tracking-tighter text-xl">
                        AMIR <span className="text-white">//</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center space-x-6">
                        {navLinks.map((link, index) => (
                            <div key={link.name} className="flex items-center">
                                <Link
                                    href={link.href}
                                    className={`relative text-lg font-medium tracking-wide transition-colors duration-300 hover:text-red-500 ${pathname === link.href ? "text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" : "text-gray-300"
                                        }`}
                                >
                                    {link.name}
                                    {pathname === link.href && (
                                        <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-600 shadow-[0_0_10px_rgba(220,38,38,1)] animate-pulse" />
                                    )}
                                </Link>
                                {index < navLinks.length - 1 && (
                                    <span className="ml-6 text-gray-500">|</span>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-white p-2 border border-red-900/40 bg-red-950/10"
                    >
                        <div className="w-6 h-5 flex flex-col justify-between items-end relative overflow-hidden">
                            <span className={`w-6 h-[2px] bg-red-600 transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
                            <span className={`w-4 h-[2px] bg-red-600 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
                            <span className={`w-6 h-[2px] bg-red-600 transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-y-0 right-0 w-full max-w-xs bg-black/95 border-l border-red-600/30 backdrop-blur-2xl z-[110] flex flex-col p-10 pt-24"
                    >
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-red-600/20" />
                        <div className="space-y-10">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`block text-3xl font-orbitron font-black uppercase tracking-widest hover:text-red-500 transition-colors ${pathname === link.href ? "text-red-600" : "text-gray-600"}`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div className="mt-auto pt-10 border-t border-red-900/20">
                            <span className="text-[10px] text-gray-700 font-orbitron tracking-[0.4em] uppercase">Status: Connected</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
