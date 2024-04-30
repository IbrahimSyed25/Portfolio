import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import PageeNotFound from "./Pages/PageNotFound";
import Skills from "./Pages/Skills";
import Home from "./Pages/Home";
import Experience from "./Pages/Experience";
import Education from "./Pages/Education";
import About from "./Pages/About";
import { useState } from "react";
// import MainSkills from "./Pages/MainSkills";

export default function App() {
  const [clickedLink, setClickedLink] = useState(null);

  return (
    <>
      <BrowserRouter>
        <NavBar clickedLink={clickedLink} setClickedLink={setClickedLink} />
        <Routes>
          <Route
            path="/"
            element={
              <Home clickedLink={clickedLink} setClickedLink={setClickedLink} />
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>

          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/experience" element={<Experience />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/education" element={<Education />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<PageeNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
