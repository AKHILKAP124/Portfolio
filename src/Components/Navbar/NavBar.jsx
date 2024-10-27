import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { navLinks } from "../../constants";
import { FiAlignRight } from "react-icons/fi";
import { RxCross1 } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";

export const NavBar = () => {
  const [active, setActive] = useState();
  const [toggle, setToggle] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setToggle(true)
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`px-6 sm:px-16 w-full py-1 xl:py-3 flex items-center justify-between md:justify-around xl:px-52 xl:justify-between fixed dark:text-[#e5eff8] ${
          scrolled
            ? "bg-[#ffffff] dark:bg-[#212121] border-b-2 border-slate-200 dark:border-[#303030]"
            : "bg-transparent"
        }`}
      >
        <div className="w-24 sm:w-32">
          <Link
            to="/"
            onClick={() => {
              setToggle(true);
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
        <div className=" hidden md:block">
          <div className="relative">
            <ul
              className="flex text-lg items-center gap-5 lg:gap-10
           list-none font-semibold font-[Oxanium]"
            >
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-[#000000] dark:text-white"
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
            <div className="absolute top-1 -right-16 ">
              {toggle ? (
                <IoSettingsOutline
                  className="text-2xl cursor-pointer"
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
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end md:absolute md:right-0 ">
          <div className="md:hidden">
            {toggle ? (
              <FiAlignRight
                className="text-3xl cursor-pointer"
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
          </div>
          <div
            className={`${
              toggle ? "hidden" : "block"
            } w-40 rounded-lg p-4 absolute top-16 md:top-6 md:right-20 lg:right-28 xl:right-32 2xl:right-36
            bg-[#cdf1ff] dark:bg-[#3e3e3e] flex flex-col gap-4`}
          >
            <div className=" border border-black rounded-xl px-2 py-1">
              <ThemeToggle />
            </div>
            <ul className="flex flex-col gap-2 text-md items-start justify-between list-none font-semibold font-[Oxanium] md:hidden ">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "text-[#000000] dark:text-white"
                      : "text-[#5f5f5fd2] dark:text-[#b4b4b4]"
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
