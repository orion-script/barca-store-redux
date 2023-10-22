import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

import { DirectoryCategory } from "../utils/categories";

type DirectoryItemProps = {
  category: DirectoryCategory;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <div
      className="flex w-full md:w-[30%] my-5 md:my-1 h-[240px] flex-auto items-center justify-center border border-[#000] m-1 overflow-hidden hover:cursor-pointer relative"
      onClick={onNavigateHandler}
    >
      <div
        className="w-full h-full bg-cover bg-center transform scale-100 hover:scale-110 transition-transform duration-1000 ease-cubic-bezier"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="bg-[#fff] h-[90px] px-[25px] absolute flex flex-col items-center justify-center border border-[#000] opacity-70 hover:opacity-90">
        <h2 className="font-bold text-[22px] text-[#4a4a4a] uppercase my-2">
          {title}
        </h2>
        <p className="text-[16px] font-light text-[#000]">Shop Now</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
