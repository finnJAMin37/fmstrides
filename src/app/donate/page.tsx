"use client";

import Header from '../components/Header';
import Page from '../components/Page';
import FloatingImages from '../components/FloatingImages';

export default function Donate() {


  return (
    <div
      className="flex flex-col min-h-screen px-6 py-10 sm:px-20 gap-12"
      style={{ backgroundColor: "var(--color-background)", color: "var(--color-foreground)" }}
    >
      {/* Header */}
      <header className="w-full flex flex-col items-center justify-center text-center gap-4">
        <Header logo={true} title="Donate" />
        <nav className="flex flex-wrap justify-center gap-4">
          <Page label="Home" link="/" />
          <Page label="About" link="/about" />
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-center">
        <div className="max-w-2xl bg-[var(--color-accent)] p-6 rounded-2xl shadow-md">
          <h1 className="text-3xl font-semibold mb-4">Support Fort Mill Strides</h1>
          <p className="text-lg leading-relaxed mb-4">
            Your donation helps us provide shoes and gear to the youth who need it most.
            We’re committed to keeping running accessible for all.
          </p>
          <p className="text-lg leading-relaxed">
            Every dollar counts. <br />
            <a href="https://gofund.me/069fd927" className="text-blue-200 underline">Click here to donate</a> and help our runners go the distance.
          </p>
        </div>
      {/* GoFundMe Widget */}
      <iframe
        className="mt-8 rounded-2xl shadow-md"
        src="https://www.gofundme.com/f/FortMillStrides/widget/medium?"
        width="350"
        height="190"
        frameBorder="0"
        scrolling="no"
      />


      </main>
      <FloatingImages />
      {/* Footer */}
      <footer className="text-center text-sm text-[var(--color-foreground)] opacity-70">
        <p>© 2025 Fort Mill Strides</p>
      </footer>
    </div>
  );
}
