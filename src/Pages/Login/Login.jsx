import React, { use } from "react";
import loginLottie from "../../assets/lotties/login.json";
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import GoogleLogin from "../../SocialLogin/GoogleLogin";
import toast from "react-hot-toast";

const Login = () => {
    const { loginUser } = use(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state ? location.state : "/";
    
    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);
        // createUserWithEmail and Pass
        loginUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success("User logged in successfully");
                navigate(from)
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div className="hero min-h-[calc(100vh-150px)] mb-10">
            <div className="hero-content flex-col-reverse justify-between lg:flex-row-reverse md:max-w-3xl w-full mx-auto shadow-2xl rounded-2xl md:py-10 md:px-10">
                <div className="text-center">
                    <Lottie
                        className="w-72 md:w-72"
                        animationData={loginLottie}
                        loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full md:max-w-sm shrink-0 shadow-2xl border-2 mb-10 md:mb-0">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">
                            Login now!
                        </h1>
                        <form onSubmit={handleLogin}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    className="input"
                                    placeholder="Email"
                                />
                                <label className="label">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    className="input"
                                    placeholder="Password"
                                />
                                <div>
                                    <a className="link link-hover">
                                        Forgot password?
                                    </a>
                                </div>
                                <button className="btn btn-neutral mt-4">
                                    Login
                                </button>
                            </fieldset>
                        </form>
                        <div>
                            <p>Not Register Yet? <Link className="text-blue-500 underline" to="/register">Register</Link></p>
                        </div>
                        <GoogleLogin from={from}></GoogleLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;