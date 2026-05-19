import RecruitmentList from "@/components/rekrutmen/RecruitmentList";
import PageShell from "@/components/PageShell";

export const metadata = {
  title: "Rekrutmen",
};

export default function RekrutmenPage() {
  return (
    <>
      <PageShell eyebrow="Gabung struktur kolektif" title="Rekrutmen">
        <p>
          Informasi pembukaan kepanitiaan resmi serta jadwal status pendaftaran
          bagi calon anggota — seluruh CTA menggunakan siluet industri persegi
          serta glow kontras konsisten tema BMW&nbsp;M.
        </p>
      </PageShell>
      <RecruitmentList />
    </>
  );
}
