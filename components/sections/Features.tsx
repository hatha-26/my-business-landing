'use client'
import { motion } from 'framer-motion'
import { Flash, Shield, ChartSquare, Headphone } from 'iconsax-react'

const features = [
  {
    icon: <Flash size={32} color="#3b82f6" variant="Bulk" />,
    title: 'Cepat & Efisien',
    description: 'Kelola semua kebutuhan bisnis dalam satu platform yang ringan dan responsif.',
  },
  {
    icon: <Shield size={32} color="#3b82f6" variant="Bulk" />,
    title: 'Aman & Terpercaya',
    description: 'Data kamu dilindungi dengan enkripsi tingkat enterprise.',
  },
  {
    icon: <ChartSquare size={32} color="#3b82f6" variant="Bulk" />,
    title: 'Analitik Lengkap',
    description: 'Pantau perkembangan bisnis dengan dashboard dan laporan real-time.',
  },
  {
    icon: <Headphone size={32} color="#3b82f6" variant="Bulk" />,
    title: 'Dukungan 24/7',
    description: 'Tim kami siap membantu kamu kapan saja dan di mana saja.',
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Kenapa Pilih Kami?
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Semua yang kamu butuhkan untuk mengembangkan bisnis ada di sini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}