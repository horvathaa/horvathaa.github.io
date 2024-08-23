import * as React from 'react'
import '../App.css'
import {
    AcademicCapIcon,
    InboxIcon,
    DocumentTextIcon,
} from '@heroicons/react/24/outline'
interface About {
    shortDescription: string | JSX.Element
    longDescription: JSX.Element
    imgSrc: string
    imgAlt: string
    title: string
}

const about: About = {
    shortDescription: (
        <>
            6th year Ph.D student in the Human-Computer Interaction Institute at
            Carnegie Mellon University, researching ways to make developer
            information tracking, capturing, and sharing more seamless, advised
            by{' '}
            <a
                href={'https://cs.cmu.edu/~bam'}
                target="_blank"
                rel="noreferrer"
            >
                Dr. Brad Myers
            </a>
            .
        </>
    ),
    imgSrc: './resources/amber.jpeg',
    longDescription: (
        <>
            <div>
                Amber Horvath works at the intersection of human-computer
                interaction (HCI), programming support tools, software
                engineering, and sensemaking. She uses human-centered methods to
                design and build novel tools to help developers harness and
                share their programming-related meta-information for software
                development support. She has also done work related to fostering
                more inclusive environments for underrepresented populations in
                computing, using novel methodologies and large-scale data
                analysis.
            </div>
            <div>
                She publishes at premier venues in the fields of HCI and
                software engineering, including CHI, UIST, ICSE, and CSCW.
            </div>
        </>
    ),
    imgAlt: 'Photo of Amber Horvath walking wearing a blue shirt and sun hat',
    title: 'hello world',
}

const AboutMe: React.FC = () => {
    return (
        <div className="bg-white py-8 rounded my-14 mx-20">
            <div className="text-4xl items-center w-full flex tracking-tight text-gray-900 justify-between sm:text-5xl md:text-6xl p-4">
                <div className="w-full">
                    <h2 className="text-4xl w-full flex font-bold tracking-tight text-gray-900 justify-between sm:text-5xl md:text-6xl p-4">
                        {about.title}
                    </h2>
                    <div className="text-base p-4 text-gray-600 sm:mx-auto  sm:max-w-xl sm:text-lg  md:text-xl lg:mx-0">
                        {about.shortDescription}
                    </div>
                    <div className="text-base p-4 text-gray-500 sm:mx-auto  sm:max-w-xl sm:text-md  md:text-lg lg:mx-0">
                        {about.longDescription}
                    </div>
                </div>
                <div className="flex h-full  items-center justify-around rounded-md text-white">
                    <img
                        className="h-3/4 w-3/4 rounded-md"
                        src={about.imgSrc}
                        alt={about.imgAlt}
                    />
                </div>
            </div>
            <div className="px-8 flex items-center">
                <svg
                    viewBox="0 0 24 24"
                    className="mr-4 h-6 w-6 fill-slate-900 cursor-pointer"
                    onClick={() => window.open('https://github.com/horvathaa')}
                    target={'_blank'}
                >
                    <path
                        fillRule="evenodd"
                        clipRule={'evenodd'}
                        d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
                    />
                </svg>
                <svg
                    viewBox="0 0 24 24"
                    className="mr-4 h-6 w-6 fill-slate-900 cursor-pointer"
                    onClick={() => window.open('https://x.com/AmberHorvath1')}
                    target={'_blank'}
                >
                    <g>
                        <path
                            fillRule="evenodd"
                            clipRule={'evenodd'}
                            d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                        />
                        {/* <text x="0" y="15">
                            Label 1
                        </text> */}
                    </g>
                </svg>
                <AcademicCapIcon
                    className="mr-4 h-6 w-6 cursor-pointer"
                    onClick={() =>
                        window.open(
                            'https://scholar.google.com/citations?user=_0XfqH4AAAAJ&hl=en'
                        )
                    }
                    target={'_blank'}
                />
                <InboxIcon
                    className="mr-4 h-6 w-6 cursor-pointer"
                    onClick={() =>
                        window.open('mailto:amberhorvath9@gmail.com')
                    }
                    target={'_blank'}
                />
                <DocumentTextIcon
                    className="mr-4 h-6 w-6 cursor-pointer"
                    onClick={() =>
                        window.open('./resources/horvath_CV-8-23-2024.pdf')
                    }
                    target={'_blank'}
                />
            </div>
        </div>
    )
}

export default AboutMe
