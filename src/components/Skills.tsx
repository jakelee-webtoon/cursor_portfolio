export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-12">Skills & Expertise</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
            <div className="text-3xl mb-4">📊</div>
            <h4 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Data & Analytics</h4>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>SQL / BigQuery</li>
              <li>Python / Pandas</li>
              <li>Tableau / Looker</li>
              <li>GA / Firebase</li>
              <li>A/B Testing</li>
            </ul>
          </div>
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
            <div className="text-3xl mb-4">🚀</div>
            <h4 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Growth & Marketing</h4>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>Growth Hacking</li>
              <li>CRM / Marketing Automation</li>
              <li>User Behavior Analysis</li>
              <li>Performance Marketing</li>
              <li>Ads Intelligence</li>
            </ul>
          </div>
          <div className="p-6 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-colors">
            <div className="text-3xl mb-4">💻</div>
            <h4 className="text-xl font-semibold text-zinc-900 dark:text-white mb-3">Development</h4>
            <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
              <li>Backend Development</li>
              <li>Web / App Development</li>
              <li>API Design</li>
              <li>SaaS / IaaS</li>
              <li>Git / Docker</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

