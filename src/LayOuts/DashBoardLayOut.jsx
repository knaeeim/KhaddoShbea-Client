import React from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { IoAddCircleOutline } from "react-icons/io5";
import { MdManageAccounts, MdOutlineRequestQuote } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../Hook/useAxiosSecure";
import Loading from "../Pages/LoadingPage/Loading";
import useAuth from "../Hook/useAuth";
import { Tooltip } from "react-tooltip";

const DashBoardLayOut = () => {
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const { data: foods = [], isLoading } = useQuery({
        queryKey: ["foods"],
        queryFn: async () => {
            const res = await axiosSecure.get("/allFoods");
            return res.data;
        },
    });

    if (isLoading) {
        return <Loading></Loading>;
    }

    const handleClosingMenuProfile = () => {
        document.activeElement.blur();
    };

    const dashBoardLink = (
        <div className="flex flex-col justify-between min-h-[calc(100vh-150px)]">
            <div>
                <li>
                    <NavLink
                        to="/dashboard"
                        end
                        className={({ isActive }) =>
                            isActive ? "bg-gray-300 my-2" : "my-2"
                        }>
                        <FaHome size={23} /> DashBoard Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/addFood"
                        className={({ isActive }) =>
                            isActive ? "bg-gray-300 my-2" : "my-2"
                        }>
                        <IoAddCircleOutline size={23} /> Add Food
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/manageMyFoods"
                        className={({ isActive }) =>
                            isActive ? "bg-gray-300 my-2" : "my-2"
                        }>
                        <MdManageAccounts size={23} /> Manage My Foods
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/dashboard/requestedFoods"
                        className={({ isActive }) =>
                            isActive ? "bg-gray-300 my-2" : "my-2"
                        }>
                        <MdOutlineRequestQuote size={23} /> Requested Foods
                    </NavLink>
                </li>
            </div>

            <div>
                <div className="dropdown dropdown-top flex items-center">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar">
                        <div className="w-8 rounded-full">
                            <img alt="user" src={user?.photoURL} />
                        </div>
                    </div>
                    <span className="ml-2 text-lg font-bold">{user?.displayName}</span>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li onClick={handleClosingMenuProfile}>
                            <Link
                                to="/updateUserInfo"
                                className="justify-between">
                                Profile
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );

    return (
        <div
            data-aos="zoom-in-up"
            className="drawer lg:drawer-open max-w-[90%] mx-auto">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center">
                {/* Navbar */}
                <div className="navbar bg-base-300 w-full lg:hidden">
                    <div className="flex-none">
                        <label
                            htmlFor="my-drawer-2"
                            aria-label="open sidebar"
                            className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2">User DashBoard</div>
                </div>
                {/* Page content here */}
                {location.pathname === "/dashboard" ? (
                    <section className="p-6 my-6">
                        <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                                <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        fill="currentColor"
                                        className="h-9 w-9 dark:text-gray-100">
                                        <polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
                                        <path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
                                        <path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
                                    </svg>
                                </div>
                                <div className="flex flex-col justify-center align-middle">
                                    <p className="text-3xl font-semibold leading-none">
                                        {foods.length}
                                    </p>
                                    <p className="capitalize">
                                        Curr. Available Foods
                                    </p>
                                </div>
                            </div>
                            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                                <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        fill="currentColor"
                                        className="h-9 w-9 dark:text-gray-100">
                                        <path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                                        <path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
                                        <polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
                                        <polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
                                    </svg>
                                </div>
                                <div className="flex flex-col justify-center align-middle">
                                    <p className="text-3xl font-semibold leading-none">
                                        500
                                    </p>
                                    <p className="capitalize">Total Users</p>
                                </div>
                            </div>
                            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                                <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        fill="currentColor"
                                        className="h-9 w-9 dark:text-gray-100">
                                        <path d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"></path>
                                        <rect
                                            width="32"
                                            height="32"
                                            x="80"
                                            y="264"></rect>
                                        <rect
                                            width="32"
                                            height="32"
                                            x="240"
                                            y="128"></rect>
                                        <rect
                                            width="32"
                                            height="32"
                                            x="136"
                                            y="168"></rect>
                                        <rect
                                            width="32"
                                            height="32"
                                            x="400"
                                            y="264"></rect>
                                        <path d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"></path>
                                    </svg>
                                </div>
                                <div className="flex flex-col justify-center align-middle">
                                    <p className="text-3xl font-semibold leading-none">
                                        172%
                                    </p>
                                    <p className="capitalize">Growth</p>
                                </div>
                            </div>
                            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 dark:text-gray-800">
                                <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        fill="currentColor"
                                        className="h-9 w-9 dark:text-gray-100">
                                        <path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
                                    </svg>
                                </div>
                                <div className="flex flex-col justify-center align-middle">
                                    <p className="text-3xl font-semibold leading-none">
                                        2500
                                    </p>
                                    <p className="capitalize">Total Served</p>
                                </div>
                            </div>
                        </div>
                    </section>
                ) : (
                    <div className="w-full min-h-screen pt-10 bg-base-200 rounded-2xl">
                        <Outlet></Outlet>
                    </div>
                )}
            </div>
            <div className="drawer-side">
                <label
                    htmlFor="my-drawer-2"
                    aria-label="close sidebar"
                    className="drawer-overlay"></label>
                <ul className="menu bg-base-300 text-base-content min-h-screen w-80 shadow-2xl p-4 rounded-2xl">
                    <Link
                        to="/"
                        className="w-full flex items-center ml-3 mb-10">
                        <img
                            src="https://i.ibb.co/wb7VMSN/Khaddo-Sheba-90-x-50-px.png"
                            alt=""
                            className="h-10 w-16"
                        />
                        <span className="ml-2 font-bold text-2xl">
                            Khaddo Sheba
                        </span>
                    </Link>
                    {/* Sidebar content here */}
                    {dashBoardLink}
                </ul>
            </div>
        </div>
    );
};

export default DashBoardLayOut;
