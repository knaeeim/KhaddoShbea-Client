import React from 'react';
import Slider1 from '../Sliders/Slider1';
import Banner from '../Banner/Banner';
import FeaturedFoods from '../FeaturedFoods/FeaturedFoods';
import Counting from '../Counting/Counting';
import BiggestDonner from '../BiggestDonner/BiggestDonner';
import GetUpdate from '../GetUpdate/GetUpdate';


const Home = () => {
    return (
        <div className='max-w-[90%] mx-auto'>     
            <Banner></Banner>
            <FeaturedFoods></FeaturedFoods>
            <BiggestDonner></BiggestDonner>
            <Counting></Counting>
            <GetUpdate></GetUpdate>
        </div>
    );
};

export default Home;