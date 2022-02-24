import React, { Component } from 'react'
import SectionTitle from './SectionTitle'


class ContentBlock extends Component {
    render() {
        return (
            <section className="content-block-wrap section-padding pb-130" id="services">
                <div className="container">
                    
                <SectionTitle Title="Nos Services"  Titlep="IDEAL CONNECT fournit de nombreuses solutions informatiques complètes et innovantes. Nos experts travaillent en collaboration avec nos clients pour leur offrir, de manière efficace, des solutions sur-mesure qui répondent à chacun de leurs besoins. Prenez rendez-vous avec l'un de nos consultants pour découvrir comment nous pouvons vous aider." />  
                    <div className="row">
                        <div className="col-xl-5 col-lg-6  col-sm-12 col-12">
                            <div className="content-block" data-aos="fade-right" data-aos-duration={1200}>
                                <span className="top-title">Gestion de Services</span>
                                <h2>Gestion de Services </h2>
                                <p>Techno Gestion Services et consultation en gestion de l’informatique et des technologies.</p>
                                <ul>
                                    <li>services s’adresse à quiconque ayant une entreprise.</li>
                                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                                    <li>typesetting industry. Lorem Ipsum has been</li>
                                    <li>typesetting industry. Lorem Ipsum has been the industry's</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 offset-xl-1 col-sm-12 col-12">
                            <div className="content-featured-img" data-aos="fade-left" data-aos-duration={1200}>
                                <img src={require ("../assets/img/featured-img1.jpg") } alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row flex-row-reverse">
                        <div className="col-xl-5 col-lg-6 offset-xl-1 col-sm-12 col-12">
                            <div className="content-block pt-60" data-aos="fade-left" data-aos-duration={1200}>
                                <span className="top-title">CÂBLAGE STRUCTURÉ</span>
                                <h2>LE NERF DE L’INFORMATIQUE</h2>
                                <p>Que ce soit pour l’organisation d’une salle de serveur/télécommunication complète, l’interconnexion verticale/ horizontale ou même le raccordement des composants utilisateurs, notre équipe hautement qualifiée en câblage structuré saura répondre à vos besoins.</p>
                                <a href=".#" className="theme-btn">Savoir Plus</a>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                            <div className="content-featured-img pt-60" data-aos="fade-right" data-aos-duration={1200}>
                                <img src={require ("../assets/img/featured-img2.jpg") } alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xl-5 col-lg-6 col-sm-12 col-12">
                            <div className="content-block pt-60" data-aos="fade-up" data-aos-duration={1200}>
                                <span className="top-title">Sécurité Informatique</span>
                                <h2>Smart Security, Simply Done.</h2>
                                <p>Installation et gestion firewall (watchguard) Diagnostiques et Réparation des problèmes de sécurité Installation antivirus home and business tel que – Kaspersky, bitdefender, malwarbit    ….</p>
                                <div className="features-promo">
                                    <div className="single-fp">
                                        <div className="fp-icon">
                                            <img src={require ("../assets/img/cludeicon.png") } alt="" />
                                        </div>
                                        <div className="fp-text">
                                            <h4>Datacenter-Powered Reliability</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry's.</p>
                                        </div>
                                    </div>
                                    <div className="single-fp">
                                        <div className="fp-icon">
                                            <img src={require ("../assets/img/data.png") } alt="" />
                                        </div>
                                        <div className="fp-text">
                                            <h4>Server Level Choice</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry's.</p>
                                        </div>
                                    </div>
                                    <div className="single-fp">
                                        <div className="fp-icon">
                                            <img src={require ("../assets/img/cludeicon.png") } alt="" />
                                        </div>
                                        <div className="fp-text">
                                            <h4>Lorem Ipsum is simply</h4>
                                            <p>Lorem Ipsum is simply dummy text of the printing industry. Lorem Ipsum has been the industry's.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-6  offset-xl-1 col-sm-12 col-12">
                            <div className="content-featured-img pt-60" data-aos="fade-up" data-aos-duration={1200}>
                                <img src={require ("../assets/img/featured-img3.jpg") } alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row flex-row-reverse">
                        <div className="col-xl-5 col-lg-6 offset-xl-1 col-sm-12 col-12">
                            <div className="content-block pt-60" data-aos="fade-left" data-aos-duration={1200}>
                                <span className="top-title">POINTAGE, CONTROLE D'ACCEES ET SECURITE ELECTRONIQUE</span>
                                <h2>Garantire votre <br />sécurité</h2>
                                <p>Intégrateur de systèmes de sécurité électronique et prestataire de services, la société IDEAL CONNECT propose à ses clients des solutions globales de sécurité, de télésurveillance, vidéo protection. forte de l’expérience de son équipe multidisciplinaire ,IDEAL CONNECT assure la conception, l’installation et l’exploitation des solutions de protection contre l’intrusion .</p>
                                <p>Ces solutions mettent en œuvre des systèmes de contrôle d’accès, de vidéosurveillance et de télésurveillance pour la protection des sites sensibles (Défense, des sites industriels, des banques, des entreprises, des administrations mais aussi des patrimoine privé).</p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-sm-12 col-12">
                            <div className="content-featured-img pt-60" data-aos="fade-right" data-aos-duration={1200}>
                                <img src={require ("../assets/img/featured-img4.jpg") } alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default ContentBlock
