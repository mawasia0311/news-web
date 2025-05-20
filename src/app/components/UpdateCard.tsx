"use client";

// /src/components/UpdateCard.tsx
import React, { useState } from "react";
import { BiDislike, BiLike } from "react-icons/bi";

type Props = {
    time: string;
    source: string;
    logo?: string;
    content: string;
    tags?: string[];
    videoUrl?: string;
    status?: "verified" | "unverified";
    likes?: number;
    comments?: number;
};

export default function UpdateCard({
    time,
    source,
    logo,
    content,
    tags = [],
    videoUrl,
    status,
    likes = 0,
    comments = 0,
}: Props) {
    const [likeCount, setLikeCount] = useState(likes);
    const [dislikeCount, setDislikeCount] = useState(0);
    const [userAction, setUserAction] = useState<"liked" | "disliked" | null>(null);

    const handleLike = () => {
        if (userAction === "liked") {
            setLikeCount(likeCount - 1);
            setUserAction(null);
        } else {
            if (userAction === "disliked") {
                setDislikeCount(dislikeCount - 1);
            }
            setLikeCount(likeCount + 1);
            setUserAction("liked");
        }
    };

    const handleDislike = () => {
        if (userAction === "disliked") {
            setDislikeCount(dislikeCount - 1);
            setUserAction(null);
        } else {
            if (userAction === "liked") {
                setLikeCount(likeCount - 1);
            }
            setDislikeCount(dislikeCount + 1);
            setUserAction("disliked");
        }
    };
    return (
        <div>
            <div className="flex text-black space-x-4 px-2">
                {/* Time */}
                <div className="flex flex-col items-center">
                    <div className="text-sm text-gray-500 text-center">{time}</div>

                    <div className="w-0.5 h-22 bg-gray-200" />
                </div>

                <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                        {logo && <img src={logo} alt="source" className="w-5 h-5" />}
                        <span className="text-xs text-black font-semibold">{source}</span>
                    </div>

                    <p className="text-sm text-gray-800">{content}</p>


                    {/* Inline Video */}
                    {videoUrl && (
                        <div className="mt-2">
                            <video controls className="w-full max-w-md rounded-lg">
                                <source src={videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    )}

                    <div className="flex justify-between items-center">
                        {/* Status & Tags */}
                        <div className="flex flex-wrap gap-2 mt-1 text-xs">
                            {status === "verified" && (
                                <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full">✔ Verified</span>
                            )}
                            {status === "unverified" && (
                                <span className="bg-red-100 text-red-700 px-2 py-0.5 rounded-full">✖ Unverified</span>
                            )}
                        </div>

                        {/* Likes & Comments */}
                        <div className="flex gap-4 mt-1 text-xs text-gray-500">
                            <button
                                className={`p-2 rounded-md cursor-pointer flex items-center gap-1 ${userAction === "liked" ? "bg-blue-100 text-blue-600" : "hover:bg-gray-200"
                                    }`}
                                onClick={handleLike}>
                                <BiLike />
                                <span>{likeCount}</span>
                            </button>
                            <button
                                className={`p-2 rounded-md cursor-pointer flex items-center gap-1 ${userAction === "disliked" ? "bg-red-100 text-red-600" : "hover:bg-gray-200"
                                    }`}
                                onClick={handleDislike}>
                                <BiDislike />
                                <span>{dislikeCount}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
