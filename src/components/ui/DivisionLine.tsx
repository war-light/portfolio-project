const DivisionLine = () => {
  return (
    <div className="relative w-full max-w-4xl flex items-center justify-center gap-4 py-4 opacity-70 mx-auto">
      <div className="h-px w-full bg-linear-to-r from-transparent via-hextech-gold to-transparent"></div>
      <div className="w-2.5 h-2.5 bg-hextech-black rotate-45 shrink-0 border border-hextech-gold shadow-[0_0_8px_#c8aa6e]"></div>
      <div className="h-px w-full bg-linear-to-r from-transparent via-hextech-gold to-transparent"></div>
    </div>
  );
};

export default DivisionLine;
