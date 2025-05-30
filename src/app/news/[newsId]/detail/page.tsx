
"use client";
import { useParams } from "next/navigation";
import { Play, CheckCircle, ThumbsUp, MessageCircle, Share, Clock, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BiDislike, BiLike } from "react-icons/bi";
import { useState } from "react";
import { Props } from "@/Types";

export default function VideoDetailPage(props: Props) {
    const {
        id,
        time,
        source,
        logo,
        content,
        tags,
        status,
        likes = 0,
        dislikes = 0,
        comments = 0,
    } = props;
    const params = useParams();
    const videoId = params?.videoId;
    const videoUrl = `/videos/${videoId}.mp4`; // ✅ Ab conflict nahi hai

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


    // Mock video ID for demonstration

    const newsItems = [
        {
            id: 1,
            timestamp: "19:50 - 19 May, 2025",
            title: "IAF C130J aircraft departs from Jeddah, Saudi Arabia for Sudan",
            source: "BBC",
            verified: true,
            description: "The build-up to today's speech has been focused on Canada's tensions with Donald Trump, but that's quite likely to be one name that we'll never hear mentioned. There might be an assumption that the whole trip is a coded message about Canadian sovereignty, but the Prime Minister's approach has been to refuse to say it might be implying 'hands off' Canada, but it's likely to be phrased in a way that's diplomatic and doesn't inflame the situation.",
            time: "14:42 IST",
            likes: 0,
            comments: 0,
            type: "news"
        },
        {
            id: 2,
            timestamp: "14:58 IST",
            title: "Indian nationals begin boarding the IAF aircraft in Port Sudan",
            source: "ANI",
            verified: false,
            likes: 2,
            comments: 0,
            type: "update"
        },
        {
            id: 3,
            timestamp: "15:30 IST",
            title: "Video: Indian citizens board IAF C-130J evacuation aircraft",
            source: "Video",
            verified: false,
            likes: 0,
            comments: 0,
            type: "video"
        }
    ];


    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="flex justify-between items-center">
                <div className="bg-red-600 w-fit text-white px-4 py-2 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm font-medium">19:50 - 19 May, 2025</span>
                    </div>
                </div>
                <div>
                    <button className="text-white cursor-pointer hover:text-gray-200">
                        <span className="text-lg text-black">×</span>
                    </button>
                </div>
            </div>

            {/* Main Content */}

            <div className="max-w-2xl mx-auto bg-white">
                {/* Featured Story */}
                <div className="p-4 border-b border-gray-200">
                    <div className="flex items-start space-x-3 mb-3">
                        <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm font-bold">BBC</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-1">
                                <span className="text-sm font-medium text-gray-900">BBC</span>
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-xs text-green-600">Verified</span>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-lg font-bold text-gray-900 mb-3">
                        IAF C130J aircraft departs from Jeddah, Saudi Arabia for Sudan
                    </h1>

                    {/* Video Placeholder */}
                    <div className="relative bg-gray-800 rounded-lg mb-4 aspect-video flex items-center justify-center">
                        <Play className="w-12 h-12 text-white opacity-80" />
                    </div>

                    <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                        The build-up to today's speech has been focused on Canada's tensions with Donald Trump, but that's quite likely to be one name that we'll never hear mentioned. There might be an assumption that the whole trip is a coded message about Canadian sovereignty, but the Prime Minister's approach has been to refuse to say it might be implying "hands off" Canada, but it's likely to be phrased in a way that's diplomatic and doesn't inflame the situation.
                    </p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <span>14:42 IST</span>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                                <ThumbsUp className="w-3 h-3" />
                                <span>0</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <MessageCircle className="w-3 h-3" />
                                <span>0</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* News Updates */}
                <div className="divide-y divide-gray-100">
                    {newsItems.slice(1).map((item) => (
                        <div key={item.id} className="p-4">
                            <div className="flex flex-col sm:flex-row gap-4 text-black">
                                {/* Time */}
                                <div className="flex sm:flex-col items-center sm:items-start min-w-[80px]">
                                    <div className="text-sm text-gray-600 font-medium">{item.timestamp}</div>
                                    <div className="hidden sm:block w-0.5 h-8 bg-gray-200 my-2" />
                                </div>

                                <div className="flex-1 space-y-3">
                                    {/* Source */}
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                                            <span className="text-white text-xs font-bold">
                                                {item.source.substring(0, 1)}
                                            </span>
                                        </div>
                                        <span className="text-base font-bold text-gray-900">{item.source}</span>
                                    </div>

                                    {/* Title */}
                                    <p className="text-sm font-medium text-gray-800 leading-relaxed">
                                        {item.type === 'video' && (
                                            <span className="text-blue-600 mr-1">Video:</span>
                                        )}
                                        {item.title}
                                    </p>

                                    {/* Video Thumbnail for video type */}
                                    {item.type === 'video' && (
                                        <div className="relative bg-gray-800 rounded-lg aspect-video flex items-center justify-center cursor-pointer">
                                            <Play className="w-8 h-8 text-white opacity-80" />
                                        </div>
                                    )}

                                    <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-2 mt-3">
                                        {/* Verification Status */}
                                        <div className="flex flex-wrap gap-2 text-xs">
                                            {item.verified ? (
                                                <span className="text-green-700 text-sm px-2 py-1 rounded-full bg-green-50 flex items-center gap-1">
                                                    <CheckCircle className="w-3 h-3" />
                                                    Verified
                                                </span>
                                            ) : (
                                                <span className="text-gray-500 text-sm">Unverified</span>
                                            )}
                                        </div>

                                        {/* Likes & Comments */}
                                        <div className="flex gap-4 text-gray-500">
                                            <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                                                <ThumbsUp className="w-4 h-4" />
                                                <span className="text-sm">{item.likes}</span>
                                            </button>
                                            <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                                                <MessageCircle className="w-4 h-4" />
                                                <span className="text-sm">{item.comments}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
