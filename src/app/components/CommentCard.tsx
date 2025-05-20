import Image from "next/image";
import { useState } from "react";
import { BiLike } from 'react-icons/bi'
import { BiDislike } from 'react-icons/bi'

type Props = {
    text: string;
};



const CommentCard = ({ text }: Props) => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [userAction, setUserAction] = useState<"liked" | "disliked" | null>(null);

    const handleLike = () => {
        if (userAction === "liked") {
            setLikes(likes - 1);
            setUserAction(null);
        } else {
            if (userAction === "disliked") {
                setDislikes(dislikes - 1);
            }
            setLikes(likes + 1);
            setUserAction("liked");
        }
    };

    const handleDislike = () => {
        if (userAction === "disliked") {
            setDislikes(dislikes - 1);
            setUserAction(null);
        } else {
            if (userAction === "liked") {
                setLikes(likes - 1);
            }
            setDislikes(dislikes + 1);
            setUserAction("disliked");
        }
    };
    return (
        <div className="flex flex-col w-full  pt-4 gap-2">
            <div className="flex items-center gap-4">
                <div className="relative w-12 h-12">

                    <Image src="/Images/image.png" alt="user" fill className="rounded-full" />
                </div>
                <h1 className="text-lg font-bold">Username</h1>
            </div>
            <p className="text-gray-500 ">{text}</p>
            <div className="flex items-center gap-2">
                <button className={`p-2 rounded-md cursor-pointer flex items-center gap-1 ${userAction === "liked" ? "bg-blue-100 text-blue-600" : "hover:bg-gray-200"}`}
                    onClick={handleLike}><BiLike /><span>{likes}</span></button>
                <button className={`p-2 rounded-md cursor-pointer flex items-center gap-1 ${userAction === "disliked" ? "bg-red-100 text-red-600" : "hover:bg-gray-200"}`}
                    onClick={handleDislike}><BiDislike /><span>{dislikes}</span></button>

            </div>
        </div>
    )
}

export default CommentCard