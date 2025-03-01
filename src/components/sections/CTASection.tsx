'use client';

import ScrollAnimation from '@/components/shared/ScrollAnimation';
import Image from 'next/image';

const CTASection = () => {
    return (
        <section className="py-20 px-4 bg-blue-50 dark:bg-gray-800">
            <div className="max-w-4xl mx-auto text-center">
                {/* CTA Header */}
                <ScrollAnimation>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Ready to deepen your Bible study?
                    </h2>

                    {/* CTA Description */}
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
                        Join thousands of believers who have transformed their Bible exploration with VerseWell.
                    </p>
                </ScrollAnimation>

                {/* Download Buttons */}
                <ScrollAnimation delay={0.2}>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="https://apps.apple.com/us/app/versewell/id6677063119" className="hover:opacity-80 transition-opacity cursor-pointer" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/images/app-store-badge.svg"
                                alt="Download on the App Store"
                                width={180}
                                height={60}
                                className="h-[48px] w-auto pointer-events-none select-none"
                            />
                        </a>
                        <a href="https://forms.gle/SyK4FQhs2WWd36vU6" className="hover:opacity-80 transition-opacity cursor-pointer" target="_blank" rel="noopener noreferrer">
                            <Image
                                src="/images/google-play-badge.svg"
                                alt="Get it on Google Play"
                                width={200}
                                height={60}
                                className="h-[48px] w-auto pointer-events-none select-none"
                            />
                        </a>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
};

export default CTASection; 
