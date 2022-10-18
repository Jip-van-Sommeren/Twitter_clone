import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Widgets = () => {
  return (
    <div className="col-span-2 py-1 px-5 hidden lg:inline">
      <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full mb-3">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search Twitter"
          className="flex-1 bg-transparent outline-none"
        />
      </div>
      <div>
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="jipvansommeren"
          options={{ height: 1000 }}
        />
      </div>
    </div>
  );
};

export default Widgets;
