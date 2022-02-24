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
                                    <img src={require ("../assets/img/brand/partenaire1.png") } alt="" />
                                </div>
                                <div className="single-brand">
                                    <img src={require ("../assets/img/brand/partenaire2.png") } alt="" />
                                </div>
                                <div className="single-brand">
                                    <img src={require ("../assets/img/brand/partenaire3.png") } alt="" />
                                </div>
                                <div className="single-brand">
                                    <img src={require ("../assets/img/brand/partenaire4.png") } alt="" />
                                </div>
                                <div className="single-brand">
                                    <img src={require ("../assets/img/brand/partenaire5.png") } alt="" />
                                </div>
                            </div>
                            <div className="brand-cat-b d-md-flex justify-content-lg-around">
                                <div className="single-brand">
                                    <img src={require ("../assets/img/brand/partenaire6.png") } alt="" />
                                </div>
                                <div className="single-brand">
                                    <img src={require ("../assets/img/brand/partenaire7.png") } alt="" />
                                </div>
                                <div className="single-brand">
                                    <img src={require ("../assets/img/brand/partenaire8.png") } alt="" />
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
