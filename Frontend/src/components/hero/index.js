import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from '../../images/slider/slide-1.jpg'
import hero2 from '../../images/slider/slide-2.jpg'
import hero3 from '../../images/slider/slide-3.jpg'
import hero4 from '../../images/shape/shape.png'

import './style.css'



class Hero extends Component {
    render() {

        var settings = {
            dots: true,
            arrows: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            fade: true
        };

        return (
            <section className="hero-slider hero-style-1">
                <Slider {...settings}>
                    <div className="slide">
                        <div className="slide-inner" style={{ backgroundImage: `url(${hero1})`}}>
                            <div className="container">
                                <div className="slide-thumb">
                                    <span>GO FOR HELP</span>
                                </div>
                                <div className="slide-title">
                                    <h2>They Are Wait For Some Food.</h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>It is a long established fact that a reader will be distracted the readable content of a page when looking at its layout point of using of letters, as opposed.</p>
                                </div>
                                <div  className="slide-btns">
                                    <Link to="/donate" className="theme-btn">Donate Now<i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                                </div>
                            </div>
                            <div className="slide-shape">
                                <img src={hero4} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slide-inner" style={{ backgroundImage: `url(${hero2})`}}>
                            <div className="container">
                                <div className="slide-thumb">
                                    <span>GO FOR HELP</span>
                                </div>
                                <div className="slide-title">
                                    <h2>They Are Wait For Some Food.</h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>It is a long established fact that a reader will be distracted the readable content of a page when looking at its layout point of using of letters, as opposed.</p>
                                </div>
                                <div  className="slide-btns">
                                    <Link to="/donate" className="theme-btn">Donate Now<i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                                </div>
                            </div>
                            <div className="slide-shape">
                               <img src={hero4} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slide-inner" style={{ backgroundImage: `url(${hero3})`}}>
                            <div className="container">
                                <div className="slide-thumb">
                                    <span>GO FOR HELP</span>
                                </div>
                                <div className="slide-title">
                                    <h2>They Are Wait For Some Food.</h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>It is a long established fact that a reader will be distracted the readable content of a page when looking at its layout point of using of letters, as opposed.</p>
                                </div>
                                <div  className="slide-btns">
                                    <Link to="/donate" className="theme-btn">Donate Now<i className="fa fa-angle-double-right" aria-hidden="true"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="slide-shape">
                               <img src={hero4} alt="" />
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
        )
    }
}

export default Hero;