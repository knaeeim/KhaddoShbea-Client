import { Link, NavLink, useNavigate } from "react-router";
import toast from "react-hot-toast";
import useAuth from "../../Hook/useAuth";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
    const { user, logOutUser } = useAuth();
    const navigate = useNavigate();

    const handleLogOut = () => {
        logOutUser()
            .then(() => {
                toast.success("User logged out successfully");
                navigate("/login");
            })
            .catch((error) => {
                console.error("Error logging out:", error);
            });
    };

    const handleMenuClosing = () => {
        document.activeElement.blur();
    };

    const handleClosingMenuProfile = () => {
        document.activeElement.blur();
    }

    const links = (
        <>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "border-b-3 px-3 py-1.5 mx-2"
                            : "mx-2 px-3 py-1.5"
                    }
                    to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "border-b-3 px-3 py-1.5 mx-2"
                            : "mx-2 px-3 py-1.5"
                    }
                    to="/availableFoods">
                    Available Foods
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="bg-base-100 shadow-lg sticky top-0 z-50">
            <div className="navbar p-0 max-w-[90%] mx-auto">
                <div className="navbar-start gap-1">
                    {/* dropdown three line */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                {" "}
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />{" "}
                            </svg>
                        </div>
                        <ul
                            onClick={handleMenuClosing}
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    {/* div with image and title */}
                    <div className="flex items-center justify-center mr-2">
                        <img
                            className="w-16"
                            src="https://i.ibb.co/wb7VMSN/Khaddo-Sheba-90-x-50-px.png"
                            alt=""
                        />
                        <Link to="/" className="text-xl font-bold lg:block hidden">
                            KhaddoSheba
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex justify-center">{links}</ul>
                </div>
                <div className="navbar-end gap-4">
                    {user ? (
                        <>
                            <div className="dropdown dropdown-end">
                                <div
                                    data-tooltip-id="userName"
                                    data-tooltip-content={user?.displayName}
                                    data-tooltip-place="left"
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost btn-circle avatar">
                                    <div className="w-8 rounded-full">
                                        <img
                                            alt="user"
                                            src={user?.photoURL}
                                        />
                                        <Tooltip id="userName"></Tooltip>
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li onClick={handleClosingMenuProfile}>
                                        <Link to='/updateUserInfo' className="justify-between">
                                            Profile
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <Link
                                to="/dashboard"
                                className="btn btn-primary btn-sm">
                                Dashboard
                            </Link>
                            <button
                                onClick={handleLogOut}
                                className="btn btn-neutral btn-sm">
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <NavLink
                                to="/login"
                                className="btn btn-primary btn-sm">
                                Login
                            </NavLink>
                            <NavLink
                                to="/register"
                                className="btn btn-accent btn-sm">
                                Register
                            </NavLink>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
