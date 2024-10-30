// import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./Components/Navbar/NavBar.jsx";
import { Home } from "./Pages/Home.jsx";
import { About } from "./Pages/About.jsx";
import { Experience } from "./Pages/Experience.jsx";
import { Skills } from "./Pages/Skills.jsx";
import { Projects } from "./Pages/Projects.jsx";
import { Contact } from "./Pages/Contact.jsx";
import { Footer } from "./Components/Footer/Footer.jsx";

function Index() {
  return (
    <>
      {/* <BrowserRouter> */}
        <div className=" relative z-0 bg-secondary dark:bg-[#212121] dark:text-[#e5eff8]">
          <div className="bg-secondary dark:bg-[#212121] dark:text-[#e5eff8]">
            <NavBar />
            <Home />
          </div>
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default Index;
