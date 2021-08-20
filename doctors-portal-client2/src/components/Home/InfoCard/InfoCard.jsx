import './InfoCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoCard = ({ info }) => {
    return (
        <div className="col-md-4 mb-5 text-white info-card">
            <div className={`d-flex justify-content-center info-container info-${info.background}`}>
                <div className="me-3">
                    <FontAwesomeIcon className="info-icon" icon={info.icon} />
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
            </div>
        </div>
    );
};

export default InfoCard;