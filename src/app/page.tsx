import Header from './components/Header';
import Page from './components/Page';
import FloatingImages from './components/FloatingImages';

export default function Home() {
  return (
    <div
      className="flex flex-col min-h-screen px-6 py-10 sm:px-20 gap-12"
      style={{ backgroundColor: "var(--color-background)", color: "var(--color-foreground)" }}
    >
      
      {/* Header */}
      <header className="w-full flex flex-col items-center text-center gap-4">
        <Header logo={true} title="Home" />
        <nav className="flex flex-wrap justify-center gap-4">
          <Page label="Donate" link="/donate" />
          <Page label="About" link="/about" />
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center text-center">
        <div className="max-w-2xl bg-[var(--color-accent)] p-6 rounded-2xl shadow-md">
          <h1 className="text-3xl font-semibold mb-4">Welcome to Fort Mill Strides</h1>
          <p className="text-lg leading-relaxed mb-4">
            Fort Mill Strides works with high school students of the local area to provide
            curated and free shoes to those who need it most. Working with Charlotte Running Company,
            we provide professional fittings to enable every kid to find their perfect shoe. 
          </p>
          <p className="text-lg leading-relaxed">
            Ready to lace up? <br />
            <a href="/about" className="text-blue-200 underline">Learn More</a> or <a href="/donate" className="text-blue-200 underline">Support the Team</a>
          </p>
        </div>
      </main>

      <FloatingImages /> 

      {/* Footer */}
      <footer className="text-center text-sm text-[var(--color-foreground)] opacity-70">
        <p>© 2025 Fort Mill Strides</p>
      </footer>
    </div>
  );
}
