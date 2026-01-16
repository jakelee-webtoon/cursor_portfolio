export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-12">Skills</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
            <div className="text-3xl mb-4">⚛️</div>
            <h4 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Frontend</h4>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>React / Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </div>
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
            <div className="text-3xl mb-4">🔧</div>
            <h4 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Backend</h4>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>Node.js</li>
              <li>Express</li>
              <li>PostgreSQL</li>
              <li>MongoDB</li>
            </ul>
          </div>
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
            <div className="text-3xl mb-4">🛠️</div>
            <h4 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Tools</h4>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>Vercel</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

