import React from 'react';
import { useHistory } from 'react-router-dom'
import chair from '../../../images/chair.png'

const HeaderMain = () => {
    const history = useHistory();
    return (
        <header style={{ height: '600px' }}>
            <main className="container h-100">
                <div className="row d-flex align-items-center h-100">
                    <div className="col-md-5 col-lg-5 col-xl-4 col-sm-6 mb-5">
                        <h1 style={{ color: '#3A4256' }}>Your New Smile <br /> Starts Here</h1>
                        <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae doloribus distinctio consequuntur nemo, optio excepturi expedita assumenda aspernatur unde illo reiciendis beatae repudiandae quibusdam fuga molestiae mollitia recusandae omnis odio? Unde alias impedit explicabo reprehenderit temporibus officia, </p>
                        <button className="btn btn-primary" onClick={() => history.push('/patient/appointment')} >GET APPOINMENT</button>
                    </div>
                    <div className="col-md-7 col-lg-7 col-xl-8">
                        <img src={chair} alt="" className="img-fluid" />
                    </div>
                </div>
            </main>
        </header>

    );
};

export default HeaderMain;