// import React from 'react'
// import amber from './resources/amber.jpeg'
// import styles from './styles/App.module.css'
import './App.css'
import Projects from './components/projects'
import AboutMe from './components/aboutMe'
import News from './components/news'
import { mmlog } from 'mm-log'
// import './styles/globals.css'

function App() {
    // eslint-disable-next-line no-lone-blocks
    {
        console.log('adding some more content')
        mmlog('another!!!')
        mmlog('one more!!')
        // console.log('adding some text')

        mmlog(Math.random(), 'hi')
    }
    mmlog({ start: 'test', end: 'other test' }, 'other', 'args', 'new args')
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
        <div className="relative bg-slate-100">
            <div className="mx-auto max-w-7xl">
                <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        {/* <Header /> */}
                        <div className="App">
                            <AboutMe />
                            <News />
                            <Projects />
                        </div>
                    </main>
                </div>
            </div>
            {waveAnimation}
        </div>
    )
}

export default App
