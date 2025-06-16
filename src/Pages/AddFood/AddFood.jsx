import React from "react";
import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import toast from "react-hot-toast";
import moment from "moment";

const AddFood = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const formattedData = Object.fromEntries(formData.entries());

        const { date, foodQuantity, ...foodData } = formattedData;

        const selectedDate = new Date(date);
        // console.log(!moment(selectedDate).isBefore(new Date()));
       
        if (moment(selectedDate).isBefore(moment(), "day")) {
            toast.error(
                "Please select a valid expiry date that is today or in the future."
            );
            return;
        }

        foodData.date = selectedDate;
        foodData.foodQuantity = parseInt(foodQuantity);

        // console.log(selectedDate);

        console.log(foodData);

        axiosSecure
            .post("/addFood", foodData)
            .then((res) => {
                if (res.data.insertedId) {
                    toast.success("Food Added Successfully");
                }
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div className="max-w-7xl mx-auto p-4 mb-20">
            <div>
                <h1 className="text-3xl font-bold text-center mb-5">
                    Add Food
                </h1>
                <p className="text-center text-gray-500 mb-5">
                    Fill in the details below to add a new Food
                </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="fieldset-legend">Food Name</label>
                        <input
                            name="foodName"
                            type="text"
                            className="input w-full"
                            placeholder="Enter your Food Name"
                            required
                        />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="fieldset-legend">Food Image</label>
                        <input
                            name="foodImage"
                            type="text"
                            className="input w-full"
                            placeholder="Enter Your Food Image URL"
                            required
                        ></input>
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="fieldset-legend">Food Quantity</label>
                        <input
                            name="foodQuantity"
                            type="text"
                            className="input w-full"
                            placeholder="Enter the Quantity"
                            required
                        />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="fieldset-legend">
                            PicUp Location
                        </label>
                        <input
                            name="pickupLocation"
                            type="text"
                            className="input w-full"
                            placeholder="Enter Your Pickup Location"
                            required
                        />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="fieldset-legend">Expiry Date </label>
                        <input
                            type="date"
                            name="date"
                            className="input w-full"
                            placeholder="Select Expiry Date"
                            required
                        />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="fieldset-legend">Donor Email</label>
                        <input
                            name="email"
                            type="text"
                            className="input w-full"
                            value={user?.email}
                            readOnly
                        />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="fieldset-legend">
                            Donor Image & Name
                        </label>
                        <div className="flex items-center justify-center gap-2">
                            <img
                                src={user.photoURL}
                                className="w-10 h-10 rounded-full object-cover"
                            />
                            <input
                                name="name"
                                type="text"
                                className="input w-full"
                                value={user?.displayName}
                                readOnly
                            />
                        </div>
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="fieldset-legend">Food Status</label>
                        <input
                            type="text"
                            name="status"
                            readOnly
                            defaultValue={"available"}
                            className="input w-full"
                        />
                    </fieldset>
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                    <label className="fieldset-legend">Additional Notes</label>
                    <textarea
                        className="textarea w-full"
                        name="notes"
                        placeholder="Add any Additional Notes"
                    ></textarea>
                </fieldset>
                <input
                    className="btn btn-primary w-full"
                    type="submit"
                    value="Add Food"
                />
            </form>
        </div>
    );
};

export default AddFood;
