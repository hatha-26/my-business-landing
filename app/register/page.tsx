'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Sms, Lock1, UserEdit, UserAdd } from 'iconsax-react'
import { COLORS } from '@/lib/constants'
import { registerUser } from '@/features/auth/actions'

export default function RegisterPage() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = e.currentTarget
    const result = await registerUser({
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      password: (form.elements.namedItem('password') as HTMLInputElement).value,
      confirmPassword: (form.elements.namedItem('confirmPassword') as HTMLInputElement).value,
    })

    if (result.success) {
      router.push('/login?registered=true')
    } else {
      setError(result.error)
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-slate-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-white font-bold text-2xl">
            MyBusiness
          </Link>
          <p className="text-slate-400 mt-2">Buat akun baru</p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <UserEdit size={16} color={COLORS.muted} /> Nama Lengkap
              </label>
              <Input name="name" type="text" placeholder="John Doe" required />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <Sms size={16} color={COLORS.muted} /> Email
              </label>
              <Input name="email" type="email" placeholder="john@email.com" required />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <Lock1 size={16} color={COLORS.muted} /> Password
              </label>
              <Input name="password" type="password" placeholder="Minimal 8 karakter" required />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                <Lock1 size={16} color={COLORS.muted} /> Konfirmasi Password
              </label>
              <Input name="confirmPassword" type="password" placeholder="Ulangi password" required />
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            <Button type="submit" variant="primary" size="lg" disabled={loading} className="mt-2">
              <span className="flex items-center justify-center gap-2">
                <UserAdd size={18} color="currentColor" />
                {loading ? 'Memproses...' : 'Daftar Sekarang'}
              </span>
            </Button>
          </form>

          <p className="text-center text-slate-400 text-sm mt-6">
            Sudah punya akun?{' '}
            <Link href="/login" className="text-blue-400 hover:text-blue-300">
              Masuk di sini
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}