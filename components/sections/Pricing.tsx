'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const plans = [
  {
    name: 'Gratis',
    price: 'Rp 0',
    period: 'selamanya',
    description: 'Cocok untuk memulai bisnis kecil',
    features: ['1 pengguna', '5 produk', 'Laporan dasar', 'Email support'],
    cta: 'Mulai Gratis',
    href: '/register',
    highlight: false,
  },
  {
    name: 'Pro',
    price: 'Rp 99.000',
    period: 'per bulan',
    description: 'Untuk bisnis yang sedang berkembang',
    features: ['10 pengguna', 'Produk unlimited', 'Analitik lengkap', 'Priority support', 'Custom domain'],
    cta: 'Coba 14 Hari Gratis',
    href: '/register',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'hubungi kami',
    description: 'Solusi khusus untuk bisnis besar',
    features: ['Pengguna unlimited', 'Semua fitur Pro', 'Dedicated support', 'SLA guarantee', 'On-premise option'],
    cta: 'Hubungi Kami',
    href: '#',
    highlight: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-950">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Harga Transparan</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan bisnis kamu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 flex flex-col ${
                plan.highlight
                  ? 'bg-blue-600 border-2 border-blue-400 scale-105'
                  : 'bg-slate-800 border border-slate-700'
              }`}
            >
              {plan.highlight && (
                <span className="text-xs font-bold bg-white text-blue-600 px-3 py-1 rounded-full self-start mb-4">
                  PALING POPULER
                </span>
              )}

              <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
              <p className={`text-sm mb-4 ${plan.highlight ? 'text-blue-100' : 'text-slate-400'}`}>
                {plan.description}
              </p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className={`text-sm ml-2 ${plan.highlight ? 'text-blue-100' : 'text-slate-400'}`}>
                  /{plan.period}
                </span>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <span className="text-green-400">✓</span>
                    <span className={`text-sm ${plan.highlight ? 'text-blue-50' : 'text-slate-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link href={plan.href}>
                <Button
                  variant={plan.highlight ? 'secondary' : 'outline'}
                  size="md"
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}