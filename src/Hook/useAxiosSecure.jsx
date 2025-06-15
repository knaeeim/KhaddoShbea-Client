import axios from "axios";
import React from "react";
import useAuth from "./useAuth";
import { getToken } from "../Context/AuthProvider";
// import toast from "react-hot-toast";

const axiosInstance = axios.create({
    baseURL: "https://food-sharing-server-vert.vercel.app",
});

const useAxiosSecure = () => {
    const { logOutUser } = useAuth();

    axiosInstance.interceptors.request.use(
        async (config) => {
            // const token = await user?.accessToken;
            const token = getToken();
            console.log(token);
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    axiosInstance.interceptors.response.use(
        (response) => response,
        (error) => {
            console.log(error);
            if (error.status === 401 || error.status === 403) {
                logOutUser()
                    .then(() => {
                    })
                    .catch((error) =>
                        console.log(error)
                    );
            }
            return Promise.reject(error);
        }
    );

    return axiosInstance;
};

export default useAxiosSecure;
