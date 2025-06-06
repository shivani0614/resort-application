// File: pages/index.tsx
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Sun, Mountain, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [doorsOpen, setDoorsOpen] = useState(false);
  const router = useRouter();
  // useEffect(() => {
  //   // Open doors after a short delay (e.g. 1 second)
  //   const timer = setTimeout(() => setDoorsOpen(true), 1000)
  //   return () => clearTimeout(timer)
  // }, [])
  useEffect(() => {
    // Start opening doors animation immediately
    setDoorsOpen(true);

    // Navigate to /home after the animation duration (3 seconds + small buffer)
    const timeout = setTimeout(() => {
      router.push("/"); // Change '/home' if your actual home page is at another route
    }, 3100); // 3100 ms matches 3 seconds animation duration + 100 ms buffer

    // Cleanup timeout if component unmounts before timeout fires
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <>
      <Head>
        <title>Paradise Retreat – Luxury Resort in India</title>
        <meta
          name="description"
          content="Escape to nature with Paradise Retreat – a luxury eco-resort in India."
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-blue-100 to-yellow-50 text-gray-800 relative overflow-hidden">
        {/* Doors Animation */}
        <AnimatePresence>
          {!doorsOpen && (
            <>
              {/* Left Door */}
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "-100%" }}
                exit={{ x: "-100%" }}
                transition={{ duration: 3, ease: "easeInOut" }}
                className="fixed top-0 left-0 w-1/2 h-screen z-50 origin-left relative"
                style={{
                  backgroundImage: "url('/door-texture.avif')",
                  backgroundSize: "center",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  boxShadow: "inset -5px 0 15px rgba(0, 0, 0, 0.5)",
                  borderRight: "4px solid #5a3e1b",
                }}
              >
                {/* Left door handle */}
                <div
                  className="absolute top-1/2 right-8 w-6 h-16 rounded-lg bg-yellow-700 shadow-lg"
                  style={{ transform: "translateY(-50%)" }}
                />
              </motion.div>

              {/* Right Door */}
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: "100%" }}
                exit={{ x: "100%" }}
                transition={{ duration: 3, ease: "easeInOut" }}
                className="fixed top-0 right-0 w-1/2 h-screen z-50 origin-right relative"
                style={{
                  backgroundImage: "url('/door-texture.avif')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  boxShadow: "inset 5px 0 15px rgba(0, 0, 0, 0.5)",
                  borderLeft: "4px solid #5a3e1b",
                }}
              >
                {/* Right door handle */}
                <div
                  className="absolute top-1/2 left-8 w-6 h-16 rounded-lg bg-yellow-700 shadow-lg"
                  style={{ transform: "translateY(-50%)" }}
                />
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Actual Page Content */}
        {doorsOpen && (
          <>
            {/* Header */}
            <header className="flex justify-between items-center p-6 shadow bg-white z-10 relative">
              <h1 className="text-2xl font-bold flex items-center gap-2 text-teal-600">
                <Sun className="text-yellow-400" />
                Paradise Retreat
              </h1>
              <nav className="flex gap-6 text-sm font-medium">
                <Link href="/" className="hover:text-teal-700">
                  Home
                </Link>
                <Link href="/rooms" className="hover:text-teal-700">
                  Rooms
                </Link>
                <Link href="/gallery" className="hover:text-teal-700">
                  Gallery
                </Link>
                <Link href="/spa" className="hover:text-teal-700">
                  Spa
                </Link>
                <Link href="/contact" className="hover:text-teal-700">
                  Contact
                </Link>
              </nav>
            </header>

            {/* Hero Section */}
            <section className="grid md:grid-cols-2 items-center px-8 py-16 gap-10 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold text-teal-800 mb-4">
                  Luxury in Nature
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Welcome to Paradise Retreat — a luxury resort nestled in the
                  hills of India. Discover wellness, adventure, and peace.
                </p>
                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
                  Explore Packages
                </button>
              </motion.div>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <Image
                  src="/resort-hero.jpg"
                  alt="Resort"
                  width={800}
                  height={500}
                  className="rounded-3xl shadow-lg w-full"
                />
              </motion.div>
            </section>

            {/* Features Section */}
            <section className="px-8 pb-20 relative z-10">
              <h3 className="text-3xl font-semibold text-center text-teal-700 mb-10">
                Why Choose Us
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    icon: <Mountain className="text-teal-500 w-10 h-10" />,
                    title: "Scenic Views",
                    desc: "Wake up to India’s most beautiful landscapes.",
                  },
                  {
                    icon: <Sparkles className="text-yellow-500 w-10 h-10" />,
                    title: "Luxury Villas",
                    desc: "Eco-luxury stays with all modern comforts.",
                  },
                  {
                    icon: <Sun className="text-orange-400 w-10 h-10" />,
                    title: "Wellness Spa",
                    desc: "Ayurvedic treatments & yoga by certified experts.",
                  },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-xl shadow-md p-6 text-center"
                  >
                    <div className="mb-4">{feature.icon}</div>
                    <h4 className="font-bold text-xl text-teal-700">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 mt-2">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            <footer className="text-center text-gray-500 py-8 border-t relative z-10">
              © 2025 Paradise Retreat, India
            </footer>
          </>
        )}
      </main>
    </>
  );
}
