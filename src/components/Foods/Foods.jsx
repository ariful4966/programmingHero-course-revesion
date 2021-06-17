import { Container, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { brakfastFood, dinnerFood, lunchFood } from '../../redux/actions';
import './Foods.scss';
import FoodItem from '../FoodItem/FoodItem';

const Foods = (props) => {
    console.log(props);
    const { products, brakfastFood, dinnerFood, lunchFood, lunch, brakfast, dinner } = props;
    return (
        <section className="food_area">
            <Container>
                <div className="food_menu">
                    <ul>
                        <li><button className={brakfast.length> 0 ? 'btn btn-bg': 'btn'} onClick={() => brakfastFood('breakfast')}>Brakfast</button></li>
                        <li><button className={lunch.length> 0 ? 'btn btn-bg': 'btn'} onClick={() => lunchFood('lunch')}>Lunch</button></li>
                        <li><button className={dinner.length> 0 ? 'btn btn-bg': 'btn'} onClick={() => dinnerFood('dinner')}>Dinner</button></li>
                    </ul>
                </div>
                <Grid container spacing={3}>
                        { lunch.length > 0 &&
                            lunch.map(fd => <FoodItem food={fd}></FoodItem>)
                        }
                        { brakfast.length > 0 &&
                            brakfast.map(fd => <FoodItem food={fd}></FoodItem>)
                        }
                        { dinner.length > 0 &&
                            dinner.map(fd => <FoodItem food={fd}></FoodItem>)
                        }
                </Grid>
            </Container>
        </section>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products,
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