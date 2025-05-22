import React from "react";

import UpdateCard from "./UpdateCard";

import { updates } from '@/mockData/eventData';

export default function Timeline() {
    return (
        <div className="w-full flex flex-col gap-6 px-4 md:px-8 lg:px-16 xl:px-24 py-6">
            {updates.map((item, index) => (
                <UpdateCard key={index} {...item} />
            ))}
        </div>
    );
}


