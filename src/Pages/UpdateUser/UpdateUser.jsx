import toast from "react-hot-toast";
import useAuth from "../../Hook/useAuth";

const UpdateUser = () => {
    const { user, updateUserProfile, setUser, setLoading } = useAuth();

    const handleUpdateUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const displayName = form.displayName.value;
        const photoURL = form.photoURL.value;
        const updateUser = { displayName, photoURL };
        updateUserProfile(updateUser)
            .then(() => {
                setLoading(false);
                setUser((prevUser) => ({...prevUser, ...updateUser}))
                toast.success("User updated successfully");
            })
            .catch((error) => {
                toast.error("Failed to update user: " + error.message);
            });
    };

    return (
        <div>
            <div className="max-w-5xl mx-auto my-20 px-4">
                <div className="rounded-2xl shadow-xl p-6">
                    <div className="flex items-center space-x-6">
                        <img
                            src={user?.photoURL || "/default-avatar.png"}
                            alt="User Avatar"
                            className="w-20 h-20 rounded-full object-cover border shadow"
                        />
                        <div>
                            <h2 className="text-xl font-semibold flex items-center gap-2">
                                <div className="w-5 h-5 text-gray-500" />
                                {user?.displayName || "Anonymous User"}
                            </h2>
                            <p className="text-sm text-gray-600 flex items-center gap-2">
                                <div className="w-4 h-4 text-gray-400" />
                                {user?.email}
                            </p>
                        </div>

                        <div className="">
                            <button
                                className="btn btn-primary btn-sm"
                                onClick={() =>
                                    document
                                        .getElementById("my_modal_1")
                                        .showModal()
                                }>
                                Edit User
                            </button>
                        </div>
                    </div>

                    <div className="divider"></div>

                    <div className="flex justify-center items-center">
                        <div className="text-center">
                            <h3 className="text-lg font-semibold mb-2">
                                More features coming soon!
                            </h3>
                            <p className="text-gray-500">
                                We are working hard to bring you more features
                                to manage your profile and preferences. Stay
                                tuned!
                            </p>
                        </div>
                    </div>

                    {/* Open the modal using document.getElementById('ID').showModal() method */}

                    <dialog id="my_modal_1" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-center text-lg mb-3">
                                Update User Information
                            </h3>
                            <form
                                onSubmit={handleUpdateUser}
                                className="space-y-3">
                                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                                    <label className="fieldset-legend">
                                        Name
                                    </label>
                                    <input
                                        defaultValue={user?.displayName}
                                        name="displayName"
                                        type="text"
                                        className="input w-full"
                                        placeholder="Enter your Updated Name"
                                        required
                                    />
                                </fieldset>
                                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                                    <label className="fieldset-legend">
                                        Photo URL
                                    </label>
                                    <input
                                        defaultValue={user?.photoURL}
                                        name="photoURL"
                                        type="text"
                                        className="input w-full"
                                        placeholder="Enter your Image  URL"
                                        required
                                    />
                                </fieldset>
                                <div className="modal-action">
                                    <div method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button type="submit" className="btn btn-primary">
                                            Update
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default UpdateUser;
