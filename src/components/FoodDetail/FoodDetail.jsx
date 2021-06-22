import { Container, Grid } from '@material-ui/core';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Dataprovid } from '../../App';
import './FoodDetail.scss'

const FoodDetail = () => {
    const { data, setData } = useContext(Dataprovid)
    const { fdId } = useParams();
    const product = data.food.find(pd => pd.id == fdId);
    const { id, title, description, price, img, quantity } = product;
    const { img1, img2 } = img;

    const [image, setImage] = useState(true);

    const addToCart = (id) => {

        const foodItem = data.food.find(fd => fd.id === id);
        const cartItem = data.cart.find(ct => ct.id === foodItem.id);
        if (data.cart.length <= 0) {
            setData({ ...data, cart: [...data.cart, foodItem] })
        }

        if (!cartItem) {
            setData({ ...data, cart: [...data.cart, foodItem] })
        } else {
            setData({ ...data })
        }


    }
    const incrementQuantity = (id) => {
        const product = data.food.find(fd => fd.id === id);
        let count = product.quantity + 1;
        product.quantity = count
        setData({ ...data, food: [...data.food, product] })
    }
    const decrimentQuantiry = (id) => {
        const product = data.food.find(fd => fd.id === id);
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
                                        <button onClick={() => decrimentQuantiry(id)}>-</button>
                                        <span>{quantity}</span>
                                        <button onClick={() => incrementQuantity(id)}>+</button>
                                    </span>
                                </h1>
                                <button className="btn btn-bg" onClick={() => addToCart(id)}><AddShoppingCart /> Add</button>
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