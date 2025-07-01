import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAuth from "../../Hook/useAuth";
import toast from "react-hot-toast";
import { Link } from "react-router";
import Swal from "sweetalert2";
import Loading from "../LoadingPage/Loading";

const ManageFoods = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [myFoods, setMyFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosSecure
            .get(`/foods?sortBy=email&email=${user?.email}`)
            .then((res) => {
                setLoading(false);
                setMyFoods(res.data);
            })
            .catch((error) => {
                toast.error("Failed to fetch your foods: " + error.message);
                console.error("Error fetching foods:", error);
            });
    }, [axiosSecure, user]);

    const handleDeleteFood = (foodId) => {
        console.log(foodId);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/foods/${foodId}`).then((res) => {
                    if (res.data.deletedCount) {
                        setMyFoods(
                            myFoods.filter((food) => food._id !== foodId)
                        );
                        setLoading(false);
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                        });
                    }
                });
            }
        });
    };

    if(loading){
        return <Loading></Loading>
    }

    return (
        <div className="max-w-[90%] mx-auto my-10 px-4 md:px-0">
            <div>
                <h1 className="text-3xl font-bold text-center">
                    Your Posted foods, Manage it According to your wishes.
                </h1>
            </div>

            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">
                    Posted Foods List
                </h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col className="w-24" />
                        </colgroup>
                        <thead className="dark:bg-gray-300">
                            <tr className="text-left">
                                <th className="p-3">Posted by</th>
                                <th className="p-3">Food Name</th>
                                <th className="p-3">Expire Date</th>
                                <th className="p-3">Quantity</th>
                                <th className="p-3">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myFoods.length > 0 ? (
                                myFoods.map((food) => (
                                    <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                        <td className="p-3">
                                            <p>{food.name}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{food.foodName}</p>
                                        </td>
                                        <td className="p-3">
                                            <p className="dark:text-gray-600">
                                                {new Date(
                                                    food.date
                                                ).toLocaleDateString("en-BD", {
                                                    timeZone: "Asia/Dhaka",
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}
                                            </p>
                                        </td>
                                        <td className="p-3">
                                            <p className="dark:text-gray-600">
                                                {food.foodQuantity}
                                            </p>
                                        </td>
                                        <td className="p-3 flex gap-2">
                                            <Link
                                                to={`/dashboard/manageMyFoods/update/${food._id}`}>
                                                <button className="btn btn-xs btn-secondary">
                                                    Update
                                                </button>
                                            </Link>
                                            <button
                                                onClick={() =>
                                                    handleDeleteFood(food._id)
                                                }
                                                className="btn btn-xs btn-warning text-black">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                    <td colSpan="5" className="p-3 text-center">
                                        No foods posted yet.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageFoods;
