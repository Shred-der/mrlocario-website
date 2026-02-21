import React from 'react'
import gameKingsBanner from '../assets/game-kings-banner.PNG'
import coachingBanner from '../assets/30-min-banner.jpg'
import membershipBannerImg from '../assets/Membership-Banner.jpg'
import yourFaultBanner from '../assets/your-fault-banner.jpg'

const FeaturedPrograms = () => {
    const programs = [
        {
            title: 'Game Kings 2: NYC Seminar',
            description: 'The definition of a man. Live seminar experience in New York City.',
            tag: 'Event',
            tagColor: 'bg-primary',
            image: gameKingsBanner,
            linkText: 'Learn More',
            icon: 'arrow_forward'
        },
        {
            title: 'Your Fault',
            description: 'A raw, unfiltered look at taking radical responsibility for your life and relationships.',
            tag: 'Ebook',
            tagColor: 'bg-yellow-600',
            image: yourFaultBanner,
            linkText: 'Buy Ebook',
            icon: 'book'
        },
        {
            title: '30 Minute Game Session',
            description: 'Get direct advice and strategy tailored to your situation.',
            tag: 'Coaching',
            tagColor: 'bg-blue-600',
            image: coachingBanner,
            linkText: 'Book Now',
            icon: 'calendar_today'
        }
    ]

    return (
        <section className="py-16 bg-gray-50 dark:bg-surface-dark/50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 reveal-up">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-2">Featured Programs</h2>
                    <p className="mt-4 text-gray-600 dark:text-gray-400">Master the game. elevate your mindset.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {programs.map((program, index) => (
                        <div key={index} style={{ animationDelay: `${index * 0.1}s` }} className="reveal-up group relative bg-white dark:bg-surface-dark rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-white/5 hover:border-primary/50 dark:hover:border-primary/50 transition-all duration-300 hover:shadow-cinematic glass-card flex flex-col">
                            <div className="relative overflow-hidden h-48 flex-shrink-0 bg-white dark:bg-black">
                                <img
                                    alt={program.title}
                                    className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
                                    src={program.image}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                                <div className="absolute bottom-4 left-4">
                                    <span className={`px-2 py-1 ${program.tagColor} text-white text-xs font-bold rounded uppercase`}>
                                        {program.tag}
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white font-display mb-2 group-hover:text-primary transition-colors">
                                    {program.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1">{program.description}</p>
                                <a className="inline-flex items-center text-sm font-semibold text-primary hover:text-red-400 mt-auto" href="#">
                                    {program.linkText} <span className="material-icons text-sm ml-1">{program.icon}</span>
                                </a>
                            </div>
                        </div>
                    ))}

                    {/* Membership Card */}
                    <div className="reveal-up group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden shadow-lg border border-primary/30 hover:border-primary transition-all duration-300 transform hover:-translate-y-1 hover:shadow-cinematic glass-card flex flex-col" style={{ animationDelay: '0.3s' }}>
                        <div className="relative h-48 flex-shrink-0 overflow-hidden">
                            <img
                                alt="Bad Boy Membership"
                                className="object-cover w-full h-full opacity-60 group-hover:scale-110 transition-transform duration-500"
                                src={membershipBannerImg}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                            <div className="absolute bottom-4 left-4">
                                <span className="px-2 py-1 bg-primary text-white text-xs font-bold rounded uppercase">Membership</span>
                            </div>
                        </div>
                        <div className="relative p-6 flex flex-col flex-1 items-center text-center">
                            <span className="material-icons text-primary text-4xl mb-3">diamond</span>
                            <h3 className="text-xl font-bold text-white font-display mb-2">Bad Boy Membership</h3>
                            <p className="text-sm text-gray-400 mb-6 flex-1">Exclusive content, priority access, and premium community features.</p>
                            <a className="px-6 py-2 bg-primary text-white rounded-full font-bold text-sm shadow-lg hover:bg-red-700 transition-colors w-full text-center" href="#">
                                Join Now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedPrograms
