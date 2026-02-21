import React, { useState, useEffect } from 'react'
import nycBanner from '../assets/nyc-banner.png'
import gameKingsBanner from '../assets/game-kings-banner.PNG'
import coachingBanner from '../assets/30-min-banner.jpg'
import membershipBanner from '../assets/Membership-Banner.jpg'
import yourFaultBanner from '../assets/your-fault-banner.jpg'

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const totalSlides = 5

    const slides = [
        {
            image: nycBanner,
            objectFit: 'object-contain',
            objectPosition: 'center center',
            background: 'bg-white dark:bg-black'
        },
        {
            image: gameKingsBanner,
            objectFit: 'object-contain', // Portrait mode support
            objectPosition: 'center center',
            background: 'bg-white dark:bg-black'
        },
        {
            image: coachingBanner,
            objectFit: 'object-contain',
            objectPosition: 'center center',
            background: 'bg-white dark:bg-black'
        },
        {
            image: membershipBanner,
            objectFit: 'object-contain',
            objectPosition: 'center center',
            background: 'bg-white dark:bg-black'
        },
        {
            image: yourFaultBanner,
            objectFit: 'object-contain',
            objectPosition: 'center center',
            background: 'bg-white dark:bg-black'
        }
    ]

    const moveSlide = (direction) => {
        setCurrentSlide((prev) => (prev + direction + totalSlides) % totalSlides)
    }

    const goToSlide = (index) => {
        setCurrentSlide(index)
    }

    useEffect(() => {
        const timer = setInterval(() => moveSlide(1), 6000)
        return () => clearInterval(timer)
    }, [])

    return (
        <header className="relative w-full overflow-hidden z-10 pt-20">
            {/* Ambient Flares - keeping them as they add to the premium look outside the image area */}
            <div className="ambient-flare -top-24 -left-24"></div>
            <div className="ambient-flare -bottom-24 -right-24"></div>

            <div className="relative w-full h-[300px] sm:h-[420px] md:h-[550px] lg:h-[750px] overflow-hidden group">
                {/* Carousel Slides */}
                <div
                    className="flex transition-transform duration-700 ease-in-out h-full"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div key={index} className={`min-w-full h-full relative overflow-hidden ${slide.background || ''}`}>
                            <img
                                alt={`Banner ${index + 1}`}
                                className={`absolute inset-0 w-full h-full ${slide.objectFit} transition-transform duration-1000`}
                                style={{ objectPosition: slide.objectPosition || 'center center' }}
                                src={slide.image}
                            />
                            {/* Dot pattern overlay - sits above the image */}
                            <div
                                className="absolute inset-0 z-10 pointer-events-none"
                                style={{
                                    backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d32f2f' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"
                                }}
                            ></div>
                        </div>
                    ))}
                </div>

                {/* Navigation Arrows */}
                <button
                    className="absolute left-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/40 hover:bg-primary text-white backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 focus:outline-none z-20 shadow-xl"
                    onClick={() => moveSlide(-1)}
                >
                    <span className="material-icons text-2xl">chevron_left</span>
                </button>
                <button
                    className="absolute right-6 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/40 hover:bg-primary text-white backdrop-blur-md transition-all opacity-0 group-hover:opacity-100 focus:outline-none z-20 shadow-xl"
                    onClick={() => moveSlide(1)}
                >
                    <span className="material-icons text-2xl">chevron_right</span>
                </button>

                {/* Pagination Dots */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-4 z-20 p-2 rounded-full bg-black/10 backdrop-blur-sm">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all focus:outline-none border-2 border-white/20 ${index === currentSlide ? 'bg-primary border-primary scale-125' : 'bg-white/40 hover:bg-white/80'}`}
                            onClick={() => goToSlide(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </header>
    )
}

export default HeroCarousel
