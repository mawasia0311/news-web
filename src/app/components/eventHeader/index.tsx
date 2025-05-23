"use client";

import React from "react";

const Header = () => {
    return (
        <div className="w-full bg-white text-black rounded-2xl px-4 lg:px-24 pt-6">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h1 className="text-lg sm:text-xl lg:text-3xl font-bold">
                        Operation Sindoor: Live Updates
                    </h1>
                    <p className="text-sm sm:text-sm text-gray-600">Ongoing Coverage</p>
                </div>
                <div>
                <button className="mt-2 sm:mt-0 md:text-xl border border-gray-300 hover:bg-gray-100  px-4 py-1 rounded-lg">
                    Share
                </button>
                </div>
            </div>

            <div className="flex  gap-4">
            {/* Embedded Video */}
            <div className=" aspect-video rounded-lg overflow-hidden mb-4">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/abc123"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>

            <div>

            <p className="text-xs sm:text-sm text-gray-800">
                23 April 2024
            </p>
            <p className="text-sm sm:text-base lg:text-2xl font-semibold text-black leading-snug">Operation Sindoor begates tocaute Indians from conflict-hit Sudan</p>
            </div>
            </div>
        </div>
    );
};

export default Header;
