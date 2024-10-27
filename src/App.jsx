import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./Components/Navbar/NavBar";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Experience } from "./Pages/Experience"
import {Skills} from "./Pages/Skills"
import { Projects } from "./Pages/Projects";
import { Contact } from "./Pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
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
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
