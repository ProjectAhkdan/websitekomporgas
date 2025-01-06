import Hero from "@/app/Home/heroHome";
import Spesialis from "./Home/spesialis";
import Keahliaan from "./Home/keahliaan";
import Faq from "./Home/faq";

export default function Home() {
  return (
    <div>
      <Hero />
      <Spesialis/>
      <Keahliaan />
      <Faq />
    </div>
  );
}
