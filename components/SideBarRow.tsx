import React, { SVGProps } from "react";

interface Props {
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  onClick?: () => {};
}

const SideBarRow = ({ Icon, title, onClick }: Props) => {
  return (
    <div
      onClick={() => onClick?.()}
      className="flex items-center space-x-2 px-2 py-3 hover:bg-gray-100 max-w-fit rounded-full cursor-pointer ml-2"
    >
      <Icon className="h-8 w-8" />
      <p className="hidden md:inline-flex text-base font-light lg:text-xl">
        {title}
      </p>
    </div>
  );
};

export default SideBarRow;
