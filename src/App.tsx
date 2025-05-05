import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Values from "./components/Values";
import Team from "./components/Team";
import Impact from "./components/Impact";
import Partners from "./components/Partners";
import Blog from "./components/Blog";
import Donate from "./components/Donate";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Values />
        <Team />
        <Impact />
        <Partners />
        <Blog />
        <Donate />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
