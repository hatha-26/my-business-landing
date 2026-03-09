'use client'
import { motion } from 'framer-motion'
import { People, Global, Chart, Cup } from 'iconsax-react'
import { COLORS } from '@/lib/constants'

const stats = [
  { icon: <People size={24} color={COLORS.primary} variant="Bulk" />, value: '10,000+', label: 'Active Users' },
  { icon: <Global size={24} color={COLORS.primary} variant="Bulk" />, value: '50+', label: 'Countries' },
  { icon: <Chart size={24} color={COLORS.primary} variant="Bulk" />, value: '$2M+', label: 'Revenue Processed' },
  { icon: <Cup size={24} color={COLORS.primary} variant="Bulk" />, value: '99.9%', label: 'Uptime SLA' },
]

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="absolute inset-0 bg-gray-950" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-emerald-400 text-sm font-semibold uppercase tracking-widest"
            >
              About Us
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-white mt-3 mb-6 leading-tight"
            >
              Built for the
              <span className="text-gradient"> next generation</span>
              {' '}of businesses
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-6"
            >
              We started with a simple mission: make it easy for any business to operate globally. 
              Today, thousands of companies use our platform to manage their operations, 
              payments, and growth — all in one place.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 text-lg leading-relaxed"
            >
              Our team of 50+ engineers, designers, and business experts work tirelessly 
              to build the tools you need to succeed in today's competitive landscape.
            </motion.p>
          </div>

          {/* Right — Stats */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                  {stat.icon}
                </div>
                <p className="text-3xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}