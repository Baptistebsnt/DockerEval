import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <header className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          Bienvenue dans l'application Next.js
        </h1>
        <p className="text-xl mb-6">
          Découvrez comment créer une application moderne avec Next.js et
          Docker.
        </p>
      </header>

      <nav className="flex space-x-4">
        <Link href="/apropos">
          <a className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow-lg hover:bg-gray-200 transition">
            À propos
          </a>
        </Link>
      </nav>

      <footer className="absolute bottom-5 text-center">
        <p className="text-sm">
          Fait avec <span className="text-red-500">❤</span> par Baptiste
          Boissonnet.
        </p>
      </footer>
    </div>
  );
}
