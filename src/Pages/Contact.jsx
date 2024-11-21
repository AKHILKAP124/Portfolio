
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {SocialBtns} from "../Components/Button/Button.jsx"

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", { name, email, message });
    toast.success("Message sent successfully!");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="">
      <div className=" px-6 sm:px-16 md:px-28 lg:px-32 xl:px-40">
        <h1 className="text-xl font-semibold font-[Oxanium] md:text-2xl lg:text-3xl xl:text-4xl">
          Contact
        </h1>
      </div>
      <div className="respon-layout lg:mt-8">
        <div className="min-h-fit min-w-full mb-20 text-sm py-2 px-4 sm:px-6 lg:px-8 dark:bg-[#212121] lg:flex flex-row-reverse justify-between lg:mb-24">
          <div className="w-full py-2 px-6 flex flex-col justify-center">
            <div className=" flex flex-col items-center">
              <h1 className=" text-3xl font-bold font-[Oxanium] md:text-4xl lg:text-5xl ">
                Get in Touch
              </h1>
              <p className=" w-full md:w-[70%] lg:w-[90%] md:text-lg lg:text-xl text-center  text-[#6d6d6d]">
                Want to chat? Just shoot me a dm with a{" "}
                <Link
                  to="https://github.com/AKHILKAP124"
                  className="text-blue-500"
                >
                  direct question on Linkdin
                </Link>{" "}
                and I{`'`}ll respond whenever I can. I will ignore all
                soliciting.
              </p>
            </div>
            <div className="">
              <SocialBtns />
            </div>
          </div>
          <div className="w-full h-fit bg-white dark:bg-[#212121]  rounded-lg shadow-xl overflow-hidden md:max-w-2xl hidden lg:block">
            <div className="md:flex">
              <div className="p-8 w-full">
                {/* <h2 className="text-2xl font-bold  mb-4">Contact Me</h2> */}
                <form onSubmit={handleSubmit} className="space-y-6 ">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium "
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full mt-1 px-3 py-2 border rounded-md bg-transparent dark:border-[#4e4e4e]"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium "
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full mt-1 px-3 py-2 border rounded-md bg-transparent dark:border-[#4e4e4e]"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium "
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="w-full min-h-20 mt-1 px-3 py-2 border rounded-md text-balance bg-transparent dark:border-[#4e4e4e]"
                      rows={4}
                      placeholder="Your message here..."
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full border rounded-md text-sm py-2 text-white hover:bg-[#3b3b3b] bg-[#212121] dark:bg-blue-50 dark:border-gray-500 dark:bg-transparent dark:text-white dark:hover:bg-[#2e2e2e]"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <ToastContainer position="bottom-right" />
        </div>
      </div>
    </section>
  );
}
