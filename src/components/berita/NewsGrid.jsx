const PLACEHOLDER_NEWS = [
  {
    id: "n1",
    title: "Pelantikan pengurus inti masa bakti baru kabinet organisasi kemahasiswaan",
    date: "2026-05-06",
    category: "Humas Media",
    excerpt:
      "Rangkaian pembukaan struktur baru yang menegaskan komunikasi dua arah antar pengurus dan seluruh warga Bisnis Digital Purwokerto.",
  },
  {
    id: "n2",
    title: "Briefing dokumentasi penyusunan arsip program kerja pengabdian bersama fakultas",
    date: "2026-04-28",
    category: "Kesekretariatan",
    excerpt:
      "Tim kesekretarian merapikan pola administrasi serta standar nomenklatur surat-surat rasmi bagi keberlanjutan dokumentasi masa depan kabinet.",
  },
  {
    id: "n3",
    title: "Studi benchmarking organisasi kemahasiswaan digital lintas wilayah Jawa Tengah",
    date: "2026-04-12",
    category: "Pengabdian",
    excerpt:
      "Diskusi kolektif terkait pola kerja serta best practice komunikasi publik yang relevan bagi percepatan reputasi akademik Bisnis Digital di kampus Purwokerto.",
  },
  {
    id: "n4",
    title: "Kuliah rutin pembekalan divisi akademik atas strategi komunikasi akademik baru",
    date: "2026-03-30",
    category: "Akademik",
    excerpt:
      "Ses penyelarasan modul pembinaan serta mapping kebutuhan bimbingan kolektif terhadap mata kuliah inti bagi mahasiswa semester awal baru.",
  },
];

function formatIdDateShort(iso) {
  const d = new Date(`${iso}T12:00:00`);
  return d.toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function NewsGrid() {
  return (
    <section aria-labelledby="berita-daftar-heading" className="py-section">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <h2
          id="berita-daftar-heading"
          className="sr-only"
        >
          Daftar berita
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {PLACEHOLDER_NEWS.map((post) => (
            <article
              key={post.id}
              className="flex flex-col border border-hairline bg-surface-soft p-6 transition duration-200 ease-out hover:border-m-blue-dark/55 hover:shadow-[0_0_32px_rgba(28,105,212,0.18),inset_0_0_0_1px_rgba(226,39,24,0.08)] motion-reduce:transition-none"
            >
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <time
                  className="text-[12px] font-normal uppercase tracking-wide text-muted"
                  dateTime={post.date}
                >
                  {formatIdDateShort(post.date)}
                </time>
                <span className="h-1 w-8 bg-linear-to-r from-m-blue-light via-m-blue-dark to-m-red" />
                <span className="text-[11px] font-bold uppercase tracking-[1.5px] text-body-strong">
                  {post.category}
                </span>
              </div>
              <h3 className="mt-5 flex-1 text-lg font-bold uppercase leading-snug tracking-tight text-on-dark lg:text-xl">
                {post.title}
              </h3>
              <p className="mt-4 text-sm font-light leading-relaxed text-body">
                {post.excerpt}
              </p>
              <p className="mt-6 border-t border-hairline pt-4">
                <span className="text-[11px] font-bold uppercase tracking-[1.5px] text-muted">
                  Detail berita · akan mengikuti
                </span>
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
