// import Switch from "../ThemeSwitcher/Switch";
import { Link } from "react-router-dom";
import { useState } from "react";
import { navLinks } from "../../constants";
import { FiAlignRight } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";

export const NavBar = () => {
  const [active, setActive] = useState();
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <nav className="px-6 sm:px-16 w-full py-4 flex items-center justify-between fixed bg-[#e5eff8] dark:bg-[#212121] dark:text-[#e5eff8]">
        <div className="w-28">
          <Link
            to="/"
            onClick={() => {
              setActive(" ");
              window.scrollTo(0, 0);
            }}
          >
            <img
              className="dark:hidden"
              src="../public/Logo/Portfolio-light-theme-logo.png"
              alt=""
            />
            <img
              className="dark:block hidden"
              src="../public/Logo/Portfolio-dark-theme-logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className=" hidden sm:block">
          <ul
            className="flex text-md items-center gap-5
           list-none font-semibold"
          >
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? "text-[#212121] dark:text-white"
                    : "text-[#606060] dark:text-[#b4b4b4]"
                }`}
                onClick={() => {
                  setActive(link.title);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-end sm:hidden">
          {toggle ? (
            <FiAlignRight
              className="text-4xl cursor-pointer"
              onClick={() => {
                setToggle(false);
              }}
            />
          ) : (
            <RxCross1
              className="text-2xl cursor-pointer"
              onClick={() => {
                setToggle(true);
              }}
            />
          )}
          <div
            className={`${
              toggle ? "hidden" : "block"
            } w-32 rounded-lg p-4 absolute top-16
            bg-[#252525] `}
          >
            <ul className="flex flex-col gap-2 text-xs items-start justify-between list-none font-semibold">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-[#212121] dark:text-white"
                      : "text-[#606060] dark:text-[#b4b4b4]"
                  }`}
                  onClick={() => {
                    setToggle(true);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
