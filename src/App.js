import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Contact from "./components/Contact/contact"

function App() {
  return (
    <div className="App">
     
        <Navbar />
        <Intro />
        <About/>
        <Contact/>
     
    </div>
  );
}

export default App;
