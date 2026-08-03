import Image from "next/image";

export default function Hero() {
  return (
    <section id="beranda" className="hero">
      <div className="hero-container">

        <div className="hero-content">
          <p className="hero-label">
            KAMPUNG SENI URANG SUNDA
          </p>

          <h1>
            Saung Kasunda
            <span>Berkarya Rancaekek</span>
          </h1>

          <p className="hero-description">
            Wadah pendidikan, pengembangan, dan pelestarian
            seni budaya Sunda di Rancaekek.
          </p>

          <div className="hero-actions">
            <a href="#profil" className="btn-primary">
              Tentang Kami
            </a>

            <a href="#kegiatan" className="btn-link">
              Jelajahi Kegiatan →
            </a>
          </div>
        </div>

        <div className="hero-image">
          <Image
            src="/images/hero.jpeg"
            alt="Saung Kasunda Berkarya Rancaekek"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 45vw"
            className="hero-image-photo"
          />
        </div>

      </div>
    </section>
  );
}