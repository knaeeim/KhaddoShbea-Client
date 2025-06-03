import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import toast from 'react-hot-toast';
import FoodCard from '../Shared/FoodCard';

const AvailableFoods = () => {
    const axiosSecure = useAxiosSecure();
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        axiosSecure.get('/foods')
        .then((res) => {
            setFoods(res.data);
        })
        .catch((error) => {
            toast.error("Failed to fetch foods: " + error.message);
        })
    }, [axiosSecure])

    return (
        <div className='md:max-w-[1780px] mx-auto my-10 px-4 md:px-10'>
            <div>
                <h1 className='text-3xl font-bold text-center'>All Available Foods...</h1>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10'>
                {
                    foods.map((food) => <FoodCard key={food._id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default AvailableFoods;