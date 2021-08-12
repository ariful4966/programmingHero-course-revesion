import React from 'react';
import { faClock, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

import InfoCard from '../InfoCard/InfoCard';
const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are Open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visite Our Location',
        description: 'Brooklyn, NY 10003, USE',
        icon: faMapMarkerAlt,
        background: 'dark'
    },
    {
        title: 'Call us now',
        description: '+15697854124',
        icon: faPhoneAlt,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className="row">
            {
                infoData.map((info, index) => <InfoCard key={index} info={info}></InfoCard>)
            }
        </section>
    );
};

export default BusinessInfo;