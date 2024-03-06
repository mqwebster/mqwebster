import About from "./components/sections/About";
import Resume from "./components/sections/Resume";
import Portfolio from "./components/sections/Portfolio";
import Contact from "./components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <About />

      <Resume />

      <Portfolio />

      <Contact />
    </main>
  );
}
