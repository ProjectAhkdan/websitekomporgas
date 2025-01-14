"use client";

import React, { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import {
  cardItems,
  komporGasTanamMasalah,
  alasanKomporGasTanam,
  masalahUmum,
  whatsappConfig,
} from "../../data/data";

const Keahliaan = () => {
  const { phoneNumber, message } = whatsappConfig;
  const url = useCallback(
    () => `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
    [phoneNumber, message]
  );

  return (
    <div className="w-full grid grid-row-2">
      {/* Section: Layanan Kami */}
      <section className="p-10 md:p-20">
        <div className="text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-blue-600">~ Layanan Kami ~</h1>
          <p className="text-xl font-semibold">
            Jasa Service Kompor Gas Panggilan Berbagai Merk
          </p>
        </div>
        <div className="pt-10">
          <h1>
            Berikut merupakan berbagai merk kompor gas & oven yang sering kami
            perbaiki. Hubungi kami untuk kebutuhan service merk lain.
          </h1>
          <div className="pt-5 md:pt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
            {cardItems.map((card, index) => (
              <div
                key={index}
                className="card border border-black hover:shadow-md hover:shadow-black/50"
              >
                <div className="card-body">
                  <h2 className="card-title">{card.title}</h2>
                  <p>{card.description}</p>
                  <Link href={card.link} className="btn btn-primary">
                    Lihat Detail
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Keahlian Kami */}
      <section className="mt-10 bg-base-200 p-10 md:p-20">
        <div>
          <h2 className="text-2xl font-bold text-blue-600">— Keahlian Kami</h2>
          <h3 className="text-lg font-medium">
            Service | Perawatan | Perbaikan | Bongkar Pasang
          </h3>
        </div>
        <div>
          <h4>
            Setiap barang tentu akan berkurang kinerjanya seiring dengan jumlah
            waktu barang digunakan. Konsultasikan dan panggil kami segera untuk
            setiap service kompor gas tanam dan oven Anda.
          </h4>
          <p className="mt-4 font-semibold">
            Ciri-ciri kompor tanam kamu perlu diperbaiki:
          </p>
          <ul className="list-disc pl-6 mt-2">
            {komporGasTanamMasalah.map((item, index) => (
              <li key={index}>{item.isi}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Section: Mengapa Memilih Kami */}
      <section className="p-10 md:p-20">
        <div className="text-end">
          <h2 className="text-2xl font-bold text-blue-600">
            — Mengapa Memilih Kami
          </h2>
          <h3 className="text-lg font-medium">Hemat, Bergaransi, Efektif</h3>
          <h4>Keamanan dapur anda merupakan prioritas utama kami.</h4>
        </div>
        <div className="flex justify-center pt-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {alasanKomporGasTanam.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div>{item.Image}</div>
                <h4>{item.titles}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Hero */}
      <section className="hero pt-16">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            alt="Logo"
            src="/assets/perbaikan1.jpg"
            className="rounded-lg shadow-2xl"
            width={500}
            height={500}
            priority
          />
          <div>
            <h2>
              Reparasi oleh kami langsung pada inti permasalahannya. Dengan para
              mekanik kami yang berpengalaman puluhan tahun di bidang service
              kompor tanam, kami mampu menyelesaikan masalah pada kompor Anda
              sampai ke akarnya dengan garansi dan harga jasa servis kompetitif.
            </h2>
            <p className="pt-6">Masalah umum pada kompor gas:</p>
            <ul className="list-disc pl-16 mt-2">
              {masalahUmum.map((item, index) => (
                <li key={index}>{item.isi}</li>
              ))}
            </ul>
            <div className="pt-10">
              <Link href={url()} className="flex items-center gap-2 btn btn-primary w-fit">
                <IconBrandWhatsapp />
                Free Konsultasi Via Whatsapp
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Keahliaan;
