import React, { useState, useEffect } from 'react'
import nycBanner from '../assets/nyc-banner.png'
import gameKingsBanner from '../assets/game-kings-banner.PNG'
import coachingBanner from '../assets/30-min-banner.jpg'
import membershipBanner from '../assets/Membership-Banner.jpg'
import yourFaultBanner from '../assets/your-fault-banner.jpg'

const HeroCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [touchStart, setTouchStart] = useState(0)
    const [touchEnd, setTouchEnd] = useState(0)
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

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX)
    }

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > 50
        const isRightSwipe = distance < -50

        if (isLeftSwipe) {
            moveSlide(1)
        } else if (isRightSwipe) {
            moveSlide(-1)
        }

        setTouchStart(0)
        setTouchEnd(0)
    }

    return (
        <header className="relative w-full overflow-hidden z-10 pt-20">
            {/* Ambient Flares - keeping them as they add to the premium look outside the image area */}
            <div className="ambient-flare -top-24 -left-24"></div>
            <div className="ambient-flare -bottom-24 -right-24"></div>

            <div
                className="relative w-full h-[300px] sm:h-[420px] md:h-[550px] lg:h-[750px] overflow-hidden group touch-pan-y"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
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
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex space-x-4 z-20 p-2 rounded-full bg-black/10 backdrop-blur-sm">
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
