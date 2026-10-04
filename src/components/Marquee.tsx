const ITEMS = [
  "Mariages",
  "Événements VIP",
  "Résidences de prestige",
  "Boîtes signature",
  "Fleurs stabilisées",
  "Coffrets sur mesure",
  "Terrasses & patios",
  "Livraison Rabat",
];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div
      className="marquee border-y border-line bg-obsidian/60 py-6"
      aria-hidden="true"
    >
      <div className="marquee-track items-center gap-14">
        {loop.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center gap-14">
            <span className="whitespace-nowrap font-display text-lg font-light tracking-[0.14em] text-ash sm:text-xl">
              {item}
            </span>
            <span className="h-1 w-1 shrink-0 rounded-full bg-mauve" />
          </span>
        ))}
      </div>
    </div>
  );
}