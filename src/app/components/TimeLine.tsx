// Timeline.tsx
"use client";
import React from "react";
import UpdateCard from "./UpdateCard";
import { updates } from '@/mockData/eventData';
import Link from "next/link";

export default function Timeline() {
    const newsId = "operation-sindoor"; // Or dynamically get this if needed

    return (
        <div className="w-full max-w-screen-md mx-auto flex flex-col gap-6 px-4 py-6">
            {updates.map((item, index) => (
                <UpdateCard key={index} {...item} newsId={newsId} />
            ))}
        </div>
    );
}
