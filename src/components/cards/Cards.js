import React from 'react';
import PropTypes from 'prop-types';
import './cards.scss';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

export const Cards = ({ img, primaryText, carousel }) => {
    return (
        <div className="cards-container">
            {
                carousel ?
                <OwlCarousel
                    className='owl-theme' 
                    margin={15} 
                    items={1} 
                    responsiveRefreshRate={100}
                    responsive={{
                        768 : { items: 3 }
                    }}
                    >
                    {
                        Array(5).fill().map((el, i) => {
                            return (
                                <div key={ i } className="card">
                                    <img alt="" className="responsive" src={ img } />
                                    <div className="cta">{ i + 1 }. { primaryText }</div>
                                </div>
                            )
                        })
                    }
                </OwlCarousel> :
                <div className="cards">
                    {
                        Array(3).fill().map((el, i) => {
                            return (
                                <div key={ i } className="card">
                                    <img alt="" className="responsive" src={ img } />
                                    <div className="cta">{ i + 1 }. { primaryText }</div>
                                </div>
                            )
                        })
                    }
                </div>
            }
        </div>
    );
};

Cards.propTypes = {
    img: PropTypes.string,
    primaryText: PropTypes.string,
    carousel: PropTypes.bool,
};

Cards.defaultProps = {
    img: 'https://fakeimg.pl/500x300/cccccc,128/7d7d7d,255/?text=Img&font=lobster',
    primaryText: 'Lorem ipsum dolor sit amet',
    carousel: false
};
