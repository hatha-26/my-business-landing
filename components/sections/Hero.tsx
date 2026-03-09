'use client'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16">
      <div className="text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm px-4 py-1.5 rounded-full mb-6"
        >
          🚀 Platform Bisnis Modern
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Kembangkan Bisnis
          <span className="text-blue-500"> Lebih Cepat</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto"
        >
          Platform all-in-one untuk mengelola, mengembangkan, dan menganalisis bisnis kamu dengan mudah.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/register">
            <Button variant="primary" size="lg">Mulai Gratis Sekarang</Button>
          </Link>
          <Link href="#features">
            <Button variant="outline" size="lg">Lihat Fitur</Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}