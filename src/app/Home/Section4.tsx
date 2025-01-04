"use client";

import { useState } from "react";
import { FocusCards } from "@/components/ui/cardGallery";
import { cards } from "../../data/data";
import Link from "next/link";

const Section4 = () => {
  const [showAll, setShowAll] = useState(false);

  const cardsToShow = showAll ? cards : cards.slice(0, 3);

  const handleToggle = () => {
    setShowAll((prevState) => !prevState);
  };

  return (
    <div className="w-full grid grid-row-3">
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
        <div>
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium">
                Click to open this one and close others
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Click to open this one and close others
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium">
                Click to open this one and close others
              </div>
              <div className="collapse-content">
                <p>hello</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
