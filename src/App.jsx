import "./App.css";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div>
      <section>
        <Navbar />
        <Hero />
      </section>
      <section>Parallax</section>
      <section>Services</section>
      <section>Parallax</section>
      <section>portfolio 1</section>
      <section>portfolio 2</section>
      <section>portfolio 3</section>
      <section>Contact </section>
      {/* <Test /> */}
    </div>
  );
}

export default App;
