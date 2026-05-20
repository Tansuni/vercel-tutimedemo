const districts = [
  {
    name: "Solaris",
    ja: "ソラリス",
    desc: "エリオン最大の商業・居住地区。無数の空中回廊と光る植物が共存する緑豊かなエリア。昼夜を問わず市民が行き交う都市の心臓部。",
    tag: "商業 / 居住",
  },
  {
    name: "Depth",
    ja: "デプス",
    desc: "海面下に広がる水中居住区。透明なドームの中から海洋生物を眺めながら生活できる世界唯一のエリア。研究者や芸術家が多く住む。",
    tag: "居住 / 研究",
  },
  {
    name: "Nexus",
    ja: "ネクサス",
    desc: "エリオンの技術・行政の中枢。量子コンピュータ群と政府機関が集中する高セキュリティゾーン。観光客には一部エリアのみ公開。",
    tag: "行政 / テクノロジー",
  },
  {
    name: "Aurora",
    ja: "オーロラ",
    desc: "人工オーロラが常時輝く文化・娯楽地区。劇場、美術館、レストランが集まりエリオンの夜を彩る。観光客に最も人気のエリア。",
    tag: "文化 / 娯楽",
  },
];

export default function Districts() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-10 max-w-5xl mx-auto">
      <p className="text-cyan-400 tracking-[0.4em] text-xs uppercase mb-4">Districts</p>
      <h1 className="text-6xl font-bold tracking-widest mb-16 text-white">地区案内</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {districts.map((d) => (
          <div
            key={d.name}
            className="border border-white/10 p-8 hover:border-cyan-400/40 transition-colors duration-300 group"
          >
            <p className="text-cyan-400/60 text-xs tracking-widest uppercase mb-2">{d.tag}</p>
            <h2 className="text-3xl font-bold tracking-widest text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
              {d.name}
            </h2>
            <p className="text-white/30 text-sm tracking-widest mb-6">{d.ja}</p>
            <p className="text-white/50 leading-relaxed">{d.desc}</p>
          </div>
        ))}
      </div>
    </main>
  );
}