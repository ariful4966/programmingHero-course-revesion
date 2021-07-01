import { Container, Grid } from '@material-ui/core';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Dataprovid } from '../../App';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import './FoodDetail.scss'

const FoodDetail = () => {
    const { data, setData } = useContext(Dataprovid)
    const { fdKey } = useParams();
    const product = data.food.find(pd => pd.key === fdKey);
    const { key, title, description, price, img, quantity } = product;
    const { img1, img2 } = img;

    const [image, setImage] = useState(true);

    const addToCart = (key) => {

        const foodItem = data.food.find(fd => fd.key === key);
        const cartItem = data.cart.find(ct => ct.key === foodItem.key);
        if (data.cart.length <= 0) {
            // addToDatabaseCart(foodItem.key, foodItem.count)
            setData({ ...data, cart: [...data.cart, foodItem] })
        }

        if (!cartItem) {
            // const cartFood = getDatabaseCart();
            // const cartKey = Object.keys(cartFood)
            // const cartAllFood = cartFood.filter(item => item.key === cartKey)
            // if (cartAllFood.length > 0) {
            //     const cartItem = cartAllFood.reduce((init, curr) => init < curr[curr.key], 0)
            //     console.log(cartItem);
            // }
            setData({ ...data, cart: [...data.cart, foodItem] })
        } else {
            setData({ ...data })
        }


    }
    const incrementQuantity = (key) => {
        const product = data.food.find(fd => fd.key === key);
        let count = product.quantity + 1;
        product.quantity = count
        addToDatabaseCart(key, count)
        setData({ ...data, food: [...data.food, product] })
    }
    const decrimentQuantiry = (key) => {
        const product = data.food.find(fd => fd.key === key);
        if (product.quantity > 1) {
            let count = product.quantity - 1;
            product.quantity = count
            setData({ ...data, food: [...data.food, product] })
        }
    }



    return (
        <section className="food_detail section-padding">
            <Container>
                <Grid container >
                    <Grid item md={6}>
                        <article className="content">
                            <div>
                                <h1>{title}</h1>
                                <p>{description}</p>
                                <h1 className="price">${price}
                                    <span className="btn-increment">
                                        <button onClick={() => decrimentQuantiry(key)}>-</button>
                                        <span>{quantity}</span>
                                        <button onClick={() => incrementQuantity(key)}>+</button>
                                    </span>
                                </h1>
                                <button className="btn btn-bg" onClick={() => addToCart(key)}><AddShoppingCart /> Add</button>
                                <div className="images_content">
                                    <img src={img1} alt="Brackfast" onClick={() => setImage(true)} />
                                    <img src={img2} alt="Brackfast" onClick={() => setImage(false)} />
                                </div>
                            </div>
                        </article>
                    </Grid>
                    <Grid item md={6}>
                        <div className="show_img">
                            {
                                image ? <img src={img1} alt={product.category} /> : <img src={img2} alt={product.category} />
                            }
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};



export default FoodDetail;