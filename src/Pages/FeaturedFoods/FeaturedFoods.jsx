import React, { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import toast from "react-hot-toast";
import FoodCard from "../Shared/FoodCard";
import { Link } from "react-router";
import Loading from "../LoadingPage/Loading";

const FeaturedFoods = () => {
    const { user, logOutUser } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [featuredFoods, setFeaturedFoods] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        axiosSecure.get('/foods?sortBy=quantity&limit=6')
        .then(res => {
            setFeaturedFoods(res.data);
            setLoading(false);
        })
        .catch(error => {
            logOutUser()
                    .then(() => {})
                    .catch((error) => {
                        toast.error("Failed to log out: " + error.message);
                    });
            toast.error("Failed to fetch featured foods: " + error.message);
        })
    }, [axiosSecure, user, logOutUser])

    if(loading) {
        return <Loading></Loading>
    }

    return <div>
        <div className="md:max-w-[1780px] mx-auto my-10 px-4 md:px-10">
            <h1 className="text-3xl font-bold text-center">Featured Foods</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-10">
                {featuredFoods.map((food) => (
                    <FoodCard key={food._id} food={food}></FoodCard>
                ))}
            </div>
            <div className="flex justify-center mt-10">
                <Link to="/availableFoods"><button className="btn btn-primary">Show All Foods</button></Link>
            </div>
        </div>
    </div>;
};

export default FeaturedFoods;
