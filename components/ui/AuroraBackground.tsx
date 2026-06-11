export default function AuroraBackground({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Drifting colour orbs */}
      <div className="aurora-a absolute -top-[20%] -left-[10%] w-[55vw] h-[55vw] rounded-full bg-blue/35 blur-[120px] mix-blend-screen" />
      <div className="aurora-b absolute top-[10%] right-[-15%] w-[45vw] h-[45vw] rounded-full bg-cyan/20 blur-[130px] mix-blend-screen" />
      <div className="aurora-c absolute bottom-[-25%] left-[25%] w-[50vw] h-[50vw] rounded-full bg-[#2a1d6e]/50 blur-[140px] mix-blend-screen" />
      {/* Dot grid, faded towards the edges */}
      <div className="dot-grid absolute inset-0 [mask-image:radial-gradient(75%_65%_at_50%_35%,black,transparent)]" />
    </div>
  );
}
