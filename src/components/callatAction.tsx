
import { useCallback } from "react";
import Link from "next/link";
import { BackgroundGradientAnimation } from "./ui/backgroundGradient";
import { whatsappConfig } from "@/data/data";

const CallatAction = () => {
  const { phoneNumber, message } = whatsappConfig;


  const generateWhatsappUrl = useCallback(() => {
    return `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  }, [phoneNumber, message]);

  return (
    <div className="relative overflow-hidden">
      <BackgroundGradientAnimation>
        <div className="absolute inset-0 grid items-center justify-center text-black font-bold px-4 py-6 text-xl text-center z-40">
          <p className="drop-shadow-2xl mb-6">
            Butuh Service Kompor Gas / Oven Sekarang? Hubungi Kami
          </p>
          <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 gap-4">
            {/* Telepon Button */}
            <Link className="btn btn-default w-full sm:w-full md:w-full rounded-lg shadow-md" href="tel:081214446687">
              Telepon
            </Link>

            {/* WhatsApp Button */}
            <Link
              className="btn btn-primary w-full sm:w-full md:w-full rounded-lg shadow-md"
              href={generateWhatsappUrl()}
            >
              Whatsapp
            </Link>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
};

export default CallatAction;
