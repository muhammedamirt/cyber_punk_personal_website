"use client";

import { useEffect, useState, useRef } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-=[]{}|;:,.<>?";

interface ScrambleTextProps {
    text: string;
    className?: string;
    delay?: number;
}

export default function ScrambleText({ text, className = "", delay = 0 }: ScrambleTextProps) {
    const [displayText, setDisplayText] = useState("");
    const [isScrambling, setIsScrambling] = useState(true);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        let timeout: NodeJS.Timeout;

        // Initial delay
        timeout = setTimeout(() => {
            let iteration = 0;

            interval = setInterval(() => {
                setDisplayText(
                    text
                        .split("")
                        .map((char, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            return CHARS[Math.floor(Math.random() * CHARS.length)];
                        })
                        .join("")
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                    setIsScrambling(false);
                }

                iteration += 1 / 3; // Speed of decoding
            }, 30);

        }, delay);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [text, delay]);

    return (
        <span className={`${className} ${isScrambling ? "animate-pulse" : ""}`}>
            {displayText}
        </span>
    );
}
