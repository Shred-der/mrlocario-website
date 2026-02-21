import { useEffect } from 'react'

/**
 * useScrollReveal
 * Attaches an IntersectionObserver to all elements matching the given selector
 * and adds the "is-visible" class when they enter the viewport.
 * Call once at the App level so it observes all sections / cards.
 */
const useScrollReveal = (selector = '[class*="reveal-"]', threshold = 0.12) => {
    useEffect(() => {
        const elements = document.querySelectorAll(selector)

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible')
                        // Unobserve after triggering so it only fires once
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold }
        )

        elements.forEach((el) => observer.observe(el))

        return () => observer.disconnect()
    }, [selector, threshold])
}

export default useScrollReveal
