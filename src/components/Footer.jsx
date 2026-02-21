import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-surface-light dark:bg-background-dark border-t border-gray-200 dark:border-white/10 pt-16 pb-8 geo-texture">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1 lg:col-span-1">
                        <a className="font-display font-bold text-2xl tracking-tighter text-gray-900 dark:text-white" href="#">
                            MR. <span className="text-primary">LOCARIO</span>
                        </a>
                        <p className="mt-4 text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                            Helping you find the truth within yourself. Relationship advice, life coaching, and confidence building for the modern world.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            {/* Social links placeholder */}
                            <a className="text-gray-400 hover:text-primary" href="#"><span className="sr-only">Facebook</span>FB</a>
                            <a className="text-gray-400 hover:text-primary" href="#"><span className="sr-only">Instagram</span>IG</a>
                            <a className="text-gray-400 hover:text-primary" href="#"><span className="sr-only">Twitter</span>TW</a>
                        </div>
                    </div>

                    {/* Programs Column */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-200 tracking-wider uppercase mb-4">Programs</h3>
                        <ul className="space-y-3">
                            <li><a className="text-base text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="#">Game Kings</a></li>
                            <li><a className="text-base text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="#">Bad Boy Membership</a></li>
                            <li><a className="text-base text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="#">One-on-One Coaching</a></li>
                            <li><a className="text-base text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="#">Live Seminars</a></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-200 tracking-wider uppercase mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li><a className="text-base text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="#">About Mr. Locario</a></li>
                            <li><a className="text-base text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="#">Press & Media</a></li>
                            <li><a className="text-base text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="#">Contact Support</a></li>
                            <li><a className="text-base text-gray-500 dark:text-gray-400 hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-200 tracking-wider uppercase mb-4">Stay Updated</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
                        <form className="flex flex-col space-y-2">
                            <input
                                className="bg-white dark:bg-black border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white rounded px-4 py-2 focus:outline-none focus:ring-1 focus:ring-primary glass-input"
                                placeholder="Enter your email"
                                type="email"
                            />
                            <button className="bg-primary hover:bg-red-700 text-white px-4 py-2 rounded font-semibold transition-colors" type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-sm text-gray-500 dark:text-gray-400">© 2023 Mr. Locario. All rights reserved.</p>
                    <div className="flex flex-wrap justify-center gap-4 sm:space-x-6 text-sm text-gray-500 dark:text-gray-400">
                        <a className="hover:text-primary transition-colors" href="#">Terms</a>
                        <a className="hover:text-primary transition-colors" href="#">Privacy</a>
                        <a className="hover:text-primary transition-colors" href="#">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
