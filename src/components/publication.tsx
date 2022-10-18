import * as React from 'react'
import { Publication as PublicationInterface } from '../constants/constants'
interface Props {
    publication: PublicationInterface
}

const Publication: React.FC<Props> = ({ publication }) => {
    const splitAuthors = publication.authors.split(',')
    const formattedAuthors = splitAuthors.map((a, i) => {
        let el
        if (a.includes('and') && a.includes('Amber Horvath')) {
            el = (
                <>
                    and{' '}
                    <b>
                        <i>Amber Horvath</i>
                    </b>
                </>
            )
        } else if (
            splitAuthors.length - 1 === i &&
            a.trim() === 'Amber Horvath'
        ) {
            el = (
                <i>
                    <b>{a}</b>
                </i>
            )
        } else if (a.trim() === 'Amber Horvath') {
            el = (
                <i>
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
        <dd className="mt-2 ml-16 text-base text-gray-400 flex">
            <div className="flex-col">
                <div className="text-gray-900 font-medium">
                    {publication.title}.
                </div>
                <div className="text-gray-700">{formattedAuthors}.</div>
                <div className="flex">
                    <div>Appeared in {publication.publicationVenue}. </div>
                    &nbsp; <a href={publication.paperPath}>Read here.</a>
                </div>
            </div>
        </dd>
    )
}

export default Publication
