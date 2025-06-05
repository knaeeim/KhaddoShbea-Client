import React from "react";
import slider4 from "../../assets/sliderPhotos/slide-4.png";
import { motion } from "motion/react";

const Slider4 = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center py-10 md:px-20 px-8 gap-10 bg-gray-300">
            <div className="leading-24">
                <motion.h1
                    className="text-3xl md:text-4xl lg:text-6xl font-bold"
                    animate={{ x: [20, 0, 20], opacity: [0, 1, 0] }}
                    transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}>
                    Kindness is Best <br /> Served Warm
                </motion.h1>
                <motion.p
                    className="text-sm md:text-lg mt-4 text-gray-700"
                    animate={{ x: [-20, 0, -20], opacity: [0, 1, 0] }}
                    transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}>
                    Share your extra food and serve compassion to the most
                    vulnerable around you.
                </motion.p>
            </div>

            <div>
                <motion.img
                    initial={{ y: 0 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                        duration: 4,
                        ease: "easeInOut",
                        repeat: Infinity,
                    }}
                    className="w-full"
                    src={slider4}
                    alt=""
                />
            </div>
        </div>
    );
};

export default Slider4;
