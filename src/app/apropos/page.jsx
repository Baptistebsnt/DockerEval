"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/solid";

export default function Apropos() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex items-center justify-center p-8 relative">
      <button
        onClick={() => router.back()}
        className="absolute top-4 left-4 flex items-center bg-white p-2 rounded-full shadow hover:bg-gray-200 transition"
        aria-label="Retour"
      >
        <ArrowLeftIcon className="h-6 w-6 text-blue-600" />
      </button>

      <div className="bg-white shadow-lg rounded-lg max-w-2xl p-10 text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
          À propos de cette application
        </h1>
        <p className="text-xl text-gray-600 mb-4">
          Bienvenue sur la page À propos de notre application.
        </p>
        <p className="text-lg text-gray-500 leading-relaxed">
          Cette application est construite avec <strong>Next.js 14</strong> en
          utilisant le nouveau <strong>App Router</strong>. Elle a pour but de
          démontrer comment conteneuriser une application web avec{" "}
          <strong>Docker</strong>.
        </p>
      </div>
    </div>
  );
}
