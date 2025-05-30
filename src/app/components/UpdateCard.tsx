
"use client";
import React, { useState } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { Props } from "@/Types";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // <-- import
import { updates } from "@/mockData/eventData";


export default function UpdateCard({
  id,
  time,
  source,
  logo,
  content,
  tags,
  videoUrl,
  status,
  likes = 0,
  dislikes = 0,
  comments = 0,
}: Props) {

  const pathname = usePathname();

  // Extract video ID from videoUrl, or fallback to empty string
  const videoId = videoUrl?.split("/").pop()?.replace(".mp4", "") || "";

  // Check if current path includes this video ID
  const isActive = pathname.includes(videoId);

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
    <div className="w-full">
      <div className="flex flex-col sm:flex-row gap-4 text-black">
        {/* Time */}
        <div className="flex sm:flex-col items-center sm:items-center min-w-[50px]">
          <div className="text-xs sm:text-sm text-gray-500 text-center">{time}</div>
          <div className="hidden sm:block w-0.5 h-full bg-gray-200 my-1" />
        </div>

        <div className="flex-1 space-y-2">
          <div className="flex items-center gap-2">
            {logo && (
              <Image src={logo} alt="source" width={20} height={20} className="w-5 h-5 object-contain" />
            )}
            <span className="text-base sm:text-lg font-bold">{source}</span>
          </div>

          <p className="text-sm sm:text-base font-medium text-gray-800">{content}</p>

          {/* Inline Small Video */}

          {videoUrl && (
            <div className="mt-2">
              <div className="w-full max-w-xs sm:max-w-[200px] h-[120px] rounded-lg overflow-hidden">
                <Link href={`/news/${id}/detail`} passHref>
                  {/* Video ko cursor-pointer aur object-cover ke sath style kiya */}
                  <video
                    className="w-full h-full object-cover cursor-pointer"
                    muted
                    src={videoUrl}
                    controls={false}
                  // controls off rakhna hai jaisa aapne bataya
                  />
                </Link>
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 mt-2">
            {/* Status */}
            <div className="flex flex-wrap gap-2 text-xs">
              {status === "verified" && (
                <span className="text-green-700 text-sm px-2 py-0.5 rounded-full bg-green-50">
                  ✔ Verified
                </span>
              )}
              {status === "unverified" && (
                <span className="text-red-700 text-sm px-2 py-0.5 rounded-full bg-red-50">
                  ✖ Unverified
                </span>
              )}
            </div>

            {/* Likes & Dislikes */}
            <div className="flex gap-2 text-gray-500">
              <button
                className={`p-1 text-xl rounded-md flex items-center gap-1 ${userAction === "liked" ? "bg-gray-200 text-black" : "hover:bg-gray-100"
                  }`}
                onClick={handleLike}
              >
                <BiLike />
                <span className="text-sm">{likeCount}</span>
              </button>
              <button
                className={`p-1 text-xl rounded-md flex items-center gap-1 ${userAction === "disliked" ? "bg-gray-200 text-black" : "hover:bg-gray-100"
                  }`}
                onClick={handleDislike}
              >
                <BiDislike />
                <span className="text-sm">{dislikeCount}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 