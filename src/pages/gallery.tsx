// File: pages/gallery.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Gallery() {
  const images = [
    '/gallery1.jpg',
    '/gallery2.jpg',
    '/gallery3.jpg',
    '/gallery4.jpg'
  ];

  return (
    <main className="p-8 min-h-screen bg-gradient-to-bl from-blue-50 to-white">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-teal-700 mb-10 text-center"
      >
        Resort Gallery
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, i) => (
          <motion.div
            key={src}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="overflow-hidden rounded-xl shadow-lg"
          >
            <Image
              src={src}
              alt={`Gallery image ${i + 1}`}
              width={400}
              height={300}
              className="w-full h-64 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </main>
  );
}