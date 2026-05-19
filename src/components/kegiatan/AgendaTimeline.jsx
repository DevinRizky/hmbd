const AGENDA = [
  {
    id: "a4",
    name: "Rapat koordinasi program kerja Kabinet Aradhana",
    date: "2026-05-08",
    place: "Ruang rapat Gedung Utama Campus Purwokerto",
    status: "Selesai",
  },
  {
    id: "a1",
    name: "Open recruitment relawan divisi dokumentasi multimedia",
    date: "2026-05-25",
    place: "Ruang Auditorium — Telkom University Purwokerto",
    status: "Mendatang",
  },
  {
    id: "a2",
    name: "Kuliah tamu: strategi industri digital bagi startup kampus",
    date: "2026-06-02",
    place: "Aula Rekayasa Industri Purwokerto",
    status: "Mendatang",
  },
  {
    id: "a5",
    name: "Briefing penyusunan dokumentasi seminar nasional Bisnis Digital",
    date: "2026-04-18",
    place: "Online — kanal komunikasi kabinet internal",
    status: "Selesai",
  },
  {
    id: "a3",
    name: "Studi rutin struktur kepengurusan masa bakti baru",
    date: "2026-06-18",
    place: "Ruang komunikasi fakultas",
    status: "Mendatang",
  },
  {
    id: "a6",
    name: "Workshop desain komunikasi kampanye publikasi HMBD",
    date: "2026-04-06",
    place: "Lab kolaboratif prodi Bisnis Digital",
    status: "Selesai",
  },
];

/** Mendatang dulu (+ tanggal terdekat), lalu Selesai (tanggal terbaru). */
function sortedAgenda() {
  const upcoming = AGENDA.filter((x) => x.status === "Mendatang").sort(
    (a, b) => new Date(a.date) - new Date(b.date),
  );
  const done = AGENDA.filter((x) => x.status === "Selesai").sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );
  return [...upcoming, ...done];
}

function formatIdDate(iso) {
  const d = new Date(`${iso}T12:00:00`);
  return d.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

/** Selisih dalam hari: positif mendatang dari hari ini, negatif jika telah lewat. */
function relativeDayLabel(delta, status) {
  if (status === "Mendatang") {
    if (delta === 0) return "hari ini";
    if (delta === 1) return "besok";
    if (delta > 1) return `${delta} hari lagi`;
    return "jadwal akan disesuaikan";
  }
  const past = Math.abs(delta);
  if (past === 0) return "hari yang sama · selesai";
  return `${past} hari lalu`;
}

function daysFromToday(iso) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const t = new Date(`${iso}T12:00:00`);
  return Math.round((t - today) / (1000 * 60 * 60 * 24));
}

export default function AgendaTimeline() {
  const timeline = sortedAgenda();

  return (
    <section aria-labelledby="agenda-heading">
      <h2
        id="agenda-heading"
        className="text-xl font-bold uppercase tracking-tight text-on-dark lg:text-[32px] lg:leading-[1.15]"
      >
        Kalender kegiatan
      </h2>
      <p className="mt-4 max-w-2xl text-base font-light text-body">
        Timeline agenda — daftar mendatang terurut sesuai tanggal terdekat,
        kemudian arsip yang telah selesai.
      </p>

      <ol className="mt-12 grid gap-px border border-hairline bg-hairline">
        {timeline.map((item, i) => {
          const delta = daysFromToday(item.date);
          return (
            <li
              key={item.id}
              className="group relative border border-hairline bg-surface-soft p-6 transition duration-200 ease-out hover:bg-surface-card hover:shadow-[inset_0_0_0_1px_rgba(28,105,212,0.18)] motion-reduce:transition-none sm:p-8"
            >
              <span
                className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-m-blue-light via-m-blue-dark to-m-red opacity-60 transition duration-200 group-hover:opacity-100"
                aria-hidden
              />
              <div className="flex gap-6 pl-6 sm:pl-8">
                <span className="hidden w-10 shrink-0 pt-1 font-bold tabular-nums text-muted sm:block">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    <time
                      className="text-[13px] font-bold uppercase tracking-[1.5px] text-body-strong"
                      dateTime={item.date}
                    >
                      {formatIdDate(item.date)}
                    </time>
                    <span
                      className={`border px-2 py-0.5 text-[11px] font-bold uppercase tracking-[1.5px] ${
                        item.status === "Mendatang"
                          ? "border-m-blue-dark/70 text-body-strong shadow-[inset_0_0_0_1px_rgba(28,105,212,0.12)] group-hover:shadow-[0_0_20px_rgba(28,105,212,0.16)] motion-reduce:group-hover:shadow-none"
                          : "border-hairline-strong text-muted"
                      }`}
                    >
                      {item.status}
                    </span>
                    <span className="text-[11px] font-light uppercase tracking-wide text-muted">
                      {relativeDayLabel(delta, item.status)}
                    </span>
                  </div>
                  <p className="mt-4 text-lg font-bold uppercase leading-snug tracking-tight text-on-dark sm:text-xl">
                    {item.name}
                  </p>
                  <p className="mt-3 text-base font-light text-body">
                    <span className="text-muted">Tempat · </span>
                    {item.place}
                  </p>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
