import axios from "axios";
import React from "react";
import useAuth from "./useAuth";
import toast from "react-hot-toast";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000",
});

const useAxiosSecure = () => {
    const { user, logOutUser } = useAuth();

    axiosInstance.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${user?.accessToken}`;
        return config;
    });

    axiosInstance.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.status === 401 || error.status === 403) {
                logOutUser()
                    .then(() => {})
                    .catch((error) =>
                        toast.error(
                            `Something went wrong while logging out error is ${error}!`
                        )
                    );
            }
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};

export default useAxiosSecure;
