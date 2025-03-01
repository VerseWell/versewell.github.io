/**
 * Common types and interfaces used across the application
 */

// Add your shared types and interfaces here
export interface MetadataProps {
    title: string;
    description: string;
    keywords: string[];
}

// Example animation types used in ScrollAnimation
export interface AnimationProps {
    initial?: object;
    animate?: object;
    transition?: object;
    className?: string;
    children: React.ReactNode;
} 
