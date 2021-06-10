import React from 'react';
import PropTypes from 'prop-types';
import './banner.css';
import { Button } from './Button';

export const Banner = ({ backgroundColor, primaryText, secondaryText, size, color, ...props }) => {
    return (
        <div className={ `banner-container ${backgroundColor}` }>
            <div className="banner">
                <div className="left-block">
                    <h1 style={{ color: color }}>{ primaryText }</h1>
                    <p style={{ color: color }}>{ secondaryText }</p>
                </div>
                <div className="right-block">
                    <Button label="Learn More" size="large" backgroundColor="#fff" />
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
    primaryText: PropTypes.string.isRequired,
    secondaryText: PropTypes.string,
};
