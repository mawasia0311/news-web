"use client";

import React, { Fragment, useState } from "react";
import { usePathname } from "next/navigation";
import Modal from "./Modal";

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const handleModalClose = () => setShowModal(false);
    const pathname = usePathname();
    const isEvacuationPage = pathname === "/videos/evacuation";

    const videoUrl = "/videos/testing-video.mp4";
    const videoId = videoUrl.split("/").pop()?.replace(".mp4", "") || "default";

    return (
        <Fragment>
            <div className="w-full bg-white text-black rounded-2xl px-2 lg:px-6 pt-6">
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <h1 className="text-lg sm:text-xl lg:text-3xl font-bold">
                            Operation Sindoor: Live Updates
                        </h1>
                        <p className="text-sm sm:text-sm text-gray-600">Ongoing Coverage</p>
                    </div>
                    <div>
                        <button className="mt-2 sm:mt-0 md:text-xl border border-gray-300 hover:bg-gray-100 px-4 py-1 rounded-lg">
                            Share
                        </button>
                    </div>
                </div>

                <div
                    className="flex gap-4 flex-col lg:flex-row items-start cursor-pointer"
                    onClick={() => setShowModal(true)}
                >
                    {/* Video Preview (No Link) */}
                    <video
                        src={videoUrl}
                        className="w-72 h-48 rounded-lg object-cover"
                        muted
                        autoPlay
                        loop
                    />

                    <div>
                        <p className="text-xs sm:text-sm text-gray-800">23 April 2024</p>
                        <p className="text-sm sm:text-base lg:text-2xl font-semibold text-black leading-snug">
                            Operation Sindoor begins to evacuate Indians from conflict-hit Sudan
                        </p>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Modal isVisible={showModal} onClose={handleModalClose} closeIcon={true} />
        </Fragment>
    );
};

export default Header;
