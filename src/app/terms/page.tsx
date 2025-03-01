export default function TermsPage() {
    return (
        <main className="min-h-screen py-12 px-4 bg-white dark:bg-gray-900">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Terms of Service</h1>

                <div className="prose dark:prose-invert max-w-none">
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            By accessing and using VerseWell, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the application.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Use License</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            Permission is granted to use VerseWell for personal, non-commercial purposes. This license is non-transferable and can be terminated if you violate these terms.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Disclaimer</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            VerseWell is provided "as is" without warranties of any kind, either express or implied. We do not guarantee that the application will be error-free or uninterrupted.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Limitations</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            In no event shall VerseWell be liable for any damages arising out of the use or inability to use the application.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Changes to Terms</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            We reserve the right to modify these terms at any time. Continued use of VerseWell after changes constitutes acceptance of the new terms.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
} 
