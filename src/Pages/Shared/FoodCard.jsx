import { FaSackDollar } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { Link } from "react-router";
import { GrStatusGood } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";

const FoodCard = ({ food }) => {
    // console.log(post);
    const { _id, foodName, foodImage, foodQuantity, status, date } = food;
    const convDate = new Date(date).toLocaleDateString("en-BD", {
        timeZone: "Asia/Dhaka",
        year: "numeric",
        month: "long",
        day: "numeric"
    })

    return (
        <div className="">
            <div className="block rounded-lg p-4 shadow-xs shadow-indigo-100 border-2">
                <img
                    alt=""
                    src={foodImage}
                    className="h-56 w-full rounded-md object-cover"
                />

                <div className="mt-2">
                    <div className="space-y-1">
                        <div>
                            <dt className="sr-only">Title</dt>

                            <dd className="font-medium">
                                {foodName}
                            </dd>
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-around gap-8 text-xs">
                        <div className="sm:flex sm:shrink-1 sm:items-center sm:gap-2">
                            <GrStatusGood size={28} />
                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Status</p>

                                <p className="font-medium text-green-600">{status}</p>
                            </div>
                        </div>

                        <div className="sm:flex sm:shrink-1 sm:items-center sm:gap-2">
                            <MdOutlineDateRange size={28} />
                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Deadline</p>

                                <p className="font-medium">{convDate}</p>
                            </div>
                        </div>

                        <div className="sm:flex sm:shrink-1 sm:items-center sm:gap-2">
                            <CgProfile size={29} />
                            <div className="mt-1.5 sm:mt-0">
                                <p className="text-gray-500">Quantity</p>

                                <p className="font-medium">
                                    {foodQuantity} pics
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-4">
                    <Link
                        to={`/foodDetails/${_id}`}
                        className="btn btn-primary w-full">
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
