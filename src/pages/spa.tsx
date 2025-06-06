import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Spa() {
  return (
    <main className="p-8 min-h-screen bg-gradient-to-bl from-pink-50 to-white">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-pink-700 mb-10 text-center"
      >
        Spa & Wellness
      </motion.h1>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <Image
            src="/spa1.jpg"
            alt="Spa Treatment"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex-1"
        >
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">Rejuvenate Naturally</h2>
          <p className="text-gray-700 leading-relaxed">
            Our spa offers holistic Ayurvedic treatments, deep tissue massages, and refreshing therapies.
            Find peace with yoga sessions by certified instructors in a serene, hilltop pavilion.
          </p>
        </motion.div>
      </div>
    </main>
  );
}