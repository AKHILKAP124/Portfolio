
const Button = () => {
  return (
    <button className=" mt-4 lg:mt-8 cursor-pointer flex justify-between font-semibold font-[Oxanium] border-2 border-[#212121] dark:border-[white] dark:text-white px-2 py-2 md:px-3 md:py-3  rounded-lg  text-[#212121] tracking-wider shadow-xl hover:bg-slate-100 dark:hover:bg-[#3e3e3e] hover:scale-105 duration-500 hover:ring-1 w-[150px]">
      Resume
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5 animate-bounce"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
        />
      </svg>
    </button>
  );
};

export default Button;
