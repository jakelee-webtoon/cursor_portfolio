export default function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-12">Contact</h3>
        <div className="max-w-2xl">
          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-8">
            프로젝트나 협업 기회에 대해 이야기 나누고 싶으시다면 언제든 연락주세요!
          </p>
          <div className="space-y-4">
            <a href="mailto:jake@example.com" className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <span className="text-2xl">📧</span>
              <span>jake@example.com</span>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <span className="text-2xl">💻</span>
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
              <span className="text-2xl">💼</span>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

