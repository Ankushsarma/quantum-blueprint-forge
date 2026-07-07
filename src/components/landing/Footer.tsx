export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0F0718] py-10">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 md:grid-cols-3 md:px-10">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[#A86CFF] to-[#7E52D9] text-lg font-black text-white shadow-[0_0_20px_rgba(168,108,255,0.5)]">
              B
            </span>
            <span className="font-display text-lg font-extrabold text-white">Beyond</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-white/60">
            Premium web experiences powered by design, technology, and innovation.
          </p>
        </div>
        <div>
          <div className="text-sm font-bold text-white">Quick Links</div>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li><a href="#home" className="hover:text-white">Home</a></li>
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#services" className="hover:text-white">Services</a></li>
            <li><a href="#process" className="hover:text-white">Process</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-bold text-white">Connect</div>
          <div className="mt-4 flex gap-3">
            {["Tw", "In", "Li", "Gh"].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 text-xs text-white/70 transition hover:border-[#A86CFF] hover:text-white hover:shadow-[0_0_20px_rgba(168,108,255,0.4)]"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/5 px-6 pt-6 text-center text-xs text-white/50 md:px-10">
        © {new Date().getFullYear()} Beyond Your Imagination. All rights reserved.
      </div>
    </footer>
  );
}