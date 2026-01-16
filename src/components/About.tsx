export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-12">About Me</h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              데이터를 쉽게 활용하고 누구나 다룰 수 있는 환경을 만들고 싶습니다. 
              다양한 Data Product 기획과 데이터 환경 개선을 통해 조직의 데이터 기반 의사결정을 돕고 있습니다.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              백엔드 개발부터 CRM, Growth Hacking, 데이터 분석까지 다양한 경험을 바탕으로 
              비즈니스 성장을 위한 전략을 수립하고 실행합니다.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              끊임없이 배우고 성장하며, 팀과 협력하여 더 나은 제품을 만들어가는 것에 보람을 느낍니다.
            </p>
          </div>
          <div className="space-y-4">
            <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg">
              <h4 className="font-semibold text-zinc-900 dark:text-white mb-2">🏢 현재</h4>
              <p className="text-zinc-600 dark:text-zinc-400 font-medium">네이버웹툰</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-1">Lead, Data Planning (2025.08~)</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-500">Lead, Marketing & Ads Intelligence (2024.01~)</p>
            </div>
            <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg">
              <h4 className="font-semibold text-zinc-900 dark:text-white mb-2">💼 경력</h4>
              <p className="text-zinc-600 dark:text-zinc-400">네이버웹툰 (2022.04 ~ 현재)</p>
              <p className="text-zinc-600 dark:text-zinc-400">GS Shop (2017.01 ~ 2022.04)</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-500 mt-2">개발 · 기획 · 마케팅 · 데이터 분석</p>
            </div>
            <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg">
              <h4 className="font-semibold text-zinc-900 dark:text-white mb-2">🏆 수상</h4>
              <p className="text-zinc-600 dark:text-zinc-400">최연소 GS SHOP Value #1</p>
              <p className="text-sm text-zinc-500 dark:text-zinc-500">(CEO 표창)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

