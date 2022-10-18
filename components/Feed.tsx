import React, { useState } from "react";
import { SparklesIcon } from "@heroicons/react/24/outline";
import TweetBox from "./TweetBox";
import { Tweet } from "../typings";
import TweetComponent from "../components/Tweet";
import { fetchTweets } from "../utils/fetchTweets";
import toast from "react-hot-toast";

interface Props {
  tweets: Tweet[];
}

const Feed = ({ tweets: tweetsProp }: Props) => {
  const [tweets, setTweets] = useState<Tweet[]>(tweetsProp);

  const handleRefresh = async () => {
    const refreshToast = toast.loading("Refreshing");
    const tweets = await fetchTweets();
    setTweets(tweets);

    toast.success("Feed Updated!", {
      id: refreshToast,
    });
  };
  console.log(tweets);
  return (
    <div className="col-span-7 lg:col-span-5 max-h-screen overflow-scroll scrollbar-hide p-4 border-x-[1px]">
      <div className="flex justify-between w-full">
        <h1 className="text-xl font-bold">Home</h1>
        <button
          onClick={() => handleRefresh()}
          className="hover:bg-gray-100 rounded-full w-fit p-1"
        >
          <SparklesIcon className="w-7 h-7" />
        </button>
      </div>
      <div>
        <TweetBox setTweets={setTweets} />
      </div>
      <div>
        {tweets.map((tweet) => (
          <TweetComponent key={tweet._id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
