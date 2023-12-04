import { Transition } from "@headlessui/react";
import { useState } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

interface MenuProps {
  links: Menu[];
  close: () => void;
}

export interface Menu {
  label: string;
  url?: string;
  submenu?: Submenu[];
}

interface Submenu {
  label: string;
  url: string;
}

const MenuItems = ({ links, close }: MenuProps) => {
  const [submenuClicked, setSubmenuClicked] = useState({
    id: 0,
    active: false,
  });

  return (
    <div className="flex flex-col">
      {submenuClicked.active && (
        <Transition
          onClick={() => setSubmenuClicked({ id: 0, active: false })}
          appear
          show={submenuClicked.active}
          enter="ease-in-out duration-700"
          enterFrom="translate-x-[-100%] opacity-0"
          enterTo="translate-x-0 opacity-100"
          leave="ease-in-out duration-700"
          leaveFrom="translate-x-0 opacity-100"
          leaveTo="translate-x-[-100%] opacity-0"
        >
          <div className="flex text-white gap-32">
            Back <IoMdArrowDropleft />
          </div>
        </Transition>
      )}
      {links.map((link, i) => {
        if (link.submenu && !submenuClicked.active) {
          return (
            <Transition
              key={i}
              onClick={() => setSubmenuClicked({ id: i, active: true })}
              appear
              show={!submenuClicked.active}
              enter="ease-in-out duration-700"
              enterFrom="translate-x-[-100%] opacity-0"
              enterTo="translate-x-0 opacity-100"
              leave="ease-in-out duration-700"
              leaveFrom="translate-x-0 opacity-100"
              leaveTo="translate-x-[-100%] opacity-0"
            >
              <div className="flex text-white gap-8">
                {link.label} <IoMdArrowDropright />
              </div>
            </Transition>
          );
        } else if (link.submenu && submenuClicked.active) {
          return (
            submenuClicked.id === i && (
              <Transition
                appear
                show={submenuClicked.active}
                className="text-white flex flex-col gap-8"
                enter="ease-in-out duration-700"
                enterFrom="translate-x-[-100%] opacity-0"
                enterTo="translate-x-0 opacity-100"
                leave="ease-in-out duration-700"
                leaveFrom="translate-x-0 opacity-100"
                leaveTo="translate-x-[-100%] opacity-0"
              >
                {link.submenu.map((submenu, subId) => {
                  const id = "submenu-" + subId;
                  return (
                    <Link key={id} to={submenu.url} onClick={close}>
                      {submenu.label}
                    </Link>
                  );
                })}
              </Transition>
            )
          );
        } else if (!link.submenu && !submenuClicked.active) {
          return (
            <Transition
              appear
              show={!submenuClicked.active}
              className="text-white flex flex-col gap-8"
              enter="ease-in-out duration-700"
              enterFrom="translate-x-[-100%] opacity-0"
              enterTo="translate-x-0 opacity-100"
              leave="ease-in-out duration-700"
              leaveFrom="translate-x-0 opacity-100"
              leaveTo="translate-x-[-100%] opacity-0"
            >
              <Link key={i} to={link.url || "/"} onClick={close}>
                {link.label}
              </Link>
            </Transition>
          );
        }
      })}
    </div>
  );
};

export default MenuItems;
