import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";

import Hero from "./components/Hero/Hero";

import About from "./components/About/About";
import Initiatives from "./components/Initiatives/Initiatives";
import News from "./components/News/News";
import Gallery from "./components/Gallery/Gallery";

/* NEW VOLUNTEER COMPONENT */

import Volunteer from "./components/Volunteer/Volunteer";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* HOME PAGE */}

        <Route
          path="/"
          element={<Hero />}
        />

        {/* ABOUT PAGE */}

        <Route
          path="/about"
          element={<About />}
        />

        {/* INITIATIVES PAGE */}

        <Route
          path="/initiatives"
          element={<Initiatives />}
        />

        {/* NEWS PAGE */}

        <Route
          path="/news"
          element={<News />}
        />

        {/* GALLERY PAGE */}

        <Route
          path="/gallery"
          element={<Gallery />}
        />

        {/* VOLUNTEER PAGE */}

        <Route
          path="/volunteer"
          element={<Volunteer />}
        />

      </Routes>

    </BrowserRouter>

  );
}

export default App;