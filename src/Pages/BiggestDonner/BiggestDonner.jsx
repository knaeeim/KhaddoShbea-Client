import React from "react";
import BiggestDonnerCard from "./BiggestDonnerCard";

const BiggestDonner = () => {
    const items = [
        {
            image: "https://res.cloudinary.com/ddrorrgxb/image/upload/v1749033199/SAVE_20250407_222907_kjnfxi.jpg",
            name: "Khairul Bashar Naeeim",
            subtitle: "Programmer | Developer | Tech Enthusiast",
            LinkedIn: "https://www.linkedin.com/in/khairulnaeeim/",
            email: "kmnaeeim@gmail.com"
        },
        {
            image: "https://res.cloudinary.com/ddrorrgxb/image/upload/v1749037733/imran_pvcath.jpg",
            name: "Imran Hossain",
            subtitle: "Journalist | Writer | Content Creator",
            LinkedIn: "https://www.linkedin.com/in/imranh47/",
            email: "imran47@gmail.com"
        },
        {
            image: "https://res.cloudinary.com/ddrorrgxb/image/upload/v1749037670/IMG_20231126_101312_bat7ul.jpg",
            name: "Devojyoti Dutta",
            subtitle: "Doctor | Health Advocate | Community Helper",
            LinkedIn: "https://www.linkedin.com/in/devojyoti-dutta-84a8b4106/",
            email: "dvojyotiDutta@gmail.com"
        },
    ];

    return (
        <div className="mt-20">
            <div className="mt-5 px-5">
                <h1 className="md:text-4xl text-2xl font-bold text-center">
                    Our Biggest Donner's
                </h1>
                <p className="text-center text-gray-600 mb-10 mt-4">
                    We are grateful to our biggest donner's who have made a
                    significant impact on our community.
                </p>
            </div>
            <div className="md:max-w-[1780px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 md:px-20 px-5">
                {items.map((item, index) => (
                    <BiggestDonnerCard
                        key={index}
                        item={item}></BiggestDonnerCard>
                ))}
            </div>
        </div>
    );
};

export default BiggestDonner;
