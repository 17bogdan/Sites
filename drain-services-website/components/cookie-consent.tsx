"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { X, Cookie, Settings, Shield, Eye } from "lucide-react"
import Link from "next/link"

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  functional: boolean
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowBanner(true)
    }
  }, [])

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    }
    setPreferences(allAccepted)
    localStorage.setItem("cookie-consent", JSON.stringify(allAccepted))
    localStorage.setItem("cookie-consent-date", new Date().toISOString())
    setShowBanner(false)
    setShowSettings(false)
  }

  const acceptSelected = () => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences))
    localStorage.setItem("cookie-consent-date", new Date().toISOString())
    setShowBanner(false)
    setShowSettings(false)
  }

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    }
    setPreferences(onlyNecessary)
    localStorage.setItem("cookie-consent", JSON.stringify(onlyNecessary))
    localStorage.setItem("cookie-consent-date", new Date().toISOString())
    setShowBanner(false)
    setShowSettings(false)
  }

  if (!showBanner) return null

  return (
    <>
      {/* Mobile-Optimized Cookie Banner */}
      {!showSettings && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-3 md:p-4 bg-white border-t shadow-lg">
          <div className="container mx-auto">
            <Card>
              <CardContent className="p-4 md:p-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <Cookie className="h-5 w-5 md:h-6 md:w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 mb-2 text-sm md:text-base">
                      Respectăm Confidențialitatea Dumneavoastră
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 mb-3 md:mb-4">
                      Utilizăm cookie-uri pentru a îmbunătăți experiența dumneavoastră pe site, pentru a analiza
                      traficul și pentru a personaliza conținutul.
                    </p>
                    <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                      <Badge variant="outline" className="text-xs">
                        <Shield className="h-3 w-3 mr-1" />
                        Conform GDPR
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Date Protejate
                      </Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Button onClick={acceptAll} className="bg-blue-600 hover:bg-blue-700 text-xs md:text-sm">
                        Acceptă Toate
                      </Button>
                      <Button onClick={rejectAll} variant="outline" className="text-xs md:text-sm">
                        Doar Necesare
                      </Button>
                      <div className="flex gap-2">
                        <Button
                          onClick={() => setShowSettings(true)}
                          variant="ghost"
                          size="sm"
                          className="text-xs md:text-sm"
                        >
                          <Settings className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                          Setări
                        </Button>
                        <Link href="/privacy-policy">
                          <Button variant="ghost" size="sm" className="text-xs md:text-sm">
                            <Eye className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                            Politica
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowBanner(false)}
                    className="flex-shrink-0 hidden md:flex"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Mobile-Optimized Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-end md:items-center justify-center p-0 md:p-4">
          <Card className="w-full md:max-w-2xl max-h-[90vh] overflow-y-auto rounded-t-lg md:rounded-lg">
            <CardContent className="p-4 md:p-6">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h2 className="text-lg md:text-xl font-bold text-gray-900">Setări Cookie-uri</h2>
                <Button variant="ghost" size="sm" onClick={() => setShowSettings(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="space-y-3 md:space-y-4">
                  {/* Necessary Cookies */}
                  <div className="border rounded-lg p-3 md:p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 text-sm md:text-base">Cookie-uri Necesare</h3>
                      <Badge className="bg-green-100 text-green-800 text-xs">Întotdeauna Active</Badge>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 mb-2">
                      Aceste cookie-uri sunt esențiale pentru funcționarea site-ului și nu pot fi dezactivate.
                    </p>
                    <p className="text-xs text-gray-500">Exemple: autentificare, securitate, preferințe de limbă</p>
                  </div>

                  {/* Analytics Cookies */}
                  <div className="border rounded-lg p-3 md:p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 text-sm md:text-base">Cookie-uri de Analiză</h3>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.analytics}
                          onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 md:w-11 md:h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 md:after:h-5 md:after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 mb-2">
                      Ne ajută să înțelegem cum utilizați site-ul pentru a îmbunătăți experiența.
                    </p>
                    <p className="text-xs text-gray-500">Exemple: Google Analytics, statistici de vizitare</p>
                  </div>

                  {/* Marketing Cookies */}
                  <div className="border rounded-lg p-3 md:p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 text-sm md:text-base">Cookie-uri de Marketing</h3>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.marketing}
                          onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 md:w-11 md:h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 md:after:h-5 md:after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 mb-2">
                      Utilizate pentru a vă afișa reclame relevante pe alte site-uri.
                    </p>
                    <p className="text-xs text-gray-500">Exemple: Facebook Pixel, Google Ads, remarketing</p>
                  </div>

                  {/* Functional Cookies */}
                  <div className="border rounded-lg p-3 md:p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 text-sm md:text-base">Cookie-uri Funcționale</h3>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={preferences.functional}
                          onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 md:w-11 md:h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 md:after:h-5 md:after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 mb-2">
                      Îmbunătățesc funcționalitatea site-ului și personalizarea.
                    </p>
                    <p className="text-xs text-gray-500">Exemple: chat live, preferințe utilizator, localizare</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t">
                  <Button onClick={acceptSelected} className="flex-1 bg-blue-600 hover:bg-blue-700 text-sm">
                    Salvează Preferințele
                  </Button>
                  <Button onClick={acceptAll} variant="outline" className="flex-1 text-sm">
                    Acceptă Toate
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}
