export default function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-500 sm:flex-row lg:px-8">
        <p className="font-semibold text-slate-800">VuloPilot</p>
        <p>© {new Date().getFullYear()} VuloPilot. All rights reserved.</p>
      </div>
    </footer>
  );
}
