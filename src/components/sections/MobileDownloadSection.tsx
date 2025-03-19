import Image from 'next/image';
import ScrollAnimation from '@/components/shared/ScrollAnimation';

/**
 * MobileDownloadSection component displays app store download buttons specifically for mobile devices.
 * This section is only visible on mobile screens and hidden on larger devices.
 */
const MobileDownloadSection = () => {
    return (
        <section className="md:hidden bg-gradient-to-b from-white via-blue-50/30 to-blue-100/20 dark:from-gray-900 dark:via-gray-800/95 dark:to-gray-800 py-8">
            <div className="max-w-6xl mx-auto px-8">
                <ScrollAnimation>
                    <div className="flex flex-col items-center gap-4">
                        <a
                            href="https://apps.apple.com/us/app/versewell/id6677063119"
                            className="hover:opacity-80 transition-opacity relative z-10 cursor-pointer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image
                                src="/images/app-store-badge.svg"
                                alt="Download on the App Store"
                                width={180}
                                height={60}
                                className="h-[48px] w-auto pointer-events-none select-none"
                            />
                        </a>
                        <a
                            href="https://forms.gle/SyK4FQhs2WWd36vU6"
                            className="hover:opacity-80 transition-opacity relative z-10 cursor-pointer"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
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

export default MobileDownloadSection; 
