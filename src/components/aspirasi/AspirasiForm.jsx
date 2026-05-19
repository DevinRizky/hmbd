"use client";

import { useCallback, useState } from "react";

const CATEGORY_OPTIONS = [
  { value: "Kritik", label: "Kritik" },
  { value: "Saran", label: "Saran" },
  { value: "Apresiasi", label: "Apresiasi" },
];

const inputBase =
  "w-full rounded-none border border-hairline bg-surface-soft px-4 py-3 text-[15px] font-light leading-relaxed text-on-dark caret-m-blue-dark transition duration-200 outline-none placeholder:text-muted focus-visible:border-transparent focus-visible:bg-surface-soft focus-visible:shadow-[0_0_0_1px_#1c69d4,0_0_28px_rgba(28,105,212,0.35)] motion-reduce:transition-none disabled:cursor-not-allowed disabled:opacity-80";

export default function AspirasiForm() {
  const [anonymous, setAnonymous] = useState(false);
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [kategori, setKategori] = useState("Kritik");
  const [pesan, setPesan] = useState("");
  const [sent, setSent] = useState(false);

  const applyAnonymous = useCallback(
    (next) => {
      setAnonymous(next);
      if (next) {
        setNama("ANONIM");
        setNim("ANONIM");
      } else {
        setNama("");
        setNim("");
      }
    },
    [],
  );

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="py-section" aria-labelledby="aspirasi-form-heading">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-10">
        <h2 id="aspirasi-form-heading" className="sr-only">
          Form pengiriman aspirasi
        </h2>

        <form
          onSubmit={handleSubmit}
          className="border border-hairline bg-surface-soft p-6 lg:p-10"
          noValidate
        >
          {sent ? (
            <p
              role="status"
              className="mb-8 border border-m-blue-dark/40 bg-canvas px-4 py-3 text-sm font-light text-body-strong"
            >
              Pesan berhasil dikirim (simulasi lokal pengembangan frontend — belum ada integrasi penyimpanan data).
            </p>
          ) : null}

          <div className="space-y-8">
            <div>
              <label
                htmlFor="nama"
                className="block text-[11px] font-bold uppercase tracking-[1.5px] text-on-dark"
              >
                Nama lengkap mahasiswa
              </label>
              <input
                id="nama"
                name="nama"
                type="text"
                autoComplete="name"
                className={`${inputBase} mt-3`}
                value={anonymous ? "ANONIM" : nama}
                onChange={(e) => setNama(e.target.value)}
                disabled={anonymous}
                required={!anonymous}
                aria-required={!anonymous}
              />
            </div>

            <div>
              <label
                htmlFor="nim"
                className="block text-[11px] font-bold uppercase tracking-[1.5px] text-on-dark"
              >
                NIM
              </label>
              <input
                id="nim"
                name="nim"
                type="text"
                inputMode="numeric"
                autoComplete="username"
                className={`${inputBase} mt-3`}
                value={anonymous ? "ANONIM" : nim}
                onChange={(e) => setNim(e.target.value)}
                disabled={anonymous}
                required={!anonymous}
                aria-required={!anonymous}
              />
              <label className="mt-4 flex cursor-pointer items-start gap-3 text-sm font-light text-body">
                <input
                  type="checkbox"
                  checked={anonymous}
                  onChange={(e) => applyAnonymous(e.target.checked)}
                  className="mt-1 size-4 rounded-none border border-hairline bg-surface-card text-m-blue-dark accent-m-blue-dark focus-visible:ring-2 focus-visible:ring-m-blue-dark focus-visible:ring-offset-2 focus-visible:ring-offset-surface-soft"
                />
                <span>
                  Kirim sebagai anonim (Sembunyikan Nama dan NIM saya)
                </span>
              </label>
            </div>

            <fieldset className="border-0 p-0">
              <legend className="text-[11px] font-bold uppercase tracking-[1.5px] text-on-dark">
                Kategori aspirasi
              </legend>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                {CATEGORY_OPTIONS.map(({ value, label }) => (
                  <label
                    key={value}
                    className={`flex cursor-pointer items-center gap-3 border px-4 py-3 text-sm font-light uppercase tracking-wide transition duration-200 ${
                      kategori === value
                        ? "border-m-blue-dark bg-surface-card text-on-dark shadow-[inset_0_0_0_1px_rgba(226,39,24,0.12)]"
                        : "border-hairline text-body hover:border-m-blue-dark/50"
                    }`}
                  >
                    <input
                      type="radio"
                      name="kategori"
                      value={value}
                      checked={kategori === value}
                      onChange={() => setKategori(value)}
                      className="size-4 rounded-none border border-hairline bg-surface-soft accent-m-blue-dark focus-visible:ring-2 focus-visible:ring-m-red focus-visible:ring-offset-2 focus-visible:ring-offset-surface-soft"
                    />
                    {label}
                  </label>
                ))}
              </div>
            </fieldset>

            <div>
              <label
                htmlFor="pesan"
                className="block text-[11px] font-bold uppercase tracking-[1.5px] text-on-dark"
              >
                Pesan aspirasi anda
              </label>
              <textarea
                id="pesan"
                name="pesan"
                rows={6}
                className={`${inputBase} mt-3 resize-y min-h-[160px]`}
                value={pesan}
                onChange={(e) => setPesan(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-hairline pt-8 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="inline-flex h-12 min-w-[148px] items-center justify-center border border-on-dark bg-transparent px-8 text-[13px] font-bold uppercase tracking-[1.5px] text-on-dark transition duration-200 ease-out hover:border-m-blue-dark hover:bg-on-dark hover:text-canvas hover:shadow-[0_0_36px_rgba(28,105,212,0.45),inset_0_0_0_1px_rgba(226,39,24,0.12)] motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-m-red focus-visible:ring-offset-2 focus-visible:ring-offset-surface-soft"
            >
              Kirim
            </button>
            <p className="max-w-md text-xs font-light leading-relaxed text-muted">
              Pastikan isian mematuhi etika kampus. Data pada tahap sekarang bersifat frontend — integrasi penyimpanan backend bisa ditambahkan belakangan.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
