import * as React from 'react'
import '../App.css'
import { mmlog } from 'mm-log'

interface INews {
    date: Date
    shortDescription: JSX.Element
    emoji: string
    longDescription: JSX.Element | string
}

function formatMonthYear(date: Date): string {
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const year = String(date.getFullYear())

    return `${month}/${year}`
}

const DEFAULT_P_STYLE = 'mt-2 text-base leading-6 text-gray-500'

const formatLink = (link: string, text: string) => (
    <a
        href={link}
        target="_blank"
        rel="noreferrer"
        style={{ fontWeight: 'bold' }}
    >
        {text}
    </a>
)

const formatIframe = (link: string) => <iframe src={link}></iframe>

const news: INews[] = [
    {
        date: new Date('2024-08-23'),
        shortDescription: (
            <>
                <span className="font-bold">
                    I am officially <span className="text-gray-500">done</span>!
                    I successfully defended my PhD and will be joining MIT CSAIL
                    as a post-doc in the fall.
                </span>
            </>
        ),
        emoji: '🍾',
        longDescription: (
            <>
                <p className={DEFAULT_P_STYLE}>
                    Thank you to my amazing advisor,{' '}
                    {formatLink('https://www.cs.cmu.edu/~bam/', 'Brad Myers')},
                    and committee members{' '}
                    {formatLink(
                        'https://www.lauradabbish.com/',
                        'Laura Dabbish'
                    )}
                    , {formatLink('https://kittur.org/', 'Niki Kittur')},{' '}
                    {formatLink(
                        'https://glassmanlab.seas.harvard.edu/glassman.html',
                        'Elena Glassman'
                    )}
                    , and Andrew Macvean. At MIT, I will be working with{' '}
                    {formatLink(
                        'https://people.csail.mit.edu/karger/',
                        'David Karger'
                    )}{' '}
                    and{' '}
                    {formatLink(
                        'https://arvindsatya.com/',
                        'Arvind Satyanarayan'
                    )}{' '}
                    on developer sensemaking and information management with AI.
                </p>
                <p className={DEFAULT_P_STYLE}>
                    You can read the full version of{' '}
                    {formatLink(
                        './resources/horvath_phd_dissertation_hcii_2024.pdf',
                        'my dissertation here'
                    )}
                    .
                </p>
            </>
        ),
    },
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
