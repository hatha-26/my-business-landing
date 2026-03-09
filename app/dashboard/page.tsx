import { getServerSession } from 'next-auth'
import { authOptions } from '@/server/auth/config'
import { redirect } from 'next/navigation'
import { LogoutButton } from '@/components/ui/LogoutButton'
import { People, Box, Money, Chart, Setting2 } from 'iconsax-react'
import { COLORS } from '@/lib/constants'

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/login')
  }

  return (
    <main className="min-h-screen bg-slate-900">
      {/* Header */}
      <nav className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <span className="text-white font-bold text-xl">Soun</span>
        <div className="flex items-center gap-4">
          <span className="text-slate-400 text-sm">{session.user?.email}</span>
          <LogoutButton />
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-white mb-2">
          Selamat datang, {session.user?.name ?? 'User'}! 👋
        </h1>
        <p className="text-slate-400 mb-10">Ini adalah dashboard bisnis kamu.</p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Total Pengguna', value: '1', icon : <People size={28} color={COLORS.primary} variant="Bulk" /> },
            { label: 'Produk Aktif', value: '0', icon : <Box size={28} color={COLORS.primary} variant="Bulk" /> },
            { label: 'Pendapatan', value: 'Rp 0', icon: <Money size={28} color={COLORS.primary} variant="Bulk" /> },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-6"
            >
              <div className="text-3xl mb-3">{stat.icon}</div>
              <p className="text-slate-400 text-sm">{stat.label}</p>
              <p className="text-white text-2xl font-bold mt-1">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <h2 className="text-white font-semibold text-lg mb-4">Menu Cepat</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Analitik', icon: <Chart size={24} color={COLORS.primary} variant="Bulk" /> },
            { label: 'Produk', icon: <Box size={24} color={COLORS.primary} variant="Bulk" /> },
            { label: 'Pengguna', icon: <People size={24} color={COLORS.primary} variant="Bulk" /> },
            { label: 'Pengaturan', icon: <Setting2 size={24} color={COLORS.primary} variant="Bulk" /> },
          ].map((item) => (
            <button
              key={item.label}
              className="bg-slate-800 border border-slate-700 rounded-2xl p-5 flex flex-col items-center gap-3 hover:border-blue-500/50 hover:-translate-y-1 transition-all"
            >
              {item.icon}
              <span className="text-slate-300 text-sm">{item.label}</span>
            </button>
          ))}
        </div>
      </div>
    </main>
  )
}