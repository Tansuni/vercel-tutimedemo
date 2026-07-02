import ScrollReveal from "../components/ScrollReveal";

export default function About() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-10 max-w-4xl mx-auto">
      <ScrollReveal>
        <p className="text-cyan-400 tracking-[0.4em] text-xs uppercase mb-4">About</p>
        <h1 className="text-6xl font-bold tracking-widest mb-16 text-white">AELION</h1>
      </ScrollReveal>

      <div className="grid grid-cols-1 gap-16">
        <ScrollReveal>
          <section>
            <h2 className="text-cyan-400 text-sm tracking-widest uppercase mb-4">起源</h2>
            <p className="text-white/60 leading-relaxed text-lg">
              2251年、海面上昇により多くの都市が水没した時代、エリオンは廃墟となった北大西洋の油田プラットフォームを基盤として建設された。当初は数百人の科学者と技術者が住む実験的な居住区に過ぎなかったが、独自のエネルギーシステムと食糧自給技術の確立により、急速に発展を遂げた。
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section>
            <h2 className="text-cyan-400 text-sm tracking-widest uppercase mb-4">現在</h2>
            <p className="text-white/60 leading-relaxed text-lg">
              現在のエリオンは人口84万人を抱える独立都市国家である。潮力・波力・太陽光を組み合わせたハイブリッドエネルギーシステムにより完全な電力自給を達成。垂直農場と海洋養殖により食料の97%を自国内で生産している。
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-16">
            {[
              { label: "人口", value: "840,000" },
              { label: "建設年", value: "2251" },
              { label: "面積", value: "42km²" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-4xl font-bold text-cyan-400 mb-2">{stat.value}</p>
                <p className="text-white/40 text-sm tracking-widest uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </main>
  );
}