"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Clock, Mail } from "lucide-react"
import Link from "next/link"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => setIsOpen(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-left">DrainMaster Express</SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-6">
          {/* Navigation Links */}
          <nav className="space-y-4">
            <Link
              href="#services"
              className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
              onClick={closeMenu}
            >
              Servicii
            </Link>
            <Link
              href="#coverage"
              className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
              onClick={closeMenu}
            >
              Zone Deservite
            </Link>
            <Link
              href="#about"
              className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
              onClick={closeMenu}
            >
              Despre Noi
            </Link>
            <Link
              href="#contact"
              className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link
              href="/privacy-policy"
              className="block text-sm text-gray-600 hover:text-blue-600 transition-colors"
              onClick={closeMenu}
            >
              Confidențialitate
            </Link>
          </nav>

          {/* Emergency Contact */}
          <div className="border-t pt-6">
            <h3 className="font-semibold text-gray-900 mb-4">Contact Urgență</h3>
            <div className="space-y-3">
              <a
                href="tel:+40123456789"
                className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
              >
                <Phone className="h-5 w-5 text-blue-600" />
                <div>
                  <p className="font-semibold text-blue-900">+40 123 456 789</p>
                  <p className="text-sm text-blue-700">Apelați acum</p>
                </div>
              </a>
              <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                <Clock className="h-5 w-5 text-gray-600" />
                <div>
                  <p className="font-semibold text-gray-900">24/7 Disponibil</p>
                  <p className="text-sm text-gray-600">Inclusiv weekend</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="border-t pt-6">
            <h3 className="font-semibold text-gray-900 mb-4">Acțiuni Rapide</h3>
            <div className="space-y-2">
              <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={closeMenu}>
                <Phone className="h-4 w-4 mr-2" />
                Sună Acum
              </Button>
              <Button variant="outline" className="w-full" onClick={closeMenu}>
                <Mail className="h-4 w-4 mr-2" />
                Trimite Email
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
