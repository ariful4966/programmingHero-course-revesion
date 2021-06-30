import { Container, Grid } from '@material-ui/core';
import './Foods.scss';
import FoodItem from '../FoodItem/FoodItem';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { Dataprovid } from '../../App';

const Foods = () => {
    const { data, setData } = useContext(Dataprovid);
    const { food, cart } = data;

    let { lunch, brakfast, dinner } = data;

    const brakfastFood = (morning) => {
        const brakfast = food.filter(fd => fd.category === morning);
        setData({ ...data, brakfast: brakfast, dinner: [], lunch: [] })
    }
    const lunchFood = (noon) => {
        const lunch = food.filter(fd => fd.category === noon);
        setData({ ...data, lunch: lunch, dinner: [], brakfast: [] })
    }
    const dinnerFood = (night) => {
        const dinner = food.filter(fd => fd.category === night);
        setData({ ...data, dinner: dinner, lunch: [], brakfast: [] })
    }
    const history = useHistory()
    const showDetail = (id) => {
        history.push(`/food/${id}`);

    }
    const handleCheckout = () => {
        history.push(`/shipment`)
    }
    if (!data) {
        return <h1>Loading...</h1>
    }
    return (
        <section className="food_area section-padding" >
            <Container>
                <div className="food_menu">
                    <ul>
                        <li><button className={brakfast.length > 0 ? 'btn btn-tab' : 'btn'} onClick={() => brakfastFood('breakfast')}>Brakfast</button></li>
                        <li><button className={lunch.length > 0 ? 'btn btn-tab' : 'btn'} onClick={() => lunchFood('lunch')}>Lunch</button></li>
                        <li><button className={dinner.length > 0 ? 'btn btn-tab' : 'btn'} onClick={() => dinnerFood('dinner')}>Dinner</button></li>
                    </ul>
                </div>
                <Grid container spacing={2}>
                    {lunch.length > 0 &&
                        lunch.map(fd => <FoodItem food={fd} showDetail={showDetail}></FoodItem>)
                    }
                    {brakfast.length > 0 &&
                        brakfast.map(fd => <FoodItem food={fd} showDetail={showDetail}></FoodItem>)
                    }
                    {dinner.length > 0 &&
                        dinner.map(fd => <FoodItem food={fd} showDetail={showDetail}></FoodItem>)
                    }
                </Grid>
                <div className="checkout_btn section-padding">
                    {
                        cart.length > 0 ?
                            <button className="btn btn-bg" onClick={handleCheckout}>Checkout You Food</button> :
                            <button className="btn btn-gray" disabled >Checkout You Food</button>
                    }
                </div>
            </Container>
        </section>
    );
};



export default Foods;