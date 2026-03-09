'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { TickCircle } from 'iconsax-react'
import { COLORS } from '@/lib/constants'

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: 'forever',
    description: 'Perfect for individuals and small projects.',
    features: [
      '1 workspace',
      'Up to 5 users',
      '10GB storage',
      'Basic analytics',
      'Email support',
    ],
    cta: 'Get Started Free',
    href: '/register',
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    description: 'For growing teams that need more power.',
    features: [
      'Unlimited workspaces',
      'Up to 50 users',
      '100GB storage',
      'Advanced analytics',
      'Priority support',
      'Custom integrations',
      'API access',
    ],
    cta: 'Start 14-day Free Trial',
    href: '/register',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'Dedicated solutions for large organizations.',
    features: [
      'Unlimited everything',
      'Unlimited users',
      'Custom storage',
      'Custom analytics',
      'Dedicated support',
      'SLA guarantee',
      'On-premise option',
      'Custom contracts',
    ],
    cta: 'Contact Sales',
    href: '#',
    highlight: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-32 relative">
      <div className="absolute inset-0 bg-gray-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-emerald-400 text-sm font-semibold uppercase tracking-widest"
          >
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4"
          >
            Simple, transparent
            <span className="text-gradient"> pricing</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-xl mx-auto"
          >
            No hidden fees. No surprises. Start free and scale as you grow.
          </motion.p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-8 flex flex-col relative ${
                plan.highlight
                  ? 'bg-emerald-500/10 border-2 border-emerald-500/50'
                  : 'bg-gray-900/50 border border-gray-800'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-white font-bold text-xl mb-1">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-400 text-sm ml-2">/{plan.period}</span>
              </div>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <TickCircle size={18} color={COLORS.primary} variant="Bulk" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href={plan.href}>
                <Button
                  variant={plan.highlight ? 'primary' : 'outline'}
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