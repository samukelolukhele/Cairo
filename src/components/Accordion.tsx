import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

type Props = {
  title: string;
  content: string;
};

const Accordion = ({ title, content }: Props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="w-full border-b border-gray-700 font-default">
      <div
        className="flex justify-between items-center py-3 cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        <p className="font-semibold">{title}</p>
        <IoMdArrowDropdown
          className={`${isActive ? "rotate-180" : "rotate-0"} duration-300`}
        />
      </div>
      <div
        className={`${
          isActive
            ? "z-0 relative opacity-100 duration-300 ease-in"
            : "absolute z-[-50] opacity-0"
        }  w-full py-4`}
      >
        <p className="font-default pb-4">{content}</p>
      </div>
    </div>
  );
};

export default Accordion;
