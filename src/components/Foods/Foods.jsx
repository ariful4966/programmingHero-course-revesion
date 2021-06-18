import { Container, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { brakfastFood, dinnerFood, lunchFood } from '../../redux/actions';
import './Foods.scss';
import FoodItem from '../FoodItem/FoodItem';
import { useHistory } from 'react-router-dom';

const Foods = (props) => {
    const history = useHistory()
    const showDetail = (id) => {
        history.push(`/food/${id}`);

    }
    const { products, cart, brakfastFood, dinnerFood, lunchFood, lunch, brakfast, dinner } = props;
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
                    <button className={cart.length > 0 ? "btn btn-bg" : "btn btn-gray"}>Checkout You Food</button>
                </div>
            </Container>
        </section>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products,
        cart: state.cart,
        lunch: state.lunch,
        brakfast: state.brakfast,
        dinner: state.dinner
    }
}
const mapDispatchToProps = {
    lunchFood: lunchFood,
    dinnerFood: dinnerFood,
    brakfastFood: brakfastFood
}

export default connect(mapStateToProps, mapDispatchToProps)(Foods);