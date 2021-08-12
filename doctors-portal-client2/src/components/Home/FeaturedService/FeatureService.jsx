import React from 'react';
import featured from '../../../images/featured.png'

const FeatureService = () => {
    return (
        <section className="fuatures-service pb-0 pb-md-5 my-5">
            <div className="container mb-5">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-md-0">
                        <img src={featured} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental Care, on your Term</h1>
                        <p className="text-secondary my-5">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus eligendi velit tempore similique nulla beatae officiis excepturi. Consequuntur, totam incidunt. Quasi perspiciatis nihil vero possimus ea rem odio minima distinctio, mollitia delectus, maxime reiciendis? Nemo, reprehenderit dicta. Labore velit explicabo numquam facilis eos tenetur molestias itaque corporis, voluptatibus, beatae aliquam distinctio debitis amet, dicta placeat reprehenderit. Atque facilis veritatis ut dignissimos, quas dolor provident aperiam deleniti repellendus placeat, nisi velit?
                        </p>
                        <button className="btn btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeatureService;