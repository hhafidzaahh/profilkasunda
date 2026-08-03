import Image from "next/image";

const gallery = [
  {
    image: "/images/galeri-1.jpeg",
    title: "Latihan Teater",
  },
  {
    image: "/images/galeri-2.JPG",
    title: "Event Gamelan Dangiang Karinding",
  },
  {
    image: "/images/galeri-3.JPG",
    title: "Pertunjukan Gamelan Dangiang Karinding",
  },
  {
    image: "/images/galeri-4.jpg",
    title: "Latihan Angklung",
  },
  {
    image: "/images/galeri-5.jpeg",
    title: "Pertunjukan Tari",
  },
  {
    image: "/images/galeri-6.jpeg",
    title: "Rekaman Alat Musik Karinding",
  },
];

export default function Gallery() {
  return (
    <section id="galeri" className="gallery">
      <div className="gallery-container">

        <div className="gallery-heading">
          <p className="section-label">
            GALERI
          </p>

          <h2>
            Merekam setiap
            <span>cerita dan karya.</span>
          </h2>

          <p>
            Dokumentasi perjalanan, kegiatan, dan berbagai
            aktivitas Saung Kasunda Berkarya Rancaekek dalam
            menjaga serta mengembangkan seni dan budaya Sunda.
          </p>
        </div>

        <div className="gallery-grid">
          {gallery.map((item, index) => (
            <div
              className={`gallery-item gallery-item-${index + 1}`}
              key={item.image}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="gallery-image"
              />

              <div className="gallery-overlay">
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}