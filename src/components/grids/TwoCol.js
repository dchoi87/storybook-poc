import React from 'react';
import PropTypes from 'prop-types';
import './twocol.scss';

export const TwoCol = ({ img, reverse, primaryText, secondaryText, color }) => {
    return (
        <div className="grid-container">
            <div className={ `grid two-col ${reverse ? 'reverse' : ''}` }>
                <div className="left-block" style={{ color }}>
                    <h1>{ primaryText }</h1>
                    <p>{ secondaryText }</p>
                </div>
                <div className="right-block">
                    <img alt="" className="responsive" src={ img } />
                </div>
            </div>
        </div>
    );
};

TwoCol.propTypes = {
    reverse: PropTypes.bool,
    img: PropTypes.string,
    primaryText: PropTypes.string,
    secondaryText: PropTypes.string,
    color: PropTypes.string
};

TwoCol.defaultProps = {
    reverse: false,
    img: 'https://fakeimg.pl/800x600/cccccc,128/7d7d7d,255/?text=Img&font=lobster',
    primaryText: 'Lorem ipsum dolor sit amet',
    secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt odio sit amet nulla pellentesque lobortis. Cras porttitor tristique felis vel accumsan. Phasellus eget risus tortor. Aenean maximus cursus dolor, eget condimentum sem fringilla at. Phasellus sodales nibh ac dapibus varius. Praesent luctus congue quam at rutrum.',
    color: '#000'
};
