import Topbar from "./components/topbar/Topbar";
import About from "./components/about/About"
import Projects from "./components/projects/Projects"
import Contact from "./components/contact/Contact"
import "./app.scss"
import { Component, useState } from "react";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import ValidationForm from "./components/validationForm/ValidationForm";

function App() {
const [menuOpen,setMenuOpen] = useState(false)
  return (
    
    <div className="app">
      <ValidationForm />
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
