import React from 'react';
import PropTypes from 'prop-types';
import './cards.scss';

export const Cards = ({ img, primaryText }) => {
    return (
        <div className="cards-container">
            <div className="cards">
                <div className="card">
                    <img alt="" className="responsive" src={ img } />
                    <div className="cta">{ primaryText }</div>
                </div>
                <div className="card">
                    <img alt="" className="responsive" src={ img } />
                    <div className="cta">{ primaryText }</div>
                </div>
                <div className="card">
                    <img alt="" className="responsive" src={ img } />
                    <div className="cta">{ primaryText }</div>
                </div>
            </div>
        </div>
    );
};

Cards.propTypes = {
    img: PropTypes.string,
    primaryText: PropTypes.string.isRequired,
};

Cards.defaultProps = {
    img: 'https://fakeimg.pl/500x300/cccccc,128/7d7d7d,255/?text=Img&font=lobster',
    primaryText: 'Lorem ipsum dolor sit amet',
};
