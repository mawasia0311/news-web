"use client";

import React, { Fragment, useState } from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import { Props } from "@/Types";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Modal from "../components/Modal";

type UpdateCardProps = Props & {
  showLine?: boolean;
};

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
  showLine = true,
}: UpdateCardProps) {
  const pathname = usePathname();
  const newsId = pathname.split("/")[2] || "unknown-news";
  const videoId = videoUrl?.split("/").pop()?.replace(".mp4", "") || "";
  const isActive = pathname.includes(videoId);

  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(dislikes);
  const [userAction, setUserAction] = useState<"liked" | "disliked" | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleLike = () => {
    if (userAction === "liked") {
      setLikeCount(likeCount - 1);
      setUserAction(null);
    } else {
      if (userAction === "disliked") setDislikeCount(dislikeCount - 1);
      setLikeCount(likeCount + 1);
      setUserAction("liked");
    }
  };

  const handleDislike = () => {
    if (userAction === "disliked") {
      setDislikeCount(dislikeCount - 1);
      setUserAction(null);
    } else {
      if (userAction === "liked") setLikeCount(likeCount - 1);
      setDislikeCount(dislikeCount + 1);
      setUserAction("disliked");
    }
  };

  const handleModalClose = () => setShowModal(false);

  return (
    <Fragment>
      <div
        onClick={() => setShowModal(true)}
        className="w-full p-4 rounded-lg cursor-pointer"
      >
        <div className="flex flex-col sm:flex-row gap-4 text-black">

          {/* Time and vertical line */}
          <div className="relative flex sm:flex-col items-center min-w-[50px]">
            <div className="text-xs sm:text-sm text-gray-500 text-center z-10">{time}</div>
            {showLine && (
              <div className="hidden sm:block absolute top-[1.5rem] bottom-[-1.5rem] left-1/2 w-0.5 bg-gray-300" />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              {logo && (
                <Image
                  src={logo}
                  alt="source"
                  width={20}
                  height={20}
                  className="w-5 h-5 object-contain"
                />
              )}
              <span className="text-base sm:text-lg font-bold">{source}</span>
            </div>

            <p className="text-sm sm:text-base font-medium text-gray-800">{content}</p>

            {videoUrl && (
              <div className="mt-2">
                <div className="w-full max-w-xs sm:max-w-[200px] h-[120px] rounded-lg overflow-hidden">
                  <video
                    className="w-full h-full object-cover cursor-pointer"
                    muted
                    src={videoUrl}
                    controls={false}
                  />
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="flex flex-wrap items-center justify-between gap-3 mt-2 text-sm">
              {/* Left: Status + Reactions */}
              <div className="flex flex-wrap items-center gap-3">
                {status === "verified" && (
                  <span className="text-green-700 px-2 py-0.5 rounded-full bg-green-50">
                    ✔ Verified
                  </span>
                )}
                {status === "unverified" && (
                  <span className="text-red-700 px-2 py-0.5 rounded-full bg-red-50">
                    ✖ Unverified
                  </span>
                )}

                {/* Like/Dislike */}
                <div className="flex gap-4 sm:ml-4 text-gray-500">
                  <button
                    className={`p-1 text-lg rounded-md flex items-center gap-1 ${
                      userAction === "liked" ? "bg-gray-200 text-black" : "hover:bg-gray-100"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLike();
                    }}
                  >
                    <BiLike />
                    <span>{likeCount}</span>
                  </button>

                  <button
                    className={`p-1 text-lg rounded-md flex items-center gap-1 ${
                      userAction === "disliked" ? "bg-gray-200 text-black" : "hover:bg-gray-100"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleDislike();
                    }}
                  >
                    <BiDislike />
                    <span>{dislikeCount}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        <Modal isVisible={showModal} onClose={handleModalClose} />
      </div>
    </Fragment>
  );
}
