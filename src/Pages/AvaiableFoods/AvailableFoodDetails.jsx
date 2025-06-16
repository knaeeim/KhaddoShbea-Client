import React, { useEffect, useRef, useState } from "react";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";
import useAuth from "../../Hook/useAuth";
import Loading from "../LoadingPage/Loading";
import { formateLocalDate } from "../../utilities/LocalTimeConverter";

const AvailableFoodDetails = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [food, setFood] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosSecure
            .get(`/foods/${id}`)
            .then((res) => {
                setFood(res.data);
                setLoading(false);
            })
            .catch((error) => {
                toast.error("Failed to fetch food details: " + error.message);
            });
    }, [axiosSecure, id]);

    // console.log(food);

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

    // const convDate = new Date(date).toISOString("en-BD", {
    //     timeZone: "Asia/Dhaka",
    //     year: "numeric",
    //     month: "long",
    //     day: "numeric"
    // }).split('T')[0];

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
            requestedDate: new Date().toDateString("en-BD", {
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
                // console.log(res);
                if (res.data.insertedId) {
                    toast.success("Food requested successfully!");
                    addNotesRef.current.value = "";
                    axiosSecure
                        .delete(`/foods/${_id}`)
                        .then((deleteRes) => {
                            // console.log(deleteRes);
                            if (deleteRes.data.deletedCount) {
                                // console.log(
                                //     "Food Removed from Available Foods"
                                // );
                                navigate("/requestedFoods");
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

    if (loading) {
        return <Loading></Loading>;
    }

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
                Expiry Date: {formateLocalDate(date)}
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
                            status === "available" || status === "Available"
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                        }`}
                    >
                        {status}
                    </span>
                </p>
                <p>
                    <span className="font-semibold">Pickup Location:</span>{" "}
                    {pickupLocation}
                </p>
                <p>
                    <span className="font-semibold">Donor Name: </span> {name}
                </p>
                <p>
                    <span className="font-semibold">Donor Email: </span> {email}
                </p>
                {/* <p>
                    <span className="font-semibold">User Email:</span>{" "}
                    {user?.email}
                </p> */}
            </div>

            {notes && (
                <div className="mt-6 bg-gray-50 p-4 rounded-xl text-gray-600">
                    <p className="font-semibold text-gray-800 mb-1">Notes:</p>
                    <p className="text-sm">{notes}</p>
                </div>
            )}

            <div className="mt-6">
                {user.email !== email ? (
                    <button
                        className="btn btn-primary mt-3 w-full"
                        onClick={() => document.getElementById(_id).showModal()}
                    >
                        Request for this Food
                    </button>
                ) : (
                    <button disabled className="btn btn-primary mt-3 w-full">
                        You can't request for your added food
                    </button>
                )}
                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <dialog id={_id} className="modal">
                    <div className="modal-box max-w-4xl">
                        <img
                            src={foodImage}
                            alt={foodName}
                            className="w-full h-[450px] object-cover rounded-xl mb-6"
                        />

                        <h2 className="text-2xl font-bold text-gray-800 mb-2">
                            {foodName}
                        </h2>
                        <p className="text-sm text-gray-500 mb-4 italic">
                            Expiry Date: {formateLocalDate(date)}
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
                                    }`}
                                >
                                    {status}
                                </span>
                            </p>
                            <p>
                                <span className="font-semibold">
                                    Pickup Location:
                                </span>{" "}
                                {pickupLocation}
                            </p>
                            <p>
                                <span className="font-semibold">
                                    Donor Name:{" "}
                                </span>{" "}
                                {name}
                            </p>
                            <p>
                                <span className="font-semibold">
                                    Donor Email:{" "}
                                </span>{" "}
                                {email}
                            </p>
                            <p>
                                <span className="font-semibold">
                                    User Email:
                                </span>{" "}
                                {user?.email}
                            </p>
                            <p>
                                <span className="font-semibold">
                                    Requested Time:
                                </span>{" "}
                                {
                                    new Date()
                                        .toISOString("en-BD", {
                                            timeZone: "Asia/Dhaka",
                                            year: "numeric",
                                            month: "short",
                                            day: "numeric",
                                        })
                                        .split("T")[0]
                                }
                            </p>
                            <p>
                                <span className="font-semibold">id:</span>{" "}
                                {food?._id}
                            </p>
                        </div>

                        {notes && (
                            <div className="mt-6 bg-gray-50 p-4 rounded-xl text-gray-600">
                                <p className="font-semibold text-gray-800 mb-1">
                                    Notes:
                                </p>
                                <p className="text-sm">{notes}</p>
                            </div>
                        )}
                        <div className="mt-4">
                            <label className="font-bold">
                                Additional Notes
                            </label>
                            <textarea
                                ref={addNotesRef}
                                className="w-full p-2 mt-2 border rounded-lg focus:outline-none focus:ring-2"
                                rows="3"
                                placeholder="Add any additional notes or instructions here..."
                            ></textarea>
                        </div>
                        <div className="modal-action">
                            <form
                                method="dialog"
                                className="flex items-center justify-center gap-4"
                            >
                                <button
                                    onClick={() =>
                                        document.getElementById(_id).close()
                                    }
                                    className="btn btn-warning mt-3 text-black"
                                >
                                    Close
                                </button>
                                {/* if there is a button in form, it will close the modal */}
                                <button
                                    onClick={handleRequestedFood}
                                    className="btn btn-primary mt-3"
                                >
                                    Request Now
                                </button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default AvailableFoodDetails;
