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
            className="fixed inset-0 bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-50"
            onClick={onClose} // ✅ Close on background click
        >
            <div
                className="bg-white w-[90%] max-w-[600px] border rounded-lg shadow-lg p-6 relative max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()} // ✅ Prevent modal close when clicking inside
            >
                {/* Top right close button */}
                {closeIcon && (
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 text-white cursor-pointer hover:text-gray-200 p-2 bg-gray-100 w-10 h-10"
                        aria-label="Close modal"
                    >
                        <span className="text-black text-lg select-none">×</span>
                    </button>
                )}

                {/* Modal Content */}
                <div className="bg-gray-50">
                    {/* Header */}
                    <div className="flex justify-between border-t-4 border-red-600 items-center">
                        <div className="bg-red-600 rounded-br-lg w-fit text-white px-4 py-2 flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm font-medium">19:50 - 19 May, 2025</span>
                        </div>

                        {/* Second close button in header */}
                        {/* {closeIcon && (
              <button
                onClick={onClose}
                className="text-white cursor-pointer hover:text-gray-200 p-2 bg-gray-100 w-10 h-10"
                aria-label="Close modal"
              >
                <span className="text-black text-lg select-none">×</span>
              </button>
            )} */}
                    </div>

                    {/* Main content */}
                    <div className="p-4 space-y-4 max-w-2xl mx-auto bg-white">
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
                                The build-up to today's speech has been focused on Canada's tensions with Donald Trump, but that's quite likely to be one name that we'll never hear mentioned...
                            </p>
                        </div>

                        {/* Placeholder timeline cards */}
                        <div className="bg-gray-200 rounded-lg h-24 shadow-sm"></div>
                        <div className="bg-gray-200 rounded-lg h-24 shadow-sm"></div>
                        <div className="bg-gray-200 rounded-lg h-24 shadow-sm"></div>
                        <div className="bg-gray-200 rounded-lg h-24 shadow-sm"></div>
                        <div className="bg-gray-200 rounded-lg h-24 shadow-sm"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
