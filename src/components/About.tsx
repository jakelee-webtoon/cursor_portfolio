export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-12">About Me</h3>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              저는 데이터를 쉽게 활용하고 누구나 다룰수 있는 환경을 만들고 싶습니다. 
              다양한 Data Product에 대한 기획과 데이터 환경 개선을 하고 있습니다.
            </p>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
              끊임없이 배우고 성장하며, 팀과 협력하여 
              더 나은 제품을 만들어가는 것에 보람을 느낍니다.
            </p>
          </div>
          <div className="space-y-4">
            <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg">
              <h4 className="font-semibold text-zinc-900 dark:text-white mb-2">🎓 교육</h4>
              <p className="text-zinc-600 dark:text-zinc-400">정보시스템 전공</p>
            </div>
            <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg">
              <h4 className="font-semibold text-zinc-900 dark:text-white mb-2">💼 경력</h4>
              <p className="text-zinc-600 dark:text-zinc-400">백엔드 개발 경험<br />데이터 분석 경험 <br /> CRM 경험</p>   
            </div>
            <div className="p-6 bg-white dark:bg-zinc-800 rounded-lg">
              <h4 className="font-semibold text-zinc-900 dark:text-white mb-2">📍 위치</h4>
              <p className="text-zinc-600 dark:text-zinc-400">서울, 대한민국</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

