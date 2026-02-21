import React from 'react'

const CTASection = () => {
    return (
        <section className="relative py-24 bg-background-dark overflow-hidden">
            {/* Background Ambient Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-60"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="glass-card rounded-[2.5rem] p-8 md:p-16 border border-white/10 relative overflow-hidden reveal-scale">
                    {/* Inner Card Glow */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>

                    <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12">
                        <div className="lg:w-2/3 reveal-left">
                            <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6 leading-tight">
                                Ready to <span className="text-primary">Level Up?</span>
                            </h2>
                            <p className="text-xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
                                Join the <span className="text-white font-semibold">Bad Boy Membership</span> today. Access exclusive seminars, Q&A sessions, and a community of like-minded individuals dedicated to growth.
                            </p>
                            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                                <a className="px-8 py-4 bg-primary text-white rounded-full font-bold text-lg shadow-cinematic hover:shadow-cinematic-hover hover:bg-primary-light transition-all transform hover:-translate-y-1 text-center" href="#">
                                    Sign Up Now
                                </a>
                                <a className="px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-md text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all text-center" href="#">
                                    View Benefits
                                </a>
                            </div>
                        </div>

                        <div className="lg:w-1/3 flex justify-center lg:justify-end reveal-right stagger-2">
                            <div className="relative group">
                                {/* Orbiting Ring Animation */}
                                <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-125"></div>
                                <div className="absolute inset-0 rounded-full border-t-2 border-primary animate-spin" style={{ animationDuration: '4s' }}></div>
                                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center relative shadow-2xl">
                                    <div className="text-center z-10">
                                        <span className="block text-5xl md:text-6xl font-display font-black text-white tracking-tighter">VIP</span>
                                        <span className="block text-xs text-primary font-bold uppercase tracking-[0.3em] mt-2">Access</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTASection
