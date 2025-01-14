import Accordion from "@/components/accordion";
import Testimonials from "@/components/testimoni";

const Faq = () => {
  return (
    <div className="w-full p-10 space-y-16">
      {/* FAQ Section */}
      <section className="p-10 md:p-20 bg-base-100">
        <h2 className="text-2xl font-bold text-blue-600">— FAQ</h2>
        <h3 className="text-lg font-medium">Seputar Jasa Service Kami</h3>
        <h4 className="text-md mt-2">Pertanyaan yang sering ditanyakan:</h4>
        <div className="pt-8">
          <Accordion />
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="pt-10 md:px-20">
        <h2 className="text-2xl font-bold text-blue-600">— Testimonial</h2>
        <h4 className="text-md mt-2">
          Kepuasan tertinggi kami adalah ketika dapat memberikan dan melihat
          klien-klien kami mendapatkan hasil terbaik dari jasa service kompor
          gas tanam & oven Jamantek.
        </h4>
        <div className="pt-8">
          <Testimonials />
        </div>
      </section>
    </div>
  );
};

export default Faq;
