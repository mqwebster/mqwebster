import { Home } from "./sections/Home";
import { About } from "./sections/About";
import { Resume } from "./sections/Resume";
import { Portfolio } from "./sections/Portfolio";
import { Contact } from "./sections/Contact";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <Home />

      <About />

      <Portfolio />

      <Resume />

      <Contact />
    </main>
  );
}
