import * as React from 'react'
import '../App.css'
import { log } from 'mm-log'

interface INews {
    date: Date
    shortDescription: JSX.Element
    emoji: string
    longDescription: JSX.Element | string
}

function formatMonthYear(date: Date): string {
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = String(date.getFullYear())
    log(`month: ${month}, year: ${year}`)
    return `${month}/${year}`
}

const news: INews[] = [
    {
        date: new Date('2024-01-19'),
        shortDescription: (
            <>
                <span className="font-bold">
                    Our CHI paper, "Meta-Manager: A Tool for Collecting and
                    Exploring Meta Information About Code", was accepted -- see
                    you in Hawaii!
                </span>
            </>
        ),
        emoji: '🎉',
        longDescription: (
            <>
                <p className="mt-2 text-base leading-6 text-gray-500">
                    The paper was written with co-authors, Brad Myers and Andrew
                    Macvean, and explores automatically collecting,
                    prioritizing, and scaling developer editor traces to help
                    later developers make sense of implementation decisions.
                    Read our pre-print{' '}
                    <a
                        href={'./resources/horvath_chi2024.pdf'}
                        target="_blank"
                        rel="noreferrer"
                        style={{ fontWeight: 'bold' }}
                    >
                        here
                    </a>
                    .
                </p>
            </>
        ),
    },
    {
        date: new Date('2023-10-15'),
        shortDescription: (
            <>
                <span className="font-bold">
                    I'm on the job market! I'm looking for a tenure-track
                    faculty position in HCI and/or software engineering,
                    post-docs, or research scientist roles.{' '}
                </span>
            </>
        ),
        emoji: '👩‍🎓',
        longDescription: (
            <>
                <p className="mt-2 text-base leading-6 text-gray-500">
                    See my full CV{' '}
                    <a
                        href={'./resources/horvath_CV-1-22-2024.pdf'}
                        target="_blank"
                        rel="noreferrer"
                        style={{ fontWeight: 'bold' }}
                    >
                        here
                    </a>
                    .
                </p>
            </>
        ),
    },
]

const News: React.FC = () => {
    return (
        <div className="bg-white py-12 rounded my-14 mx-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-lg font-semibold text-slate-600">
                        News
                    </h2>
                </div>
                <div className="mt-10">
                    <ul className="md:grid-cols-2 md:gap-x-8 md:gap-y-10 mt-4">
                        {news.map((item) => (
                            <li key={item.date.toISOString()} className="mb-4">
                                <div className="flex">
                                    <span className="text-2xl">
                                        {item.emoji}
                                    </span>
                                    <div className="ml-4">
                                        <h4 className="text-lg leading-6 font-medium text-gray-900">
                                            {formatMonthYear(item.date)}
                                        </h4>
                                        <p className="mt-2 text-base leading-6 text-gray-500">
                                            {item.shortDescription}
                                        </p>
                                        {item.longDescription}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default News
