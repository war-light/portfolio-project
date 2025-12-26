import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGlitchStyle } from "@/hooks/useGlitchStyle";
import { useDialogStore } from "@/stores/useDialogStore";
import emailjs from "@emailjs/browser";
import { FormEvent, useRef, useState } from "react";

export default function ContactMe() {
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const isBrokenMode = useDialogStore((state) => state.isBrokenMode);
  const glitchStyle = useGlitchStyle();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setIsSent(true);
            setIsLoading(false);
            setTimeout(() => setIsSent(false), 5000);
            form.current?.reset();
          },
          (error) => {
            console.error("FAILED...", error.text);
            setIsLoading(false);
          }
        );
    }
  };

  return (
    <div className="min-h-screen bg-hextech-black flex flex-col relative font-literata">
      {/* Background Ambience */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top,#1e2328_0%,#0a0a0c_100%)] -z-10" />
      <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-50" />

      {/* Broken Light Mode Effect */}
      {useDialogStore((state) => state.isBrokenMode) && (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          <div
            className="absolute inset-0 bg-white clip-path-polygon-[0_0,50%_0,40%_100%,0_100%] animate-in fade-in duration-1000"
            style={{ clipPath: "polygon(0 0, 50% 0, 40% 100%, 0 100%)" }}
          ></div>
        </div>
      )}

      <main
        className={`relative z-10 w-full max-w-5xl flex flex-col md:flex-row shadow-2xl border border-white/10 mx-auto my-auto hextech-section-wrapper ${isBrokenMode ? "hextech-glitch" : ""}`}
        style={isBrokenMode ? glitchStyle : undefined}
      >
        {/* Left Panel */}
        <div className="w-full md:w-5/12 bg-[#111] p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-white/10 relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-linear-to-b from-transparent via-hextech-gold to-transparent opacity-60" />

          <div className="space-y-4">
            <h2 className="text-hextech-gold text-xs font-bold tracking-[0.2em] uppercase">Communique</h2>
            <h1 className="text-4xl text-hextech-light font-bold drop-shadow-md">Send a Raven</h1>
            <p className="text-gray-300 font-light leading-relaxed">
              Whether you have a quest proposal or wish to exchange knowledge, I am listening.
            </p>
          </div>

          <div className="space-y-6 mt-12" onClick={() => useDialogStore.getState().handleEvent("LOCATION")}>
            <ContactDetail label="Current Location" value="Dominican Republic" />
            <ContactDetail label="Email" value="jd.stormlight@gmail.com" />
          </div>
        </div>

        {/* Right Panel (Form) */}
        <div className="w-full md:w-7/12 bg-hextech-black p-10 relative">
          {/* Decorative Corners */}
          <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-hextech-gold" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-hextech-gold" />

          <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <div className="group">
                <label className="text-xs uppercase text-gray-400 mb-1 block group-focus-within:text-hextech-gold transition-colors">
                  Email
                </label>
                <Input required type="email" name="user_email" placeholder="Enter Email" />
              </div>
            </div>

            <div className="group">
              <label className="text-xs uppercase text-gray-400 mb-1 block group-focus-within:text-hextech-gold transition-colors">
                Message Content
              </label>
              <textarea
                name="message"
                className="w-full bg-transparent border-b border-white/20 text-hextech-light py-2 focus:outline-none focus:border-hextech-gold transition-colors resize-none h-32 placeholder:text-gray-600"
                placeholder="Type your message..."
                required
              />
            </div>

            <div className="flex items-center justify-between mt-4">
              <Button
                type="submit"
                variant="hextech"
                className="w-full md:w-auto"
                disabled={isLoading || isSent}
              >
                {isLoading ? "Dispatching..." : "Dispatch"}
              </Button>

              {isSent && (
                <span className="text-hextech-gold text-sm animate-pulse flex items-center gap-2">
                  <span>❖</span> Transmitted
                </span>
              )}
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}

const ContactDetail = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col">
    <span className="text-hextech-gold text-xs uppercase tracking-widest mb-1">{label}</span>
    <span className="text-hextech-light font-serif italic text-lg">{value}</span>
  </div>
);
