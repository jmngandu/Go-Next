"use client";
import { useRouter } from "next/navigation";
export default function about() {
  const router = useRouter();
  return (
    <>
      <h1>about us</h1>
      <button
        onClick={() => router.push("/")}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        go home
      </button>
    </>
  );
}
