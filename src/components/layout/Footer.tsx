const Footer = () => {
    // Get current year for copyright
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-50 dark:bg-gray-800 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Footer Content */}
                <div className="flex flex-col items-center">
                    {/* Copyright */}
                    <p className="text-gray-600 dark:text-gray-300 mb-6 text-center">
                        © {currentYear} VerseWell. All rights reserved.
                    </p>

                    {/* Footer Links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        <a
                            href="/privacy"
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            Privacy Policy
                        </a>
                        <a
                            href="/terms"
                            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                        >
                            Terms of Service
                        </a>
                    </nav>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 
