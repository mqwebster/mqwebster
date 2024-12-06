import "./Main.jsx";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <section
        id="react-router"
        className="w-full md:max-w-screen-xl z-0 px-8 py-16"
      >
        <div className="flex flex-col">
          <div
            id="main"
            className="w-full flex min-h-[60vh] rounded-lg text-black overflow-hidden"
          ></div>
        </div>
      </section>
    </main>
  );
}
