import React from 'react'

const LatestInsights = () => {
    const articles = [
        {
            title: 'Why "Nice Guy" Syndrome is Killing Your Attraction',
            description: 'Discover the psychological reasons why being too agreeable can actually push partners away, and how to find the balance.',
            date: 'Oct 24, 2023',
            category: 'Dating',
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDqRcpe2UemuRs7-coMVh-fOVljrw3NwOilq3y-UTq3qTgX4RfElvgXxz2Tx6lsSWfUcpeF-K7nZO0Sosf5BeUmMh4QsGX8dpXo6xcrobjyNxCDwF22yPXOa-7Oz_XmmFK-jRn-yPOzhsZvlugQFUXi_yLT4kUhYxyJDr299-ZHPS-q1gc_b6SW2usW0WOG0XPZg8s3Rw549EnzsepgaFH_BomTIifWez7QTvZIURbmetDuQgC8ZLVKIKGC8vDF9ppyCIa_NJPduLI"
        },
        {
            title: '5 Daily Habits to Boost Your Self-Worth Instantly',
            description: 'Practical, actionable steps you can take every morning to set the tone for a powerful, confident day.',
            date: 'Oct 20, 2023',
            category: 'Confidence',
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCo4GUJGD4pTKA7NZK-LVMcH6dbjvEyvtdKTwPKpsRHLcFGAIm2UaSTa6SEx4sQQM7xTOX1ZwJT5wQnD0vXho1VaZV8Kk58EZxuevGQ2U79Uovdmnq-nVuKysqA8fgsPg1VgVsKRTcIMNJIGhuu5_g7JR6Z15aduEyMRoiRrO-vNkFCZ5gtsmNB2ux6XRYnVOVvXbz6Utvc4X7fEiVyyySGjaROPOPaAJJH9h5NYGoBVBJzF_GJWf8DhW0u1iMBlm1ppUSsTOE3PBw"
        },
        {
            title: 'The Art of Effective Communication in Marriage',
            description: "How to express your needs clearly without starting an argument, and understanding your partner's perspective.",
            date: 'Oct 15, 2023',
            category: 'Relationships',
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9_OKn4dq6N_Hf5xViJoR30UYrcWcSTOp63f1sHwl4jeMfl9tuND-t9px0SlbwvnucvawmKJLXfgBPaqlTWJI4antdNYcu4N3rrTfrYFSdVDvK77aWM54dmzmE378hlsgRjjMKA0MmhXiPbAqOba0R8NRSyAJCFaENEh3o9XnVvfCS-clmyikPZucTxa9TP_4DTQklLgAq-yxbFuGOX7YXJT3bLX5RWSi75z09wa8Fe-hKODWrSYw3Tx8EzyvtKNLCkqxYGpw9n-Y"
        }
    ]

    return (
        <section className="py-16 bg-white dark:bg-background-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-10 reveal-up">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 dark:text-white mb-2">Latest Insights</h2>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">Read the latest articles on dating, confidence, and lifestyle.</p>
                    </div>
                    <a className="hidden sm:inline-flex items-center text-primary font-semibold hover:text-red-600 transition-colors" href="#">
                        View all articles <span className="material-icons ml-1 text-lg">arrow_forward</span>
                    </a>
                </div>

                <div className="space-y-4">
                    {articles.map((article, index) => (
                        <a key={index} className="block group reveal-up" style={{ animationDelay: `${index * 0.1}s` }} href="#">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center bg-gray-50 dark:bg-surface-accent rounded-2xl p-4 sm:p-5 border border-transparent hover:border-primary/20 hover:bg-white dark:hover:bg-surface-dark transition-all duration-300 shadow-sm glass-card gap-4">
                                <div className="w-full sm:w-48 h-44 sm:h-32 flex-shrink-0 overflow-hidden rounded-lg">
                                    <img
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        src={article.image}
                                    />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
                                        <span className="material-icons text-xs mr-1">schedule</span> {article.date}
                                        <span className="mx-2">•</span>
                                        <span className="text-primary font-medium">{article.category}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                                        {article.title}
                                    </h3>
                                    <p className="mt-2 text-gray-600 dark:text-gray-400 line-clamp-2">{article.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="mt-6 sm:hidden text-center">
                    <a className="inline-flex items-center text-primary font-semibold hover:text-red-600 transition-colors" href="#">
                        View all articles <span className="material-icons ml-1 text-lg">arrow_forward</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default LatestInsights
