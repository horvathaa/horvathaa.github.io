import * as React from 'react'
import Project from './project'
import { Project as ProjectInterface } from '../constants/constants'

import * as ProjectJSON from '../constants/projectContents.json'
import {
    ChatBubbleBottomCenterTextIcon,
    CodeBracketIcon,
    UserPlusIcon,
    ComputerDesktopIcon,
} from '@heroicons/react/24/outline'
interface Props {}

const Projects: React.FC<Props> = () => {
    const projects: ProjectInterface[] = Object.values(ProjectJSON)[0].map(
        (obj) => {
            switch (obj.title) {
                case "Annotations for Supporting Developers' Sensemaking": {
                    return {
                        ...obj,
                        icon: ChatBubbleBottomCenterTextIcon,
                        learnMore: (
                            <div className="mt-2 ml-16 text-base text-gray-500">
                                Learn more about{' '}
                                <a
                                    href={'https://adamite.netlify.app/'}
                                    target={'_blank'}
                                    rel="noreferrer"
                                    className="text-slate-800 font-medium hover:text-slate-700 hover:underline"
                                >
                                    Adamite
                                </a>{' '}
                                and{' '}
                                <a
                                    href={'https://catseye.tech/'}
                                    target={'_blank'}
                                    rel="noreferrer"
                                    className="text-slate-800 font-medium hover:text-slate-700 hover:underline"
                                >
                                    Catseye
                                </a>
                                .
                            </div>
                        ),
                    }
                }
                case 'API Usability': {
                    return { ...obj, icon: CodeBracketIcon }
                }
                case 'Developer Diversity and Inclusion': {
                    return { ...obj, icon: UserPlusIcon }
                }
                case 'Human-Centered Developer Support': {
                    return { ...obj, icon: ComputerDesktopIcon }
                }
                default:
                    return { ...obj, icon: ComputerDesktopIcon }
            }
        }
    )

    return (
        <div className="bg-white py-12 rounded">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-lg font-semibold text-slate-600">
                        Research Interests
                    </h2>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                        {projects.map((project) => (
                            <Project key={project.title} project={project} />
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

export default Projects
