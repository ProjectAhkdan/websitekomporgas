
import {
  IconShieldCheck,
  IconTools,
  IconCurrencyDollar,
  IconClock,
} from "@tabler/icons-react";

// Utility untuk membuat URL WhatsApp
export const createWhatsAppLink = (phoneNumber: string, message: string): string =>
  `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

// Konfigurasi WhatsApp
export const whatsappConfig = {
  phoneNumber: "6281214446687",
  message: "Halo jaya mandiri teknik, saya mau service",
};

// Alamat
export const alamat = {
  address: "Jl. Raya Pasar Minggu No.9B, Pejaten, Jakarta Selatan",
  phone: "6281214446687",
  maplink:
    "https://www.google.com/maps/place/Jl.+Raya+Pasar+Minggu+No.9B,+Pejaten,+Jakarta+Selatan/@-6.1767274,106.8226678,17z/data=!3m1!4b1",
};

// Testimoni
export const testimonials = [
  {
    quote:
      "Saya sangat merekomendasikan JMT untuk service oven dan kompor freestanding restoran besar sekalipun. Profesionalisme sangat terjaga",
    name: "A. Gustavo",
    title: "Pemilik Cafe",
  },
  {
    quote:
      "Jasa service kompor tanam profesional yang banyak diskonnya. Selain murah, hasilnya maksimal, proses cepat dan rapih. Thanks",
    name: "Hany Purnama",
    title: "Pebisnis Online",
  },
  {
    quote:
      "Sudah kesekian kalinya kompor di hotel saya rusak. Diperbaiki masalah utamanya dan ga rusak-rusak lagi. Terima kasih Jamantek",
    name: "Suwarjono",
    title: "GM Hotel",
  },
];

// Kartu Galeri
export const cards = [
  { title: "Perbaikan1", src: "/assets/perbaikan1.jpg" },
  { title: "Perbaikan2", src: "/assets/perbaikan2.jpg" },
  { title: "Perbaikan3", src: "/assets/perbaikan3.jpg" },
  { title: "Perbaikan4", src: "/assets/perbaikan5.jpg" },
];

// Masalah Umum
export const masalahUmum = [
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

// Masalah Kompor Tanam
export const komporGasTanamMasalah = [
  { isi: "Api tidak menyebar rata" },
  { isi: "Api keluar tidak sempurna" },
  { isi: "Tercium bau gas mencurigakan" },
  { isi: "Panel kontrol / tuas pemantik tidak berfungsi" },
  { isi: "Kompor gas tanam tidak menyala" },
];

// Layanan
export const cardItems = [
  {
    title: "Service Kompor Tanam",
    description:
      "Kami menerima perbaikan kompor gas tanam berbagai merk, tipe dan berbagai kerusakan",
    link: createWhatsAppLink(whatsappConfig.phoneNumber, whatsappConfig.message),
  },
  {
    title: "Service Freestanding",
    description:
      "Kami juga memperbaiki kompor oven gas (freestanding) berbagai merk dan kerusakannya",
    link: createWhatsAppLink(whatsappConfig.phoneNumber, whatsappConfig.message),
  },
  {
    title: "Service Water Heater",
    description:
      "Kami menerima berbagai merk dan kerusakan water heater. Hubungi kami sekarang",
    link: createWhatsAppLink(whatsappConfig.phoneNumber, whatsappConfig.message),
  },
];

// Alasan Memilih
export const alasanKomporGasTanam = [
  {
    titles: "Bergaransi",
    Image: <IconShieldCheck size={50} stroke={1.5} color="#2596be" />,
  },
  {
    titles: "Teknik Berpengalaman",
    Image: <IconTools size={50} stroke={1.5} color="#2596be" />,
  },
  {
    titles: "Biaya Service Terbaik",
    Image: <IconCurrencyDollar size={50} stroke={1.5} color="#2596be" />,
  },
  {
    titles: "Pengerjaan Cepat",
    Image: <IconClock size={50} stroke={1.5} color="#2596be" />,
  },
];

// FAQ
export const faqs = [
  {
    question: "Wilayah Mana Saja Jangkauannya?",
    answer:
      "Kami dapat menjangkau wilayah : Jakarta, Bogor, Depok, Tangerang dan Bekasi",
  },
  {
    question: "Kapan Jam Operasionalnya?",
    answer:
      "Kami tersedia mulai Pukul 07.00 s/d Pukul 21.00. Kapanpun Anda membutuhkan Kami siap melayani. Segera hubungi Kami di +62 812-1444-6687",
  },
  {
    question: "Apa Saja Yang Dapat Kami Perbaiki?",
    answer:
      "Kami dapat mengatasi semua masalah Kompor Tanam, Oven, dan Freestanding semua Merk dalam skala Besar maupun skala Rumahan",
  },
  {
    question: "Berapa Biaya / Harga Jasa Service Kami?",
    answer:
      "Biaya atau Harga Jasa Service Kompor Panggilan Kami menyesuaikan kebutuhan Service Anda. Untuk lebih lanjut, konsultasikan dahulu permasalahan Kompor/ Oven/ Freestanding Anda dengan Admin Kami. Jaminan harga termurah.",
  },
  {
    question: "Berapa Lama Waktu Pengerjaannya?",
    answer:
      "Waktu pengerjaan disesuaikan dengan seberapa parah kerusakan Kompor/ Oven/ Freestanding Anda. Kami akan memberikan layanan secepat dan semaksimal mungkin.",
  },
];
