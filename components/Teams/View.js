import PropTypes from 'prop-types';
import Link from 'next/link'

const View = ({ team: {id, name, abbreviation}}) => {
    return (
        <>
            <Link href={{ pathname: '/team', query: {id: id }}}>
                <div className="card">
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                            <figure className="image is-48x48">
                                <img src={`https://www.mlbstatic.com/team-logos/${id}.svg`} alt={`${name} image`} />
                            </figure>
                            </div>
                            <div className="media-content">
                            <p className="title is-4">{name}</p>
                            <p className="subtitle is-6">@{abbreviation}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}

View.propTypes = {
    name: PropTypes.string,
    id: PropTypes.number,
    abbreviation: PropTypes.string
}

export default View
