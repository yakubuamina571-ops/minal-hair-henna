export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-4xl font-bold text-purple-700 mb-4">Hair & Henna Fusion</h1>
      <p className="text-lg max-w-2xl">
        Empowering women in Dutse, Jigawa through bridal hairstyling and henna artistry.
      </p>
      <nav className="mt-6 flex gap-6">
        <a href="/about" className="text-purple-600 hover:underline">About</a>
        <a href="/portfolio" className="text-purple-600 hover:underline">Portfolio</a>
      </nav>
    </main>
  );
}
