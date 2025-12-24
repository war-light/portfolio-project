export const SocialButton = ({ href, path, label }: { href: string; path: string; label: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="group/btn relative flex flex-col items-center justify-center p-3 border border-hextech-bronze/30 bg-[#0e1015] hover:bg-hextech-blue hover:border-hextech-gold transition-all duration-300 rounded-sm overflow-hidden"
  >
    {/* Button Inner Glow */}
    <div className="absolute inset-0 bg-hextech-gold/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />

    {/* Icon */}
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5 text-hextech-bronze group-hover/btn:text-hextech-gold group-hover/btn:drop-shadow-[0_0_5px_rgba(200,170,110,0.8)] transition-all duration-300 relative z-10"
    >
      <path d={path} />
    </svg>

    {/* Label (Optional: Hidden on small screens, or small text) */}
    <span className="text-[8px] uppercase tracking-wider text-hextech-bronze/70 group-hover/btn:text-hextech-light mt-1 relative z-10">
      {label}
    </span>
  </a>
);
