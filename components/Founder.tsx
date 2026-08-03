import Image from "next/image";

export default function Founder() {
  return (
    <section id="founder" className="founder">
      <div className="founder-container">

        <div className="founder-content">
          <p className="section-label">
            FOUNDER
          </p>

          <h2>
            Asep Hendra Waliyana, S.Ip
          </h2>

          <p className="founder-name">
            Mang Hendra
          </p>

          <p>
            Mang Hendra, atau Asep Hendra Waliyana, merupakan
            sosok yang telah menyelesaikan pendidikan di
            Universitas Jenderal Ahmad Yani (UNJANI) dengan
            lulus dari Fakultas Ilmu Sosial dan Politik,
            jurusan Ilmu Pemerintahan pada tahun 2008.
          </p>

          <p>
            Kepeduliannya terhadap kelestarian budaya
            tradisional membawa pada inisiatif untuk melihat
            dan mengembangkan potensi pemuda-pemudi di
            sekitarnya, terutama dalam konteks seni dan budaya
            yang pada masa itu sangat rentan mengalami
            kemunduran.
          </p>

          <p>
            Dengan motivasi ini, Mang Hendra mendirikan sebuah
            perkumpulan seni dan budaya yang diberi nama
            KASUNDA pada tanggal 22 November.
          </p>

          <p>
            Inisiatif ini bertujuan untuk tidak hanya
            melestarikan, tetapi juga mengembangkan apresiasi
            terhadap seni dan budaya Sunda yang khususnya di
            sekitar wilayah Rancaekek.
          </p>

          <p>
            Melalui KASUNDA, Mang Hendra berharap dapat
            memberdayakan generasi muda untuk memelihara dan
            mengembangkan kekayaan budaya lokal, serta turut
            berkontribusi dalam pembangunan sosial dan
            kebudayaan di daerahnya.
          </p>
        </div>

        <div className="founder-image">
          <Image
            src="/images/founder.jpeg"
            alt="Asep Hendra Waliyana - Founder Kasunda"
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="founder-image-photo"
          />
        </div>

      </div>
    </section>
  );
}