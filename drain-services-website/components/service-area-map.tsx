import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock, Phone } from "lucide-react"

const serviceAreas = [
  { name: "Târgu-Jiu", type: "Municipiu", coverage: "100%", responseTime: "15-30 min" },
  { name: "Motru", type: "Oraș", coverage: "100%", responseTime: "30-45 min" },
  { name: "Rovinari", type: "Oraș", coverage: "100%", responseTime: "30-45 min" },
  { name: "Turceni", type: "Oraș", coverage: "100%", responseTime: "45-60 min" },
  { name: "Tismana", type: "Oraș", coverage: "100%", responseTime: "45-60 min" },
  { name: "Novaci", type: "Oraș", coverage: "100%", responseTime: "60-75 min" },
  { name: "Țicleni", type: "Comună", coverage: "90%", responseTime: "45-60 min" },
  { name: "Bumbești-Jiu", type: "Oraș", coverage: "100%", responseTime: "20-35 min" },
  { name: "Peștișani", type: "Comună", coverage: "90%", responseTime: "50-65 min" },
  { name: "Bărbătești", type: "Comună", coverage: "85%", responseTime: "55-70 min" },
  { name: "Scoarța", type: "Comună", coverage: "85%", responseTime: "60-75 min" },
  { name: "Arcani", type: "Comună", coverage: "80%", responseTime: "65-80 min" },
]

export default function ServiceAreaMap() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            Zona Noastră de Acoperire în Gorj
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-[800px] mx-auto">
            Deservim întregul județ Gorj cu servicii rapide și profesionale. Timpii de răspuns variază în funcție de
            locație.
          </p>
        </div>

        <div className="grid gap-6 lg:gap-8 lg:grid-cols-3">
          {/* Map Placeholder - Mobile Optimized */}
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  Harta Zonei de Servicii - Județul Gorj
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative bg-gradient-to-br from-green-50 to-blue-50 rounded-lg p-4 md:p-8 h-64 md:h-96 flex items-center justify-center border-2 border-dashed border-gray-300">
                  <div className="text-center space-y-4">
                    <MapPin className="h-12 md:h-16 w-12 md:w-16 text-blue-600 mx-auto" />
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-gray-900">Harta Interactivă</h3>
                      <p className="text-sm md:text-base text-gray-600">Județul Gorj - Zona de Acoperire Completă</p>
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                          <span className="text-xs md:text-sm">Acoperire 100% - Răspuns rapid</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <span className="text-xs md:text-sm">Acoperire 85-90% - Răspuns mediu</span>
                        </div>
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                          <span className="text-xs md:text-sm">Acoperire 80% - Zone rurale</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Service Areas List - Mobile Optimized */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Localități Deservite</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 max-h-64 md:max-h-96 overflow-y-auto">
                {serviceAreas.map((area, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-medium text-gray-900 text-sm md:text-base truncate">{area.name}</h4>
                        <Badge variant="outline" className="text-xs flex-shrink-0">
                          {area.type}
                        </Badge>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs text-gray-600">
                        <span>Acoperire: {area.coverage}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {area.responseTime}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`w-3 h-3 rounded-full flex-shrink-0 ml-2 ${
                        area.coverage === "100%"
                          ? "bg-green-500"
                          : Number.parseInt(area.coverage) >= 85
                            ? "bg-yellow-500"
                            : "bg-orange-500"
                      }`}
                    ></div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span className="font-semibold text-blue-900 text-sm md:text-base">Urgențe 24/7</span>
                </div>
                <p className="text-xs md:text-sm text-blue-800 mb-3">
                  Pentru urgențe în orice zonă din județul Gorj, sunați imediat:
                </p>
                <a href="tel:+40123456789" className="font-bold text-blue-900 text-sm md:text-base hover:underline">
                  +40 123 456 789
                </a>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Info - Mobile Optimized */}
        <div className="mt-8 md:mt-12 grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card className="text-center">
            <CardContent className="p-4 md:p-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                <MapPin className="h-5 w-5 md:h-6 md:w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2 text-sm md:text-base">Acoperire Completă Târgu-Jiu</h3>
              <p className="text-xs md:text-sm text-gray-600">Răspuns în 15-30 minute în tot municipiul Târgu-Jiu</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4 md:p-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Clock className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2 text-sm md:text-base">Servicii Rapide</h3>
              <p className="text-xs md:text-sm text-gray-600">Timp de răspuns maxim 80 minute în tot județul Gorj</p>
            </CardContent>
          </Card>
          <Card className="text-center sm:col-span-2 lg:col-span-1">
            <CardContent className="p-4 md:p-6">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Phone className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2 text-sm md:text-base">Disponibilitate 24/7</h3>
              <p className="text-xs md:text-sm text-gray-600">
                Servicii de urgență disponibile non-stop în toate zonele
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
