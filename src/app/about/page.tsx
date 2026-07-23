export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-8">About The MCU Chronicle</h1>
        
        <section className="mb-12 prose prose-invert">
          <p className="text-lg leading-relaxed text-mcu-primary/80">
            The MCU Chronicle is an interactive, cinematic guide to the Marvel Cinematic Universe. 
            Built for fans, by fans, it aims to provide a comprehensive, spoiler-safe way to explore 
            the vast interconnected web of characters, films, events, and artifacts that make up the MCU.
          </p>
          <p className="text-lg leading-relaxed text-mcu-primary/80 mt-4">
            This project leverages modern web technologies including Next.js, React Three Fiber, 
            and Zustand to create an immersive, app-like experience right in your browser.
          </p>
        </section>
      </div>
    </main>
  );
}
