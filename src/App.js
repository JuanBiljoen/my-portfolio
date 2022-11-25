import './App.css';
import { Banner } from './components/Banner';
import NavBar from './components/Navbar';
import { Skills } from './components/Skills';
import { Projects } from "./components/Projects"
import { About } from './components/About';
import { Contact } from './components/Contact';


// import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <About />
      <Contact />
    </div>
  );
}

export default App;
