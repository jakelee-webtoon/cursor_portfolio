export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-bold text-zinc-900 dark:text-white mb-6">
            안녕하세요,<br />
            <span className="text-blue-600 dark:text-blue-500">Jake Lee</span>입니다
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-4 leading-relaxed">
            네이버웹툰 <span className="font-semibold text-zinc-900 dark:text-white">Data Planning</span> 및 <span className="font-semibold text-zinc-900 dark:text-white">Marketing & Ads Intelligence</span> 팀 리드
          </p>
          <p className="text-lg text-zinc-500 dark:text-zinc-500 mb-8 leading-relaxed">
            데이터 기반 의사결정과 Growth Hacking을 통해 비즈니스 성장을 이끌어냅니다.
          </p>
          <div className="flex gap-4">
            <a href="#contact" className="px-6 py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors">
              연락하기
            </a>
            <a href="#projects" className="px-6 py-3 border border-zinc-300 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-lg font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
              경력 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

