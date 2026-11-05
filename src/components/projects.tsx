import Publication from './publication'
import projectContents from '../constants/projectContents.json'
import { Project } from '../constants/constants'

const [thesis, api, inclusion, earlier] = projectContents.Projects

function Publications({ project }: { project: Project }) {
    return (
        <details className="research-publications">
            <summary>Publications · {project.publications.length}</summary>
            <div className="mt-4 space-y-4">
                {project.publications.map(publication => (
                    <Publication key={publication.title} publication={publication} />
                ))}
            </div>
        </details>
    )
}

export default function Projects() {
    return (
        <section aria-labelledby="research-interests" className="research-overview">
            <p className="eyebrow">03 / Research threads</p>
            <h2 id="research-interests" className="text-2xl font-semibold text-gray-900">
                Supporting developer experience
            </h2>
            <p className="mt-3 text-gray-700">
                I study how tools and working environments can help people understand
                software, make informed decisions, and participate in its development.
            </p>
            <div className="research-branches">
                <section aria-labelledby="cognition">
                    <h3 id="cognition">Supporting developer cognition through human-centered design</h3>
                    <p>I design tools around how developers learn, reason, and keep track of
                        their work. My current work on <a href="#clai">CLAI</a> extends these
                        questions to development with AI agents.</p>
                    <div className="research-topic">
                        <h4>PhD research · Capturing and sharing understanding</h4>
                        <p>My thesis explored how to preserve developers’ questions, reasoning,
                            and decisions through annotations and development history.
                            Projects include <a href="https://adamite.netlify.app/">Adamite</a>,{' '}
                            <a href="https://catseye.tech/">Catseye</a>, and Meta-Manager.</p>
                        <Publications project={thesis} />
                    </div>
                    <div className="research-topic">
                        <h4>API usability</h4>
                        <p>I studied how developers form mental models of unfamiliar APIs,
                            discover functionality, and encounter usability problems
                            reflected in repeated boilerplate code.</p>
                        <Publications project={api} />
                    </div>
                    <div className="research-topic">
                        <h4>Earlier work · Learning and exploration</h4>
                        <p>I investigated support for learning, debugging, and exploratory
                            programming, from helping end-user programmers solve problems
                            to helping data scientists revisit earlier analysis choices.</p>
                        <Publications project={earlier} />
                    </div>
                </section>
                <section aria-labelledby="inclusion">
                    <h3 id="inclusion">Supporting diverse developers through inclusive tools and practices</h3>
                    <p>I investigate barriers that shape who can participate in software
                        development and whose work is valued.</p>
                    <div className="research-topic">
                        <h4>Participation, bias, and equity</h4>
                        <p>This work includes GenderMag and studies of bias in developer
                            tools, barriers for open-source newcomers, and gender inequities
                            in how code review work is distributed.</p>
                        <Publications project={inclusion} />
                    </div>
                </section>
            </div>
        </section>
    )
}
