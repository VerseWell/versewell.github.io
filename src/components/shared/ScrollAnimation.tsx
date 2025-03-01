'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollAnimationProps {
    children: React.ReactNode;
    delay?: number;
}

/**
 * ScrollAnimation component that adds fade-in and slide-up animations to its children
 * when they come into view during scrolling.
 * 
 * @param children - The content to be animated
 * @param delay - Optional delay before the animation starts (in seconds)
 */
const ScrollAnimation = ({ children, delay = 0 }: ScrollAnimationProps) => {
    // Reference to the animated element
    const ref = useRef(null);
    // Hook to check if the element is in view
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={{
                opacity: isInView ? 1 : 0,
                y: isInView ? 0 : 50
            }}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.17, 0.55, 0.55, 1] // Custom easing function for smooth animation
            }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollAnimation; 
