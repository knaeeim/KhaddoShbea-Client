import React from "react";
import CountUp from "react-countup";

const Counting = () => {
    return (
        <div className="w-11/12 mx-auto rounded-2xl md:px-10 md:py-20 mt-8 pb-8">
            <div className="text-center space-y-4 md:w-9/12 w-full mx-auto">
                <h1 className="md:text-4xl text-lg font-bold">
                    Together, We Fight Hunger & Waste
                </h1>
                <p className="md:text-lg text-xs max-w-2xl mx-auto">
                    Join a growing community that rescues extra food and shares
                    it with those in need. Every small act counts — every meal
                    shared brings hope.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
                <div className="px-10 py-10 rounded-2xl shadow-xl flex flex-col items-center space-y-3">
                    <img src={""} alt="" />
                    <span className="font-bold text-4xl">
                        <CountUp
                            start={0}
                            end={8500}
                            duration={2.75}
                            enableScrollSpy={true}
                        />
                        +
                    </span>
                    <h1>Meals Donated</h1>
                </div>

                <div className="px-10 py-10 rounded-2xl shadow-xl flex flex-col items-center space-y-3">
                    <img src={""} alt="" />
                    <span className="font-bold text-4xl">
                        <CountUp
                            start={0}
                            end={7200}
                            duration={2.75}
                            enableScrollSpy={true}
                        />
                        +
                    </span>
                    <h1>People Fed</h1>
                </div>

                <div className="px-10 py-10 rounded-2xl shadow-xl flex flex-col items-center space-y-3">
                    <img src={""} alt="" />
                    <span className="font-bold text-4xl">
                        <CountUp
                            start={0}
                            end={1200}
                            duration={2.75}
                            enableScrollSpy={true}
                        />
                        +
                    </span>
                    <h1>Registered Donors</h1>
                </div>

                <div className="px-10 py-10 rounded-2xl shadow-xl flex flex-col items-center space-y-3">
                    <img src={""} alt="" />
                    <span className="font-bold text-4xl">
                        <CountUp
                            start={0}
                            end={25}
                            duration={2.75}
                            enableScrollSpy={true}
                        />
                        +
                    </span>
                    <h1>Cities Reached</h1>
                </div>
            </div>
        </div>
    );
};

export default Counting;
