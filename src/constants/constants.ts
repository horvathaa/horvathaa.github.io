export interface Publication {
    title: string
    authors: string
    publicationVenue: string
    paperPath: string
}

export interface Project {
    title: string
    description: string
    collaborators: string
    publications: Publication[]
    icon?: any
    learnMore?: JSX.Element
}

export const CURR_CV_PATH = './resources/horvath_CV-8-23-2024.pdf'
