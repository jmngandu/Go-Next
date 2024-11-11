// app/about/page.tsx
"use client";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-600">
          We are a passionate team of developers, designers, and innovators who
          strive to build beautiful and functional web experiences. Our mission
          is to create digital solutions that make people's lives easier and
          more enjoyable.
        </p>

        <div className="mt-8 text-center">
          <button
            onClick={() => router.push("/")}
            className="bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
}
