'use client';
import { X, Clock, MapPin } from 'lucide-react';
import { useParams } from 'next/navigation';

const TimelineDetailPage = () => {
  const { newsId, timelineId } = useParams();

  const newsData = {
    date: "19:50 - 19 May, 2025",
    title: "IAF C130J aircraft departs from Jeddah, Saudi Arabia for Sudan",
    location: "BBC ✓ Verified",
    content: "The build-up to today's speech has been focused on Canada's tensions with Donald Trump, but that's quite likely to be one name that we'll never hear mentioned by the King. There might be an air that while this trip is a coded message about Canadian sovereignty, but the reality is that it has far greater consequences than it might be implying 'hands off' of Canada, but it's likely to be phrased in a way that's diplomatic and doesn't inflame the situation."
  };

  // const timelineItems = [
  //   { id: 1, time: "18:45", description: "Aircraft preparation completed at Jeddah airport" },
  //   { id: 2, time: "19:15", description: "Final clearance received from Saudi authorities" },
  //   { id: 3, time: "19:50", description: "IAF C130J aircraft departs for Sudan" },
  //   { id: 4, time: "20:30", description: "Aircraft crosses Saudi-Sudan border" }
  // ];
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="flex justify-between border-t-4 border-red-600 items-center">
        <div className="bg-red-600 rounded-br-lg w-fit text-white px-4 py-2 flex items-center justify-between">
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
      <div className="p-4 space-y-4 max-w-2xl mx-auto bg-white">
        {/* News Title */}
        <div className="p-4 border-b border-gray-200">
          <h1 className="text-lg font-bold text-gray-900 mb-3">
            IAF C130J aircraft departs from Jeddah, Saudi Arabia for Sudan
          </h1>

          <div className="flex items-center gap-2 mb-4">
            <span className="text-xs font-medium bg-gray-200 text-black px-2 py-0.5 rounded-full">
              BBC
            </span>
            <span className="text-xs font-medium bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
              ✔ Verified
            </span>
          </div>
          <p className="text-sm text-gray-700 mb-4 leading-relaxed">
            The build-up to today's speech has been focused on Canada's tensions with Donald Trump, but that's quite likely to be one name that we'll never hear mentioned. There might be an assumption that the whole trip is a coded message about Canadian sovereignty, but the Prime Minister's approach has been to refuse to say it might be implying "hands off" Canada, but it's likely to be phrased in a way that's diplomatic and doesn't inflame the situation.
          </p>
        </div>

        {/* Timeline Cards */}
        {/* <div className="space-y-3">
          {timelineItems.map((item) => (
            <div key={item.id} className="bg-gray-200 rounded-lg p-4 shadow-sm">
              <div className="flex items-start space-x-3">
                <div className="bg-gray-400 text-white text-xs font-medium px-2 py-1 rounded">
                  {item.time}
                </div>
                <p className="text-gray-700 text-sm flex-1">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div> */}

        {/* Additional Timeline Cards - Empty for now */}
        <div className="bg-gray-200 rounded-lg h-24 shadow-sm"></div>
        <div className="bg-gray-200 rounded-lg h-24 shadow-sm"></div>
        <div className="bg-gray-200 rounded-lg h-24 shadow-sm"></div>
        <div className="bg-gray-200 rounded-lg h-24 shadow-sm"></div>
        <div className="bg-gray-200 rounded-lg h-24 shadow-sm"></div>

      </div>
    </div>
  );
};

export default TimelineDetailPage;
