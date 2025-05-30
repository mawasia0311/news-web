import React from "react";

import UpdateCard from "./UpdateCard";

import { updates } from '@/mockData/eventData';

export default function Timeline() {
    return (
        <div className="w-full max-w-screen-md mx-auto flex flex-col gap-6 px-4 py-6">
            {updates.map((item, index) => (
                <UpdateCard key={index} {...item} />
            ))}
        </div>
    );
};


