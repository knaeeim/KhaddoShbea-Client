import { NavLink, useNavigate } from "react-router";
import toast from "react-hot-toast";
import useAuth from "../../Hook/useAuth";

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

    const links = (
        <>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "bg-blue-500 border-b-3 px-3 py-1.5 rounded-md mx-2"
                            : "mx-2 px-3 py-2"
                    }
                    to="/">
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? "bg-blue-500 border-b-3 px-3 py-1.5 rounded-md mx-2"
                            : "mx-2 px-3 py-2"
                    }
                    to="/availableFoods">
                    Available Foods
                </NavLink>
            </li>

            {user && (
                <>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-blue-500 border-b-3 px-3 py-1.5 rounded-md mx-2"
                                    : "mx-2 px-3 py-2"
                            }
                            to="/addFood">
                            Add Food
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-blue-500 border-b-3 px-3 py-1.5 rounded-md mx-2"
                                    : "mx-2 px-3 py-2"
                            }
                            to="/manageMyFoods">
                            Manage My Foods
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-blue-500 border-b-3 px-3 py-1.5 rounded-md mx-2"
                                    : "mx-2 px-3 py-2"
                            }
                            to="/requestedFoods">
                            Requested Foods
                        </NavLink>
                    </li>
                </>
            )}
        </>
    );

    return (
        <div>
            <div className="navbar p-0 bg-base-100 shadow-lg md:px-8 px-2">
                <div className="navbar-start gap-1">
                    {/* dropdown three line */}
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
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
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-32 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    {/* div with image and title */}
                    <div className="flex items-center justify-center gap-2">
                        <img
                            className="w-16"
                            src="https://i.ibb.co/wb7VMSN/Khaddo-Sheba-90-x-50-px.png"
                            alt=""
                        />
                        <a className="text-xl font-bold lg:block hidden">
                            KhaddoSheba
                        </a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex justify-center">{links}</ul>
                </div>
                <div className="navbar-end gap-4">
                    {user ? (
                        <>
                            <div className="avatar">
                                <div className="ring-primary ring-offset-base-100 w-6 rounded-full ring-2 ring-offset-2">
                                    <img src={user?.photoURL} />
                                </div>
                            </div>
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
