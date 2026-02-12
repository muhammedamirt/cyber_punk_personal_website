"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const navRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(
            navRef.current,
            { y: -50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
        );
    }, []);

    return (
        <nav ref={navRef} className="fixed w-full z-50 top-0 left-0 pt-6 pr-10">
            <div className="flex justify-end items-center">
                <div className="flex items-center space-x-6">
                    {navLinks.map((link, index) => (
                        <div key={link.name} className="flex items-center">
                            <Link
                                href={link.href}
                                className={`relative text-lg font-medium tracking-wide transition-colors duration-300 hover:text-red-500 ${pathname === link.href ? "text-red-500 drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]" : "text-gray-300"
                                    }`}
                            >
                                {link.name}
                                {/* Active Underline */}
                                {pathname === link.href && (
                                    <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-red-600 shadow-[0_0_10px_rgba(220,38,38,1)] animate-pulse" />
                                )}
                            </Link>
                            {/* Separator Pipe for all except last item */}
                            {index < navLinks.length - 1 && (
                                <span className="ml-6 text-gray-500">|</span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    );
}
