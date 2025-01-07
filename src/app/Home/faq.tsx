"use client";

import { useState } from "react";
import { FocusCards } from "@/components/ui/cardGallery";
import { cards } from "../../data/data";
import Accordion from "@/components/accordion";
import { testimonials } from "../../data/data";
import Testimonials from "@/components/testimoni";

const Faq = () => {
  const [showAll, setShowAll] = useState(false);

  const cardsToShow = showAll ? cards : cards.slice(0, 3);

  const handleToggle = () => {
    setShowAll((prevState) => !prevState);
  };

  return (
    <div className="w-full p-10 grid grid-row-3 ">
      <div className="p-10 md:p-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600">~ Project Kami ~</h1>
          <p className="text-lg font-semibold">Gallery Project Kami</p>
        </div>
        <div className="pt-5">
          <FocusCards cards={cardsToShow} />
        </div>
        <div className="flex justify-center w-full pt-9">
          <button
            onClick={handleToggle}
            className="btn btn-primary hover:cursor-pointer"
          >
            {showAll ? "See Less Gallery" : "See All Gallery"}
          </button>
        </div>
      </div>
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
