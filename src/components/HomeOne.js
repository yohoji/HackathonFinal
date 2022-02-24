import React, {Component} from 'react';
import HeroOne from './Hero/HeroOne';
import ServiceOne from './Services/ServiceOne';
import ContentBlock from './ContentBlock';
import FaqOne from './Faq/FaqOne';
import ContactOne from './Contact/ContactOne';
import ServiceData from './Services/ServiceData';
import FaqData from './Faq/FaqData';
import TestimonialData from './Testimonial/TestimonialData';
import Testimonial from './Testimonial/Testimonial';


class HomeOne extends Component {

    render() {
        return (
            <React.Fragment>
                <HeroOne />
                <ServiceOne ServiceData={ServiceData} />
                <ContentBlock/>
                <Testimonial TestimonialData={TestimonialData} />
                <FaqOne FaqData={FaqData} />
                <ContactOne/>
            </React.Fragment>

        )
    }
}

export default HomeOne
