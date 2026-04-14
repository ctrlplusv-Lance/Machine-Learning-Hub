import Link from 'next/link';

const features = [
  { icon: '🧠', title: 'LANCE', desc: 'Explore deep learning architectures.' },
  { icon: '📊', title: 'IAN', desc: 'Turn datasets into clear insights.' },
  { icon: '🤖', title: 'EIMAN', desc: 'Build and evaluate ML models.' },
  { icon: '🚀', title: 'MOQUERIO', desc: 'Deploy models with confidence.' },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-black text-gray-300">
      <nav className="border-b border-gray-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🧠</span>
          <span className="text-white font-bold tracking-tight">ML Hub</span>
        </div>
        <Link href="/login" className="text-sm text-gray-400 hover:text-white">
          Sign In →
        </Link>
      </nav>

      <section className="flex-1 flex flex-col items-center justify-center text-center px-6 py-24">
        <span className="mb-6 inline-flex rounded-full border border-gray-700 bg-gray-900 px-3 py-1 text-xs uppercase tracking-wide text-gray-400">
          Now Live on Vercel
        </span>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          Machine <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500">Learning</span> Hub
        </h1>

        <p className="max-w-xl text-gray-400 text-lg leading-relaxed mb-10">
          A clean, simple platform for learning machine learning with
          <span className="text-white font-medium"> Supabase Auth</span> and
          <span className="text-white font-medium"> Next.js</span>.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/login" className="rounded-lg bg-white px-8 py-3 text-sm font-semibold text-black hover:bg-gray-200">
            Get Started
          </Link>
          <a href="#features" className="rounded-lg border border-gray-700 px-8 py-3 text-sm text-gray-300 hover:border-gray-500 hover:text-white">
            Learn More
          </a>
        </div>
      </section>

      <section id="features" className="px-6 pb-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-sm font-semibold uppercase tracking-widest text-gray-500">
            What's Inside
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-xl border border-gray-800 bg-gray-950 p-5 text-left">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gray-900 bg-gray-950 px-6 py-10">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-6 text-sm text-gray-600">
          <span className="text-white font-medium">Browser</span>
          <span>→</span>
          <span className="text-white font-medium">Next.js Frontend</span>
          <span>→</span>
          <span className="text-white font-medium">Supabase Auth</span>
        </div>
      </section>

      <footer className="border-t border-gray-900 px-6 py-6 text-center text-xs text-gray-500">
        Created by Lance Ian Eiman Moquerio
      </footer>
    </main>
  );
}
