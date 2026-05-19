/** Data galeri kegiatan lengkap dengan gambar dan judulnya masing-masing */
const GALLERY_ITEMS = [
  {
    label: "Workshop dokumentasi multimedia",
    imgSrc: "/gallery-01.jpg", // Silakan ganti sesuai nama file di folder public
  },
  {
    label: "Rapat divisi akademik rutin",
    imgSrc: "/gallery-02.jpg",
  },
  {
    label: "Diskusi penyusunan program kerja bersama fakultas",
    imgSrc: "/gallery-03.jpg",
  },
  {
    label: "Kuliah tamu industri digital bersama asosiasi kampus Purwokerto",
    imgSrc: "/gallery-04.jpg",
  },
  {
    label: "Sosialisasi rekrutmen divisi komunikasi kemahasiswaan",
    imgSrc: "/gallery-05.jpg",
  },
  {
    label: "Arsip kolektif kegiatan PSDM dan dokumentasi foto tahunan",
    imgSrc: "/gallery-06.jpg",
  },
];

export default function ActivityGallery() {
  return (
    <section aria-labelledby="galeri-heading" className="pt-12 pb-section lg:pt-16">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <h2 id="galeri-heading" className="text-xl font-bold uppercase tracking-tight text-on-dark lg:text-[32px] lg:leading-[1.15]">
          Galeri kegiatan
        </h2>

        {/* Diubah dari <p> ke <div> untuk menghindari paksaan text-justify dari globals.css */}
        <div className="mt-4 max-w-2xl text-base font-light text-body block">Dokumentasi resmi aktivitas kemahasiswaan HMBD Telkom University Purwokerto.</div>

        <ul className="mt-12 grid gap-px border border-hairline bg-hairline sm:grid-cols-2 xl:grid-cols-3">
          {/* Melakukan perulangan menggunakan GALLERY_ITEMS yang baru */}
          {GALLERY_ITEMS.map((item, idx) => (
            <li key={`g-${idx}`} className="bg-surface-soft">
              {/* MERUBAH ASPECT RATIO: Dari aspect-square menjadi aspect-[4/5] tegas ala Instagram portofolio */}
              <div className="group relative overflow-hidden border border-hairline bg-black aspect-[4/5]">
                <img
                  src={item.imgSrc} // <--- SEKARANG GAMBAR DIBACA DINAMIS SESUAI ITEMNYA
                  alt={`Dokumentasi kegiatan: ${item.label}`}
                  width={800}
                  height={1000} // Disesuaikan tingginya agar ideal dengan rasio potret 4:5
                  className="h-full w-full scale-100 object-cover brightness-[0.94] contrast-[1.02] transition duration-200 ease-out group-hover:scale-[1.04] group-hover:brightness-105"
                />
                <span className="pointer-events-none absolute inset-0 opacity-0 shadow-[inset_0_0_0_1px_rgba(226,39,24,0.25)] transition duration-200 group-hover:opacity-100" aria-hidden />
                <span
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-linear-to-r from-m-blue-light via-m-blue-dark to-m-red opacity-0 translate-y-[2px] transition duration-200 group-hover:translate-y-0 group-hover:opacity-100"
                  aria-hidden
                />
              </div>

              <div className="border-t border-hairline px-5 py-4">
                <span className="block text-[11px] font-bold uppercase tracking-[1.5px] text-muted">Arsip dokumentasi #{String(idx + 1).padStart(2, "0")}</span>
                <span className="mt-2 block text-sm font-light leading-snug text-body-strong">
                  {item.label} {/* <--- TEKS JUDUL DINAMIS */}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
