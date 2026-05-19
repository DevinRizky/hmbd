/**
 * Pembungkus konten hero halaman — tipografi mengikuti DESIGN.md (display + body Light).
 */
import MStripe from "./MStripe";

export default function PageShell({ eyebrow, title, children }) {
  return (
    <header className="border-b border-hairline bg-canvas">
      <div className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 lg:px-10 lg:py-24">
        {eyebrow ? (
          <p className="mb-3 text-[14px] font-bold uppercase tracking-[1.5px] text-muted">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="max-w-[20ch] text-balance text-4xl font-bold uppercase leading-none tracking-tight text-on-dark sm:text-5xl lg:text-[56px] lg:leading-[1.05]">
          {title}
        </h1>
        <div className="mt-6 max-w-xl">
          <MStripe />
          {children ? (
            <div className="mt-8 text-base font-light leading-relaxed text-body">
              {children}
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
