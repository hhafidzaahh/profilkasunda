import Image from "next/image";

export default function About() {
  return (
    <section id="profil" className="about">
      <div className="about-container">

        <div className="about-image">
          <Image
            src="/images/logo.jpg"
            alt="Saung Kasunda Berkarya Rancaekek"
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="about-image-photo"
          />
        </div>

        <div className="about-content">
          <p className="section-label">
            TENTANG KAMI
          </p>

          <h2>
            Saung Kasunda
            <span>Berkarya Rancaekek.</span>
          </h2>

          <p>
            KASUNDA “ Kampung Seni Urang Sunda “ adalah sebuah sanggar seni yang bergerak di dalam bidang pendidikan dan pengembangan budaya sunda. Kasunda sendiri berdiri sejak 22 November 2012 dan berlokasi di Jl. Walini Kp. Babakan Asta Rt.09/11 Desa Rancaekek Wetan Kecamatan Rancaekek Kabupaten Bandung Provinsi Jawa Barat.
          </p>
          <p>
            Sejak 2013 Kasunda sangat aktif dalam pengembangan dan pendidikan seni budaya Sunda dengan diadakannya kelas-kelas seni budaya Sunda, mulai dari tari traditional, seni musik gamelan, karinding, teater dan seni seni yang lainnya. Semua kegiatan ini tentunya sebagai tujuan dari pengenalan dan mempertahankan seni budaya sunda yang lambat laun mulai tergerus oleh zaman, oleh karena itu diperlukan peran aktif semua unsur termasuk kami sebagai sebuah sanggar seni untuk mempertahankan identitas dan entitas itu. Agar bangsa Indonesia tetap mempunyai jati diri yang telah turuntemurun diwariskan lewat berbagai budaya, tradisi dari setiap daerah termasuk tradisi dan budaya Sunda.
          </p>
          <p>
            Di tengah perkembangan zaman yang sangat maju dan begitu banyaknya kebudayaan asing yang masuk diperlukan langkah-langkah yang nyata dalam mempertahakan eksistensi Seni Tradisi Sunda itu sendiri, salah satunya memperkenalkannya dalam sebuah pertunjukan maupun event kebudayaan.
          </p>

          <a href="#founder" className="about-link">
            Mengenal Founder →
          </a>
        </div>

      </div>
    </section>
  );
}
