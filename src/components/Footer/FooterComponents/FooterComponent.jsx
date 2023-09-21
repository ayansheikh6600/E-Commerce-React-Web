import React from "react";

const FooterComponent = (props) => {
  const { title ,link } = props;

  return (
    <div>
      <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        {title?.one||"Resources"}
      </h2>
      <ul className="text-gray-500 dark:text-gray-400 font-medium">
        <li className="mb-4">
          <a href={link?.insta} className="hover:underline">
          {title?.two||"Resources"}
          </a>
        </li>
        <li>
          <a href={link?.github} className="hover:underline">
          {title?.three||"Resources"}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterComponent;
