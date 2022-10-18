import React, { useRef, useState, Dispatch, SetStateAction } from "react";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import {
  PhotoIcon,
  GifIcon,
  ChartBarIcon,
  FaceSmileIcon,
  CalendarIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { useSession } from "next-auth/react";
import { Tweet, TweetBody } from "../typings";
import { fetchTweets } from "../utils/fetchTweets";
import toast from "react-hot-toast";

interface Props {
  setTweets: Dispatch<SetStateAction<Tweet[]>>;
}

const TweetBox = ({ setTweets }: Props) => {
  const [input, setInput] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const imageInputRef = useRef<HTMLInputElement>(null);

  const addImageToTweet = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (!imageInputRef.current?.value) {
      return;
    }
    setImage(imageInputRef.current.value);
    imageInputRef.current.value = "";

    setImageUrl(false);
  };

  const postTweet = async () => {
    const tweetInfo: TweetBody = {
      text: input,
      username: session?.user?.name || "Unknown User",
      profileImg: session?.user?.image || "https://links.papareact.com/gll",
      image: image,
    };

    const result = await fetch(`/api/addTweet`, {
      body: JSON.stringify(tweetInfo),
      method: "POST",
    });

    const json = await result.json();

    const newTweets = await fetchTweets();
    setTweets(newTweets);

    toast("Tweet posted");

    return json;
  };
  const handleSubmit = (
    e: React.MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
  ) => {
    e.preventDefault();

    postTweet();

    setInput("");
    setImage("");
    setImageUrl(false);
  };
  const { data: session } = useSession();
  const [imageUrl, setImageUrl] = useState<boolean>(false);

  return (
    <div className="flex space-x-2 p-5">
      <img
        className="mt-4 h-14 w-14 rounded-full object-cover"
        src={session?.user?.image || "https://links.papareact.com/gll"}
        alt=""
      />
      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col" action="">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            name=""
            id=""
            placeholder="What's happening"
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
          />
          <div className="flex items-center">
            <div className="flex flex-1 text-twitter">
              <PhotoIcon
                className="h-9 w-9 hover:bg-twitter/5 p-2 rounded-full"
                onClick={() => setImageUrl(!imageUrl)}
              />
              <button className="rounded-full hover:bg-twitter/5 p-2">
                <GifIcon className="h-5 w-5" />
              </button>
              <button className="rounded-full hover:bg-twitter/5 p-2">
                <ChartBarIcon className="h-5 w-5" />
              </button>
              <button className="rounded-full hover:bg-twitter/5 p-2">
                <FaceSmileIcon className="h-5 w-5" />
              </button>
              <button className="rounded-full hover:bg-twitter/5 p-2">
                <CalendarIcon className="h-5 w-5" />
              </button>
              <button className="rounded-full hover:bg-twitter/5 p-2">
                <MapPinIcon className="h-5 w-5" />
              </button>
            </div>
            <button
              onClick={handleSubmit}
              disabled={!input || !session}
              className="bg-twitter px-5 py-2 font-bold text-white rounded-full disabled:opacity-40"
            >
              Tweet
            </button>
          </div>
          {imageUrl && (
            <form
              className="mt-5 rounded-lg flex bg-twitter/80 py-2 px-4"
              action=""
            >
              <input
                ref={imageInputRef}
                className="flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white"
                type="text"
                placeholder="Enter image url"
              />
              <button
                type="submit"
                onClick={addImageToTweet}
                className="font-bold text-white"
              >
                Add Image
              </button>
            </form>
          )}

          {image && (
            <img
              src={image}
              className="mt-10 h-40 w-full rounded-xl object-contain shadow-lg"
            />
          )}
        </form>
      </div>
    </div>
  );
};

export default TweetBox;
