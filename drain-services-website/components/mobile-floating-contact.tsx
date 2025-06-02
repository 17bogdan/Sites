"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone, MessageCircle, X, Clock } from "lucide-react"

export default function MobileFloatingContact() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      {/* Floating Contact Button */}
      <div className="fixed bottom-4 right-4 z-40 md:hidden">
        {!isExpanded ? (
          <Button
            onClick={() => setIsExpanded(true)}
            className="h-14 w-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
            size="sm"
          >
            <Phone className="h-6 w-6" />
          </Button>
        ) : (
          <Card className="w-64 shadow-xl">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-gray-900">Contact Rapid</h3>
                <Button variant="ghost" size="sm" onClick={() => setIsExpanded(false)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="space-y-2">
                <a
                  href="tel:+40123456789"
                  className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <Phone className="h-4 w-4 text-blue-600" />
                  <div>
                    <p className="font-semibold text-blue-900 text-sm">+40 123 456 789</p>
                    <p className="text-xs text-blue-700">Apel direct</p>
                  </div>
                </a>
                <a
                  href="sms:+40123456789"
                  className="flex items-center gap-2 p-2 bg-green-50 rounded-lg hover:bg-green-100 transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-green-600" />
                  <div>
                    <p className="font-semibold text-green-900 text-sm">SMS</p>
                    <p className="text-xs text-green-700">Trimite mesaj</p>
                  </div>
                </a>
                <div className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                  <Clock className="h-4 w-4 text-gray-600" />
                  <p className="text-xs text-gray-700">Disponibil 24/7</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </>
  )
}
