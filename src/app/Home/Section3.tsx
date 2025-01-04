"use client";
import Image from "next/image";
import React from "react";
import { AppleCardsCarouselDemo, data } from "@/components/card-corousel";

const Section3 = () => {
  return (
    <div className="w-full grid grid-row-2 gap-4 p-10">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-red-600">~ Layanan Kami ~</h1>
      <p className="text-lg font-semibold">
        Jasa Service Kompor Gas Panggilan Berbagai Merk
      </p>
    </div>
    <div className="gap-4">
      <AppleCardsCarouselDemo title="Berikut merupakan berbagai merk kompor gas & oven yang sering kami perbaiki. Hubungi kami untuk kebutuhan service merk lain" cards={data} />
    </div>
  </div>
  
  );
};

export default Section3;
