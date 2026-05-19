import Image from "next/image";

// Data Fungsionaris Terstruktur Berdasarkan Divisi
const CABINET_DATA = [
  {
    divisionName: "Inti Kabinet",
    description: "Nakhoda utama pergerakan arah strategis dan pemegang mandat tertinggi organisasi.",
    members: [
      { name: "Nama Ketua Himpunan", role: "Ketua Himpunan", image: "/50.jpg" },
      { name: "Nama Wakil Ketua", role: "Wakil Ketua Himpunan", image: "/49.jpg" },
      { name: "Nama Sekretaris 1", role: "Sekretaris Utama", image: "/kabinet/sekretaris.jpg" },
      { name: "Nama Bendahara 1", role: "Bendahara Utama", image: "/kabinet/bendahara.jpg" },
    ],
  },
  {
    divisionName: "Divisi Pengembangan Sumber Daya Mahasiswa (PSDM)",
    description: "Kaderisasi, pengembangan karakter, serta pengawalan potensi internal fungsionaris.",
    members: [
      { name: "Fungsionaris PSDM 1", role: "Kepala Divisi", image: "/kabinet/psdm-1.jpg" },
      { name: "Fungsionaris PSDM 2", role: "Staf Ahli", image: "/kabinet/psdm-2.jpg" },
      { name: "Fungsionaris PSDM 3", role: "Staf", image: "/kabinet/psdm-3.jpg" },
      { name: "Fungsionaris PSDM 4", role: "Staf", image: "/kabinet/psdm-4.jpg" },
    ],
  },
  {
    divisionName: "Divisi Hubungan Luar (Hublu)",
    description: "Jembatan komunikasi, kolaborasi instansi, dan perluasan relasi eksternal himpunan.",
    members: [
      { name: "Fungsionaris Hublu 1", role: "Kepala Divisi", image: "/kabinet/hublu-1.jpg" },
      { name: "Fungsionaris Hublu 2", role: "Staf", image: "/kabinet/hublu-2.jpg" },
      { name: "Fungsionaris Hublu 3", role: "Staf", image: "/kabinet/hublu-3.jpg" },
      { name: "Fungsionaris Hublu 3", role: "Staf", image: "/kabinet/hublu-3.jpg" },
    ],
  },
  // Silakan tambah array divisi lain (seperti Medkominfo, R&D, dll.) di sini...
];

export default function KabinetPage() {
  return (
    <main className="min-h-screen bg-canvas py-20">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Header Halaman */}
        <div className="border-b border-hairline pb-10">
          <span className="text-[11px] font-bold uppercase tracking-[2px] text-m-blue-dark">Struktur Organisasi</span>
          <h1 className="mt-2 text-3xl font-extrabold uppercase tracking-tight text-on-dark lg:text-5xl">Kabinet Aradhana</h1>
          <div className="mt-4 max-w-2xl text-base font-light leading-relaxed text-body block">
            Barisan fungsionaris Himpunan Mahasiswa Bisnis Digital Telkom University Purwokerto periode 2026 yang bergerak membawa semangat perubahan dan inovasi digital.
          </div>
        </div>

        {/* Perulangan Berdasarkan Divisi */}
        <div className="mt-16 flex flex-col gap-20">
          {CABINET_DATA.map((division, divIndex) => (
            <section key={divIndex} aria-label={`Bagian ${division.divisionName}`}>
              {/* Judul & Deskripsi Divisi */}
              <div className="mb-8 max-w-2xl">
                <h2 className="text-xl font-bold uppercase tracking-wide text-on-dark border-l-4 border-m-red pl-3">{division.divisionName}</h2>
                <div className="mt-2 text-sm font-light text-muted block">{division.description}</div>
              </div>

              {/* Grid Anggota / Galeri Foto */}
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
                {division.members.map((member, memIndex) => (
                  <div key={memIndex} className="group border border-hairline bg-surface-soft p-3 transition duration-200 ease-out hover:border-m-blue-dark/35 hover:shadow-[0_0_24px_rgba(28,105,212,0.1)]">
                    {/* Wadah Foto dengan Aspek Rasio Portrait Tegak */}
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-canvas border border-hairline">
                      <Image
                        src={member.image}
                        alt={`Foto ${member.name}`}
                        fill
                        sizes="(max-w-768px) 50vw, (max-w-1024px) 33vw, 25vw"
                        className="object-cover transition duration-500 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
                      />
                    </div>

                    {/* Informasi Anggota */}
                    <div className="mt-4">
                      <h3 className="truncate text-sm font-bold uppercase tracking-wide text-on-dark">{member.name}</h3>
                      <p className="mt-1 truncate text-xs font-light tracking-wider text-muted">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
