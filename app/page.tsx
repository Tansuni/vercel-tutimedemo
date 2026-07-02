import Particles from "./components/Particles";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* 背景グラデーション */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-cyan-950/20 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent" />

      {/* パーティクル */}
      <Particles />

      {/* コンテンツ */}
      <div className="relative z-10 text-center px-6">
        <p className="text-cyan-400 tracking-[0.5em] text-sm uppercase mb-6">
          2387 — Official Travel Guide
        </p>
        <h1 className="text-8xl font-bold tracking-widest mb-6 text-white">
          AELION
        </h1>
        <p className="text-white/50 text-lg tracking-widest max-w-md mx-auto">
          海上に浮かぶ都市国家へようこそ
        </p>
      </div>

      {/* 底部ライン */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/30 text-xs tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-cyan-400/50 to-transparent" />
      </div>
    </main>
  );
}