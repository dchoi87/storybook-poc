import React from 'react';
import PropTypes from 'prop-types';
import './twocol.scss';
import { Button } from '../buttons/Button'

export const TwoCol = ({ img, reverse, primaryText, secondaryText, color, background, cta }) => {
    return (
        <div className="grid-container">
            <div className={ `grid two-col ${reverse ? 'reverse' : ''}` }>
                <div className="left-block" style={{ color, background }}>
                    <h1>{ primaryText }</h1>
                    <p>{ secondaryText }</p>
                    {
                        cta &&
                        <div className="cta">
                            <Button label="Learn More" size="medium" backgroundColor="#424753" primary={ false } />
                        </div>
                    }
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
    color: PropTypes.string,
    background: PropTypes.string,
    cta: PropTypes.bool,
};

TwoCol.defaultProps = {
    reverse: false,
    img: 'https://fakeimg.pl/800x600/cccccc,128/7d7d7d,255/?text=Img&font=lobster',
    primaryText: 'Lorem ipsum dolor sit amet',
    secondaryText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt odio sit amet nulla pellentesque lobortis. Cras porttitor tristique felis vel accumsan.',
    color: '#000',
    background: '#fff',
    cta: false
};
