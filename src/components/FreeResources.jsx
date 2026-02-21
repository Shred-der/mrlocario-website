import React from 'react'

const FreeResources = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 reveal-up">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Free Resources</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-2">Start With The Basics</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Men's Guide */}
                    <div className="reveal-left relative rounded-3xl bg-white dark:bg-surface-dark p-8 md:p-12 border border-gray-200 dark:border-white/5 shadow-xl overflow-hidden group glass-card">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">For Men</span>
                            </div>
                            <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">Free Ebook: The Game</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow">Unlock the secrets to confidence. Download the foundational guide that has helped thousands of men regain control.</p>
                            <form className="space-y-4">
                                <div>
                                    <label className="sr-only" htmlFor="email-men">Email address</label>
                                    <input
                                        autoComplete="email"
                                        className="w-full px-5 py-3 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-black/50 glass-input"
                                        id="email-men"
                                        name="email"
                                        placeholder="Enter your email"
                                        required
                                        type="email"
                                    />
                                </div>
                                <button className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gray-900 dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors" type="button">
                                    Get Free Ebook
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Women's Guide */}
                    <div className="reveal-right relative rounded-3xl bg-white dark:bg-surface-dark p-8 md:p-12 border border-gray-200 dark:border-white/5 shadow-xl overflow-hidden group glass-card">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex items-center gap-2 mb-6">
                                <span className="bg-red-100 dark:bg-red-900/30 text-primary dark:text-red-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">For Women</span>
                            </div>
                            <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">Free Audio: Understanding Men</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-8 flex-grow">Listen to the truth about what men actually want. A comprehensive audio guide designed to empower women.</p>
                            <form className="space-y-4">
                                <div>
                                    <label className="sr-only" htmlFor="email-women">Email address</label>
                                    <input
                                        autoComplete="email"
                                        className="w-full px-5 py-3 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-black/50 glass-input"
                                        id="email-women"
                                        name="email"
                                        placeholder="Enter your email"
                                        required
                                        type="email"
                                    />
                                </div>
                                <button className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-red-700 transition-colors" type="button">
                                    Get Audio Program
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FreeResources
