"use client";

import React, { ReactNode } from 'react';
import styles from './GradientText.module.css';

interface GradientTextProps {
    children: ReactNode;
    className?: string;
    colors?: string[];
    animationSpeed?: number;
    showBorder?: boolean;
}

export default function GradientText({
    children,
    className = "",
    colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
    animationSpeed = 8,
    showBorder = false,
}: GradientTextProps) {
    const gradientStyle = {
        backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
        animationDuration: `${animationSpeed}s`,
    };

    return (
        <div className={`${styles.container} ${className}`}>
            {showBorder && (
                <div
                    className={styles.border}
                    style={{
                        ...gradientStyle,
                        backgroundSize: "300% 100%",
                    }}
                >
                    <div className={styles.innerBorder}></div>
                </div>
            )}
            <div
                className={styles.gradientText}
                style={{
                    ...gradientStyle,
                    backgroundSize: "300% 100%",
                }}
            >
                {children}
            </div>
        </div>
    );
}

// tailwind.config.js
// module.exports = {
//   theme: {
//     extend: {
//       keyframes: {
//         gradient: {
//           '0%': { backgroundPosition: '0% 50%' },
//           '50%': { backgroundPosition: '100% 50%' },
//           '100%': { backgroundPosition: '0% 50%' },
//         },
//       },
//       animation: {
//         gradient: 'gradient 8s linear infinite'
//       },
//     },
//   },
//   plugins: [],
// };