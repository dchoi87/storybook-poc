import React from 'react';
import PropTypes from 'prop-types';
import './hero.scss';

export const Hero = ({ primaryText, secondaryText, noOfBtns }) => {
    return (
        <div className="hero-container">
            <div className="left-block">
                <h1>{primaryText}</h1>
                <p>{secondaryText}</p>
            </div>
            <div className="right-block">
                {
                    Array(noOfBtns).fill().map((el, i) => {
                        return (
                            <div key={i} className="cta">CTA {i + 1}</div>
                        )
                    })
                }
            </div>
        </div>
    );
};

Hero.propTypes = {
    img: PropTypes.string,
    primaryText: PropTypes.string,
    secondaryText: PropTypes.string,
    noOfBtns: PropTypes.number
};

Hero.defaultProps = {
    img: 'https://fakeimg.pl/500x300/cccccc,128/7d7d7d,255/?text=Img&font=lobster',
    primaryText: 'Lorem ipsum dolor sit amet',
    secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt odio sit amet nulla pellentesque lobortis.',
    noOfBtns: 6
};
