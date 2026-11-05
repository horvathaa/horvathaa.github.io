import * as React from 'react'
import '../App.css'
import {
    AcademicCapIcon,
    InboxIcon,
    DocumentTextIcon,
} from '@heroicons/react/24/outline'
import { CURR_CV_PATH } from '../constants/constants'
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
            I’m Amber Horvath, an assistant professor of{' '}
            <a href="https://www.uvic.ca/ecs/software/research/our-researchers/index.php">Software Engineering</a>{' '}
            in the{' '}
            <a href="https://www.uvic.ca/ecs/computerscience/faculty-staff/faculty/horvath-amber.php">
                Department of Computer Science
            </a>{' '}
            at the University of Victoria.
            I’m a co-PI of the <a href="https://thechiselgroup.org/team/">CHISEL Lab</a> with{' '}
            <a href="https://www.uvic.ca/ecs/computerscience/faculty-staff/faculty/storey-margaret-anne.php">Dr. Margaret-Anne Storey</a>{' '}
            and <a href="https://www.uvic.ca/ecs/computerscience/faculty-staff/faculty/ernst-neil.php">Dr. Neil Ernst</a>.
        </>
    ),
    imgSrc: './resources/amber.jpeg',
    longDescription: (
        <>
            <p>
                I study what information developers need to make decisions about software,
                and I design tools to help them find, question, and share it. When people
                and AI agents build software together, the reasoning behind a change can
                be scattered across code, conversations, and someone’s memory. I’m interested
                in how developers piece that knowledge together so they can explain how a
                system works and decide what should change next.
            </p>
            <p className="mt-4">
                I earned my PhD in 2024 at{' '}
                <a href="https://hcii.cmu.edu/">Carnegie Mellon’s Human-Computer Interaction Institute</a>{' '}
                with <a href="https://www.cs.cmu.edu/~bam/">Brad Myers</a>, then joined the{' '}
                <a href="https://vis.mit.edu/">MIT CSAIL Visualization Group</a> as a postdoc with{' '}
                <a href="https://arvindsatya.com/">Arvind Satyanarayan</a> and co-advisor{' '}
                <a href="https://people.csail.mit.edu/karger/">David Karger</a>.
            </p>
        </>
    ),
    imgAlt: 'Photo of Amber Horvath walking wearing a blue shirt and sun hat',
    title: 'hello world',
}

const AboutMe: React.FC = () => {
    return (
        <section className="intro" aria-labelledby="intro-title">
            <div className="intro-grid">
                <div className="intro-copy">
                    <p className="eyebrow">Human–computer interaction / Software engineering</p>
                    <h1 id="intro-title">Amber<br /><em>Horvath.</em></h1>
                    <div className="intro-position">{about.shortDescription}</div>
                </div>
                <figure className="portrait">
                    <img src={about.imgSrc} alt={about.imgAlt} />
                    <figcaption>hello world <span aria-hidden="true">🦉</span></figcaption>
                </figure>
            </div>
            <div className="intro-research">{about.longDescription}</div>
            <a className="student-invite" href="/students/">
                <span>Let’s ask some questions together.</span>
                <strong>Prospective students <span aria-hidden="true">↗</span></strong>
            </a>
            <div className="social-links" aria-label="Contact and profiles">
                <a href="https://github.com/horvathaa" aria-label="GitHub" title="GitHub">
                <svg aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="mr-4 h-6 w-6 fill-slate-900 cursor-pointer"
                >
                    <path
                        fillRule="evenodd"
                        clipRule={'evenodd'}
                        d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
                    />
                </svg></a>
                <a href="https://x.com/AmberHorvath1" aria-label="X" title="X"><span className="sr-only">X profile</span><svg aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="mr-4 h-6 w-6 fill-slate-900 cursor-pointer"
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
                </svg></a>
                <a href="https://scholar.google.com/citations?user=_0XfqH4AAAAJ&hl=en" aria-label="Google Scholar" title="Google Scholar"><span className="sr-only">Google Scholar</span><AcademicCapIcon aria-hidden="true"
                    className="mr-4 h-6 w-6 cursor-pointer"
                /></a>
                <a href="https://www.linkedin.com/in/amber-horvath-54216b98/" aria-label="Amber Horvath on LinkedIn" title="LinkedIn" className="mr-4">
                    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
                        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.41v1.57h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.28 2.37 4.28 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V8.99h3.56v11.46zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                    </svg>
                </a>
                <a href="mailto:amberhorvath9@gmail.com" aria-label="Email Amber Horvath" title="Email Amber Horvath" className="mr-4">
                    <InboxIcon className="h-6 w-6" aria-hidden="true" />
                </a>
                <a href={CURR_CV_PATH} target="_blank" rel="noreferrer" aria-label="Amber Horvath’s CV (PDF)" title="CV (PDF)" className="mr-4">
                    <DocumentTextIcon className="h-6 w-6" aria-hidden="true" />
                </a>
            </div>
        </section>
    )
}

export default AboutMe
