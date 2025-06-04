import toast from "react-hot-toast"

export const checkPassword = (password) => {
    if(password.length < 6){
        return toast.error("Password must be at least 6 characters long");
    }

    if(!/[A-Z]/.test(password)){
        return toast.error("Password must contain at least one uppercase letter");
    }

    if(!/[a-z]/.test(password)){
        return toast.error("Password must contain at least one lowercase letter");
    }

    return true;
}