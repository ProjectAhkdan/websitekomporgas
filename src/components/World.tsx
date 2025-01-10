"use client";
import { Map } from "./ui/map";
import { motion } from "motion/react";

export function WorldMap() {
  return (
    <div className=" pt-20 bg-white w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl text-black">
          Jasa{" "}
          <span className="text-blue-600">
            {"Spesialis Kompor Gas".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Layanan kami sudah menyebar luas untuk memenuhi kebutuhan perbaikan
          kompor gas di berbagai lokasi. Kami hadir untuk memberikan solusi
          cepat dan profesional, baik untuk rumah tangga maupun bisnis Anda.
        </p>
      </div>
      <Map
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, 
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, 
          },
          {
            start: { lat: 64.2008, lng: -149.4937 },
            end: { lat: -15.7975, lng: -47.8919 }, 
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, 
            end: { lat: 38.7223, lng: -9.1393 }, 
          },
          {
            start: { lat: 51.5074, lng: -0.1278 },
            end: { lat: 28.6139, lng: 77.209 }, 
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, 
            end: { lat: 43.1332, lng: 131.9113 }, 
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, 
            end: { lat: -1.2921, lng: 36.8219 }, 
          },
        ]}
      />
    </div>
  );
}
