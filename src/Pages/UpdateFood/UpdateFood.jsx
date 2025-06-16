import useAuth from "../../Hook/useAuth";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import { useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import Loading from "../LoadingPage/Loading";
import ErrorPage from "../ErrorPage/ErrorPage";
import moment from "moment";

const UpdateFood = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();
    const navigate = useNavigate();

    const mutation = useMutation({
        mutationFn: (updatedFood) => {
            return axiosSecure.put(`/foods/${id}`, updatedFood);
        },
        onSuccess: (data) => {
            if(data.data.modifiedCount){
                toast.success("Food updated successfully!");
                navigate("/manageMyFoods");
            }
            else {
                toast.error("Please change at least one field to update the food.");
            }           
        }
    });

    const {
        data: food,
        isError,
        error,
        isLoading,
    } = useQuery({
        queryKey: ["food", id],
        queryFn: () => axiosSecure.get(`/foods/${id}`).then((res) => res.data),
    });

    const handleUpdateFood = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const updatedFood = Object.fromEntries(formData.entries());
        const {date, foodQuantity, ...foodData} = updatedFood;
        const selectedDate = new Date(date);

        if (!moment(selectedDate).isBefore(new Date())) {
            toast.error(
                "Please select a valid expiry date that is today or in the future."
            );
            return;
        }

        foodData.date = selectedDate;
        foodData.foodQuantity = parseInt(foodQuantity);
        
        mutation.mutate(foodData);
    };

    if (isLoading) {
        return <Loading></Loading>;
    }

    if (isError) {
        toast.error(`Error fetching food details: ${error.message}`);
        return <ErrorPage error={error.message}></ErrorPage>
    }

    return (
        <div className="max-w-7xl mx-auto p-4 mb-20">
            <div>
                <h1 className="text-3xl font-bold text-center mb-5">
                    Update Food
                </h1>
                <p className="text-center text-gray-500 mb-5">
                    Fill in the details below to update a existing Food
                </p>
            </div>
            <form onSubmit={handleUpdateFood} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="fieldset-legend">Food Name</label>
                        <input
                            name="foodName"
                            defaultValue={food?.foodName}
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
                            defaultValue={food?.foodImage}
                            type="text"
                            className="input w-full"
                            placeholder="Enter Your Food Image URL"
                            required></input>
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="fieldset-legend">Food Quantity</label>
                        <input
                            name="foodQuantity"
                            defaultValue={food?.foodQuantity}
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
                            defaultValue={food?.pickupLocation}
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
                            defaultValue={
                                food?.date
                                    ? new Date(food?.date)
                                          .toISOString()
                                          .split("T")[0]
                                    : ""
                            }
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
                                className="w-10 h-10 object-cover rounded-full"
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
                            defaultValue={"Available"}
                            className="input w-full"
                        />
                    </fieldset>
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                    <label className="fieldset-legend">Additional Notes</label>
                    <textarea
                        className="textarea w-full"
                        name="notes"
                        placeholder="Add any Additional Notes"></textarea>
                </fieldset>
                <input
                    className="btn btn-primary w-full"
                    type="submit"
                    value="Update Food"
                />
            </form>
        </div>
    );
};

export default UpdateFood;
