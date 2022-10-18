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
