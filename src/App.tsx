// import React from 'react'
// import amber from './resources/amber.jpeg'
// import styles from './styles/App.module.css'
import { useEffect, useRef } from 'react'
import './App.css'
import Projects from './components/projects'
import AboutMe from './components/aboutMe'
import News from './components/news'
// import { mmlog } from 'mm-log'
// import './styles/globals.css'

function App() {
    const homepage = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (!homepage.current || !('IntersectionObserver' in window)) return
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(({ target, isIntersecting }) => {
                if (isIntersecting) {
                    target.classList.add('section-arrived')
                    observer.unobserve(target)
                }
            })
        })
        homepage.current.querySelectorAll('.homepage-section').forEach(section => observer.observe(section))
        return () => observer.disconnect()
    }, [])

    const waveAnimation = (
        <div>
            <svg
                className="waves"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 24 150 28"
                preserveAspectRatio="none"
                shapeRendering="auto"
            >
                <defs>
                    <path
                        id="gentle-wave"
                        d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                    />
                </defs>
                <g className="parallax">
                    <use
                        xlinkHref="#gentle-wave"
                        x="48"
                        y="0"
                        fill="rgba(255,255,255,0.7)"
                        // fill="rgba(132, 204, 22, 0.7)"
                    />
                    <use
                        xlinkHref="#gentle-wave"
                        x="48"
                        y="3"
                        fill="rgba(255,255,255,0.5)"
                        // fill="rgba(132, 204, 22, 0.5)"
                    />
                    <use
                        xlinkHref="#gentle-wave"
                        x="48"
                        y="5"
                        fill="rgba(255,255,255,0.3)"
                        // fill="rgba(132, 204, 22, 0.3)"
                    />
                    <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                </g>
            </svg>
        </div>
    )
    return (
        <div className="site-canvas relative" ref={homepage}>
            <a className="skip-link" href="#main-content">Skip to content</a>
            <header className="site-header">
                <a href="#intro-title" className="site-wordmark" aria-label="Amber Horvath home">ah<span aria-hidden="true">🦉</span></a>
                <nav aria-label="Main navigation">
                    <a href="#current-projects">Projects</a>
                    <a href="#news">News</a>
                    <a href="#research-interests">Research</a>
                    <a href="/students/">Students ↗</a>
                </nav>
            </header>
            <div className="site-body">
                <div className="relative z-10">
                    <main id="main-content">
                        {/* <Header /> */}
                        <div className="App">
                            <div className="intro-and-projects">
                                <AboutMe />
                                <section aria-labelledby="current-projects" className="homepage-section project-feature px-5 sm:px-8 py-8">
                                    <p className="eyebrow">01 / In the works</p>
                                    <h2 id="current-projects" className="text-2xl font-semibold text-gray-900">
                                        Current research projects
                                    </h2>
                                    <article className="mt-5 text-gray-700 leading-relaxed">
                                        <h3 id="clai" className="text-xl font-semibold text-gray-900">
                                            CLAI · Understanding software built with AI
                                        </h3>
                                        <p className="mt-2 max-w-3xl">
                                            An AI agent can make a change that passes every test.
                                            What does a developer still need to understand before building on it?
                                            CLAI lets us write scripts that specify which parts of that work a
                                            developer takes on, what evidence an agent prepares, and when the
                                            developer sees it.
                                        </p>
                                        <p className="mt-3 max-w-3xl">
                                            We built two prototypes with CLAI. One traces a change from the
                                            developer’s request through the agent’s work to the resulting code.
                                            The other helps a developer map an unfamiliar codebase as they explore
                                            it, then asks a model to check that map against the code. In design
                                            critiques with ten experts, participants welcomed help gathering
                                            evidence but wanted to inspect it themselves before making decisions
                                            they’d have to stand behind.
                                        </p>
                                        <figure className="execution-figure">
                                            <a href="/resources/clai/execution-story.png" aria-label="Open the full-size CLAI execution story image">
                                                <img src="/resources/clai/execution-story.png" width="2137" height="1453" loading="lazy"
                                                    alt="On the left, a CLAI script watches edits and console logs. On the right, VS Code shows two successive runs with their code, values, and explanations." />
                                            </a>
                                            <figcaption><strong>An execution story.</strong> The console output changed from “hello world” to “CHI 2027.” The script keeps both runs and asks a model to explain the difference using the edit and the observed values. <a href="/resources/clai/execution-story.png">View full-size image</a></figcaption>
                                        </figure>
                                        <details className="clai-demo">
                                            <summary>Watch the CLAI walkthrough <span>4 min 53 sec</span></summary>
                                            <video controls playsInline preload="none" aria-label="CLAI research walkthrough">
                                                <source src="/resources/clai/walkthrough.mp4" type="video/mp4" />
                                                <track kind="captions" src="/resources/clai/walkthrough.vtt" srcLang="en" label="English" default />
                                            </video>
                                        </details>
                                    </article>
                                </section>
                            </div>
                            <div className="homepage-section"><News /></div>
                            <div className="homepage-section"><Projects /></div>
                        </div>
                    </main>
                </div>
            </div>
            <footer className="site-footer"><span>Amber Horvath · University of Victoria</span><a href="#intro-title">Back to top ↑</a></footer>
            {waveAnimation}
        </div>
    )
}

export default App
