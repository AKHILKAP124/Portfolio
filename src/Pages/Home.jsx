import { FaArrowUpLong } from "react-icons/fa6";
import Button from "../Components/download-button/Button";
import { image } from "../assets";

export const Home = () => {
  return (
    <>
      <section
        id="home"
        className="px-6 sm:px-14 pt-20 bg-[#ffffff] dark:bg-[#212121] sm md:pt-32 "
      >
        <div className="home-logo">
          <div className="w-44 h-44 md:w-60 md:h-60 lg:w-72 lg:h-72 rounded-full border ">
            <img
              className="w-full h-full object-cover object-top rounded-full"
              src={image.URL}
              alt="Image"
            />
          </div>
        </div>
        <div className="sm:w-2/3 md:w-2/4 lg:w-2/4 ">
          <h1 className="text-4xl font-bold font-[Oxanium] mt-4 respon-home-headtext">
            Hii, I{`'`}m <span>Akhil</span> 🙋‍♂️
          </h1>
          <p className="font-[Oxanium] sm:text-xl lg:text-3xl mt-2 sm:mt-4">
            Software Engineer turned Entrepreneur. I love building things and
            helping people. Very active on Twitter.
          </p>
          <Button />
        </div>
      </section>
      <div
        className=" w-8 h-8 flex items-center justify-center rounded-md fixed bottom-4  right-8 bg-[#212121] dark:bg-white cursor-pointer"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <FaArrowUpLong className="text-white dark:text-[#212121]" />
      </div>
    </>
  );
};
