import Image from "next/image";

const activities = [
  {
    image: "/images/kegiatan-1.jpeg",
    title: "Workshop Seni dan Budaya",
    description:
      "Lokakarya ini bertujuan untuk meningkatkan pemahaman siswa terhadap seni dan budaya Sunda melalui berbagai kegiatan seni seperti tari, musik tradisional, seni rupa, dan kerajinan tangan Sunda, dengan tujuan untuk mengembangkan keterampilan praktis dan memungkinkan mereka membuat karya seni sederhana serta menghargai nilai-nilai budaya di dalamnya.",
  },
  {
    image: "/images/kegiatan-2.webp",
    title: "Pelatihan Seni Budaya",
    description:
      "Mengadakan Kelas Inspirasi merupakan acara di mana seniman dan tokoh budaya ternama berbagi pengalaman dan inspirasi dengan para siswa, yang bertujuan untuk memotivasi mereka agar mengeksplorasi minat mereka dalam bidang seni dan budaya serta memberikan wawasan tentang berbagai karier yang potensial.",
  },
  {
    image: "/images/kegiatan-3.jpeg",
    title: "Pameran",
    description:
      "Menyelenggarakan pameran dan pertunjukan seni, memamerkan karya partisan kepada publik, dengan tujuan untuk mempromosikan kreativitas mereka dan mendapatkan apresiasi publik. Tujuannya adalah untuk memberikan siswa pengalaman dalam menyelenggarakan pameran dan pertunjukan, sehingga meningkatkan kepercayaan diri mereka dalam memamerkan karya seni.",
  },
  {
    image: "/images/kegiatann-4.jpg",
    title: "Pertunjukan Seni",
    description:
      "Pelatihan Industri Kreatif merupakan program yang bertujuan untuk membekali partisan dengan keterampilan untuk meraih kesuksesan dalam industri seni dan budaya, termasuk manajemen seni, pemasaran karya seni, dan penggunaan teknologi. Program ini melibatkan praktisi industri sebagai mentor dan bertujuan untuk mendorong pemikiran kreatif dan inovasi. Hasil yang diharapkan adalah siswa mengembangkan karya seni yang bernilai ekonomis dan siap bersaing dalam industri kreatif.",
  },
];

export default function Activities() {
  return (
    <section id="kegiatan" className="activities">
      <div className="activities-container">

        <div className="activities-heading">
          <div>
            <p className="section-label">
              KEGIATAN
            </p>

            <h2>
              Berkarya melalui
              <span>seni dan budaya.</span>
            </h2>
          </div>

          <p className="activities-intro">
            Berbagai kegiatan Saung Kasunda menjadi ruang
            bagi masyarakat dan generasi muda untuk belajar,
            berkarya, dan mengenal seni budaya Sunda.
          </p>
        </div>

        <div className="activities-grid">
          {activities.map((activity, index) => (
            <article className="activity-card" key={activity.title}>
              <div className="activity-image">
                <Image
                  src={activity.image}
                  alt={activity.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="activity-image-photo"
                />
              </div>

              <div className="activity-info">
                <span>0{index + 1}</span>

                <div>
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
