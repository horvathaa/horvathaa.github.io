import * as React from 'react'
import { Publication as PublicationInterface } from '../constants/constants'
interface Props {
    publication: PublicationInterface
}

const Publication: React.FC<Props> = ({ publication }) => {
    const splitAuthors = publication.authors.split(',')
    const formattedAuthors = splitAuthors.map((a, i) => {
        let el: React.ReactNode
        if (a.includes('and') && a.includes('Amber Horvath')) {
            el = (
                <React.Fragment key={publication.title + i + a}>
                    and{' '}
                    <b>
                        <i>Amber Horvath</i>
                    </b>
                </React.Fragment>
            )
        } else if (
            splitAuthors.length - 1 === i &&
            a.trim() === 'Amber Horvath'
        ) {
            el = (
                <i key={publication.title + i + a}>
                    <b>{a}</b>
                </i>
            )
        } else if (a.trim() === 'Amber Horvath') {
            el = (
                <i key={publication.title + i + a}>
                    <b>{a}, </b>
                </i>
            )
        } else if (splitAuthors.length - 1 === i) {
            el = a
        } else {
            el = `${a}, `
        }
        return el
    })

    return (
        <div className="publication-entry">
            <div className="flex-col">
                <div className="text-gray-900 font-medium">
                    {publication.title}.
                </div>
                <div className="text-gray-700">{formattedAuthors}.</div>
                <div className="publication-venue">
                    <div>Appeared in {publication.publicationVenue}. </div>
                    &nbsp; <a href={publication.paperPath}>Read here.</a>
                </div>
            </div>
        </div>
    )
}

export default Publication
