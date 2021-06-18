import React from 'react';
import PropTypes from 'prop-types';
import './home.scss';
import { Hero } from '../components/hero/Hero'
import { Banner } from '../components/banners/Banner';
import { Cards } from '../components/cards/Cards';
import { TwoCol } from '../components/grids/TwoCol';

export const Home = ({}) => {
    
    return (
        <div className="home-container">
            <Hero />
            <Banner />
            <Cards />
            <TwoCol />
            <TwoCol reverse={ true } color="#fff" background="#424753" />
        </div>
    );
};

Home.propTypes = {};

Home.defaultProps = {};
