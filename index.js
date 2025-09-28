
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white text-gray-800">
      <header className="bg-purple-700 text-white p-6 shadow-md sticky top-0 z-50">
        <h1 className="text-3xl font-bold">Minal Hair & Henna Fusion</h1>
        <p className="text-sm">Where Beauty Meets Art</p>
      </header>

      <section className="text-center py-12 px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-4"
        >
          Your One-Stop Beauty Spot
        </motion.h2>
        <p className="max-w-xl mx-auto text-lg mb-6">
          We specialize in professional hair braiding and stunning henna designs that highlight your natural beauty.
        </p>
        <a href="https://wa.me/+2347034199491">
          <button className="bg-purple-600 text-white text-lg px-6 py-3 rounded-2xl shadow-md hover:bg-purple-800">
            Book Appointment
          </button>
        </a>
      </section>

      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Our Portfolio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="shadow-lg rounded-2xl overflow-hidden bg-white">
            <Image src="/images/1001250617.jpg" alt="Braided Hairstyle" width={400} height={400} className="w-full h-64 object-cover" />
            <p className="text-center py-3 font-semibold">Braided Hairstyle</p>
          </div>

          <div className="shadow-lg rounded-2xl overflow-hidden bg-white">
            <Image src="/images/1001022950.jpg" alt="Henna with Bangles" width={400} height={400} className="w-full h-64 object-cover" />
            <p className="text-center py-3 font-semibold">Henna with Bangles</p>
          </div>

          <div className="shadow-lg rounded-2xl overflow-hidden bg-white">
            <Image src="/images/1000782309.jpg" alt="Floral Henna Design" width={400} height={400} className="w-full h-64 object-cover" />
            <p className="text-center py-3 font-semibold">Floral Henna Design</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Get in Touch</h2>
        <div className="max-w-xl mx-auto text-center space-y-4">
          <p><b>Phone:</b> 07034199491</p>
          <p><b>Email:</b> <a href="mailto:yakubuamina571@gmail.com" className="text-purple-700 underline">yakubuamina571@gmail.com</a></p>
          <p><b>WhatsApp:</b> <a href="https://wa.me/+2347034199491" className="text-green-600 underline">Chat with us</a></p>
        </div>
      </section>

      <footer className="bg-purple-700 text-white py-6 text-center mt-12">
        <p>© {new Date().getFullYear()} Minal Hair & Henna Fusion. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
