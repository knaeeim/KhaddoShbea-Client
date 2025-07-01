import React, { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Loading from "../LoadingPage/Loading";
import toast from "react-hot-toast";
import { formateLocalDate } from "../../utilities/LocalTimeConverter";

const RequestedFoods = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [requestedFoods, setRequestedFoods] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (user) {
            axiosSecure
                .get(`/myRequestedFoods?email=${user?.email}`)
                .then((res) => {
                    setLoading(false);
                    console.log(res.data);
                    setRequestedFoods(res.data);
                })
                .catch((error) => {
                    setLoading(false);
                    toast.error(error.message);
                });
        }
    }, [user, axiosSecure]);

    if (loading) {
        return <Loading></Loading>;
    }

    return (
        <div className="max-w-[90%] mx-auto my-10 px-4 md:px-0">
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
                            {requestedFoods.length > 0 ? (
                                requestedFoods.map((food) => (
                                    <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                        <td className="p-3">
                                            <p>{food.name}</p>
                                        </td>
                                        <td className="p-3">
                                            <p>{food.pickupLocation}</p>
                                        </td>
                                        <td className="p-3">
                                            <p className="dark:text-gray-600">
                                                {formateLocalDate(food.date)}
                                            </p>
                                        </td>
                                        <td className="p-3">
                                            <p className="dark:text-gray-600">
                                                {formateLocalDate(
                                                    food.requestedDate
                                                )}
                                            </p>
                                        </td>
                                        <td className="p-3 text-right">
                                            <span className="px-3 py-1 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                                <span>{food.status}</span>
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
                                    <td colSpan="5" className="p-3 text-center">
                                        No requested foods found.
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

export default RequestedFoods;
