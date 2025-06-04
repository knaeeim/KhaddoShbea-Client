import React, { useEffect, useRef, useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useParams } from "react-router";
import toast from "react-hot-toast";
import useAuth from "../../Hook/useAuth";

const AvailableFoodDetails = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [food, setFood] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axiosSecure
            .get(`/foods/${id}`)
            .then((res) => {
                setFood(res.data);
            })
            .catch((error) => {
                toast.error("Failed to fetch food details: " + error.message);
            });
    }, [axiosSecure, id]);

    console.log(food);

    const {
        _id,
        foodName,
        foodImage,
        foodQuantity,
        pickupLocation,
        email,
        name,
        status,
        notes,
        date,
    } = food;

    const convDate = new Date(date).toLocaleDateString("en-BD", {
        timeZone: "Asia/Dhaka",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    const addNotesRef = useRef();

    const handleRequestedFood = () => {
        const requestedUserNotes = addNotesRef.current.value;
        const requestedFood = {
            foodName,
            foodImage,
            foodQuantity,
            pickupLocation,
            email,
            name,
            status: "requested",
            notes,
            date,
            requestedUserEmail: user?.email,
            requestedDate : new Date().toLocaleDateString("en-BD", {
                timeZone: "Asia/Dhaka",
                year: "numeric",
                month: "long",
                day: "numeric",
            }),
            requestedUserNotes,
        };

        console.log(requestedFood);
        axiosSecure
            .post("/myRequestedFoods", requestedFood)
            .then((res) => {
                console.log(res);
                if (res.data.insertedId) {
                    toast.success("Food requested successfully!");
                    addNotesRef.current.value = "";
                    axiosSecure
                        .delete(`/foods/${_id}`)
                        .then((deleteRes) => {
                            console.log(deleteRes);
                            if (deleteRes.data.deletedCount) {
                                console.log(
                                    "Food Removed from Available Foods"
                                );
                            }
                        })
                        .catch((deleteError) => {
                            console.error("Error deleting food:", deleteError);
                            toast.error(
                                "Failed to remove food from available list: " +
                                    deleteError.message
                            );
                        });
                }
            })
            .catch((error) => {
                console.error("Error requesting food:", error);
                toast.error("Failed to request food: " + error.message);
            });
    };

    return (
        <div className="max-w-6xl mx-auto p-6 my-10 bg-white rounded-2xl shadow-md">
            <img
                src={foodImage}
                alt={foodName}
                className="w-full h-[450px] object-cover rounded-xl mb-6"
            />

            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {foodName}
            </h2>
            <p className="text-sm text-gray-500 mb-4 italic">
                Available till: {convDate}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-base">
                <p>
                    <span className="font-semibold">Quantity:</span>{" "}
                    {foodQuantity}
                </p>
                <p>
                    <span className="font-semibold">Status:</span>{" "}
                    <span
                        className={`inline-block px-2 py-1 rounded-full text-xs ${
                            status === "available"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                        }`}>
                        {status}
                    </span>
                </p>
                <p>
                    <span className="font-semibold">Pickup Location:</span>{" "}
                    {pickupLocation}
                </p>
                <p>
                    <span className="font-semibold">Provider:</span> {name}
                </p>
                <p>
                    <span className="font-semibold">Email:</span> {email}
                </p>
                <p>
                    <span className="font-semibold">User Email:</span>{" "}
                    {user?.email}
                </p>
            </div>

            {notes && (
                <div className="mt-6 bg-gray-50 p-4 rounded-xl text-gray-600">
                    <p className="font-semibold text-gray-800 mb-1">Notes:</p>
                    <p className="text-sm">{notes}</p>
                </div>
            )}

            <div className="mt-6">
                <label>Additional Notes</label>
                <textarea
                    ref={addNotesRef}
                    className="w-full p-2 mt-2 border rounded-lg focus:outline-none focus:ring-2"
                    rows="3"
                    placeholder="Add any additional notes or instructions here..."></textarea>
                <button
                    onClick={handleRequestedFood}
                    className="btn btn-primary mt-3 w-full">
                    Request for this food
                </button>
            </div>
        </div>
    );
};

export default AvailableFoodDetails;
