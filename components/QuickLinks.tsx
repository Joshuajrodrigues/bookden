import Link from "next/link";
import React, { FC } from "react";

const QuickLinks: FC<{
  path: string;
  title: string;
}> = ({ path, title }) => {
  return (
    <div className="mt-2 border-2 border-black p-5 cursor-pointer">
      <Link href={path}>{title}</Link>
    </div>
  );
};

export default QuickLinks;
