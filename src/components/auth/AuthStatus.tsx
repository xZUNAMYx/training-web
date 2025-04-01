"use client"

import Link from "next/link"
import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button/button"
import { UserMenu } from "@/components/userMenu/UserMenu"

export function AuthStatus() {
  const { user } = useAuth()

  if (user) {
    return <UserMenu />
  }

  return (
    <Button
    //   asChild
      variant="outline"
      className="text-white border-white"
    >
      <Link href="/login">Login</Link>
    </Button>
  )
}

