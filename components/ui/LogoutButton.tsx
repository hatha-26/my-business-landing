'use client'
import { signOut } from 'next-auth/react'
import { Button } from './Button'

export function LogoutButton() {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => signOut({ callbackUrl: '/' })}
    >
      Keluar
    </Button>
  )
}