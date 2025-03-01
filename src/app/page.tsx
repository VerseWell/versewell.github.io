import HeroSection from '@/components/sections/HeroSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/layout/Footer';

export default function Home() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <HeroSection />

            {/* Features Section */}
            <FeaturesSection />

            {/* CTA Section */}
            <CTASection />

            {/* Footer */}
            <Footer />
        </main>
    )
} 
