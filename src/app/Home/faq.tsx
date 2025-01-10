"use client";

import Accordion from "@/components/accordion";
import Testimonials from "@/components/testimoni";

const Faq = () => {

  return (
    <div className="w-full p-10 grid grid-row-2 ">
      <div className="P-10 md:p-20">
        <h2 className="text-2xl font-bold text-blue-600">— FAQ</h2>
        <h3 className="text-lg font-medium ">Seputar Jasa Service Kami</h3>
        <h4 className="text-md">Pertanyaan yang sering ditayakan :</h4>
        <div className=" pt-10">
          <Accordion />
        </div>
      </div>
      <div className="pt-10 md:px-20">
        <h2 className="text-2xl font-bold text-blue-600">— Testimonial</h2>
        <h4 className="text-md">
          Kepuasan tertinggi kami adalah ketika dapat memberikan dan melihat
          klien-klien kami mendapatkan hasil terbaik dari jasa service kompor
          gas tanam & oven Jamantek
        </h4>
        <div>
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default Faq;
