// pages/index.tsx
import Head from "next/head";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Sparkles, Mountain } from "lucide-react";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Paradise Retreat | 3D Entrance</title>
        <meta name="description" content="A luxury eco-resort experience like no other." />
      </Head>

      <main className="relative min-h-screen bg-gradient-to-tr from-blue-50 to-yellow-50 overflow-hidden">
        {/* 3D Entrance */}
        <AnimatePresence>
          {showIntro && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#1f1c2c] to-[#928DAB]"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="flex perspective-1000 w-full h-full items-center justify-center relative overflow-hidden">
                <motion.div
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: -90 }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                  className="w-1/2 h-full bg-[url('/door-left.jpg')] bg-cover bg-center shadow-2xl origin-right transform-style-preserve-3d"
                />
                <motion.div
                  initial={{ rotateY: 0 }}
                  animate={{ rotateY: 90 }}
                  transition={{ duration: 2, ease: "easeInOut", delay: 1 }}
                  className="w-1/2 h-full bg-[url('/door-right.jpg')] bg-cover bg-center shadow-2xl origin-left transform-style-preserve-3d"
                />
              </div>
              <motion.h1
                className="absolute text-white text-4xl md:text-5xl font-bold drop-shadow-2xl"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Welcome to Paradise Retreat
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Real Content */}
        {!showIntro && (
          <>
            <section className="pt-12 md:pt-20 px-6 text-center">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold text-teal-800 mb-4"
              >
                Nature’s Luxury Awaits
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-lg text-gray-600 max-w-xl mx-auto"
              >
                Step into tranquility at our eco-luxury resort nestled in the hills of India.
              </motion.p>

              <div className="flex justify-center mt-8 gap-4 flex-wrap">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-600"
                >
                  Explore Retreats
                </motion.button>
                <motion.a
                  href="/booking"
                  whileHover={{ scale: 1.1 }}
                  className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow hover:bg-teal-700"
                >
                  Book Now
                </motion.a>
              </div>
            </section>

            <section className="px-6 py-20">
              <h3 className="text-3xl font-semibold text-center text-teal-700 mb-10">
                What Makes Us Unique
              </h3>
              <div className="grid md:grid-cols-3 gap-10 text-center max-w-6xl mx-auto">
                {[
                  {
                    icon: <Mountain className="text-teal-600 w-10 h-10 mx-auto" />,
                    title: "Scenic Views",
                    desc: "Panoramic hillscapes and serene forest walks.",
                  },
                  {
                    icon: <Sparkles className="text-yellow-500 w-10 h-10 mx-auto" />,
                    title: "Eco Villas",
                    desc: "Modern comfort fused with nature's charm.",
                  },
                  {
                    icon: <Sun className="text-orange-400 w-10 h-10 mx-auto" />,
                    title: "Holistic Wellness",
                    desc: "Ayurvedic therapies, spa rituals, and meditation.",
                  },
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white p-8 rounded-xl shadow-lg"
                  >
                    {feature.icon}
                    <h4 className="text-xl font-bold text-teal-800 mt-4">{feature.title}</h4>
                    <p className="text-gray-600 mt-2">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </>
        )}
      </main>
    </>
  );
}
