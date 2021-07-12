import React from 'react';
import PropTypes from 'prop-types';
import './svg.scss';
import { paths } from './svg-paths';

export const Svg = ({ color }) => {
    return (
        <div className="svg-container">
            {

                paths.map((svg, i) => {
                    return (
                        <div className="svg">
                            <svg 
                                key={ i }
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 50 50" 
                                style={{ fill: color }}>
                                {
                                    svg.path.map((path, i) => {
                                        return (
                                            <path key={ i } className={`svg-icon icon_${svg.name}`} d={path}></path>
                                        )
                                    })
                                }
                            </svg>
                            <div className="svg-label">{ svg.name }</div>
                        </div>
                    )
                })
            }
        </div>
    );
};

Svg.propTypes = {
    color: PropTypes.string,
};

Svg.defaultProps = {
    color: '#000',
};