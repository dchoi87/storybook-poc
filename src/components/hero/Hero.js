import React from 'react';
import PropTypes from 'prop-types';
import './hero.scss';

export const Hero = ({ primaryText, secondaryText, noOfBtns, img }) => {
    return (
        <div className="hero-container">
            <img alt="" className="responsive hero-img" src={ img }/>
            <div className="content">
                <div className="left-block">
                    <h1>{primaryText}</h1>
                    <p>{secondaryText}</p>
                </div>
                <div className="right-block">
                    <div className="ctas">
                        {
                            Array(noOfBtns).fill().map((el, i) => {
                                return (
                                    <button key={i} className="cta">
                                        CTA {i + 1}
                                    </button>
                                )
                            })
                        }
                    </div>
                </div>
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
    img: 'https://fakeimg.pl/1600x740/efefef,128/ccc,255/?text=Img&font=lobster',
    primaryText: 'Lorem ipsum dolor sit amet',
    secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt odio sit amet nulla pellentesque lobortis.',
    noOfBtns: 6
};
