import React from "react";
import Image from "next/image";
import TwitterLogo from "../public/Twitter-logo.svg";
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  EllipsisHorizontalCircleIcon,
  EnvelopeIcon,
  ListBulletIcon,
  UserIcon,
  HomeIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import SideBarRow from "./SideBarRow";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";

const SideBar = () => {
  const { data: session } = useSession();
  const router = useRouter();
  return (
    <div className="flex flex-col col-span-2 justify-start align-top h-screen relative items-center md:items-start">
      <button
        className="hover:bg-gray-100 rounded-full p-1.5 aspect-auto w-12 h-12 ml-2.5 border-none"
        onClick={() => router.push("/")}
      >
        <Image src={TwitterLogo} width={32} height={32} />
      </button>
      <Link href="/">
        <SideBarRow Icon={HomeIcon} title="Home" />
      </Link>
      <Link href="/">
        <SideBarRow Icon={HashtagIcon} title="Explore" />
      </Link>
      <Link href="/">
        <SideBarRow Icon={BellIcon} title="Notification" />
      </Link>
      <Link href="/">
        <SideBarRow Icon={EnvelopeIcon} title="Messages" />
      </Link>
      <Link href="/">
        <SideBarRow Icon={BookmarkIcon} title="Bookmarks" />
      </Link>
      <Link href="/">
        <SideBarRow Icon={ListBulletIcon} title="Lists" />
      </Link>

      <SideBarRow
        Icon={UserIcon}
        onClick={session ? signOut : signIn}
        title={session ? "Sign Iut" : "Sign In"}
      />

      <button>
        <SideBarRow Icon={EllipsisHorizontalCircleIcon} title="More" />
      </button>

      <button className="text-white rounded-full h-[52px] text-[20px] mx-2 hover:bg-twitter/100 bg-twitter/75 mt-2 w-10/12">
        Tweet
      </button>

      <button className="flex w-full rounded-full hover:bg-gray-100 p-2 items-center h-[52px] justify-between absolute bottom-3">
        <UserIcon className="w-1/6 mr-1" />
        <div className="mr-2 w-fit">
          <div className="font-bold w-fit">Jip van Sommeren</div>
          <div className="font-light w-fit">@jipvansommeren</div>
        </div>
        <EllipsisHorizontalIcon className="w-[25px]" />
      </button>
    </div>
  );
};

export default SideBar;
