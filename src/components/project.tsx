import * as React from 'react'
import '../App.css'
import Publication from './publication'
import {
    Project as ProjectInterface,
    Publication as PublicationInterface,
} from '../constants/constants'
import { log } from 'mm-log'

interface Props {
    project: ProjectInterface
}

const Project: React.FC<Props> = ({ project }) => {
    const [showingPublications, setShowingPublications] =
        React.useState<boolean>(false)



    
    log('HELLO FROM AMBERS WEBSITE')
    return (
        <div key={`${project.title}-outer`} className="relative flex-col flex ">
            <div
                key={`${project.title}-inner`}
                className="relative flex-col flex "
            >
                <div>
                    <dt>
                        <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-slate-500 text-white">
                            <project.icon
                                className="h-6 w-6"
                                aria-hidden="true"
                            />
                        </div>
                        <p className="ml-16 text-lg font-medium leading-6 text-gray-900">
                            {project.title}
                        </p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">
                        {project.description}
                    </dd>
                    {project.learnMore ? project.learnMore : null}
                </div>

                <div>
                    <div className="mt-3 sm:mt-0 sm:ml-3 flex items-end justify-center p-4 justify-items-center">
                        <button
                            onClick={() =>
                                setShowingPublications(!showingPublications)
                            }
                            className="flex w-1/2 items-center justify-center rounded-md border border-transparent bg-slate-200 px-8 py-3 text-base font-medium text-slate-700 hover:bg-slate-300 md:py-4 md:px-10 md:text-lg"
                        >
                            {!showingPublications
                                ? 'See Publications'
                                : 'Hide Publications'}
                        </button>
                    </div>
                </div>
            </div>
            <div
                id={project.title}
                className="level-2-container"
                aria-expanded={!showingPublications}
            >
                {project.publications.map(
                    (publication: PublicationInterface) => (
                        <Publication
                            key={publication.title}
                            publication={publication}
                        />
                    )
                )}
            </div>
        </div>
    )
}

export default Project
