"use client";

import { useState } from "react";
import { TiArrowUnsorted } from "react-icons/ti";
import CommentCard from "./CommentCard";
import { comments } from "@/mockData/commentsData";

const CommentSider = () => {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const comment = formData.get("comment") as string;
    console.log(comment);
  };

  return (
    <div className="w-full max-w-screen-md mx-auto bg-white rounded-2xl p-4 sm:p-5 text-base">
      <h1 className="text-lg sm:text-xl font-bold mb-4">Comments</h1>

      <div className="flex justify-between items-center text-gray-600 relative mb-4">
        <h1 className="font-semibold">Sort by</h1>
        <button onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}>
          <TiArrowUnsorted className="text-xl text-gray-400 cursor-pointer" />
        </button>

        {isFilterMenuOpen && (
          <div className="absolute right-0 top-10 bg-white w-full z-50 shadow-lg rounded-md border border-gray-200">
             <button className="w-full px-4 py-1 cursor-pointer text-left hover:bg-gray-100">
              Sort by
            </button>
            <button className="w-full px-4 py-1 cursor-pointer text-left hover:bg-gray-100">
              Newest first
            </button>
            <button className="w-full px-4 py-1 cursor-pointer text-left hover:bg-gray-100">
              Most liked
            </button>
          </div>
        )}
      </div>

      <form
        onSubmit={submitHandler}
        className="flex  items-center gap-2 w-full"
      >
        <input
          type="text"
          placeholder="Add a comment..."
          className=" w-full p-2 rounded-md border border-gray-300 placeholder:text-gray-400 flex-grow"
          name="comment"
        />
        <button 
     
        type="submit" 
        className="  bg-white border-[1px] border-gray-300 hover:bg-gray-100 text-black px-4 py-2 rounded-lg ">
          Add
        </button>
      </form>

      <div className="flex flex-col w-full pt-4 gap-3">
        {comments.map((cmnt, idx) => (
          <CommentCard key={idx} commentContent={cmnt.comment} likes={cmnt.likes} dislikes={cmnt.dislikes} />
        ))}
      </div>
    </div>
  );
};

export default CommentSider;
