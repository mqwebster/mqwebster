import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Resume } from "./components/sections/Resume";
import { Portfolio } from "./components/sections/Portfolio";
import { Contact } from "./components/sections/Contact";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Home />

      <About />

      <Portfolio />

      <Resume />

      <Contact />
    </main>
  );
}
