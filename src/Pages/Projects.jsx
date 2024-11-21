import { CodeBtn, SeeMoreBtn, WebBtn } from "../Components/Button/Button";
import { projects } from "../constants";

export const Projects = () => {
  return (
    <>
      <section id="projects">
        <div className="py-10 px-6 sm:px-16 md:px-28 lg:px-32 xl:px-40">
          <h1 className="text-xl font-semibold font-[Oxanium] md:text-2xl lg:text-3xl xl:text-4xl">
            My Projects
          </h1>
          <h1 className="mt-8 xl:mt-16 text-3xl text-center font-bold font-[Oxanium]">
            No Projects
          </h1>
          {/* <h1 className="mt-8 xl:mt-16 text-3xl text-center font-bold font-[Oxanium] sm:text-4xl md:text-6xl lg:text-7xl xl:font-semibold  xl:text-8xl">
            Check out my latest work{" "}
          </h1>
          <h2 className="mx-auto text-center md:text-3xl w-full lg:w-[90%] lg:text-2xl text-[#6d6d6d] ">
            I{`'`}ve worked on a variety of projects, from simple websites to
            complex web applications. Here are a few of my favorites.
          </h2>
          <div className="mt-5 lg:mt-8 flex flex-col lg:flex-row justify-around gap-4 md:gap-10 ">
            {/* Project Cards */}

          {/* {projects.map((link) => (
              <div
                key={link.id}
                className="w-full h-fit border-2 rounded-lg flex flex-col gap-3 p-2 dark:border-[#6d6d6d]
            "
              >
                <div
                  className=" w-full rounded-lg aspect-video
              "
                >
                  <video
                    className=" w-full h-full border-none rounded-lg"
                    autoPlay
                    loop
                  >
                    <source src={link.video} type="video/mp4" />
                  </video>
                </div>
                <div className="">
                  <h3 className="text-xl font-semibold font-[Oxanium] ">
                    {link.title}
                  </h3>
                  <p className=" mb-2 text-xs font-[Oxanium] font-semibold text-[#6d6d6d] dark:text-[#dad7d7]">
                    {link.date}
                  </p>
                  <p className=" text-xs font-[Oxanium] text-[#6d6d6d] dark:text-[#dad7d7] ">
                    {link.discription}
                  </p>
                </div>
                <div className=" flex flex-wrap gap-2">
                  {link.tools.map((link, ind) => (
                    <span key={ind} className="p-1 text-xs rounded-md font-[Oxanium] font-semibold bg-[#f4f4f4] dark:bg-[#2d2d2d]  dark:text-[#dad7d7]">{link}</span>
                  ))}
                </div>
                <div className="button flex gap-4 md:gap-10 ml-4 my-2">
                  <CodeBtn link={link.gitlink} />
                  <WebBtn link={link.livelink} />
                </div>

              </div>
            ))}
          </div>
            <SeeMoreBtn /> */}
        </div>
      </section>
    </>
  );
};
