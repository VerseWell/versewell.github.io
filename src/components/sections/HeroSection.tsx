'use client';

import Image from 'next/image';
import ScrollAnimation from '@/components/shared/ScrollAnimation';

const HeroSection = () => {
    return (
        <section className="bg-gradient-to-b from-blue-100/80 via-blue-50/50 to-white dark:from-gray-800 dark:via-gray-800/95 dark:to-gray-900">
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-transparent"></div>
                <div className="max-w-6xl mx-auto px-8 md:px-12 pt-24 md:pt-32">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
                        {/* Left Column: Text and Buttons */}
                        <div className="text-center md:text-left pb-8 md:pb-0 md:pl-8">
                            <ScrollAnimation>
                                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                                    VerseWell
                                </h1>
                                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 font-light">
                                    Discover and Share God&apos;s Word
                                </p>
                            </ScrollAnimation>

                            {/* Download Buttons */}
                            <ScrollAnimation delay={0.4}>
                                <div className="hidden md:flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start gap-4">
                                    <a href="#" className="hover:opacity-80 transition-opacity relative z-10">
                                        <Image
                                            src="/images/app-store-badge.svg"
                                            alt="Download on the App Store"
                                            width={180}
                                            height={60}
                                            className="h-[48px] w-auto"
                                        />
                                    </a>
                                    <a href="#" className="hover:opacity-80 transition-opacity relative z-10">
                                        <Image
                                            src="/images/google-play-badge.svg"
                                            alt="Get it on Google Play"
                                            width={200}
                                            height={60}
                                            className="h-[48px] w-auto"
                                        />
                                    </a>
                                </div>
                            </ScrollAnimation>
                        </div>

                        {/* Right Column: App Image */}
                        <ScrollAnimation delay={0.2}>
                            <div className="relative w-full max-w-[380px] mx-auto md:ml-auto">
                                <div className="relative rounded-t-2xl overflow-hidden shadow-2xl">
                                    <div className="relative h-[530px] overflow-hidden">
                                        {/* Light mode image */}
                                        <Image
                                            src="/images/hero-light.png"
                                            width={600}
                                            height={1080}
                                            alt="VerseWell App Screenshot"
                                            className="w-full absolute top-0 left-0 dark:opacity-0 transition-opacity duration-300"
                                            priority
                                        />
                                        {/* Dark mode image */}
                                        <Image
                                            src="/images/hero-dark.png"
                                            width={600}
                                            height={1080}
                                            alt="VerseWell App Screenshot"
                                            className="w-full absolute top-0 left-0 opacity-0 dark:opacity-100 transition-opacity duration-300"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection; 
