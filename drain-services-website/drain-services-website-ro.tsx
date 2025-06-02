import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Clock,
  MapPin,
  Mail,
  CheckCircle,
  Wrench,
  Truck,
  Shield,
  Star,
  Droplets,
  Settings,
  AlertCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Droplets className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">DrainMaster Express</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Servicii
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Despre Noi
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-semibold">+40 123 456 789</span>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-2">
                  <Badge className="bg-blue-600 hover:bg-blue-700">
                    <Clock className="h-3 w-3 mr-1" />
                    Servicii de Urgență 24/7
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                    Servicii Profesionale de Desfundare & Vidanjare în <span className="text-blue-600">București</span>
                  </h1>
                  <p className="text-xl text-gray-600 max-w-[600px]">
                    Servicii rapide, sigure și profesionale de desfundare canalizări, vidanjare fose septice și
                    întreținere rețele de canalizare. Disponibili 24/7 pentru urgențe.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Phone className="h-4 w-4 mr-2" />
                    Sună Acum: +40 123 456 789
                  </Button>
                  <Button variant="outline" size="lg">
                    Ofertă Gratuită
                  </Button>
                </div>
                <div className="flex items-center space-x-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                    Autorizați & Asigurați
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                    Servicii în Aceeași Zi
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-1" />
                    Evaluări Gratuite
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Servicii profesionale de desfundare canalizări"
                  width={600}
                  height={500}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">4.9/5</span>
                    <span className="text-sm text-gray-600">(200+ recenzii)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Serviciile Noastre Profesionale
              </h2>
              <p className="text-xl text-gray-600 max-w-[800px] mx-auto">
                Oferim soluții complete pentru canalizări și fose septice pentru proprietăți rezidențiale și comerciale
                din întregul București.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Droplets className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Desfundare Canalizări</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Curățare și desfundare profesională pentru bucătării, băi și conducte principale de canalizare
                    folosind echipamente avansate.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Truck className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Vidanjare Fose Septice</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Servicii complete de pompare și curățare fose septice cu eliminarea corespunzătoare a deșeurilor și
                    inspecția sistemului.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Settings className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Întreținere Canalizări</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Întreținere regulată, inspecție și reparații ale sistemelor de canalizare pentru a preveni urgențele
                    costisitoare și blocajele.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <AlertCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Servicii de Urgență</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Intervenție de urgență 24/7 pentru blocaje urgente, revărsări fose septice și urgențe ale
                    conductelor de canalizare.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                  De Ce Să Alegeți DrainMaster Express?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Autorizați & Asigurați</h3>
                      <p className="text-gray-600">
                        Profesioniști complet autorizați cu acoperire de asigurare comprehensivă pentru liniștea
                        dumneavoastră.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Disponibilitate 24/7</h3>
                      <p className="text-gray-600">
                        Servicii de urgență disponibile non-stop, inclusiv în weekend și sărbători.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Wrench className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Echipamente Avansate</h3>
                      <p className="text-gray-600">
                        Unelte și tehnologie de ultimă generație pentru servicii eficiente și eficace.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Star className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Echipă Experimentată</h3>
                      <p className="text-gray-600">
                        Peste 10 ani de experiență în deservirea Bucureștiului cu sute de clienți mulțumiți.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Echipa profesională la lucru"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-blue-600">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="text-white">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">Luați Legătura</h2>
                <p className="text-xl text-blue-100 mb-8">
                  Aveți nevoie de asistență imediată sau doriți să programați un serviciu? Contactați-ne astăzi pentru
                  servicii rapide și profesionale.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Linia de Urgență</p>
                      <p className="text-blue-100">+40 123 456 789</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Email</p>
                      <p className="text-blue-100">info@drainmaster.ro</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Zona de Servicii</p>
                      <p className="text-blue-100">București & Împrejurimi</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">Program</p>
                      <p className="text-blue-100">Servicii de Urgență 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicitați o Ofertă</h3>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nume
                      </label>
                      <Input id="name" placeholder="Numele dumneavoastră" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefon
                      </label>
                      <Input id="phone" placeholder="Numărul de telefon" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="email@exemplu.ro" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Serviciu Necesar
                    </label>
                    <Input id="service" placeholder="ex. Desfundare canalizări, Vidanjare fosă" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mesaj
                    </label>
                    <Textarea id="message" placeholder="Descrieți problema sau cerințele dumneavoastră" rows={4} />
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    Trimite Cererea
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Droplets className="h-6 w-6 text-blue-400" />
                <span className="text-lg font-bold">DrainMaster Express</span>
              </div>
              <p className="text-gray-400 text-sm">
                Servicii profesionale de canalizări și fose septice în București. Autorizați, asigurați și disponibili
                24/7.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Servicii</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Desfundare Canalizări</li>
                <li>Vidanjare Fose Septice</li>
                <li>Întreținere Canalizări</li>
                <li>Servicii de Urgență</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+40 123 456 789</li>
                <li>info@drainmaster.ro</li>
                <li>București, România</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Urgențe</h4>
              <p className="text-sm text-gray-400 mb-2">Servicii de Urgență 24/7</p>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Phone className="h-4 w-4 mr-2" />
                Sună Acum
              </Button>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} DrainMaster Express. Toate drepturile rezervate.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
