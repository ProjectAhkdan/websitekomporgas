import { JSX } from "react";
import Image from "next/image";

interface Alasan {
  titles: string;
  Image: JSX.Element;
}

interface CardProps {
  title: string;
  description: string;
  link: string;
}

interface MasalahKompor {
  isi: string;
}

interface cards {
  title: string;
  src: string;
}

export const cards: cards[] = [
  {
    title: "Perbaikan1",
    src: "https://spesialiskomporgas.id/wp-content/uploads/2022/09/perbaikan-1.jpeg",
  },
  {
    title: "Perbaikan2",
    src: "https://spesialiskomporgas.id/wp-content/uploads/2022/09/perbaikan-2.jpeg",
  },
  {
    title: "Perbaikan3",
    src: "https://spesialiskomporgas.id/wp-content/uploads/2022/09/perbaikan-3.jpeg",
  },
  {
    title: "Perbaikan4",
    src: "https://spesialiskomporgas.id/wp-content/uploads/2022/09/perbaikan-5.jpeg",
  },
  {
    title: "Perbaikan5",
    src: "https://spesialiskomporgas.id/wp-content/uploads/2022/09/perbaikan-6.jpeg",
  },
  {
    title: "Perbaikan6",
    src: "https://spesialiskomporgas.id/wp-content/uploads/2022/09/perbaikan-7.jpeg",
  },
  {
    title: "Perbaikan7",
    src: "https://spesialiskomporgas.id/wp-content/uploads/2022/09/perbaikan-8.jpeg",
  },
  {
    title: "Perbaikan8",
    src: "https://spesialiskomporgas.id/wp-content/uploads/2022/09/perbaikan-9.jpeg",
  },
  {
    title: "Perbaikan9",
    src: "https://spesialiskomporgas.id/wp-content/uploads/2022/09/perbaikan-10.jpeg",
  },
  {
    title: "Perbaikan10",
    src: "https://spesialiskomporgas.id/wp-content/uploads/2022/09/perbaikan-11.jpeg",
  },
  {
    title: "Perbaikan11",
    src: "https://spesialiskomporgas.id/wp-content/uploads/2022/09/perbaikan-12.jpeg",
  },
  {
    title: "Perbaikan12",
    src: "https://spesialiskomporgas.id/wp-content/uploads/2022/09/perbaikan-13.jpeg",
  },
  {
    title: "Perbaikan13",
    src: "https://spesialiskomporgas.id/wp-content/uploads/2022/09/perbaikan-14.jpeg",
  },
  {
    title: "Perbaikan14",
    src: "https://spesialiskomporgas.id/wp-content/uploads/2022/09/perbaikan-15.jpeg",
  },
  {
    title: "Perbaikan15",
    src: "https://spesialiskomporgas.id/wp-content/uploads/2022/09/service-kompor-gas-panggilan.jpg",
  },
  {
    title: "Perbaikan16",
    src: "https://spesialiskomporgas.id/wp-content/uploads/2022/09/perbaikan-4.jpeg",
  },
  {
    title: "Perbaikan17",
    src: "https://spesialiskomporgas.id/wp-content/uploads/2022/09/perbaikan-16-1.jpeg",
  },
  {
    title: "Perbaikan18",
    src: "https://spesialiskomporgas.id/wp-content/uploads/2022/09/perbaikan-16.jpeg",
  },
];

export const masalahUmum: MasalahKompor[] = [
    { isi: "Kebocoran pada pipa/selang gas" },
    { isi: "Kompor gas meletup saat dinyalakan" },
    { isi: "Gas tidak naik ke kompor" },
    { isi: "Pemantik pada kompor gas tidak nyala" },
    { isi: "Ada aliran listrik pada body kompor" },
    { isi: "Bau gas berlebih pada kompor gas" },
    { isi: "Api kompor tidak stabil" },
    { isi: "Tegangan pemantik kompor gas tidak cukup" },
    { isi: "Performa kompor gas menurun setelah pemakaian lama" },
    { isi: "Panel kontrol kompor gas rusak" },
  ];
  
export const komporGasTanamMasalah: MasalahKompor[] = [
  { isi: "Api tidak menyebar rata" },
  { isi: "Api keluar tidak sempurna" },
  { isi: "Tercium bau gas mencurigakan" },
  { isi: "Panel kontrol / tuas pemantik tidak berfungsi" },
  { isi: "Kompor gas tanam tidak menyala" },
];

export const cardItems: CardProps[] = [
  {
    title: "Service Kompor Tanam",
    description:
      "Kami menerima perbaikan kompor gas tanam berbagai merk, tipe dan berbagai kerusakan",
    link: "/",
  },
  {
    title: "Service Freestanding",
    description:
      "Kami juga memperbaiki kompor oven gas (freestanding) berbagai merk dan kerusakannya",
    link: "/",
  },
  {
    title: "Service Water Heater",
    description:
      "Kami menerima berbagai merk dan kerusakan water heater. Hubungi kami sekarang",
    link: "/",
  },
];

export const alasanKomporGasTanam: Alasan[] = [
  {
    titles: "Bergaransi",
    Image: (
      <Image
        src="https://spesialiskomporgas.id/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-15-at-11.40.53-150x118.jpeg"
        width={150}
        height={150}
        alt="alasan-kompor-tanam-1"
        loading="lazy"
      />
    ),
  },
  {
    titles: "Teknik Berpengalaman",
    Image: (
      <Image
        src="https://spesialiskomporgas.id/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-15-at-10.28.32-150x129.jpeg"
        width={150}
        height={150}
        alt="alasan-kompor-tanam-2"
        loading="lazy"
      />
    ),
  },
  {
    titles: "Biaya Service Terbaik",
    Image: (
      <Image
        src="https://spesialiskomporgas.id/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-15-at-10.29.34.jpeg"
        width={150}
        height={150}
        alt="alasan-kompor-tanam-3"
        loading="lazy"
      />
    ),
  },
  {
    titles: "Pengerjaan Cepat",
    Image: (
      <Image
        src="https://spesialiskomporgas.id/wp-content/uploads/2022/12/WhatsApp-Image-2022-12-15-at-10.30.03.jpeg"
        width={150}
        height={150}
        alt="alasan-kompor-tanam-4"
        loading="lazy"
      />
    ),
  }
];
