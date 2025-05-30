import Image from "next/image";
import { BiLike } from 'react-icons/bi';
import { BiDislike } from 'react-icons/bi';
import { CommentCardProps } from "@/Types";

const CommentCard:React.FC<CommentCardProps> = ({commentContent,likes,dislikes}) => {
  return (
    <div className="flex flex-col w-full border-b border-gray-200 pb-4 gap-2">
            <div className="flex items-center gap-4">
                <div className="relative w-10 h-10">

                <Image src="/Images/image.png" alt="user" fill className="rounded-full" />
                </div>
                <h1 className="text-base sm:text-lg font-semibold">Username</h1>
            </div>
            <p className="text-gray-500 ">{commentContent}</p>
            <div className="flex sm:flex-row gap-2 mt-1 text-gray-500">
              <div className="flex items-center gap-1">
                <button className="hover:bg-gray-200  text-xl p-1  rounded-lg">
                  <BiLike />
                </button>{" "}
                <span className="">{likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <button className="hover:bg-gray-200 text-xl p-1 rounded-md">
                  <BiDislike />{" "}
                </button>
                <span className=""> {dislikes}</span>
              </div>
            </div>
        </div>
  )
};

export default CommentCard