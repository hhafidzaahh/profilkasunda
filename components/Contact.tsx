export default function Contact() {
  return (
    <section id="kontak" className="contact">
      <div className="contact-container">

        <div className="contact-heading">
          <p className="section-label">
            HUBUNGI KAMI
          </p>

          <h2>
            Mari mulai
            <span>berkarya bersama.</span>
          </h2>
        </div>

        <div className="contact-content">
          <p>
            Ingin mengikuti kelas pelatihan seni budaya atau
            menyewa tempat dan alat? Hubungi admin Saung Kasunda
            untuk mendapatkan informasi lebih lanjut dan
            melakukan pemesanan.
          </p>

          <a
            href="https://wa.me/628987138945"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button"
          >
            Hubungi Admin →
          </a>

          <div className="contact-number">
            +62 898-7138-945
          </div>
        </div>

      </div>
    </section>
  );
}
