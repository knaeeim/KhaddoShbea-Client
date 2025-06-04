import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import useAuth from "../../Hook/useAuth";
import toast from "react-hot-toast";

const ManageFoods = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [myFoods, setMyFoods] = useState([]);

    useEffect(() => {
        axiosSecure
            .get(`/foods?sortBy=email&email=${user?.email}`)
            .then((res) => {
                setMyFoods(res.data);
            })
            .catch((error) => {
                toast.error("Failed to fetch your foods: " + error.message);
                console.error("Error fetching foods:", error);
            });
    }, [axiosSecure, user]);

    return (
        <div className="md:max-w-[1780px] mx-auto my-10 px-4 md:px-10">
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
                            {myFoods.map((food) => (
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
                                        <button className="btn btn-xs btn-secondary">Update</button>
                                        <button className="btn btn-xs btn-warning text-black">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageFoods;
