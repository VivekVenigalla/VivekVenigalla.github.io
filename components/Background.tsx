export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* faint dot grid for texture */}
      <div
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* slow-drifting gradient blobs */}
      <div className="blob blob-teal absolute top-[-10%] left-[-10%] h-[45vw] w-[45vw] max-h-[560px] max-w-[560px] rounded-full" />
      <div className="blob blob-violet absolute top-[20%] right-[-15%] h-[40vw] w-[40vw] max-h-[520px] max-w-[520px] rounded-full" />
      <div className="blob blob-teal-2 absolute bottom-[-15%] left-[20%] h-[50vw] w-[50vw] max-h-[600px] max-w-[600px] rounded-full" />

      {/* vignette so content stays readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, var(--background) 85%)",
        }}
      />

      <style>{`
        .blob {
          filter: blur(90px);
          opacity: 0.28;
        }
        .blob-teal {
          background: radial-gradient(circle, var(--accent-teal), transparent 70%);
          animation: drift-a 26s ease-in-out infinite;
        }
        .blob-violet {
          background: radial-gradient(circle, var(--accent-violet), transparent 70%);
          animation: drift-b 32s ease-in-out infinite;
        }
        .blob-teal-2 {
          background: radial-gradient(circle, var(--accent-cyan), transparent 70%);
          animation: drift-c 38s ease-in-out infinite;
        }
        @keyframes drift-a {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(6vw, 8vh) scale(1.1); }
        }
        @keyframes drift-b {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-8vw, 6vh) scale(1.08); }
        }
        @keyframes drift-c {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(5vw, -6vh) scale(1.05); }
        }
        @media (prefers-reduced-motion: reduce) {
          .blob { animation: none; }
        }
      `}</style>
    </div>
  );
}
