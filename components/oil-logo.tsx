export function OilLogoIcon({ size = 52 }: { size?: number }) {
  const h = size
  const w = size * 1.15
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 230 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="OIL Logo"
    >
      {/* === O letter === */}
      {/* Outer O shape */}
      <path
        d="M72 24C42 24 18 52 18 88C18 118 36 142 60 150L64 158C68 168 72 176 80 176C88 176 92 168 96 158L100 150C124 142 142 118 142 88C142 52 118 24 88 24H72Z"
        fill="#1B2D6B"
      />
      {/* O inner cutout */}
      <ellipse cx="80" cy="85" rx="30" ry="34" fill="currentColor" />
      {/* Orange drop hanging from O bottom */}
      <path
        d="M80 140C80 140 64 164 64 176C64 189 71 196 80 196C89 196 96 189 96 176C96 164 80 140 80 140Z"
        fill="#E8771E"
      />
      {/* Drop inner white highlight */}
      <path
        d="M80 160C80 160 72 172 72 179C72 186 75 190 80 190C85 190 88 186 88 179C88 172 80 160 80 160Z"
        fill="currentColor"
        opacity="0.4"
      />

      {/* === i letter === */}
      {/* i dot */}
      <circle cx="158" cy="30" r="12" fill="#E8771E" />
      {/* i body */}
      <rect x="146" y="56" width="24" height="94" rx="4" fill="#1B2D6B" />

      {/* === L letter === */}
      {/* L vertical */}
      <rect x="186" y="24" width="24" height="126" rx="4" fill="#1B2D6B" />
      {/* L leaf/kick */}
      <path
        d="M198 120C206 100 218 92 232 96C240 100 242 110 238 120C232 132 218 140 204 144L196 146L198 120Z"
        fill="#1B2D6B"
      />
    </svg>
  )
}

export function OilLogoBrand({ size = "lg" }: { size?: "md" | "lg" }) {
  const iconSize = size === "lg" ? 52 : 42
  return (
    <div className="flex items-center gap-2.5">
      <OilLogoIcon size={iconSize} />
      <div className="flex flex-col leading-none">
        <span
          className={`font-black tracking-wider ${
            size === "lg" ? "text-xl sm:text-2xl" : "text-base sm:text-lg"
          }`}
          style={{ color: "currentColor" }}
        >
          OLUDARE
        </span>
        <span
          className={`font-bold tracking-[0.18em] ${
            size === "lg" ? "text-[11px] sm:text-xs" : "text-[9px] sm:text-[10px]"
          }`}
          style={{ color: "currentColor", opacity: 0.65 }}
        >
          INVESTMENT LTD.
        </span>
      </div>
    </div>
  )
}
