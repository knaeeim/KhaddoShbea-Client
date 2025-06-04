import React from "react";

const BiggestDonnerCard = ({item}) => {
    return (
        <div className="w-full md:max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="flex flex-col items-center py-10">
                <img
                    className="w-24 h-24 mb-3 rounded-full object-cover shadow-lg"
                    src={item.image}
                    alt="Bonnie image"
                />
                <h5 className="mb-1 text-xl font-medium">
                    {item.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                    {item.subtitle}
                </span>
                <div className="flex mt-4 md:mt-6 gap-2">
                    <a
                        href={item.LinkedIn}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Visit LinkedIn
                    </a>
                    <button
                        className="py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                        Message
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BiggestDonnerCard;
