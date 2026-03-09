'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Play } from 'iconsax-react'
import { SITE, COLORS } from '@/lib/constants'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gray-950" />
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-emerald-600/5 rounded-full blur-[80px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm px-4 py-2 rounded-full mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Now available globally — Start free today
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight"
        >
          {SITE.tagline.split(' ').slice(0, 2).join(' ')}
          <br />
          <span className="text-gradient">{SITE.tagline.split(' ').slice(2).join(' ')}</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          {SITE.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <Link href="/register">
            <Button variant="primary" size="lg">
              <span className="flex items-center gap-2">
                Start for Free
                <ArrowRight size={18} color="currentColor" />
              </span>
            </Button>
          </Link>
          <Button variant="outline" size="lg">
            <span className="flex items-center gap-2">
              <Play size={18} color="currentColor" />
              Watch Demo
            </span>
          </Button>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {['A', 'B', 'C', 'D'].map((l) => (
                <div key={l} className="w-8 h-8 rounded-full bg-emerald-500/20 border-2 border-gray-950 flex items-center justify-center text-xs text-emerald-400 font-bold">
                  {l}
                </div>
              ))}
            </div>
            <span>1,000+ businesses trust us</span>
          </div>
          <span className="hidden sm:block text-gray-700">•</span>
          <span>⭐⭐⭐⭐⭐ 4.9/5 rating</span>
          <span className="hidden sm:block text-gray-700">•</span>
          <span>No credit card required</span>
        </motion.div>
      </div>
    </section>
  )
}