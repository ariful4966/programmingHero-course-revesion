import React from 'react';
import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol';
import './Footer.css'
const footerData = [
    {
        title: '',
        link: [
            {
                name: 'Emergency Dental Care',
                path: '/'
            },
            {
                name: 'Check Up',
                path: '/'
            },
            {
                name: 'Treatment of Personal Diseases',
                path: '/'
            },
            {
                name: 'Tooth Extraction',
                path: '/'
            },
            {
                name: 'Check Up',
                path: '/'
            },

        ]
    },
    {
        title: 'Service',
        link: [
            {
                name: 'Emergency Dental Care',
                path: '/'
            },
            {
                name: 'Check Up',
                path: '/'
            },
            {
                name: 'Treatment of Personal Diseases',
                path: '/'
            },
            {
                name: 'Tooth Extraction',
                path: '/'
            },
            {
                name: 'Check Up',
                path: '/'
            },
            {
                name: 'Check Up',
                path: '/'
            },
            {
                name: 'Check Up',
                path: '/'
            },

        ]
    },
    {
        title: 'Oral Health',
        link: [
            {
                name: 'Emergency Dental Care',
                path: '/'
            },
            {
                name: 'Check Up',
                path: '/'
            },
            {
                name: 'Treatment of Personal Diseases',
                path: '/'
            },
            {
                name: 'Tooth Extraction',
                path: '/'
            },
            {
                name: 'Check Up',
                path: '/'
            },
            {
                name: 'Check Up',
                path: '/'
            },
            {
                name: 'Check Up',
                path: '/'
            },

        ]
    },
    {
        title: 'Our Address',
        link: [
            {
                name: `New York -101010 Hudson `,
                path: '/'
            },
            {
                name: `Yards`,
                path: '/'
            },

        ],
        social: [
            {
                name: 'Facebook',
                icon: faFacebookF,
                path: '/'
            },
            {
                name: 'Google',
                icon: faGooglePlusG,
                path: '/'
            },
            {
                name: 'Instagram',
                icon: faInstagram,
                path: '/'
            },
        ],
        phone:'+202550295'
    },
]

const Footer = () => {
    return (
        <footer className="py-5">
            <div className="container">
                <div className="footer">
                    <div className="row">
                        {
                            footerData.map((footer, index) => <FooterCol key={index} footer={footer} />)
                        }
                    </div>
                </div>
                <div className="footer-bottom text-center">
                    <small > &copy;Copyright {(new Date()).getFullYear()} All Right Reserved</small>
                </div>
            </div>
        </footer>
    );
};

export default Footer;