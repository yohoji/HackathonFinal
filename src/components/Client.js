import React, { Component } from 'react';
import SectionTitle from './SectionTitle'

class Client extends Component {
    render() {
        return (
            <section className="brand-logo-wrap section-padding">
                <div className="container">

                <SectionTitle Title="Maîtrise des moyens techniques" Titlep="Agréés par les plus grands constructeurs réseaux et éditeurs de logiciels, nous garantissons la mise en œuvre des solutions que nous préconisons pour votre entreprise."  />

                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="brand-cat-a d-md-flex justify-content-lg-between ">
                                <div className="single-brand">
                                    <img src={require ("../assets/img/brand/1.png") } alt="klaud" />
                                </div>
                                <div className="single-brand">
                                    <img src={require ("../assets/img/brand/2.png") } alt="klaud" />
                                </div>
                                <div className="single-brand">
                                    <img src={require ("../assets/img/brand/3.png") } alt="klaud" />
                                </div>
                                <div className="single-brand">
                                    <img src={require ("../assets/img/brand/4.png") } alt="klaud" />
                                </div>
                                <div className="single-brand">
                                    <img src={require ("../assets/img/brand/5.png") } alt="klaud" />
                                </div>
                            </div>
                            <div className="brand-cat-b d-md-flex justify-content-lg-around">
                                <div className="single-brand">
                                    <img src={require ("../assets/img/brand/6.png") } alt="klaud" />
                                </div>
                                <div className="single-brand">
                                    <img src={require ("../assets/img/brand/7.png") } alt="klaud" />
                                </div>
                                <div className="single-brand">
                                    <img src={require ("../assets/img/brand/8.png") } alt="klaud" />
                                </div>
                                <div className="single-brand">
                                    <img src={require ("../assets/img/brand/9.png") } alt="klaud" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Client
