const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10">
      <nav>
        <h6 className="footer-title text-4xl">Jaya Mandiri Teknik</h6>
        <p className="max-w-lg">
          Jamantek merupakan UMKM service kompor panggilan terbaik. Berdiri sejak 2010 dan telah memiliki banyak teknisi tersebar ke seluruh Jabodetabek. Kini anda bisa memanggil teknisi service kompor hanya dirumah aja, hubungi kami sekarang.
        </p>
      </nav>

      <nav>
        <h6 className="footer-title">Layanan Kami</h6>
        <ul>
          <li>Jasa Service Kompor</li>
          <li>Jasa Service Oven</li>
          <li>Jasa Service Water Heater</li>
        </ul>
      </nav>

      <nav>
        <h6 className="footer-title">Kontak Kami</h6>
        <ul>
          <li>
            <address>Jl. Raya Pasar Minggu No. 9B Pejaten Jakarta Selatan</address>
          </li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=6281214446687&text=Halo%20Jaya%20Mandiri%20Teknik%2C%20saya%20mau%20service&l=id"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hubungi Jaya Mandiri Teknik melalui WhatsApp"
            >
              <u>6281214446687</u>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
