"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/card-corousel";

interface DummyContentProps {
  paragraphs: string;
  imageUrl?: string;
  imageAlt?: string;
  imageWidth?: number;
  imageHeight?: number;
}

interface CardData {
  category: string;
  title: string;
  src: string;
  content: React.ReactNode;
}

interface AppleCardsCarouselDemoProps {
  title: string;
  cards: CardData[];
}


export function AppleCardsCarouselDemo({
  title,
  cards,
}: AppleCardsCarouselDemoProps) {
  return (
    <div className="w-full h-full">
      <h2 className="text-xl max-w-prose text-neutral-500 font-sans">
        {title}
      </h2>
      <Carousel
        items={cards.map((card, index) => (
          <Card key={card.src} card={card} index={index} />
        ))}
      />
    </div>
  );
}


const DummyContent: React.FC<DummyContentProps> = ({
  paragraphs,
  imageUrl,
  imageAlt = "Image",
  imageWidth = 500,
  imageHeight = 500,
}) => {
  return (
    <div className="bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700 dark:text-neutral-200">{paragraphs}</span>
      </p>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Content image"
          height="500"
          width="500"
          className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
        />
      )}
    </div>
  );
};

export const data = [
  {
    category: "Service Kompor Tanam",
    title: "Kami menerima perbaikan kompor gas tanam berbagai merk, tipe dan berbagai kerusakan",
    src: "https://spesialiskomporgas.id/wp-content/uploads/2022/09/perbaikan-9.jpeg",
    content: (
      <DummyContent
        paragraphs="The first rule of Apple club is that you boast about Apple club."
        imageUrl="/"
      />
    ),
  },
];

// Example usage
// 
