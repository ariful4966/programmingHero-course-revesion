import { Container, Grid } from '@material-ui/core';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addToCart, quantityDicrement, quantityIncrement } from '../../redux/actions';
import './FoodDetail.scss'

const FoodDetail = (props) => {

    const { products, addToCart, quantityIncrement, quantityDicrement } = props;
    const { fdId } = useParams();
    const product = products.find(pd => pd.id == fdId);
    const { id, title, description, price, img, quantity } = product;
    const { img1, img2 } = img;

    const [image, setImage] = useState(true);

    console.log(props);
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
                                        <button onClick={()=>{quantityDicrement(id)}}>-</button>
                                        <span>{quantity}</span>
                                        <button onClick={()=>{quantityIncrement(id)}}>+</button>
                                    </span>
                                </h1>
                                <button className="btn btn-bg" onClick={()=>{addToCart(id)}}><AddShoppingCart /> Add</button>
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
                                image ? <img src={img1} alt={product.category}/>: <img src={img2} alt={product.category}/>
                            }
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
};

const mapStateToProps = state => {
    return {
        products: state.products,
        cart: state.cart
    }
}
const mapDispatchToProps = {
    addToCart: addToCart,
    quantityIncrement: quantityIncrement,
    quantityDicrement: quantityDicrement
}

export default connect(mapStateToProps, mapDispatchToProps)(FoodDetail);