import Footer from "@/src/components/blocks/footer";
import Navbar from "@/src/components/blocks/navbar";
import PageHero from "@/src/components/blocks/PageHero/PageHero";
import Resume from "@/src/components/blocks/Resume/Resume";
import SectionHeader from "@/src/components/blocks/SectionHeader/SectionHeader";

export default function Page() {
  return (
    <>
      <Navbar />

      <main>
        {/* <PageHero /> */}

        <div className="flex flex-col items-center justify-between">
          <SectionHeader id="resume" title="My Resume..." color="Default" />

          <Resume />
        </div>
      </main>

      <Footer />
    </>
  );
}
