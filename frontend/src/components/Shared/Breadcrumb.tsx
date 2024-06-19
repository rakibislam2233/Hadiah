import React from "react";
import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";
type BreadcrumbProps = {
  path: string;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ path }) => {
  const pathParts = path.split("/").filter((part) => part);

  return (
    <div className="flex items-center gap-2">
      <Link href="/">Home</Link>
      {pathParts.map((part, index) => {
        return (
          <React.Fragment key={index} >
          <div className="flex items-center">
          <MdKeyboardArrowRight />
            <span>{part.charAt(0).toUpperCase() + part.slice(1)}</span>
          </div>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
