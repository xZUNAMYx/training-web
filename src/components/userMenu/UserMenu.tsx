"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button/button"
import { ChevronDown } from "lucide-react"
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation"

export function UserMenu() {
  const { user, logout } = useAuth()
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = () => {
    logout()
    router.push("/")
    setIsOpen(false)
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleMenuItemClick = (action: () => void) => {
    action()
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <Button variant="default" className="text-primary-foreground flex items-center" onClick={toggleMenu}>
        {user?.name} <ChevronDown className="ml-2 h-4 w-4" />
      </Button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white z-50">
            <div className="border border-primary">
              <button
                className="block w-full text-left px-4 py-2 text-sm hover:bg-primary text-black hover:text-white border border-white"
                onClick={() => handleMenuItemClick(() => router.push("/profile"))}
              >
                Perfil
              </button>

              <button className="block w-full text-left px-4 py-2 text-sm hover:bg-primary text-black hover:text-white border border-white">Conferencias</button>

              <button className="block w-full text-left px-4 py-2 text-sm hover:bg-primary text-black hover:text-white border border-white">Acerca del Curso</button>

              <div className="border-t my-1"></div>

              <button className="block w-full text-left px-4 py-2 text-sm hover:bg-primary text-black hover:text-white border border-white">
                Cambiar de Institución
              </button>

              <button className="block w-full text-left px-4 py-2 text-sm hover:bg-primary text-black hover:text-white border border-white">
                Ingresar como estudiante
              </button>

              <button className="block w-full text-left px-4 py-2 text-sm hover:bg-primary text-black hover:text-white border border-white">Cambiar contraseña</button>

              <button className="block w-full text-left px-4 py-2 text-sm hover:bg-primary text-black hover:text-white border border-white" onClick={handleLogout}>
                Cerrar sesión
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

