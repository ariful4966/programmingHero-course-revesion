import { Link } from '@material-ui/core';
import React from 'react';
import { Switch,Route, useRouteMatch } from 'react-router';

const Contact = () => {
    let match = useRouteMatch()
    console.log(match);
    return (
        <>
            <nav>
            <ul>
                <li><Link href={`${match.url}/address`}>Address</Link></li>
                <li><Link href={`${match.url}/email`}>Email</Link></li>
                <li><Link href={`${match.url}`}>Social</Link></li>
            </ul>
        </nav>
        <Switch>
            <Route path={`${match.path}/address`}>
                <h2>Address</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus placeat nesciunt repellat soluta mollitia explicabo facere veniam incidunt architecto, nobis ullam id sit dolor non ad alias eum, voluptatem accusamus numquam harum. Esse sapiente aut, voluptatum cupiditate nobis perspiciatis placeat sint libero nisi, vel doloremque. Quam consequatur nostrum beatae soluta.</p>
            </Route>
            <Route path={`${match.path}/email`}>
                <h2>Email Id</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus magnam nam voluptatem maiores! Modi iure veritatis deserunt voluptatibus, fugit tenetur! Soluta consequatur in quidem fugit nihil quam labore amet!</p>
            </Route>
            <Route path={`${match.path}`}>
                <h2>All Social Mediat</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eos maiores minus alias iste tempora tenetur vero error rem a aperiam officiis assumenda nostrum pariatur neque fugit ad enim similique voluptate dicta, ipsum eveniet sit. Ex ad facilis illo quas quam minus praesentium illum itaque eos ut dolore alias deserunt culpa, atque recusandae, fuga nobis dolores reiciendis eius sint possimus animi suscipit magnam! Porro dolorem earum odit aspernatur, dolores dignissimos. Quam distinctio cumque eum illum magni animi, error corrupti delectus voluptates esse ab beatae, natus hic repellendus rerum? Quibusdam nulla eum soluta nihil in, quia cumque nam facere doloribus natus?</p>
            </Route>
        </Switch>
        
        </>
    );
};

export default Contact;