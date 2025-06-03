"use client";

import { Clock } from "lucide-react";
import React from "react";

type ModalProps = {
    isVisible: boolean;
    onClose: () => void;
    closeIcon?: boolean;
};

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, closeIcon = true }) => {
    if (!isVisible) return null;

    return (
        <div
            className="fixed inset-0 bg-opacity-10 backdrop-blur-[1px] flex justify-center items-center z-50"
            onClick={onClose}
        >
            <div
                className="bg-white w-[90%] max-w-[600px] rounded-2xl shadow-2xl p-0 relative max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Top right close button */}
                {closeIcon && (
                    <button
                        onClick={onClose}
                        className="absolute top-0 right-3 cursor-pointer hover:opacity-70 p-2 w-12 h-12 z-20"
                        aria-label="Close modal"
                    >
                        <span className="text-3xl font-light text-gray-800 select-none leading-none">×</span>
                    </button>
                )}

                {/* Modal Content */}
                <div className="flex flex-col max-h-[90vh] overflow-y-auto rounded-2xl">
                    {/* Sticky Header */}
                    <div className="sticky top-0 z-10">
                        <div className="border-t-4 border-red-600">
                            <div className="bg-red-600 rounded-br-lg w-fit text-white px-4 py-2 flex items-center space-x-2">
                                <Clock className="w-4 h-4" />
                                <span className="text-sm font-medium">19:50 - 19 May, 2025</span>
                            </div>
                        </div>
                    </div>


                    {/* Main content */}
                    <div className="p-6 pt-1 space-y-2 max-w-2xl mx-auto bg-white">
                        {/* News Title */}
                        <div className="p-4 border-b border-gray-200">
                            <h1 className="text-lg font-bold text-gray-900 mb-3">
                                IAF C130J aircraft departs from Jeddah, Saudi Arabia for Sudan
                            </h1>

                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-xs font-medium bg-gray-200 text-black px-2 py-0.5 rounded-full">
                                    BBC
                                </span>
                                <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                                    ✔ Verified
                                </span>
                            </div>

                            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                              The build-up to today's speech has been focused on Canada's tensions with Donald Trump, but that's quite likely to be one name that we'll never hear mentioned. There might be an assumption that the whole trip is a coded message about Canadian sovereignty, but the Prime Minister's approach has been to refuse to say it might be implying 'hands off' Canada, but it's likely to be phrased in a way that's diplomatic and doesn't inflame the situation.
                       </p>
                        </div>

                        {/* Placeholder timeline cards */}
                        <div className="bg-gray-200 rounded-lg h-64 shadow-sm"></div>
                        <div className="bg-gray-200 rounded-lg h-64 shadow-sm"></div>
                        <div className="bg-gray-200 rounded-lg h-64 shadow-sm"></div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
