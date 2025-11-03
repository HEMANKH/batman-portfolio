import batmanSwinging from "@/assets/batman-swing.png";

export const BatmanSwinging = () => {
  return (
    <div className="fixed top-8 left-32 z-50 pointer-events-none">
      <div className="animate-swing origin-top">
        <div className="w-20 h-24 relative">
          {/* Rope */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-muted/80 to-transparent -top-24" />
          
          {/* Batman image */}
          <div className="relative w-full h-full">
            <img 
              src={batmanSwinging} 
              alt="Batman swinging" 
              className="w-full h-full object-contain drop-shadow-[0_0_15px_hsl(var(--hologram-cyan)/0.6)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
