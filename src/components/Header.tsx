import { Link } from "react-router";
import { SunIcon } from "@heroicons/react/16/solid";
import { Button } from "@/components/ui/button";
import { useDialogStore } from "@/stores/useDialogStore";

const Header = () => {
  const toggleInteractions = useDialogStore((state) => state.toggleInteractions);
  const isInteractionsEnabled = useDialogStore((state) => state.isInteractionsEnabled);

  const handleToggle = () => {
    toggleInteractions();
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-hextech-blue/40 backdrop-blur-md shadow-2xl shadow-black/50 transition-all duration-300">
      {/* Top Highlight (Glass Edge) */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

      <div className="flex items-center justify-between px-6 lg:px-56 py-4 relative z-10">
        {/* --- Left: Navigation --- */}
        <nav className="flex items-center gap-10">
          {/* Logo  */}
          <Link to="/" className="group relative">
            <div className="w-8 h-8 bg-linear-to-br from-hextech-gold to-hextech-bronze rotate-45 border border-hextech-light shadow-[0_0_10px_#c8aa6e]">
              <div className="absolute inset-1 bg-hextech-black flex items-center justify-center">
                <span className="text-hextech-gold font-bold text-xs -rotate-45">JD</span>
              </div>
            </div>
          </Link>

          {/* Links */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink to="/" label="Home" />
            <NavLink to="/contact" label="Contact" />
            <NavLink to="/curriculum" label="Curriculum" />
          </div>
        </nav>

        {/* --- Right: Actions --- */}
        <div className="flex items-center gap-6">
          {/* Decorative Divider */}
          <div className="hidden md:flex items-center gap-2 opacity-50">
            <div className="w-1 h-1 bg-hextech-gold rotate-45" />
            <div className="h-8 w-px bg-linear-to-b from-transparent via-hextech-bronze to-transparent" />
            <div className="w-1 h-1 bg-hextech-gold rotate-45" />
          </div>

          {/* Interactions Toggle (Rune Slot Style) */}
          <Button
            variant="ghost"
            size="icon"
            className="relative group w-fit h-10 hover:bg-transparent"
            onClick={handleToggle}
          >
            {/* Text */}
            <span
              className={`uppercase tracking-[0.15em] text-xs font-bold transition-colors duration-300 group-hover:drop-shadow-[0_0_5px_rgba(240,230,210,0.5)] ${isInteractionsEnabled ? "text-[#a09b8c] group-hover:text-hextech-light" : "text-hextech-bronze opacity-50"}`}
            >
              {isInteractionsEnabled ? "Disable Interactions" : "Enable Interactions"}
            </span>
            {/* Hover Effects */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-hextech-gold group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#c8aa6e]" />

            {/* Top decorative dot appearing on hover */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-hextech-gold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_5px_#c8aa6e]" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="relative group w-10 h-10 hover:bg-transparent"
            onClick={() =>
              useDialogStore.getState().isBrokenMode
                ? useDialogStore.getState().handleEvent("LIGHT_MODE_BROKEN")
                : useDialogStore.getState().handleEvent("LIGHT_MODE")
            }
          >
            {/* Hover Glow Background */}
            <div className="absolute inset-0 bg-hextech-gold/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 blur-md" />

            {/* Hexagon Border */}
            <div className="absolute inset-0 border border-hextech-bronze/30 rotate-45 scale-75 group-hover:border-hextech-gold group-hover:rotate-90 transition-all duration-500 group-active:animate-shake" />

            <SunIcon className="relative z-10 w-5 h-5 text-hextech-bronze group-hover:text-hextech-light group-hover:drop-shadow-[0_0_8px_rgba(200,170,110,1)] transition-all duration-300 group-active:animate-shake" />
          </Button>
        </div>
      </div>

      {/* --- Bottom Border Decoration (The "Tech" Line) --- */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-hextech-bronze to-transparent opacity-80"></div>

      {/* Center Ornament (Gem) */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-linear-to-r from-transparent via-hextech-gold/50 to-transparent blur-[1px]"></div>
      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 flex items-center justify-center">
        <div className="w-12 h-0.5 bg-hextech-gold shadow-[0_0_5px_#c8aa6e]"></div>
        <div className="absolute w-3 h-3 bg-hextech-black border border-hextech-gold rotate-45 shadow-[0_0_5px_#c8aa6e]"></div>
      </div>
    </header>
  );
};

const NavLink = ({ to, label }: { to: string; label: string }) => (
  <Link to={to} className="group relative h-full flex items-center justify-center px-2 py-1">
    {/* Text */}
    <span className="uppercase tracking-[0.15em] text-xs font-bold text-[#a09b8c] group-hover:text-hextech-light transition-colors duration-300 group-hover:drop-shadow-[0_0_5px_rgba(240,230,210,0.5)]">
      {label}
    </span>

    {/* Hover Effects */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-hextech-gold group-hover:w-full transition-all duration-300 shadow-[0_0_8px_#c8aa6e]" />

    {/* Top decorative dot appearing on hover */}
    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-1 h-1 bg-hextech-gold rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_0_5px_#c8aa6e]" />
  </Link>
);

export default Header;
