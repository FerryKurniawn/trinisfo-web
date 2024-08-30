import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Students from "./components/Students";
import KelasA from "./components/KelasA";
import KelasB from "./components/KelasB";

export const Homepage = () => {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
    </>
  );
};

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <div>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/students" element={<Students />} />
              <Route path="/students/kelas-b" element={<KelasB />} />
              <Route path="/students/kelas-a" element={<KelasA />} />
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
