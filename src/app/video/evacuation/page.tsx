// File: /src/app/videos/evacuation/page.tsx
import Header from "@/app/components/eventHeader";
import React from "react";

const EvacuationPage = () => {
  return (
    <main>
      <Header />
      <div className="p-4 lg:p-8">
        <h2 className="text-2xl font-bold mb-4">Evacuation Video Details</h2>
        {/* Add your video player, details, comments, etc. */}
        <p>This page contains detailed updates and videos regarding Operation Sindoor.</p>
      </div>
    </main>
  );
};

export default EvacuationPage;
