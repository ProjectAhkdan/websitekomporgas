"use client";
import React from "react";
import {
  cardItems,
  komporGasTanamMasalah,
  alasanKomporGasTanam,
  masalahUmum,
} from "../../data/data";
import { WorldMap } from "@/components/World";
import Link from "next/link";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import Image from "next/image";
import { whatsappConfig } from "../../data/data";

const Keahliaan = () => {
    const {phoneNumber, message} = whatsappConfig;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="w-full grid grid-row-2 ">
      <div className=" p-10 md:p-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-blue-600">~ Layanan Kami ~</h1>
          <p className="text-lg font-semibold ">
            Jasa Service Kompor Gas Panggilan Berbagai Merk
          </p>
        </div>

        <div className="pt-10">
          <h1>
            Berikut merupakan berbagai merk kompor gas & oven yang sering kami
            perbaiki. Hubungi kami untuk kebutuhan service merk lain
          </h1>
          <div className="w-full pt-5 md:pt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {cardItems.map((card, index) => (
              <div
                key={index}
                className="card border border-black hover:shadow-md hover:shadow-black/50"
              >
                <div className="card-body">
                  <h2 className="card-title">{card.title}</h2>
                  <p className="card-text">{card.description}</p>
                  <Link href={card.link} className="btn btn-primary">
                    Lihat Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <WorldMap />
        </div>
      </div>

      <div className="grid grid-row-2 mt-10 bg-base-200 p-10 md:p-20">
        <div>
          <h2 className="text-2xl font-bold text-blue-600">— Keahlian Kami</h2>
          <h3 className="text-lg font-medium ">
            Service | Perawatan | Perbaikan | Bongkar Pasang
          </h3>
        </div>
        <div>
          <h4 className="text-md max-w-4xl">
            Setiap barang tentu akan berkurang kinerjanya seiring dengan jumlah
            waktu barang digunakan. Konsultasikan dan panggil kami segera untuk
            setiap service kompor gas tanam dan oven Anda.
          </h4>
          <p className="mt-4 font-semibold">
            Ciri-ciri kompor tanam kamu perlu diperbaiki:
          </p>
          <div className="mt-2">
            <ul className="list-disc pl-6">
              {komporGasTanamMasalah.map((item, index) => (
                <li key={index} className="text-md">
                  {item.isi}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="grid grid-row-2 p-10 md:p-20">
        <div className="text-end">
          <h2 className="text-2xl font-bold text-blue-600">
            — Mengapa Memilih Kami
          </h2>
          <h3 className="text-lg font-medium ">Hemat, Bergaransi, Efektif</h3>
          <h4 className="text-md">
            Keamanan dapur anda merupakan prioritas utama kami
          </h4>
        </div>
        <div className=" w-full flex justify-center pt-10">
          <div className=" grid grid-cols-2 md:grid-cols-4 gap-10">
            {alasanKomporGasTanam.map((item, index) => (
              <div
                key={index}
                className=" items-center justify-center flex flex-col"
              >
                <div className="w-full justify-center">
                  {item.Image}
                  <h4 className="text-md">{item.titles}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hero pt-16">
          <div className="hero-content flex-col lg:flex-row">
            <Image
              alt="logo"
              src="/logo-fav.png"
              className="h-full rounded-lg shadow-2xl"
              width={100}
              height={100}
            />
            <div>
              <h2 className="text-md">
                Reparasi oleh kami langsung pada inti permasalahannya. Dengan
                para mekanik kami yang berpengalaman puluhan tahun di bidang
                service kompor tanam, kami mampu menyelesaikan masalah pada
                kompor anda sampai ke akarnya dengan garansi dan harga jasa
                servis kompor tanam yang kompetitif. Bagi kami, aset terbesar
                kami adalah pelanggan. Kami akan memperlakukan setiap pelanggan
                seolah-olah mereka adalah satu-satunya pelanggan kami.
              </h2>
              <p className=" pt-6 ">Masalah umum pada kompor gas:</p>
              <div className="p-2">
                <ul className="list-disc pl-16">
                  {masalahUmum.map((item, index) => (
                    <li key={index} className="text-md">
                      {item.isi}
                    </li>
                  ))}
                </ul>
              </div>
              <div className=" pt-10">
                <Link
                  className="flex items-center gap-2 btn btn-primary w-fit"
                  href={url}
                >
                   <span>
                      <IconBrandWhatsapp />
                    </span>
                    Free Konsultasi Via Whatsapp
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keahliaan;
