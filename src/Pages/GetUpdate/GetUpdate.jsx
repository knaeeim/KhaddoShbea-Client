import React from "react";
import toast from "react-hot-toast";

const GetUpdate = () => {

    const handleGetUpdate = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        console.log(email);

        if(!email){
            toast.error("Please enter a valid email address");
            return;
        }
        toast.success("Thank you for subscribing! We'll keep you updated.");
        e.target.reset();
    }

    return (
        <div
            className="w-full bg-gray-200 mb-10 rounded-2xl">
            <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10">
                <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-800">
                    Get Our Updates
                </h1>
                <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-800">
                    Find out about events and other news
                </p>
                <form onSubmit={handleGetUpdate} className="join">
                    <input
                        type="text"
                        name="email"
                        required
                        placeholder="example@email.com"
                        className="input join-item"
                    />
                    <button
                        type="submit"
                        className="btn btn-primary join-item rounded-r-full">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default GetUpdate;
