import { AiOutlineClose } from "react-icons/ai";
import Divider from "./Divider";

type MProps = {
  bgClick: React.MouseEventHandler<HTMLDivElement>;
  close: React.MouseEventHandler<HTMLDivElement>;
};

const Modal = ({ bgClick, close }: MProps) => {
  return (
    <div className="top-0 right-0 bottom-0 left-0 flex items-center justify-center fixed z-[100]">
      <div
        className="fixed bg-black opacity-70 w-full top-0 left-0 right-0 bottom-0 cursor-pointer"
        onClick={bgClick}
      />
      <div className="relative p-20 z-20  bg-black text-white w-10/12 lg:w-5/12 text-center border-brand border-2 flex flex-col items-center gap-8">
        <div
          className="absolute top-[-15px] right-[-15px] p-2 bg-brand hover:bg-brandHover rounded-full cursor-pointer"
          onClick={close}
        >
          <AiOutlineClose className="text-white text-2xl" />
        </div>
        <img src="/assets/logo.svg" alt="logo" className="" />
        <Divider />
        <p>
          Thank you for getting in contact with us. Our team will reply to you
          via email shortly.
        </p>
      </div>
    </div>
  );
};

export default Modal;
