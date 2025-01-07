// components/WhatsAppChat.tsx

import React from 'react';
import { IconBrandWhatsapp } from '@tabler/icons-react';

const WhatsAppChat: React.FC = () => {
  const phoneNumber = '6281234567890'; // Ganti dengan nomor WhatsApp yang ingin dihubungi
  const message = 'Halo, saya membutuhkan bantuan!'; // Pesan default yang ingin ditambahkan

  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 p-4 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors"
      >
        <IconBrandWhatsapp size={30} color="white" />
      </a>
    </div>
  );
};

export default WhatsAppChat;
