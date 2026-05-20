const info = [
  {
    title: "アクセス",
    items: [
      "定期航空便：東京・ロンドン・ニューヨークから直行便あり（飛行時間約3時間）",
      "海上アクセス：リスボン港から高速船で約4時間",
      "到着後は中央ターミナル「Gate Zero」で入国手続き",
    ],
  },
  {
    title: "ビザ",
    items: [
      "90日以内の観光はビザ不要（エリオン観光パスのみ必要）",
      "観光パスはオンラインで事前取得可能",
      "長期滞在・就労には別途申請が必要",
    ],
  },
  {
    title: "通貨",
    items: [
      "公式通貨はAEL（エリオン・クレジット）",
      "主要クレジットカードおよびデジタル通貨対応",
      "現金は市内では使用不可",
    ],
  },
  {
    title: "気候",
    items: [
      "人工気候制御システムにより年間を通じて快適",
      "平均気温22°C、湿度55%に調整",
      "屋外エリアでは天候イベントが定期開催",
    ],
  },
];

export default function Visit() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-10 max-w-4xl mx-auto">
      <p className="text-cyan-400 tracking-[0.4em] text-xs uppercase mb-4">Visit</p>
      <h1 className="text-6xl font-bold tracking-widest mb-16 text-white">旅行情報</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {info.map((section) => (
          <div key={section.title}>
            <h2 className="text-cyan-400 text-sm tracking-widest uppercase mb-6 pb-3 border-b border-white/10">
              {section.title}
            </h2>
            <ul className="space-y-4">
              {section.items.map((item, i) => (
                <li key={i} className="flex gap-3 text-white/50 leading-relaxed">
                  <span className="text-cyan-400/50 mt-1">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}