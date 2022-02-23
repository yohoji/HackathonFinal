import React, { Component } from 'react';
import { Link } from "react-scroll";



class HeroOne extends Component {
    render() {

        return (
        <section className="hero-wrapper">
            <div className="single-hero-slide">
                <div className="hero-shape-wrap">
                    <img src={require( "../../assets/img/shape/9.png")} className="shape shape1" alt="" />
                    <img src={require( "../../assets/img/shape/10.png")} className="shape shape2" alt="" />
                    <img src={require( "../../assets/img/shape/11.png")} className="shape shape3" alt="" />
                    <img src={require( "../../assets/img/shape/12.png")} className="shape shape4" alt="" />
                    <img src={require( "../../assets/img/shape/13.png")} className="shape shape5" alt="" />
                    <img src={require( "../../assets/img/shape/14.png")} className="shape shape6" alt="" />
                    <img src={require( "../../assets/img/shape/15.png")} className="shape shape7" alt="" />
                    <img src={require( "../../assets/img/shape/16.png")} className="shape shape8" alt="" />
                    <img src={require( "../../assets/img/shape/17.png")} className="shape shape9" alt="" />
                    <img src={require( "../../assets/img/shape/17.png")} className="shape shape10" alt="" />
                    <img src={require( "../../assets/img/shape/17.png")} className="shape shape11" alt="" />
                </div>
                <div className="slide-bg">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <defs>
                            <linearGradient id="PSgrad_0" x1="0%" x2="70.711%" y1="0%" y2="70.711%">
                                <stop offset="0%" stopColor="rgb(21,61,87)" stopOpacity={1} />
                                <stop offset="100%" stopColor="rgb(43,34,81)" stopOpacity={1} />
                            </linearGradient>
                        </defs>
                        <path fillRule="evenodd" fill="none" d="M-0.000,0.001 L1920.000,-0.000 L1920.000,680.000 C1920.000,680.000 1439.999,830.000 959.998,830.000 C479.998,830.000 -0.000,680.000 -0.000,680.000 L-0.000,0.001 Z" />
                        <path fill="url(#PSgrad_0)" d="M-0.000,0.001 L1920.000,-0.000 L1920.000,680.000 C1920.000,680.000 1439.999,830.000 959.998,830.000 C479.998,830.000 -0.000,680.000 -0.000,680.000 L-0.000,0.001 Z" />
                    </svg>
                </div>
                <div className="single-slide">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-10 col-12 pr-0">
                                    <div className="single-slide-content slide2 text-white">
                                        <p>Votre vision. Nos solutions.</p>
                                        <h1 className='slide-Heading'>Bienvenue chez <br /> IDEAL CONNECT.</h1>
                                        <p>Une solution qui comblera tous vos besoins technologiques.</p>
                                        <Link className="theme-btn" to="services" spy={true} smooth={true} offset={-70} duration={ 500}>En Savoir Plus</Link>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 d-none d-lg-block col-12">
                                    <div className="single-slide-img">
                                    <img src={require ('../../assets/img/slider2.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </section>
        )
    }
}

export default HeroOne
