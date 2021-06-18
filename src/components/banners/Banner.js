import React from 'react';
import PropTypes from 'prop-types';
import './banner.scss';
import { Button } from '../buttons/Button';

/**
 * Written in JSDoc format
 *
 * - Bullet 1
 * - Bullet 2
 */
export const Banner = ({ backgroundColor, primaryText, secondaryText, size, color, ...props }) => {
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
                    <Button label="Learn More" size="large" backgroundColor="#fff" onClick={ handleClick } />
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
