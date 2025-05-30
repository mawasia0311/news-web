"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";  // <-- import this

const Header = () => {
    const pathname = usePathname();
    const isEvacuationPage = pathname === "/videos/evacuation";

    const videoUrl = "/videos/testing-video.mp4";
    const videoId = videoUrl.split("/").pop()?.replace(".mp4", "") || "default";
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

            <div className="flex gap-4 flex-col lg:flex-row">
                {/* Clickable Video Preview */}
                <Link href={`/news/${videoId}/detail`}>
                    <video
                        src={videoUrl}
                        className="w-64 h-36 rounded cursor-pointer"
                        muted
                        autoPlay
                        loop
                    />
                </Link>

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
