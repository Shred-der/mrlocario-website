import React, { useState } from 'react'

const Navbar = ({ isDarkMode, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 dark:bg-background-dark/90 backdrop-blur-lg border-b border-gray-100 dark:border-white/5 glass-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a className="font-display font-bold text-2xl tracking-tighter text-gray-900 dark:text-white" href="#">
                            MR. <span className="text-primary">LOCARIO</span>
                        </a>
                    </div>

                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-center space-x-6">
                            <a className="text-gray-800 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#">Home</a>
                            <a className="text-gray-800 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#">About</a>
                            <a className="text-gray-800 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#">Store</a>
                            <a className="text-gray-800 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#">Send Questions</a>

                            <div className="relative group">
                                <button className="text-gray-800 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium inline-flex items-center focus:outline-none">
                                    Coaching
                                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                                    </svg>
                                </button>
                                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-surface-dark ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                                    <div className="py-1" role="menu">
                                        <a className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" href="#">Phone Coaching</a>
                                        <a className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800" href="#">In Person</a>
                                    </div>
                                </div>
                            </div>

                            <a className="text-gray-800 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#">Members</a>
                            <a className="text-gray-800 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors" href="#">Booking</a>
                            <a className="bg-primary text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all transform hover:-translate-y-0.5" href="#">
                                <span className="text-streak-animate">Bad Boy Membership</span>
                            </a>

                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none flex items-center justify-center w-10 h-10"
                                aria-label="Toggle Theme"
                            >
                                <span className="material-icons text-xl">
                                    {isDarkMode ? 'light_mode' : 'dark_mode'}
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 lg:hidden">
                        <button
                            onClick={toggleTheme}
                            className="bg-gray-100 dark:bg-gray-800/50 inline-flex items-center justify-center p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none transition-colors border border-transparent dark:border-white/5"
                            aria-label="Toggle Theme"
                        >
                            <span className="material-icons text-xl sm:text-2xl">
                                {isDarkMode ? 'light_mode' : 'dark_mode'}
                            </span>
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="bg-gray-100 dark:bg-gray-800/50 inline-flex items-center justify-center p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:text-white hover:bg-gray-900 focus:outline-none transition-colors border border-transparent dark:border-white/5"
                            type="button"
                        >
                            <span className="sr-only">Open main menu</span>
                            <span className="material-icons text-2xl sm:text-3xl">
                                {isOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden pb-6 bg-white dark:bg-background-dark border-b border-gray-100 dark:border-white/5 shadow-2xl absolute w-full left-0 top-20`}>
                <div className="px-4 pt-4 pb-3 space-y-2 sm:px-6">
                    <a className="block text-gray-800 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-surface-dark px-4 py-3 rounded-xl text-base font-semibold transition-all" href="#">Home</a>
                    <a className="block text-gray-800 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-surface-dark px-4 py-3 rounded-xl text-base font-semibold transition-all" href="#">About</a>
                    <a className="block text-gray-800 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-surface-dark px-4 py-3 rounded-xl text-base font-semibold transition-all" href="#">Store</a>
                    <a className="block text-gray-800 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-surface-dark px-4 py-3 rounded-xl text-base font-semibold transition-all" href="#">Send Questions</a>
                    <div className="pt-4 pb-2">
                        <p className="px-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Coaching</p>
                        <a className="block text-gray-800 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-surface-dark px-6 py-2 rounded-lg text-sm font-medium transition-all" href="#">Phone Coaching</a>
                        <a className="block text-gray-800 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-surface-dark px-6 py-2 rounded-lg text-sm font-medium transition-all" href="#">In Person</a>
                    </div>
                    <a className="block text-gray-800 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-surface-dark px-4 py-3 rounded-xl text-base font-semibold transition-all" href="#">Members</a>
                    <a className="block text-gray-800 dark:text-gray-300 hover:text-primary hover:bg-gray-50 dark:hover:bg-surface-dark px-4 py-3 rounded-xl text-base font-semibold transition-all" href="#">Booking</a>
                    <a className="block bg-primary text-white px-5 py-3.5 rounded-xl text-center text-base font-bold mt-6 shadow-lg shadow-primary/20" href="#">
                        <span className="text-streak-animate">Bad Boy Membership</span>
                    </a>

                    <button
                        onClick={toggleTheme}
                        className="flex items-center justify-center space-x-2 w-full px-4 py-3.5 mt-4 rounded-xl text-base font-bold text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-surface-dark border border-transparent dark:border-white/5 hover:text-primary transition-all"
                    >
                        <span className="material-icons text-xl">
                            {isDarkMode ? 'light_mode' : 'dark_mode'}
                        </span>
                        <span>Switch to {isDarkMode ? 'Light' : 'Dark'} Mode</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
