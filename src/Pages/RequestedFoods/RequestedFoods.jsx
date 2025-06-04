import React, { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import FoodCard from "../Shared/FoodCard";
import Loading from "../LoadingPage/Loading";

const RequestedFoods = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [requestedFoods, setRequestedFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosSecure
            .get(`/myRequestedFoods?email=${user?.email}`)
            .then((res) => {
                setLoading(false);
                console.log(res.data);
                setRequestedFoods(res.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, [axiosSecure, user]);

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div className="md:max-w-[1780px] mx-auto my-10 px-4 md:px-10">
            <div>
                <h1 className="text-3xl font-bold text-center">
                    All Requested food by {user.displayName}...
                </h1>
            </div>

            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <h2 className="mb-4 text-2xl font-semibold leading-tight">
                    Requested Foods List
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
                                <th className="p-3">Donor Name</th>
                                <th className="p-3">PickUp Location</th>
                                <th className="p-3">Expire Date</th>
                                <th className="p-3">Requested Date</th>
                                <th className="p-3">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {requestedFoods.map((food) => (
                                <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                    <td className="p-3">
                                        <p>{food.name}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{food.pickupLocation}</p>
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
                                            {new Date(
                                                food.requestedDate
                                            ).toLocaleDateString("en-BD", {
                                                timeZone: "Asia/Dhaka",
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}
                                        </p>
                                    </td>
                                    <td className="p-3 text-right">
                                        <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                            <span>{food.status}</span>
                                        </span>
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

export default RequestedFoods;
