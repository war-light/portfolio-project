import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Contact() {
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-hextech-black relative overflow-hidden font-literata">
      
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a_0%,#000000_100%)] pointer-events-none" />

      <main className="relative z-10 w-full max-w-5xl flex flex-col md:flex-row shadow-2xl border border-white/10">
        
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

            <div className="space-y-6 mt-12">
               <ContactDetail label="Location" value="Runeterra (Remote)" />
               <ContactDetail label="Email" value="david.g@summoner.rift" />
            </div>
        </div>

        {/* Right Panel (Form) */}
        <div className="w-full md:w-7/12 bg-hextech-black p-10 relative">
           {/* Decorative Corners */}
           <div className="absolute top-0 right-0 w-6 h-6 border-t border-r border-hextech-gold" />
           <div className="absolute bottom-0 left-0 w-6 h-6 border-b border-l border-hextech-gold" />

           <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                   <label className="text-xs uppercase text-gray-400 mb-1 block group-focus-within:text-hextech-gold transition-colors">Summoner Name</label>
                   <Input required placeholder="Enter Name" />
                </div>
                <div className="group">
                   <label className="text-xs uppercase text-gray-400 mb-1 block group-focus-within:text-hextech-gold transition-colors">Contact Crystal</label>
                   <Input required type="email" placeholder="Enter Email" />
                </div>
              </div>

              <div className="group">
                <label className="text-xs uppercase text-gray-400 mb-1 block group-focus-within:text-hextech-gold transition-colors">Message Content</label>
                <textarea 
                  className="w-full bg-transparent border-b border-white/20 text-hextech-light py-2 focus:outline-none focus:border-hextech-gold transition-colors resize-none h-32 placeholder:text-gray-600"
                  placeholder="Type your message..."
                  required
                />
              </div>

              <div className="flex items-center justify-between mt-4">
                 <Button type="submit" variant="hextech" className="w-full md:w-auto">
                    Dispatch
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

const ContactDetail = ({ label, value }: { label: string, value: string }) => (
  <div className="flex flex-col">
    <span className="text-hextech-gold text-xs uppercase tracking-widest mb-1">{label}</span>
    <span className="text-hextech-light font-serif italic text-lg">{value}</span>
  </div>
);