
import { useContext } from 'react';
import { Dataprovid } from '../../App';
import './Banner.scss'

const Banner = () => {
    const { data } = useContext(Dataprovid)
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const handleChange = (e) => {
        const text = e.target.value;
        const search = data.food.filter(fd=>fd.title.toLowerCase() === text.toLowerCase());
        console.log(search);
    }
    return (
        <section className="banner_area">
            <div className="banner-content">
                <div>
                    <h1>Best food waiting for your belly</h1>
                    <div className="search_area">
                        <form onSubmit={handleSubmit}>
                            <input type="search" placeholder="Your Food Name" onChange={handleChange} />
                            <input type="submit" value="Search" className="btn btn-bg" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;