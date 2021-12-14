import PropTypes from 'prop-types';
import Link from 'next/link'

const View = ({ player: { person: { id, fullName }, position: {name}, jerseyNumber }}) => {
    return (
        <>
            <Link href={{ pathname: '/players', query: {id: id }}} >
                <div className="card">
                    <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                        <figure className="image is-48x48">
                            <img src={`https://content.mlb.com/images/headshots/current/60x60/672640.png`} alt={`${fullName} image`} />
                        </figure>
                        </div>
                        <div className="media-content">
                        <p className="title is-4">{fullName}</p>
                        <p className="subtitle is-6">@{jerseyNumber}_{name}</p>
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
