import Image from "next/image";
import { BiLike } from 'react-icons/bi'
import { BiDislike } from 'react-icons/bi'
import { CommentCardProps } from "@/Types";

const CommentCard:React.FC<CommentCardProps> = ({commentContent,likes,dislikes}) => {
  return (
    <div className="flex flex-col w-full  pt-4 gap-2">
            <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">

                <Image src="/Images/image.png" alt="user" fill className="rounded-full" />
                </div>
                <h1 className="text-lg font-bold">Username</h1>
            </div>
            <p className="text-gray-500 ">{commentContent}</p>
            <div className="flex gap-2 mt-1 text-gray-500">
              <div className="flex items-center gap-1">
                <button className="hover:bg-gray-200  text-2xl p-1  rounded-md">
                  <BiLike />
                </button>{" "}
                <span className="">{likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <button className="hover:bg-gray-200 text-2xl p-1 rounded-md">
                  <BiDislike />{" "}
                </button>
                <span className=""> {dislikes}</span>
              </div>
            </div>
        </div>
  )
}

export default CommentCard