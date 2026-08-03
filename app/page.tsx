import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Founder from "@/components/Founder";
import VisionMission from "@/components/VisionMission";
import Activities from "@/components/Activities";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Founder />
        <VisionMission />
        <Activities />
        <Gallery />
        <Contact />
      </main>

      <Footer />
    </>
  );
}