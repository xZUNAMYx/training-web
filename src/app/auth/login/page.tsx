"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/contexts/AuthContext"
import { Button } from "@/components/ui/button/button"
import { Input } from "@/components/ui/input/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card/card"
import { TopMenu } from "@/components/ui/top-menu/TopMenu"

export default function LoginPage() {
  const [name, setName] = useState("")
  const { login } = useAuth()
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name) {
      login({ id: Date.now().toString(), name })
      router.push("/")
    }
  }

  return (
    <>
    <TopMenu />
    <div className="container mx-auto px-1 py-3">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-2xl font-medium text-gray-700">
                User
              </label>
              <Input className="border border-primary bg-gray-300" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
              <label htmlFor="name" className="block text-2xl font-medium text-gray-700">
                Password
              </label>
              <Input className="border border-primary bg-gray-300" type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <Button className="text-white items-end" type="submit">Login</Button>
          </form>
        </CardContent>
      </Card>
    </div>
    </>
  )
}
