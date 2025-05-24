
"use client";
import React, { useState } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { Props } from "@/Types";
import Image from "next/image";

export default function UpdateCard({
  time,
  source,
  logo,
  content,
  videoUrl,
  status,
  likes=0,
  // comments=0, 
}: Props) {  const [likeCount, setLikeCount] = useState(likes);
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
    <div className="">
      <div className="flex gap-4 text-black">
        {/* Time */}
        <div className="flex flex-col items-center min-w-[50px]">
          <div className="text-sm sm:text-sm text-gray-500 text-center">
            {time}
          </div>

          <div className="w-0.5 h-full bg-gray-200 my-1" />
        </div>

        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            {logo && <Image src={logo} alt="source" className="w-5 h-5" />}
            <span className="text-lg  text-black font-bold">{source}</span>
          </div>

          <p className="md:text-lg font-medim text-gray-800">{content}</p>

 {/* Inline Small Video */}
{videoUrl && (
  <div className="mt-2">
    <div className="w-[200px] h-[120px] rounded-lg overflow-hidden">
      <video
        controls
        className="w-full h-full object-cover rounded-lg"
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
)};



          <div className="flex  sm:justify-between items-center gap-2">
            {/* Status & Tags */}
            <div className="flex flex-wrap gap-2 mt-1 text-xs">
              {status === "verified" && (
                <span className=" text-green-700 text-sm text-nowrap px-2 py-0.5 rounded-full">
                  ✔ Verified
                </span>
              )};
              {status === "unverified" && (
                <span className=" text-red-700  text-sm  px-2 text-nowrap py-0.5 rounded-full">
                  ✖ Unverified
                </span>
              )};
            </div>

            {/* Likes & Comments */}
        
                        {/* Likes & Comments */}
                        <div className="flex gap-2 mt-1 text-gray-500">
                           <div className="flex items-center gap-1">
                            <button
                                className={`p-1 text-2xl rounded-md cursor-pointer flex items-center gap-1 ${userAction === "liked" ? "bg-black-100 text-black-600" : "hover:bg-gray-200"
                                    }`}
                                onClick={handleLike}>
                                <BiLike />
                           <span>{likeCount}</span>
                            </button>
                            <button
                                className={`p-1 text-2xl rounded-md cursor-pointer flex items-center gap-1 ${userAction === "disliked" ? "bg-black100 text-black-600" : "hover:bg-gray-200"
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
  </div>
  );
}; 