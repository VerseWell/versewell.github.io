'use client';

import { useEffect } from 'react';

interface ThemeProviderProps {
    children: React.ReactNode;
}

/**
 * ThemeProvider component that handles system theme detection and applies appropriate classes
 * This component automatically syncs with the system theme preference and updates the DOM accordingly
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
    useEffect(() => {
        // Check if the system prefers dark mode
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        // Function to update theme based on system preference
        const updateTheme = (e: MediaQueryListEvent | MediaQueryList) => {
            if (e.matches) {
                // System prefers dark mode
                document.documentElement.classList.add('dark');
            } else {
                // System prefers light mode
                document.documentElement.classList.remove('dark');
            }
        };

        // Initial theme setup
        updateTheme(mediaQuery);

        // Listen for system theme changes
        mediaQuery.addEventListener('change', updateTheme);

        // Cleanup listener on component unmount
        return () => mediaQuery.removeEventListener('change', updateTheme);
    }, []);

    return <>{children}</>;
} 
