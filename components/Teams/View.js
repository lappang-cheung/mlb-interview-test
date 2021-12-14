import PropTypes from 'prop-types';

const View = ({ name, id, abbreviation}) => {
    return (
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
    )
}

View.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    abbreviation: PropTypes.string.isRequired
}

export default View
