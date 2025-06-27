import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="p-8 min-h-screen bg-gradient-to-tr from-yellow-50 to-white flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-teal-700 mb-8 text-center"
      >
        Contact Us
      </motion.h1>

      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-xl bg-white shadow-lg rounded-xl p-8 space-y-6"
      >
        <input
  type="text"
  placeholder="Your Name"
  className="w-full border border-gray-300 p-3 rounded-md text-teal-700 placeholder-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
/>

<input
  type="email"
  placeholder="Your Email"
  className="w-full border border-gray-300 p-3 rounded-md text-teal-700 placeholder-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
/>

<textarea
  rows={5}
  placeholder="Your Message"
  className="w-full border border-gray-300 p-3 rounded-md text-teal-700 placeholder-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
/>


        <button
          type="submit"
          className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 transition"
        >
          Send Message
        </button>
      </motion.form>
    </div>
  );
}
