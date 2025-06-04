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

    if (loading) {
        return <Loading></Loading>;
    }

    const handleSearch = (event) => {
        event.preventDefault();

    }

    return (
        <div className="md:max-w-[1780px] mx-auto my-10 px-4 md:px-10">

            <div className="text-center mb-10 space-y-6">
                <h1 className="md:text-4xl text-2xl text-center font-bold">
                    Search your desired food from <br /> all available foods:
                </h1>
                <form onChange={handleSearch}>
                    <input
                        className="md:w-8/12 w-full py-3 px-6 rounded-3xl border-2"
                        type="search"
                        name="search"
                        placeholder="Search by Name.."
                    />
                </form>
            </div>

            <div className="md:flex justify-end mt-5 hidden">
                <button
                    onClick={() => setLayout((prev) => !prev)}
                    className="btn btn-md btn-primary">
                    Change Layout
                </button>
            </div>

            <div
                className={`grid grid-cols-1 md:grid-cols-2 ${
                    layout ? "lg:grid-cols-2" : "lg:grid-cols-3"
                } gap-3 mt-3`}>
                {foods.map((food) => (
                    <FoodCard key={food._id} food={food}></FoodCard>
                ))}
            </div>
        </div>
    );
};

export default AvailableFoods;
