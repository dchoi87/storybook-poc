import React from 'react';
import PropTypes from 'prop-types';
import './banner.scss';
import { Button } from '../buttons/Button';

export const Banner = ({ backgroundColor, primaryText, secondaryText, color }) => {
    const handleClick = () => {
        alert('learning more!');
    }
    return (
        <div className={ `banner-container ${backgroundColor}` }>
            <div className="banner">
                <div className="left-block">
                    <h1 style={{ color: color }}>{ primaryText }</h1>
                    <p style={{ color: color }}>{ secondaryText }</p>
                </div>
                <div className="right-block">
                    <Button label="Learn More" size="medium" primary={false} backgroundColor="#424753" onClick={ handleClick } />
                </div>
            </div>
        </div>
    );
};

Banner.propTypes = {
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    primaryText: PropTypes.string.isRequired,
    secondaryText: PropTypes.string,
};

Banner.defaultProps = {
    color: '#fff',
    backgroundColor: 'gradient-zodiac-blue',
    primaryText: 'Lorem ipsum dolor',
    secondaryText : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tincidunt odio.'
};
