'use client'
import { motion } from 'framer-motion'
import { Flash, Shield, ChartSquare, Headphone, Global, Cpu } from 'iconsax-react'
import { COLORS } from '@/lib/constants'

const features = [
  {
    icon: <Flash size={24} color={COLORS.primary} variant="Bulk" />,
    title: 'Lightning Fast',
    description: 'Optimized performance with edge computing. Your app loads in milliseconds anywhere in the world.',
  },
  {
    icon: <Shield size={24} color={COLORS.primary} variant="Bulk" />,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, SOC2 compliant, and GDPR ready to keep your data safe.',
  },
  {
    icon: <ChartSquare size={24} color={COLORS.primary} variant="Bulk" />,
    title: 'Advanced Analytics',
    description: 'Real-time dashboards and insights to make data-driven decisions for your business.',
  },
  {
    icon: <Global size={24} color={COLORS.primary} variant="Bulk" />,
    title: 'Global Infrastructure',
    description: 'Deployed across 30+ regions worldwide for the lowest latency to your customers.',
  },
  {
    icon: <Cpu size={24} color={COLORS.primary} variant="Bulk" />,
    title: 'AI-Powered',
    description: 'Built-in AI tools to automate workflows, predict trends, and boost productivity.',
  },
  {
    icon: <Headphone size={24} color={COLORS.primary} variant="Bulk" />,
    title: '24/7 Support',
    description: 'Dedicated support team available around the clock to help you succeed.',
  },
]

export function Features() {
  return (
    <section id="features" className="py-32 relative">
      <div className="absolute inset-0 bg-gray-950" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-emerald-400 text-sm font-semibold uppercase tracking-widest"
          >
            Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4"
          >
            Everything you need to
            <span className="text-gradient"> scale globally</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-xl mx-auto"
          >
            All the tools and infrastructure you need to build, launch, and grow your SaaS business.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-900/50 border border-gray-800 rounded-2xl p-6 hover:border-emerald-500/30 hover:bg-gray-900 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4 group-hover:bg-emerald-500/20 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}