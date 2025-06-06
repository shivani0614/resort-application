// Example: pages/rooms.tsx
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Rooms() {
  return (
    <main className="p-8 min-h-screen bg-gradient-to-br from-white to-blue-50">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-bold text-teal-700 mb-6 text-center"
      >
        Our Rooms & Villas
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10">
        {[1, 2].map((room) => (
          <motion.div
            key={room}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 * room }}
            className="bg-white shadow-lg rounded-xl overflow-hidden"
          >
            <Image
              src={`/room${room}.jpg`}
              alt={`Room ${room}`}
              width={800}
              height={500}
              className="w-full object-cover h-64"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-teal-700 mb-2">Deluxe Room {room}</h2>
              <p className="text-gray-600">
                Spacious rooms with king-sized beds, private balcony, and hill view.
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

// Repeat similar layout for other pages like gallery.tsx, spa.tsx, contact.tsx
// and use appropriate images and texts accordingly.