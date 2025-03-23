import React from 'react';

/**
 * TranslationInfoPage - A component that provides detailed information about the Bible translation
 * used in the application, including versification changes and modifications made for compatibility.
 */
export default function TranslationInfoPage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Bible Translation Information</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Translation Overview</h2>
                <p className="mb-4 text-gray-800 dark:text-gray-200">
                    This application uses the World English Bible (WEB) translation, which is the Protestant version
                    with US language. The translation has been carefully adapted to maintain compatibility with other widely-used
                    translations such as NASB1995 and ESV.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Search Functionality</h2>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
                    <p className="mb-4 text-gray-800 dark:text-gray-200">
                        To provide the most comprehensive search results, our application searches across three translations:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-4 text-gray-800 dark:text-gray-200">
                        <li>World English Bible (WEB)</li>
                        <li>New American Standard Bible 1995 (NASB1995)</li>
                        <li>English Standard Version (ESV)</li>
                    </ul>
                    <p className="text-gray-800 dark:text-gray-200">
                        While the search functionality checks all three translations to find relevant verses,
                        the displayed results will always show the WEB version of the matched verses.
                        This approach ensures both comprehensive search coverage and consistent presentation
                        of the scripture text.
                    </p>
                </div>
            </section>

            <section id="versification-changes" className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Versification Changes</h2>
                <p className="mb-4 text-gray-800 dark:text-gray-200">
                    To maintain compatibility with common Bible software and apps, we&apos;ve aligned the verse numbering with
                    NASB 1995 versification while preserving the original WEB text content. The following modifications
                    have been implemented:
                </p>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Verse Rearrangements</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
                        <li>Moved <a href="https://www.biblegateway.com/passage/?search=Romans%2014%3A24-26&version=WEB,NASB1995" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Romans 14:24-26</a> to <a href="https://www.biblegateway.com/passage/?search=Romans%2016%3A25-27&version=WEB,NASB1995" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Romans 16:25-27</a> (after removing the original empty verse at <a href="https://www.biblegateway.com/passage/?search=Romans%2016%3A25&version=WEB,NASB1995" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Romans 16:25</a>)</li>
                        <li>Split <a href="https://www.biblegateway.com/passage/?search=3John%201%3A14-15&version=WEB,NASB1995" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">3 John 1:14</a> into two verses to match traditional versification:
                            <ul className="list-disc pl-6 mt-2">
                                <li>1:14: &quot;but I hope to see you soon. Then we will speak face to face.&quot;</li>
                                <li>1:15: &quot;Peace be to you. The friends greet you. Greet the friends by name.&quot;</li>
                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Verses from WEB Footnotes Added in Brackets</h3>
                    <p className="mb-3 text-gray-800 dark:text-gray-200">
                        The following verses were mentioned in WEB translation footnotes but not included in the main text.
                        We&apos;ve added them in brackets to improve search results and maintain compatibility with other translations:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-800 dark:text-gray-200">
                        <li><a href="https://www.biblegateway.com/passage/?search=Luke%2017%3A36&version=WEB,NASB1995" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Luke 17:36</a>: &quot;[Two will be in the field: the one taken, and the other left.]&quot;</li>
                        <li><a href="https://www.biblegateway.com/passage/?search=Acts%208%3A37&version=WEB,NASB1995" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Acts 8:37</a>: &quot;[Philip said, &quot;If you believe with all your heart, you may. He answered, I believe that Jesus Christ is the Son of God.&quot;]&quot;</li>
                        <li><a href="https://www.biblegateway.com/passage/?search=Acts%2015%3A34&version=WEB,NASB1995" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Acts 15:34</a>: &quot;[But it seemed good to Silas to stay there.]&quot;</li>
                        <li><a href="https://www.biblegateway.com/passage/?search=Acts%2024%3A7&version=WEB,NASB1995" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">Acts 24:7</a>: &quot;[but the commanding officer, Lysias, came by and with great violence took him out of our hands,]&quot;</li>
                    </ul>
                </div>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Source Code Availability</h2>
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                    <p className="mb-4 text-gray-800 dark:text-gray-200">
                        For transparency and review purposes, you can review the differences between the original WEB translation
                        and our modified version that includes all the versification changes and adaptations mentioned above.
                        The complete diff showing all modifications is available in our public GitHub repository at:
                    </p>
                    <a
                        href="https://github.com/VerseWell/BibleTranslation/pull/1/files"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 break-all"
                    >
                        https://github.com/VerseWell/BibleTranslation/pull/1/files
                    </a>
                </div>
            </section>
        </div>
    );
}
