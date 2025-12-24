import { Link } from "react-router"; // or react-router-dom

const Footer = () => {
  return (
    <footer className="relative mt-auto w-full bg-[#050505] pt-12 pb-8 overflow-hidden font-literata">
      {/* --- Top Decorative Border --- */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-hextech-bronze to-transparent opacity-50" />

      {/* Center Gem/Accent on Border */}
      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 flex items-center justify-center gap-1">
        <div className="w-16 h-px bg-linear-to-r from-transparent via-hextech-gold to-transparent" />
        <div className="w-3 h-3 bg-[#050505] border border-hextech-gold rotate-45 shadow-[0_0_10px_#c8aa6e]" />
        <div className="w-16 h-px bg-linear-to-r from-hextech-gold via-transparent to-transparent" />
      </div>

      {/* --- Background Elements --- */}
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-hextech-blue/20 blur-[100px] pointer-events-none" />

      {/* --- Main Content --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
        {/* Column 1: Brand & Lore */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <h3 className="text-hextech-light text-lg font-bold tracking-widest uppercase">David G</h3>
          </div>
          <p className="text-hextech-bronze text-sm leading-relaxed max-w-xs font-serif italic">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi dicta, perspiciatis praesentium
            molestias laudantium magni ipsam hic voluptatum velit unde porro, maxime natus aliquid dolore
            iure, quos est neque aliquam!
          </p>
        </div>

        {/* Column 2: Navigation Uplinks */}
        <div className="flex flex-col md:items-center">
          <h4 className="text-hextech-gold text-xs font-bold uppercase tracking-widest mb-4">
            Navigation Uplink
          </h4>
          <nav className="flex flex-col gap-2">
            <FooterLink to="/" label="Home Base" />
            <FooterLink to="/curriculum" label="Curriculum Vitae" />
            <FooterLink to="/contact" label="Send Raven" />
          </nav>
        </div>

        {/* Column 3: Tech Stack & Copyright */}
        <div className="flex flex-col md:items-end gap-4">
          <h4 className="text-hextech-gold text-xs font-bold uppercase tracking-widest mb-1">System Spec</h4>
          <div className="flex gap-2 text-[10px] text-hextech-bronze uppercase tracking-wider">
            <span>ReactJS</span> • <span>Vite</span> • <span>Tailwind v4</span>
          </div>
          <div className="flex gap-2 text-[10px] text-hextech-bronze uppercase tracking-wider">
            <span>Zustand</span> • <span>Shadcn</span> • <span>React Router</span>
          </div>
          <div className="mt-auto text-right">
            <p className="text-hextech-light/30 text-xs">
              &copy; {new Date().getFullYear()} David G. All rights reserved.
            </p>
            <p className="text-[10px] text-hextech-bronze/50 mt-1">Published in January 2026.</p>
          </div>
        </div>
      </div>

      {/* --- Bottom Bar --- */}
      <div className="relative z-10 border-t border-white/5 mt-12 pt-4 text-center">
        <p className="text-[10px] text-hextech-bronze uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity">
          Crafted by JD
        </p>
      </div>
    </footer>
  );
};

// Helper Component for Links
const FooterLink = ({ to, label }: { to: string; label: string }) => (
  <Link
    to={to}
    className="text-hextech-light/60 hover:text-hextech-gold text-sm transition-colors duration-300 flex items-center gap-2 group w-fit"
  >
    <span className="w-1 h-1 bg-hextech-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
    {label}
  </Link>
);

export default Footer;
