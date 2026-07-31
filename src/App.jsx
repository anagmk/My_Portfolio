import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";

const App = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 w-full min-h-screen text-white">
      <Navbar />
      <Hero />
      <About />
      <section className="relative min-h-screen "></section>
      <section className="relative min-h-screen "></section>
      <section className="relative min-h-screen "></section>
      <section className="relative min-h-screen "></section>
      <section className="relative min-h-screen "></section>
      <section className="relative min-h-screen "></section>
    </div>
  );
};

export default App;
