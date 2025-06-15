import Lottie from "lottie-react";
import registerLottie from "../../assets/lotties/register.json";
import { Link, useNavigate } from "react-router";
import toast from "react-hot-toast";
import GoogleLogin from "../../SocialLogin/GoogleLogin";
import useAuth from "../../Hook/useAuth";
import { checkPassword } from "../../utilities/passwordCheking";

const Register = () => {
    const { createUser, updateUserProfile, setUser, setLoading } = useAuth();
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photoURL = form.photoURL.value;

        if(!checkPassword(password)){
            return;
        }
        // console.log(email, password, name, photoURL);
        // createUserWithEmail and Pass
        createUser(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                const userInfo = {
                    displayName: name,
                    photoURL: photoURL
                }
                // Update user profile
                updateUserProfile(userInfo)
                    .then((res) => {
                        console.log(res);
                        setUser((prevUser) => ({...prevUser, ...user}) )
                        setLoading(false);
                        toast.success("User Created Successfully");
                        navigate("/");
                        form.reset();
                    })
                    .catch(error => {
                        toast.error(error.message);
                    })

            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div className="hero min-h-[calc(100vh-150px)] mb-10">
            <div className="flex flex-col-reverse justify-between items-center md:gap-10 lg:flex-row-reverse md:max-w-5xl w-full mx-auto shadow-2xl rounded-2xl md:py-10 md:px-10 px-5 py-5">
                <div className="text-center hidden md:block">
                    <Lottie
                        className="w-full md:w-[420px]"
                        animationData={registerLottie}
                        loop={true}></Lottie>
                </div>
                <div className="card bg-base-100 w-full md:max-w-lg shrink-1 shadow-2xl border-2 mb-10 md:mb-0">
                    <div className="card-body">
                        <h1 className="text-3xl font-bold text-center">
                            Register now!
                        </h1>
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="label">Name</label>
                                    <input
                                        name="name"
                                        type="text"
                                        className="input"
                                        placeholder="Enter your Name"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="label">Password</label>
                                    <input
                                        name="password"
                                        type="password"
                                        className="input"
                                        placeholder="Enter your Password"
                                    />
                                </div>
                                <div>
                                    <label className="label">Photo URL</label>
                                    <input
                                        name="photoURL"
                                        type="url"
                                        className="input"
                                        placeholder="Enter your Photo URL"
                                        required
                                    />
                                </div>

                                <div>
                                    <label className="label">Email</label>
                                    <input
                                        name="email"
                                        type="email"
                                        className="input"
                                        placeholder="Enter Your Email"
                                        required
                                    />
                                </div>
                            </fieldset>
                            <div className="flex justify-center items-center">
                                <button className="btn btn-neutral mt-4 w-full">
                                    Register
                                </button>
                            </div>
                        </form>
                        <div>
                            <p>
                                Already have an Account?{" "}
                                <Link
                                    className="text-blue-500 underline"
                                    to="/login">
                                    Login
                                </Link>
                            </p>
                        </div>
                        <GoogleLogin></GoogleLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;