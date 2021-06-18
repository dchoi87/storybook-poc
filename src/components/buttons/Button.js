import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

export const Button = ({ primary, backgroundColor, size, label, onClick }) => {
    const btnStyle = primary
        ? { backgroundColor, color: '#fff' }
        : { backgroundColor: '#fff', color: backgroundColor, border: `1px solid ${backgroundColor}` };

    return (
        <button
            className={ `btn ${size}` }
            style={ btnStyle }
            onClick={ onClick }>
            { label }
        </button>
    );
};

Button.propTypes = {
    primary: PropTypes.bool,
    backgroundColor: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    backgroundColor: '#0074a7',
    primary: true,
    size: 'medium',
    label: 'Button',
    onClick: undefined,
};
