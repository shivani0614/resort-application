import Link from "next/link";
import { Sun } from "lucide-react";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="fixed w-full top-0 z-40 bg-white/50 backdrop-blur-lg border-b border-gray-200 shadow">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center gap-2 text-teal-800">
            <Sun className="text-yellow-500" />
            Paradise Retreat
          </h1>
          <nav className="hidden md:flex gap-6 font-medium text-gray-700 items-center">
            <Link href="/">Home</Link>
            <Link href="/rooms">Rooms</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/spa">Spa</Link>
            <Link href="/contact">Contact</Link>
            <Link
              href="/booking"
              className="ml-4 bg-orange-500 text-white px-4 py-2 rounded-lg shadow hover:bg-orange-600 transition"
            >
              Book Now
            </Link>
          </nav>
        </div>
      </header>

      <main className="pt-24">{children}</main>

      <footer className="text-center text-gray-400 py-8 border-t">
        © 2025 Paradise Retreat
      </footer>
    </>
  );
}
