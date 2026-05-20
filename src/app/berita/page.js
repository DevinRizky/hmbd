import NewsGrid from "@/components/berita/NewsGrid";
import PageShell from "@/components/PageShell";

export const metadata = {
  title: "Berita",
};

export default function BeritaPage() {
  return (
    <>
      <PageShell eyebrow="Informasi terkini" title="Berita">
        <p>
          testttttt doangggg komunikasi kabinet serta informasi bagi seluruh warga Bisnis
          Digital — konten dapat diarahkan halaman detail berita ketika struktur CMS siap digunakan.
        </p>
      </PageShell>
      <NewsGrid />
    </>
  );
}
