import React from 'react';
import Slider1 from '../Sliders/Slider1';
import Banner from '../Banner/Banner';
import FeaturedFoods from '../FeaturedFoods/FeaturedFoods';
import Counting from '../Counting/Counting';
import BiggestDonner from '../BiggestDonner/BiggestDonner';


const Home = () => {
    return (
        <div>     
            <Banner></Banner>
            <FeaturedFoods></FeaturedFoods>
            <BiggestDonner></BiggestDonner>
            <Counting></Counting>
        </div>
    );
};

export default Home;