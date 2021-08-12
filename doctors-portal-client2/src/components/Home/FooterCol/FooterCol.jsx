import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const FooterCol = ({ footer }) => {
    return (
        <div className="col-md-3">
            <div className="footer-head h-25">
                <h5 className="py-3" style={{color: '#1CC7C1'}}>{footer.title}</h5>
            </div>
            <div className="footer-link">
                {
                    footer.link.map((lnk, index) => <>
                        <a className="text-decoration-none text-secondary" href={lnk.path} key={index}>{lnk.name}</a><br />
                    </>
                    )
                }
                {
                    footer.title === 'Our Address' && <div>
                        <div className="social-area mb-4 py-3">
                            {
                                footer.social.map((so,ind)=><a key={ind} href={so.path}><FontAwesomeIcon icon={so.icon}/></a>)
                            }
                        </div>
                        <div className="colNow ">
                            <h6>Call Now</h6>
                            <button className="btn btn-primary">{footer.phone}</button>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default FooterCol;