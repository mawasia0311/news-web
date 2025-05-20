"use client";

import React from "react";

const Header = () => {
    return (
        <div className="w-full bg-white text-black rounded-2xl px-4 lg:px-24 pt-6">
            <div className="flex justify-between items-center mb-4">
                <div>
                    <h1 className="text-2xl lg:text-3xl font-bold">
                        Operation Sindoor: Live Updates
                    </h1>
                    <p className="text-sm text-gray-600">Ongoing Coverage</p>
                </div>
                <button className="border border-gray-300 cursor-p text-sm px-4 py-1 cursor-pointer rounded">
                    Share
                </button>
            </div>

            <div className="flex justify-between gap-4">
            {/* Embedded Video */}
            <div className="w-full aspect-video rounded-lg mb-4 overflow-hidden">
                <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/abc123"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            </div>

            <div>

            <p className="text-gray-800 text-sm font">
                23 April 2024
            </p>
            <p>Operation Sindoor begins to evacuate Indians from conflict-hit Sudan</p>
            </div>
            </div>
        </div>
    );
};

export default Header;
