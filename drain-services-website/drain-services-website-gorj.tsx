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
import ServiceAreaMap from "./components/service-area-map"
import CookieConsent from "./components/cookie-consent"
import MobileMenu from "./components/mobile-menu"
import MobileFloatingContact from "./components/mobile-floating-contact"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Mobile-Optimized Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-14 md:h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Droplets className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
            <span className="text-lg md:text-xl font-bold text-gray-900">DrainMaster Express</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#services" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Servicii
            </Link>
            <Link href="#coverage" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Zone Deservite
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Despre Noi
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Contact
            </Link>
            <Link href="/privacy-policy" className="text-xs text-gray-500 hover:text-blue-600 transition-colors">
              Confidențialitate
            </Link>
          </nav>

          {/* Mobile & Desktop Contact */}
          <div className="flex items-center space-x-2">
            <div className="hidden sm:flex items-center space-x-2">
              <Phone className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-semibold">+40 123 456 789</span>
            </div>
            <a href="tel:+40123456789" className="sm:hidden">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Phone className="h-4 w-4" />
              </Button>
            </a>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Mobile-Optimized Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-12 md:py-20 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:gap-8 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4 md:space-y-6">
                <div className="space-y-2 md:space-y-4">
                  <Badge className="bg-blue-600 hover:bg-blue-700">
                    <Clock className="h-3 w-3 mr-1" />
                    Servicii de Urgență 24/7
                  </Badge>
                  <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-gray-900">
                    Servicii Profesionale de Desfundare & Vidanjare în <span className="text-blue-600">Târgu-Jiu</span>{" "}
                    și <span className="text-blue-600">Gorj</span>
                  </h1>
                  <p className="text-base md:text-xl text-gray-600">
                    Servicii rapide, sigure și profesionale de desfundare canalizări, vidanjare fose septice și
                    întreținere rețele de canalizare în tot județul Gorj. Disponibili 24/7 pentru urgențe.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <a href="tel:+40123456789" className="flex-1 sm:flex-none">
                    <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                      <Phone className="h-4 w-4 mr-2" />
                      Sună Acum: +40 123 456 789
                    </Button>
                  </a>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Ofertă Gratuită
                  </Button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4 text-xs md:text-sm text-gray-600">
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-1 flex-shrink-0" />
                    <span>Autorizați & Asigurați</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-1 flex-shrink-0" />
                    <span>Servicii în Aceeași Zi</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-600 mr-1 flex-shrink-0" />
                    <span>Evaluări Gratuite</span>
                  </div>
                </div>
                <div className="bg-white/80 backdrop-blur rounded-lg p-3 md:p-4 border">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-4 w-4 text-blue-600 flex-shrink-0" />
                    <span className="font-semibold text-gray-900 text-sm md:text-base">Zone Principale Deservite:</span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-700">
                    Târgu-Jiu • Motru • Rovinari • Turceni • Tismana • Novaci • Bumbești-Jiu • și toate comunele din
                    Gorj
                  </p>
                </div>
              </div>
              <div className="relative order-first lg:order-last">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Servicii profesionale de desfundare canalizări în Târgu-Jiu și Gorj"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl w-full h-auto"
                />
                <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-white p-3 md:p-4 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Star className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-current" />
                    <span className="font-semibold text-sm md:text-base">4.9/5</span>
                    <span className="text-xs md:text-sm text-gray-600">(200+ recenzii Gorj)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile-Optimized Services Section */}
        <section id="services" className="py-12 md:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-3 md:space-y-4 mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
                Serviciile Noastre Profesionale în Gorj
              </h2>
              <p className="text-base md:text-xl text-gray-600 max-w-[800px] mx-auto">
                Oferim soluții complete pentru canalizări și fose septice pentru proprietăți rezidențiale și comerciale
                din Târgu-Jiu, Motru, Rovinari și toate localitățile din județul Gorj.
              </p>
            </div>
            <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                    <Droplets className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-base md:text-lg">Desfundare Canalizări</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm">
                    Curățare și desfundare profesională pentru bucătării, băi și conducte principale de canalizare
                    folosind echipamente avansate în tot județul Gorj.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                    <Truck className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-base md:text-lg">Vidanjare Fose Septice</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm">
                    Servicii complete de pompare și curățare fose septice cu eliminarea corespunzătoare a deșeurilor și
                    inspecția sistemului în Târgu-Jiu și împrejurimi.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                    <Settings className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-base md:text-lg">Întreținere Canalizări</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm">
                    Întreținere regulată, inspecție și reparații ale sistemelor de canalizare pentru a preveni urgențele
                    costisitoare și blocajele în zona Gorj.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-shadow sm:col-span-2 lg:col-span-1">
                <CardHeader className="pb-4">
                  <div className="mx-auto w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                    <AlertCircle className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-base md:text-lg">Servicii de Urgență</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm">
                    Intervenție de urgență 24/7 pentru blocaje urgente, revărsări fose septice și urgențe ale
                    conductelor de canalizare în tot județul Gorj.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Service Area Map Section */}
        <div id="coverage">
          <ServiceAreaMap />
        </div>

        {/* Mobile-Optimized Why Choose Us Section */}
        <section id="about" className="py-12 md:py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:gap-12 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 mb-4 md:mb-6">
                  De Ce Să Alegeți DrainMaster Express în Gorj?
                </h2>
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Shield className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Autorizați & Asigurați</h3>
                      <p className="text-sm md:text-base text-gray-600">
                        Profesioniști complet autorizați cu acoperire de asigurare comprehensivă pentru liniștea
                        dumneavoastră în tot județul Gorj.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Disponibilitate 24/7</h3>
                      <p className="text-sm md:text-base text-gray-600">
                        Servicii de urgență disponibile non-stop în Târgu-Jiu, Motru, Rovinari și toate localitățile din
                        Gorj, inclusiv în weekend și sărbători.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Wrench className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Echipamente Avansate</h3>
                      <p className="text-sm md:text-base text-gray-600">
                        Unelte și tehnologie de ultimă generație pentru servicii eficiente și eficace în tot județul
                        Gorj.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Star className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">Experiență Locală</h3>
                      <p className="text-sm md:text-base text-gray-600">
                        Peste 10 ani de experiență în deservirea județului Gorj cu sute de clienți mulțumiți din
                        Târgu-Jiu și împrejurimi.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative order-1 lg:order-2">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="Echipa profesională DrainMaster Express la lucru în Gorj"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mobile-Optimized Contact Section */}
        <section id="contact" className="py-12 md:py-20 bg-blue-600">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:gap-12 lg:grid-cols-2">
              <div className="text-white">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 md:mb-6">
                  Luați Legătura
                </h2>
                <p className="text-base md:text-xl text-blue-100 mb-6 md:mb-8">
                  Aveți nevoie de asistență imediată sau doriți să programați un serviciu în Târgu-Jiu sau în alt oraș
                  din Gorj? Contactați-ne astăzi pentru servicii rapide și profesionale.
                </p>
                <div className="space-y-4 md:space-y-6">
                  <a
                    href="tel:+40123456789"
                    className="flex items-center space-x-3 md:space-x-4 hover:bg-blue-500/20 p-2 rounded-lg transition-colors"
                  >
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm md:text-base">Linia de Urgență</p>
                      <p className="text-blue-100 text-sm md:text-base">+40 123 456 789</p>
                    </div>
                  </a>
                  <a
                    href="mailto:info@drainmaster.ro"
                    className="flex items-center space-x-3 md:space-x-4 hover:bg-blue-500/20 p-2 rounded-lg transition-colors"
                  >
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm md:text-base">Email</p>
                      <p className="text-blue-100 text-sm md:text-base">info@drainmaster.ro</p>
                    </div>
                  </a>
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm md:text-base">Zona de Servicii</p>
                      <p className="text-blue-100 text-sm md:text-base">Târgu-Jiu, Gorj & Împrejurimi</p>
                      <p className="text-xs md:text-sm text-blue-200">Motru, Rovinari, Turceni, Tismana, Novaci</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm md:text-base">Program</p>
                      <p className="text-blue-100 text-sm md:text-base">Servicii de Urgență 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Solicitați o Ofertă</h3>
                <form className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nume
                      </label>
                      <Input id="name" placeholder="Numele dumneavoastră" className="text-sm md:text-base" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Telefon
                      </label>
                      <Input id="phone" placeholder="Numărul de telefon" className="text-sm md:text-base" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="email@exemplu.ro" className="text-sm md:text-base" />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Localitatea
                    </label>
                    <Input
                      id="location"
                      placeholder="ex. Târgu-Jiu, Motru, Rovinari"
                      className="text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      Serviciu Necesar
                    </label>
                    <Input
                      id="service"
                      placeholder="ex. Desfundare canalizări, Vidanjare fosă"
                      className="text-sm md:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mesaj
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Descrieți problema sau cerințele dumneavoastră"
                      rows={4}
                      className="text-sm md:text-base"
                    />
                  </div>
                  <div className="text-xs text-gray-600">
                    Prin trimiterea acestui formular, sunteți de acord cu{" "}
                    <Link href="/privacy-policy" className="text-blue-600 hover:underline">
                      Politica de Confidențialitate
                    </Link>
                    .
                  </div>
                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-sm md:text-base">
                    Trimite Cererea
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Mobile-Optimized Footer */}
      <footer className="bg-gray-900 text-white py-8 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2">
                <Droplets className="h-5 w-5 md:h-6 md:w-6 text-blue-400" />
                <span className="text-base md:text-lg font-bold">DrainMaster Express</span>
              </div>
              <p className="text-gray-400 text-sm">
                Servicii profesionale de canalizări și fose septice în Târgu-Jiu și județul Gorj. Autorizați, asigurați
                și disponibili 24/7.
              </p>
              <div className="text-xs text-gray-500">
                <p>Autorizație: GJ-2024-001</p>
                <p>CUI: RO12345678</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Servicii</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Desfundare Canalizări</li>
                <li>Vidanjare Fose Septice</li>
                <li>Întreținere Canalizări</li>
                <li>Servicii de Urgență</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Zone Deservite</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Târgu-Jiu</li>
                <li>Motru</li>
                <li>Rovinari</li>
                <li>Turceni</li>
                <li>Tismana</li>
                <li>Tot județul Gorj</li>
              </ul>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <h4 className="font-semibold mb-3 md:mb-4 text-sm md:text-base">Legal & Contact</h4>
              <ul className="space-y-2 text-sm text-gray-400 mb-4">
                <li>
                  <a href="tel:+40123456789" className="hover:text-white transition-colors">
                    +40 123 456 789
                  </a>
                </li>
                <li>
                  <a href="mailto:info@drainmaster.ro" className="hover:text-white transition-colors">
                    info@drainmaster.ro
                  </a>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-white transition-colors">
                    Politica de Confidențialitate
                  </Link>
                </li>
                <li>Termeni și Condiții</li>
              </ul>
              <a href="tel:+40123456789" className="block">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-sm">
                  <Phone className="h-4 w-4 mr-2" />
                  Sună Acum
                </Button>
              </a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-xs md:text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} DrainMaster Express. Toate drepturile rezervate. | Servicii profesionale
              în Gorj | GDPR Compliant
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile Components */}
      <MobileFloatingContact />
      <CookieConsent />
    </div>
  )
}
