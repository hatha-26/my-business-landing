'use client'
import { useState, Suspense } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter, useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Sms, Lock1, Login } from 'iconsax-react'
import { COLORS } from '@/lib/constants'

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const registered = searchParams.get('registered')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = e.currentTarget
    const result = await signIn('credentials', {
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      password: (form.elements.namedItem('password') as HTMLInputElement).value,
      redirect: false,
    })

    if (result?.ok) {
      router.push('/dashboard')
    } else {
      setError('Email atau password salah')
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
          <p className="text-slate-400 mt-2">Masuk ke akun kamu</p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
          {registered && (
            <div className="bg-green-500/20 border border-green-500/30 text-green-400 text-sm px-4 py-3 rounded-xl mb-4 text-center">
              ✅ Akun berhasil dibuat! Silakan masuk.
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
              <Input name="password" type="password" placeholder="Password kamu" required />
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            <Button type="submit" variant="primary" size="lg" disabled={loading} className="mt-2">
              <span className="flex items-center justify-center gap-2">
                <Login size={18} color="currentColor" />
                {loading ? 'Memproses...' : 'Masuk'}
              </span>
            </Button>
          </form>

          <p className="text-center text-slate-400 text-sm mt-6">
            Belum punya akun?{' '}
            <Link href="/register" className="text-blue-400 hover:text-blue-300">
              Daftar gratis
            </Link>
          </p>
        </div>
      </div>
    </main>
  )
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  )
}