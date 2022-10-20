import PropTypes from 'prop-types';

export const GifItem = ( {title, url}) => {
    return (
        <div className="card">
            <img src= {url} alt = {title}></img>
            <a target="_blank" href={url} className="card__description"> {title} </a>
        </div>
    );
}

GifItem.propTypes = {
    title : PropTypes.string.isRequired,
    url : PropTypes.string.isRequired
};