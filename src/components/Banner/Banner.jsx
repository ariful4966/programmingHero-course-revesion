
import './Banner.scss'

const Banner = () => {
    return (
        <section className="banner_area">
                <div className="banner-content">
                    <div>
                        <h1>Best food waiting for your belly</h1>
                        <div className="search_area">
                            <form action="">
                                <input type="search" placeholder="Your Food Name"/>
                                <input type="submit" value="Search" className="btn btn-bg"/>
                            </form>
                        </div>
                    </div>
                </div>
        </section>
    );
};

export default Banner;