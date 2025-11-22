import Header from "../components/Header"
import Page from "../components/Page"
import FloatingImages from "../components/FloatingImages"

export default function About() {
  return (
    <div className="flex flex-col min-h-screen px-6 py-10 sm:px-20 gap-12"
        style={{ backgroundColor: "var(--color-background)", color: "var(--color-foreground)" }}>

    
    {/* Header */}
    <header className="w-full flex flex-col items-center text-center gap-4">
        <Header logo={true} title="About Us"/>
        <nav className="flex flex-wrap justify-center gap-4">
        <Page label="Home" link="/" />
        <Page label="Donate" link="/donate" />
        </nav>
    </header>

    {/* Main Content */}
    <main className="flex-grow flex items-center justify-center text-center">
    <div className="max-w-2xl bg-[var(--color-accent)] p-6 rounded-2xl shadow-md">
        <h1 className="text-3xl font-semibold mb-4">About Fort Mill Strides</h1>
        <p className="text-lg leading-relaxed mb-4">
        Fort Mill Strides is a non-profit organization built to support the local community.
        Working with Local Leaders, we connect with high school students who need it the most.
        Using the space provided by Charlotte Running Company, we are able to provide the full experience.
        </p>
        <p className="text-lg leading-relaxed">
        Founded by young athletes, for young athletes. <br />
        <a href="/donate" className="text-blue-200 underline">Support the mission</a>.
        </p>
    </div>
    </main>
    <FloatingImages /> {/* <-- Add this line to render the floating images */}
    {/* Footer */}
    <footer className="text-center text-sm text-[var(--color-foreground)] opacity-70">
        <p>© 2025 Fort Mill Strides</p>
    </footer>
    </div>
  )
}
