import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "./Home/heroHome";
import Keahliaan from "./Home/keahliaan";
import Spesialis from "./Home/spesialis";
import Faq from "./Home/faq";

export default function Home() {
  return(
    <>
    <Hero />
    <Keahliaan />
    <Spesialis />
    <Faq />
    </>
  )
}