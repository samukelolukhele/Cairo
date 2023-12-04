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
        <div
          className="flex text-white gap-32"
          onClick={() => setSubmenuClicked({ id: 0, active: false })}
        >
          Back <IoMdArrowDropleft />
        </div>
      )}
      {links.map((link, i) => {
        if (link.submenu && !submenuClicked.active) {
          return (
            <div
              key={i}
              className="flex text-white gap-8"
              onClick={() => setSubmenuClicked({ id: i, active: true })}
            >
              {link.label} <IoMdArrowDropright />
            </div>
          );
        } else if (link.submenu && submenuClicked.active) {
          return (
            <>
              {submenuClicked.id === i &&
                link.submenu.map((submenu, subId) => {
                  const id = "submenu-" + subId;
                  return (
                    <Link key={id} to={submenu.url} onClick={close}>
                      {submenu.label}
                    </Link>
                  );
                })}
            </>
          );
        } else if (!link.submenu && !submenuClicked.active) {
          return (
            <Link key={i} to={link.url || "/"} onClick={close}>
              {link.label}
            </Link>
          );
        }
      })}
    </div>
  );
};

export default MenuItems;
