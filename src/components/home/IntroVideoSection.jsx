"use client";

export default function IntroVideoSection() {
  return (
    <section className="bg-canvas py-8 lg:py-12">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        {/* Bingkai video elegan hitam khas gaya arsitektur grid HMBD */}
        <div className="relative w-full aspect-video border border-hairline bg-black overflow-hidden shadow-xl">
          <video src="/video-intro-hmbd.mp4" autoPlay loop muted playsInline controls className="h-full w-full object-cover brightness-[0.95] dark:brightness-90">
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
