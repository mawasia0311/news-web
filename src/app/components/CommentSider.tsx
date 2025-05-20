"use client";

import { useState } from "react";
import { TiArrowUnsorted } from "react-icons/ti";
import CommentCard from "./CommentCard";

const CommentSider = () => {
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [commentInput, setCommentInput] = useState("");
   // ✅ Default comments
  const [comments, setComments] = useState<string[]>([
    "This is very helpful, thank you!",
    "I completely agree with this update.",
    "Please keep us posted with more info.",
  ]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && commentInput.trim() !== "") {
      setComments(prev => [...prev, commentInput.trim()]);
      setCommentInput("");
    }
  };

  return (
    <div className="p-5 text-lg bg-white rounded-2xl space-y-2 w-full lg:w-1/3 pl-4">
      <h1 className="text-2xl p-2 font-bold">Comments</h1>

      <div className="flex w-full relative text-gray-500 justify-between items-center">
        <h1 className="font-semibold">Sort by</h1>
        <button onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}>
          <TiArrowUnsorted className="text-gray-400" />
        </button>

        {isFilterMenuOpen && (
          <div className="absolute z-50 bg-white w-full p-2 top-10 flex flex-col justify-center right-0 space-y-2 shadow-md rounded-md">
            <h1 className="hover:bg-gray-200 px-2">Sort by</h1>
            <h1 className="hover:bg-gray-200 px-2">Newest first</h1>
            <h1 className="hover:bg-gray-200 px-2">Most liked</h1>
          </div>
        )}
      </div>

      <input
        type="text"
        placeholder="Add a comment..."
        className="w-full p-2 outline-none rounded-md border border-gray-400"
        value={commentInput}
        onChange={e => setCommentInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <div className="flex flex-col w-full pt-4 gap-2">
        {comments.map((text, idx) => (
          <CommentCard key={idx} text={text} />
        ))}
      </div>
    </div>
  );
};

export default CommentSider;
