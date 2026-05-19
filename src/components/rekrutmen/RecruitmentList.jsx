const RECRUITMENTS = [
  {
    id: "r1",
    committeeName: "Panitia dokumentasi kampanye komunikasi luar kampus Kabinet Aradhana",
    divisions: ["Divisi dokumentasi foto", "Editor video", "Sos media copywriter"],
    description: "Pendaftaan tim pendukung produksi dokumentasi kegiatan resmi serta arsip komunikasi publikasi — mandat kolektif periode penyusunan program kerja penuh.",
    closingDate: "2026-06-06",
    status: "DIBUKA",
  },
  {
    id: "r2",
    committeeName: "Tim riset akademik pembekalan workshop literasi industri digital bagi mahasiswa baru",
    divisions: ["Riset akademik", "Moderator lokakarya", "Kurasi materi utama"],
    description: "Rekrutmen divisi pembantu penyusunan modul serta jadwal pembicara akademik bagi pelatihan internal khusus strata satu Bisnis Digital.",
    closingDate: "2026-04-09",
    status: "DITUTUP",
  },
];

function formatIdDateShort(iso) {
  const d = new Date(`${iso}T12:00:00`);
  return d.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function RecruitmentList() {
  return (
    <section aria-labelledby="rekrutmen-daftar-heading" className="py-section">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <h2 id="rekrutmen-daftar-heading" className="sr-only">
          Informasi recruitment kepanitiaan
        </h2>

        <ul className="grid gap-8 lg:grid-cols-2">
          {RECRUITMENTS.map((job) => {
            const isOpen = job.status === "DIBUKA";
            return (
              <li
                key={job.id}
                className="flex flex-col border border-hairline bg-surface-soft p-6 transition duration-200 ease-out hover:border-m-blue-dark/35 hover:shadow-[0_0_28px_rgba(28,105,212,0.14),inset_0_0_0_1px_rgba(226,39,24,0.06)] lg:p-8"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <span
                    className={`border px-3 py-1 text-[11px] font-bold uppercase tracking-[1.5px] ${
                      isOpen ? "border-m-blue-dark bg-m-blue-dark/10 text-body-strong shadow-[inset_0_0_0_1px_rgba(28,105,212,0.25)]" : "border-m-red bg-m-red/12 text-body-strong shadow-[inset_0_0_0_1px_rgba(226,39,24,0.22)]"
                    }`}
                  >
                    {job.status}
                  </span>
                  <p className="text-[12px] font-light uppercase tracking-wide text-muted">
                    Penutupan · <time dateTime={job.closingDate}>{formatIdDateShort(job.closingDate)}</time>
                  </p>
                </div>

                <h3 className="mt-6 text-xl font-bold uppercase leading-snug tracking-tight text-on-dark">{job.committeeName}</h3>

                <div className="mt-6 flex flex-wrap gap-2">
                  {job.divisions.map((d) => (
                    <span key={`${job.id}-${d}`} className="border border-hairline bg-surface-soft px-2.5 py-1 text-[11px] font-bold uppercase tracking-[1.2px] text-body">
                      {d}
                    </span>
                  ))}
                </div>

                {/* Diubah dari <p> ke <div> agar aman dari paksaan text-justify globals.css */}
                <div className="mt-6 flex-1 border-t border-hairline pt-6 text-sm font-light leading-relaxed text-body text-justify">{job.description}</div>

                <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-hairline pt-6">
                  {isOpen ? (
                    <a
                      href="https://www.instagram.com/p/DXKUyB6khyP/" // <--- SILAKAN GANTI DENGAN LINK GOOGLE FORMS ASLI HMBD
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-12 min-w-[168px] items-center justify-center border border-on-dark bg-transparent px-6 text-[13px] font-bold uppercase tracking-[1.5px] text-on-dark transition duration-200 ease-out hover:border-m-blue-dark hover:bg-on-dark hover:text-canvas hover:shadow-[0_0_36px_rgba(28,105,212,0.55),inset_0_0_0_1px_rgba(226,39,24,0.15)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-m-blue-dark focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      Daftar sekarang
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      aria-disabled
                      className="inline-flex h-12 cursor-not-allowed items-center justify-center border border-hairline bg-surface-soft px-6 text-[13px] font-bold uppercase tracking-[1.5px] text-muted"
                    >
                      Daftar sekarang
                    </button>
                  )}

                  {/* Diubah dari <p> ke <div> untuk teks keterangan pendek di samping tombol */}
                  <div className="text-xs font-light text-muted flex-1">
                    {isOpen
                      ? "Kontak formulir pendaftaran resmi eksternal. Isilah data diri Anda dengan benar sesuai instruksi sekretariat kabinet."
                      : "Kepanitiaan ini telah ditutup; silakan pantau pembukaan rekrutmen berikutnya di halaman Berita atau Media resmi kabinet organisasi Anda."}
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
