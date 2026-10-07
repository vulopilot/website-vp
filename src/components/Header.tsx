import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="text-sm font-extrabold tracking-tight text-slate-900">
          Vulo<span className="text-brand-600">Pilot</span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 sm:flex">
          <Link href="/#how-it-works" className="hover:text-brand-600">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-brand-600">
            Pricing
          </Link>
        </nav>

        <Link
          href="/#how-it-works"
          className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-brand-600/20 hover:bg-brand-700 sm:text-sm"
        >
          Get started
          <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
}
