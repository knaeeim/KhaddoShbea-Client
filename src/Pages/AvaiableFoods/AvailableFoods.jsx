import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import toast from "react-hot-toast";
import FoodCard from "../Shared/FoodCard";
import Loading from "../LoadingPage/Loading";

const AvailableFoods = () => {
    const axiosSecure = useAxiosSecure();
    const [foods, setFoods] = useState([]);
    const [layout, setLayout] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosSecure
            .get("/foods?sortBy=date")
            .then((res) => {
                setFoods(res.data);
                setLoading(false);
            })
            .catch((error) => {
                toast.error("Failed to fetch foods: " + error.message);
            });
    }, [axiosSecure]);

    if(loading) {
        return <Loading></Loading>
    }

    return (
        <div className="md:max-w-[1780px] mx-auto my-10 px-4 md:px-10">
            <div>
                <h1 className="text-3xl font-bold text-center">
                    All Available Foods...
                </h1>
                <p className="text-center text-gray-500 mb-5">
                    Here you can find all the available foods posted by users. You can change the layout of the food cards by clicking the button below.
                </p>
            </div>

            <div className="md:flex justify-end mt-5 hidden">
                <button onClick={() => setLayout(prev => !prev)} className="btn btn-md btn-primary">
                    Change Layout
                </button>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 ${layout ? "lg:grid-cols-2" : "lg:grid-cols-3"} gap-3 mt-6`}>
                {foods.map((food) => (
                    <FoodCard key={food._id} food={food}></FoodCard>
                ))}
            </div>
        </div>
    );
};

export default AvailableFoods;
