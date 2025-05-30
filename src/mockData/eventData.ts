export const updates = [
    {
        id: "iaf-c130j-departure",
        time: "14:42 IST",
        source: "ABAXA3",
        content: "IAF C130J aircraft departs from Jeddah, Saudi Arabia for Sudan",
        status: "verified" as const,
        likes: 0,
        comments: 0,
    },
    {
        id: "indians-boarding-aircraft",
        time: "14:58 IST",
        source: "ANI",
        content: "Indian nationals begin boarding the IAF aircraft in Port Sudan",
        status: "verified" as const,
        tags: ["video"],
        likes: 2,
        comments: 0,
    },
    {
        id: "video-boarding-evacuation-flight",
        time: "15:30 IST",
        source: "Video",
        content: "Video: Indian citizens board IAF C-130J evacuation flight",
        status: "unverified" as const,
        tags: ["video"],
        videoUrl: "/videos/testing-video.mp4", // Make sure this file exists in /public/videos/
        likes: 0,
        comments: 1,
    },
    {
        id: "290-indians-evacuated",
        time: "16:05 IST",
        source: "REUTERS",
        content: "290 Indians evacuated in first batch under Operation Sindoor",
        status: "verified" as const,
        likes: 0,
        comments: 0,
    },
];

