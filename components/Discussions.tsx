import React, { FC } from "react";

const Discussions: FC<{
  title: string;
  date: string;
  chapterStart: string;
  chapterEnd: string;
  clubName: string;
}> = (props) => {
  return (
    <div className="mt-4 border-2 border-black p-5 cursor-pointer">
      <p className="text-sm text-gray-600">{props.clubName}</p>
      <div>{props.title}</div>
      <div className="flex justify-between">
        <span>
          Chapters {props.chapterStart}-{props.chapterEnd}
        </span>
        <span>{props.date}</span>
      </div>
    </div>
  );
};

export default Discussions;
