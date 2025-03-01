'use client';

import { useEffect } from 'react';

/**
 * StructuredData component that injects JSON-LD schema into the page head
 * for better SEO and rich search results
 */
const StructuredData = () => {
    useEffect(() => {
        // Create the JSON-LD structured data
        const structuredData = {
            '@context': 'https://schema.org',
            '@type': 'MobileApplication',
            name: 'VerseWell',
            description: 'A modern Bible app that helps you discover, explore, and share God\'s Word with powerful search and easy sharing features.',
            applicationCategory: 'ReligiousApp',
            operatingSystem: 'iOS, Android',
            offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock'
            },
            featureList: [
                'Powerful Bible verse search',
                'Quick copy and share functionality',
                'Accurate verse matching',
                'Elegant, distraction-free design'
            ],
            author: {
                '@type': 'Organization',
                name: 'VerseWell',
                url: 'https://versewell.app'
            },
            softwareVersion: '1.0.0',
            datePublished: new Date().toISOString().split('T')[0]
        };

        // Create a new script element
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(structuredData);
        script.id = 'structured-data';

        // Remove any existing structured data script
        const existingScript = document.getElementById('structured-data');
        if (existingScript) {
            existingScript.remove();
        }

        // Add the script to the head
        document.head.appendChild(script);

        // Cleanup on unmount
        return () => {
            const scriptToRemove = document.getElementById('structured-data');
            if (scriptToRemove) {
                scriptToRemove.remove();
            }
        };
    }, []);

    return null;
};

export default StructuredData; 
