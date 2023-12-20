import "./App.css";
import Contact from "./Components/Contact/Contact";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Parallax from "./Components/Parallax/Parallax";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div>
      <section id="home">
        <Navbar />
        <Hero />
      </section>
      <section id="services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="contact">
        <Contact />
      </section>
      {/* <Test /> */}
    </div>
  );
}

export default App;
