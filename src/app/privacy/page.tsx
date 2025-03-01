export default function PrivacyPage() {
    return (
        <main className="min-h-screen py-12 px-4 bg-white dark:bg-gray-900">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Privacy Policy</h1>

                <div className="prose dark:prose-invert max-w-none">
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Information We Collect</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            VerseWell collects minimal personal information necessary for the app's functionality. This may include device information and usage statistics to improve our service.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. How We Use Your Information</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            We use collected information to:
                        </p>
                        <ul className="list-disc pl-6 mt-2 text-gray-600 dark:text-gray-300">
                            <li>Improve our application and user experience</li>
                            <li>Analyze usage patterns and optimize performance</li>
                            <li>Provide technical support when needed</li>
                        </ul>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Data Security</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Third-Party Services</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            Our application may use third-party services that collect information. Each third-party service's use of your information is governed by their respective privacy policies.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Changes to Privacy Policy</h2>
                        <p className="text-gray-600 dark:text-gray-300">
                            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
} 
