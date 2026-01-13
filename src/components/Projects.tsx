export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-12">Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-zinc-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600"></div>
            <div className="p-6">
              <h4 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">프로젝트 1</h4>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                Next.js와 TypeScript를 활용한 현대적인 웹 애플리케이션입니다.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full">Next.js</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full">TypeScript</span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full">Tailwind</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">Live Demo →</a>
                <a href="#" className="text-sm text-blue-600 dark:text-blue-400 hover:underline">GitHub →</a>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-green-500 to-teal-600"></div>
            <div className="p-6">
              <h4 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">프로젝트 2</h4>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                React와 Node.js를 사용한 풀스택 웹 애플리케이션입니다.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm rounded-full">React</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm rounded-full">Node.js</span>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-sm rounded-full">MongoDB</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-sm text-green-600 dark:text-green-400 hover:underline">Live Demo →</a>
                <a href="#" className="text-sm text-green-600 dark:text-green-400 hover:underline">GitHub →</a>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-orange-500 to-red-600"></div>
            <div className="p-6">
              <h4 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">프로젝트 3</h4>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                모바일 친화적인 반응형 웹 디자인을 구현한 프로젝트입니다.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm rounded-full">HTML</span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm rounded-full">CSS</span>
                <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 text-sm rounded-full">JavaScript</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-sm text-orange-600 dark:text-orange-400 hover:underline">Live Demo →</a>
                <a href="#" className="text-sm text-orange-600 dark:text-orange-400 hover:underline">GitHub →</a>
              </div>
            </div>
          </div>
          <div className="bg-white dark:bg-zinc-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="h-48 bg-gradient-to-br from-pink-500 to-rose-600"></div>
            <div className="p-6">
              <h4 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">프로젝트 4</h4>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                실시간 데이터 처리 및 시각화를 위한 대시보드 애플리케이션입니다.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 text-sm rounded-full">React</span>
                <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 text-sm rounded-full">D3.js</span>
                <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 text-sm rounded-full">WebSocket</span>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-sm text-pink-600 dark:text-pink-400 hover:underline">Live Demo →</a>
                <a href="#" className="text-sm text-pink-600 dark:text-pink-400 hover:underline">GitHub →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

