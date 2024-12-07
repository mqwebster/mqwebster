export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <section
        id="portfolio"
        className="w-full md:max-w-screen-xl z-0 px-8 py-16"
      >
        <div className="flex flex-col">
          <div className="about-content w-full dark:bg-black pb-32">
            <h2 className="font-title type-preset-2 mb-10">Travel Journal</h2>
            <p className="font-body type-preset-base max-w-2xl">{`I'm a fresh face with an old soul, and I'm always looking to learn. There's a saying that a wise person learns from his mistakes and a wiser one learns from others' mistakes. However, the wisest among us learn from others' successes. I'm a product of all of the successes of those that have come before me and have prepared me for excellence. My goal is to be a lesson for the wisest members of the generations to follow.`}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
