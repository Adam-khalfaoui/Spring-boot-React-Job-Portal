import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import test1 from '../../images/testimonials/img-1.png'
import test2 from '../../images/testimonials/img-2.png'
import test3 from '../../images/testimonials/img-3.png'
import test4 from '../../images/ts.png'

import './style.css'



class Testimonial extends Component {

    constructor(props) {
        super(props);
        this.state = {
          nav1: null,
          nav2: null
        };
      }
    
      componentDidMount() {
        this.setState({
          nav1: this.slider1,
          nav2: this.slider2
        });
      }

    render() {

        return (
            <section className="testimonials-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="testimonials-slider">
                                <div className="testimonial-thumb-active">
                                    <Slider 
                                    asNavFor={this.state.nav2}
                                    fade={true}
                                    prevArrow= {<button type="button" className="slick-prev"><i className="fa fa-angle-double-left"></i></button>}
                                    nextArrow= {<button type="button" className="slick-next"><i className="fa fa-angle-double-right"></i></button>}
                                    ref={slider => (this.slider1 = slider)}
                                    >
                                        <div className="test-img">
                                            <img src={test1} alt="" />
                                        </div>
                                        <div className="test-img">
                                            <img src={test2} alt="" />
                                        </div>
                                    </Slider>
                                </div>
                                <div className="testimonial-content-active text-center">
                                    <Slider asNavFor={this.state.nav1}
                                    ref={slider => (this.slider2 = slider)}
                                    slidesToShow={1}
                                    swipeToSlide={true}
                                    swipeToSlide={true}
                                    arrows={false}
                                    fade={true}>
                                        <div className="grid">
                                            <ul>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><span><i className="fa fa-star"></i></span></li>
                                                <li><span><i className="fa fa-star"></i></span></li>
                                            </ul>
                                            <p>“ There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some
                                            form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a
                                            passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden
                                                in the middle of text all the loss.</p>
                                            <div className="info">
                                                <h5>Tawana Blackman</h5>
                                                <p>Volunteer</p>
                                            </div>
                                        </div>
                                        <div className="grid">
                                            <ul>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><span><i className="fa fa-star"></i></span></li>
                                                <li><span><i className="fa fa-star"></i></span></li>
                                            </ul>
                                            <p>“Dicture that he had recently cut out of an illustrated magazine and housed in a nice, gilded frame It showed a lady fitted out with a fur hat and fur boa who sat upright, raising a heavy fur muff that covered”</p>
                                            <div className="info">
                                                <h5>Michel Jhone</h5>
                                                <p>Volunteer</p>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="testi-shape">
                    <img src={test3} alt="" />
                </div>
                <div className="testi-shape2">
                    <img src={test4} alt="" />
                </div>
            </section>
        )
    }
}

export default Testimonial;