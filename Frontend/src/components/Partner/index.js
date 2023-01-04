import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import partner1 from '../../images/partners/1.png'
import partner2 from '../../images/partners/2.png'
import partner3 from '../../images/partners/3.png'
import partner4 from '../../images/partners/4.png'
import partner5 from '../../images/partners/5.png'

import './style.css'



class Partner extends Component {
    render() {

        var settings = {
            dots: false,
            arrows: false,
            speed: 1200,
            slidesToShow: 5,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            fade:false,
            
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        };

        return (
            <section className="partners-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="partner-grids partners-slider">
                            <Slider {...settings}>
                                <div className="grid">
                                   <img src={partner1} alt="" />
                                </div>
                                <div className="grid">
                                  <img src={partner2} alt="" />
                                </div>
                                <div className="grid">
                                  <img src={partner3} alt="" />
                                </div>
                                <div className="grid">
                                    <img src={partner4} alt="" />
                                </div>
                                <div className="grid">
                                    <img src={partner5} alt="" />
                                </div>
                                <div className="grid">
                                   <img src={partner1} alt="" />
                                </div>
                                <div className="grid">
                                  <img src={partner2} alt="" />
                                </div>
                                <div className="grid">
                                  <img src={partner3} alt="" />
                                </div>
                                <div className="grid">
                                    <img src={partner4} alt="" />
                                </div>
                                <div className="grid">
                                    <img src={partner5} alt="" />
                                </div>
                            </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Partner;