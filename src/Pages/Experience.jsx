import { Link } from "react-router-dom";
import { Experiences } from "../constants";

export const Experience = () => {
  return (
    <section
      id="experience"
      className="px-6 sm:px-16 pt-6 md:pt-8 bg-[#ffffff] dark:bg-[#212121] "
    >
      <div className="respon-layout">
        <h1 className="text-xl font-semibold font-[Oxanium] md:text-2xl lg:text-3xl xl:text-4xl ">
          Experience
        </h1>
        <div className=" items w-full h-fit bg-red-20 py-4 lg:mt-3 xl:mt-4 lg:space-y-4 ">
          {Experiences.map((link) => (
            <div
              key={link.id}
              className=" item w-full flex items-center justify-between xl:justify-normal p-2 rounded-lg"
            >
              <div className="flex gap-2 lg:gap-4">
                <div className="w-12 h-12 lg:w-12 lg:h-12 rounded-full border object-cover">
                  <img
                    className=" w-full h-full rounded-full "
                    src={link.image}
                    alt=""
                  />
                </div>
                <div className="w-40 h-12 ">
                  <h3 className="font-semibold font-[Oxanium] w-full h-7 lg:text-xl xl:text-2xl overflow-hidden">
                    <Link
                      to={link.url}
                      target="_blank"
                      className="hover:underline"
                    >
                      {link.title}
                    </Link>
                  </h3>
                  <h4 className="text-xs lg:text-sm xl:text-lg w-full h-4 xl:h-6 font-[Oxanium]  overflow-hidden">
                    {link.Description}
                  </h4>
                </div>
              </div>
              <div className="flex items-center justify-center xl:ml-[45rem]">
                <p className="text-xs lg:text-lg font-semibold font-[Oxanium] text-[#303030] dark:text-[#818181]">
                  {link.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
