"use client";

import { useState } from "react";
import { TiArrowUnsorted } from "react-icons/ti";
import CommentCard from "./CommentCard";
import { comments } from "@/mockData/commentsData";
import { X } from "lucide-react";

const CommentSider = () => {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [isMobilePopupOpen, setIsMobilePopupOpen] = useState(false);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const comment = formData.get("comment") as string;
    console.log(comment);
  };

  return (
    <>
      {/* Button to open comment popup on mobile */}
      <div className="block sm:hidden fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsMobilePopupOpen(true)}
          className="bg-black text-white px-4 py-2 rounded-full shadow-lg"
        >
          Comments
        </button>
      </div>

      {/* Overlay */}
      {isMobilePopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden" onClick={() => setIsMobilePopupOpen(false)} />
      )}

      {/* Mobile popup drawer */}
      <div
        className={`fixed bottom-0 left-0 w-full z-50 bg-white rounded-t-2xl p-4 sm:p-5 text-base transform transition-transform duration-300 sm:static sm:transform-none ${
          isMobilePopupOpen ? "translate-y-0" : "translate-y-full"
        } sm:translate-y-0 sm:rounded-none sm:shadow-none sm:border-none sm:bg-white sm:max-w-screen-md sm:mx-auto`}
      >
        {/* Header for mobile */}
        <div className="sm:hidden flex justify-between items-center mb-3">
          <h1 className="text-lg font-bold">Comments</h1>
          <button onClick={() => setIsMobilePopupOpen(false)}>
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Header for desktop */}
        <h1 className="hidden sm:block text-lg sm:text-xl font-bold mb-4">Comments</h1>

        {/* Sort and Filter */}
        <div className="flex justify-between items-center text-gray-600 relative mb-4">
          <h1 className="font-semibold">Sort by</h1>
          <button onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}>
            <TiArrowUnsorted className="text-xl text-gray-400 cursor-pointer" />
          </button>

          {isFilterMenuOpen && (
            <div className="absolute right-0 top-10 bg-white w-full z-50 shadow-lg rounded-md border border-gray-200">
              <button className="w-full px-4 py-1 text-left hover:bg-gray-100">
                Sort by
              </button>
              <button className="w-full px-4 py-1 text-left hover:bg-gray-100">
                Newest first
              </button>
              <button className="w-full px-4 py-1 text-left hover:bg-gray-100">
                Most liked
              </button>
            </div>
          )}
        </div>

        {/* Comment Input */}
        <form onSubmit={submitHandler} className="flex items-center gap-2 w-full">
          <input
            type="text"
            placeholder="Add a comment..."
            className="w-full p-2 rounded-md border border-gray-300 placeholder:text-gray-400"
            name="comment"
          />
          <button
            type="submit"
            className="bg-white border border-gray-300 hover:bg-gray-100 text-black px-4 py-2 rounded-lg"
          >
            Add
          </button>
        </form>

        {/* Comments List */}
        <div className="flex flex-col w-full pt-4 gap-3 max-h-[300px] sm:max-h-none overflow-y-auto">
          {comments.map((cmnt, idx) => (
            <CommentCard
              key={idx}
              commentContent={cmnt.comment}
              likes={cmnt.likes}
              dislikes={cmnt.dislikes}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CommentSider;
