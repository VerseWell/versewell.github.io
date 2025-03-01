'use client';

import ScrollAnimation from '@/components/shared/ScrollAnimation';
import { motion } from 'framer-motion';

// Features data array containing all feature information
const features = [
    {
        title: "Powerful Search",
        icon: "🔍",
        description: "Instantly find Bible verses by entering keywords or phrases.",
    },
    {
        title: "Quick Copy to Clipboard",
        icon: "📋",
        description: "Enable easy sharing by long-pressing verses.",
    },
    {
        title: "Accurate Results",
        icon: "✨",
        description: "Ensures precise verse matching for your searches.",
    },
    {
        title: "Elegant Design",
        icon: "🎨",
        description: "Provides a distraction-free reading experience.",
    },
];

const FeaturesSection = () => {
    return (
        <section className="py-20 px-4 bg-white dark:bg-gray-900">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <ScrollAnimation>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Why Choose VerseWell?
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Discover the features that make Bible exploration effortless
                        </p>
                    </div>
                </ScrollAnimation>

                {/* Features Grid - Wrapped in a single ScrollAnimation for better performance */}
                <ScrollAnimation>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.5,
                                        delay: index * 0.1 // Reduced delay for faster appearance
                                    }
                                }}
                                viewport={{ once: true, margin: "-50px" }}
                                className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            >
                                {/* Feature Icon */}
                                <div className="text-4xl mb-4">{feature.icon}</div>

                                {/* Feature Title */}
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                    {feature.title}
                                </h3>

                                {/* Feature Description */}
                                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
};

export default FeaturesSection; 
