import { Button } from '@material-ui/core';
import React from 'react';
import "./home.css";
import {Link} from "react-router-dom";
import BannerImage from "../../assets/pizza.jpeg";
function Home() {
    return (
        <div className='home'  style={{backgroundImage: `url(${BannerImage})` }}>
            <div className='headerContainer' >
                <h1>Pedro's Pizzeria</h1>
                <p> PIZZA TO FIT ANY TASTE </p>
                <Link to ="/menu">
                <Button> ORDER NOW </Button>
                </Link>
            </div>
            
        </div>
    );
}

export default Home;
