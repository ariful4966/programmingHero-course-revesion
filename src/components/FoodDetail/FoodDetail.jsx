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
        console.log(id);

        const foodItem = data.food.find(fd => fd.id === id);
        const cartItem = data.cart.find(ct => ct.id === foodItem.id);
        console.log(foodItem, cartItem);
        // setData({ ...data, cart: [...data.cart, cartItem] })
        if (data.cart.length <=0 ) {
            setData({ ...data, cart: [...data.cart, foodItem] })
        }

        if (!cartItem) {
            setData({ ...data, cart: [...data.cart, foodItem] })
        } else {
            setData({ ...data })
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
                                        <button >-</button>
                                        <span>{quantity}</span>
                                        <button >+</button>
                                    </span>
                                </h1>
                                <button className="btn btn-bg" onClick={() => addToCart(id)}><AddShoppingCart /> Add</button>
                                <div className="images_content">
                                    <img src={img1} alt="Brackfast" />
                                    <img src={img2} alt="Brackfast" />
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