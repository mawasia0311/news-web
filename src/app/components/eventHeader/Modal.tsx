"use client";

import { useParams } from "next/navigation";
import {
  Play,
  CheckCircle,
  ThumbsUp,
  MessageCircle,
  Clock,
} from "lucide-react";
import { useState } from "react";
import { Props } from "@/Types";

type ModalProps = {
  isVisible: boolean;
  onClose: () => void;
  closeIcon?: boolean;
};

const newsItems = [
  {
    id: 1,
    timestamp: "19:50 - 19 May, 2025",
    title: "IAF C130J aircraft departs from Jeddah, Saudi Arabia for Sudan",
    source: "BBC",
    verified: true,
    description:
      "The build-up to today's speech has been focused on Canada's tensions with Donald Trump...",
    time: "14:42 IST",
    likes: 0,
    comments: 0,
    type: "news",
  },
  {
    id: 2,
    timestamp: "14:58 IST",
    title: "Indian nationals begin boarding the IAF aircraft in Port Sudan",
    source: "ANI",
    verified: false,
    likes: 2,
    comments: 0,
    type: "update",
  },
  {
    id: 3,
    timestamp: "15:30 IST",
    title: "Video: Indian citizens board IAF C-130J evacuation aircraft",
    source: "Video",
    verified: false,
    likes: 0,
    comments: 0,
    type: "video",
  },
];

const Modal: React.FC<ModalProps> = ({ isVisible, onClose, closeIcon = true }) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black/10 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white w-[90%] max-w-2xl rounded-2xl shadow-2xl relative overflow-y-auto max-h-[90vh]"
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

        {/* Modal Header */}
        <div className="sticky top-0 z-10 border-t-4 border-red-600 bg-white rounded-t-2xl">
          <div className="bg-red-600 rounded-br-lg w-fit text-white px-4 py-2 flex items-center space-x-2">
            <Clock className="w-4 h-4" />
            <span className="text-sm font-medium">19:50 - 19 May, 2025</span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-4 space-y-6">
          {/* Featured Story */}
          <div>
            <h1 className="text-lg font-bold text-gray-900 mb-3">
              {newsItems[0].title}
            </h1>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs bg-gray-200 px-2 py-0.5 rounded-full">
                {newsItems[0].source}
              </span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Verified
              </span>
            </div>

            {/* Video Placeholder */}
            <div className="relative bg-gray-800 rounded-lg mb-4 aspect-video flex items-center justify-center">
              <Play className="w-12 h-12 text-white opacity-80" />
            </div>

            <p className="text-sm text-gray-700 mb-4 leading-relaxed">
              {newsItems[0].description}
            </p>

            <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
              <span>{newsItems[0].time}</span>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <ThumbsUp className="w-3 h-3" />
                  <span>{newsItems[0].likes}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageCircle className="w-3 h-3" />
                  <span>{newsItems[0].comments}</span>
                </div>
              </div>
            </div>
          </div>

          {/* News Updates */}
          <div className="divide-y divide-gray-100">
            {newsItems.slice(1).map((item) => (
              <div key={item.id} className="py-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Time */}
                  <div className="flex sm:flex-col items-center sm:items-start min-w-[80px]">
                    <div className="text-sm text-gray-600 font-medium">{item.timestamp}</div>
                    <div className="hidden sm:block w-0.5 h-8 bg-gray-200 my-2" />
                  </div>

                  <div className="flex-1 space-y-2">
                    {/* Source */}
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        {item.source[0]}
                      </div>
                      <span className="font-bold text-gray-900">{item.source}</span>
                    </div>

                    {/* Title */}
                    <p className="text-sm font-medium text-gray-800">
                      {item.type === "video" && (
                        <span className="text-blue-600 mr-1">Video:</span>
                      )}
                      {item.title}
                    </p>

                    {/* Thumbnail */}
                    {item.type === "video" && (
                      <div className="relative bg-gray-800 rounded-lg aspect-video flex items-center justify-center cursor-pointer">
                        <Play className="w-8 h-8 text-white opacity-80" />
                      </div>
                    )}

                    <div className="flex flex-wrap justify-between items-center gap-2 mt-2">
                      <div className="text-xs">
                        {item.verified ? (
                          <span className="text-green-700 px-2 py-1 bg-green-50 rounded-full flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" />
                            Verified
                          </span>
                        ) : (
                          <span className="text-gray-500">Unverified</span>
                        )}
                      </div>
                      <div className="flex gap-4 text-gray-500 text-sm">
                        <div className="flex items-center gap-1">
                          <ThumbsUp className="w-4 h-4" />
                          {item.likes}
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageCircle className="w-4 h-4" />
                          {item.comments}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal ;
