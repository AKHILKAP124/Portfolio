// import { frontend } from "../constants";

import { backend, frontend, other } from "../constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="px-6 sm:px-16 pt-6 md:pt-8 bg-[#ffffff] dark:bg-[#212121]"
    >
      <div className="respon-layout">
        <h1 className="text-xl font-semibold font-[Oxanium] md:text-2xl lg:text-3xl xl:text-4xl ">
          Skills
        </h1>
        <div className="flex ">
          <div className="w-full">
            <h3 className="text-lg  text-center font-semibold font-[Oxanium] mt-4 md:text-xl lg:text-2xl xl:text-3xl">
              Full-Stack Development
            </h3>
            <div className="skills md:flex md:gap-4 md:mt-4">
              {/* Frontend */}
              <div className="w-full min-h-fit border-4 dark:border-[#4f4f4f] rounded-lg mt-2 py-2 px-2">
                <p className="text-center text-sm font-semibold font-[Oxanium] lg:text-lg xl:text-xl text-blue-400">
                  Frontend Tools
                </p>
                <div className="mt-2 flex flex-wrap items-center justify-center gap-x-12 gap-y-10 py-4 bg-ed-300">
                  {frontend.map((link) => (
                    <div
                      key={link.id}
                      className=" w-14 h-14 md:w-16 md:h-16 rounded-lg  flex flex-col items-center justify-around "
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                        <img src={link.logo} alt="" />
                      </div>
                      <p className=" text-sm text-center font-semibold font-[Oxanium] md:text-lg">
                        {link.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Backend */}
              <div className="w-full min-h-fit border-4 dark:border-[#4f4f4f] rounded-lg mt-2 py-2 px-2">
                <p className="text-center text-sm font-semibold font-[Oxanium] lg:text-lg xl:text-xl text-blue-400">
                  Backend Tools
                </p>
                <div className="mt-2 flex flex-wrap items-center justify-center gap-x-12 gap-y-10 py-4 bg-ed-300">
                  {backend.map((link) => (
                    <div
                      key={link.id}
                      className=" w-14 h-14 md:w-16 md:h-16 rounded-lg  flex flex-col items-center justify-around "
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                        <img src={link.logo} alt="" />
                      </div>
                      <p className=" text-sm text-center font-semibold font-[Oxanium] md:text-lg">
                        {link.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              {/* Other */}
              <div className="w-full min-h-fit border-4 dark:border-[#4f4f4f] rounded-lg mt-2 py-2 px-2">
                <p className="text-center text-sm font-semibold font-[Oxanium] lg:text-lg xl:text-xl text-blue-400">
                  Other Tools
                </p>
                <div className="mt-2 flex flex-wrap items-center justify-center gap-x-12 gap-y-10 py-4 bg-ed-300">
                  {other.map((link) => (
                    <div
                      key={link.id}
                      className=" w-14 h-14 md:w-16 md:h-16 rounded-lg  flex flex-col items-center justify-around "
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                        <img src={link.logo} alt="" />
                      </div>
                      <p className=" text-sm text-center font-semibold font-[Oxanium] md:text-lg">
                        {link.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </section>
  );
};
