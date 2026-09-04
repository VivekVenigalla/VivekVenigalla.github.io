export default function Background() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-background"
    >
      {/* drifting grid mesh */}
      <div className="grid-mesh absolute inset-0" />

      {/* slow-moving spotlight that lights up nearby grid intersections */}
      <div className="spotlight absolute inset-0" />

      {/* vignette so content stays readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, var(--background) 88%)",
        }}
      />

      <style>{`
        @property --spot-x {
          syntax: '<percentage>';
          inherits: false;
          initial-value: 12%;
        }
        @property --spot-y {
          syntax: '<percentage>';
          inherits: false;
          initial-value: 20%;
        }
        .grid-mesh {
          background-image:
            linear-gradient(rgba(45, 212, 191, 0.14) 1px, transparent 1px),
            linear-gradient(90deg, rgba(45, 212, 191, 0.14) 1px, transparent 1px);
          background-size: 48px 48px;
          opacity: 0.5;
          animation: grid-drift 40s linear infinite;
        }
        @keyframes grid-drift {
          0% { background-position: 0px 0px, 0px 0px; }
          100% { background-position: 96px 48px, 96px 48px; }
        }
        .spotlight {
          background: radial-gradient(
            420px circle at var(--spot-x, 20%) var(--spot-y, 30%),
            rgba(45, 212, 191, 0.22),
            rgba(167, 139, 250, 0.12) 45%,
            transparent 70%
          );
          animation: spotlight-move 22s ease-in-out infinite;
          filter: blur(4px);
        }
        @keyframes spotlight-move {
          0%   { --spot-x: 12%; --spot-y: 20%; }
          25%  { --spot-x: 82%; --spot-y: 35%; }
          50%  { --spot-x: 65%; --spot-y: 80%; }
          75%  { --spot-x: 18%; --spot-y: 70%; }
          100% { --spot-x: 12%; --spot-y: 20%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .grid-mesh, .spotlight { animation: none; }
        }
      `}</style>
    </div>
  );
}
