import Banner from '../Banner/Banner';
import Foods from '../Foods/Foods';
import  MapContainer  from '../GoogleMap/GoogleMap';

const Home = () => {
    return (
        <main>
           <Banner/>
           <Foods/>
           <MapContainer/>
        </main>
    );
};

export default Home;