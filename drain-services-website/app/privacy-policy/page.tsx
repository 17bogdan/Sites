import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Shield, Mail, Phone, MapPin, Calendar, Eye, Lock, Users, FileText } from "lucide-react"
import Link from "next/link"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Înapoi la Site
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Shield className="h-6 w-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Politica de Confidențialitate</h1>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-blue-600">GDPR Compliant</Badge>
                <Badge variant="outline">Actualizat: {new Date().toLocaleDateString("ro-RO")}</Badge>
              </div>
              <CardTitle className="text-xl">DrainMaster Express - Politica de Confidențialitate</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                DrainMaster Express respectă confidențialitatea dumneavoastră și se angajează să protejeze datele
                personale pe care ni le furnizați. Această politică explică cum colectăm, utilizăm și protejăm
                informațiile dumneavoastră în conformitate cu Regulamentul General privind Protecția Datelor (GDPR).
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Ultima actualizare:</strong> {new Date().toLocaleDateString("ro-RO")} |{" "}
                  <strong>Versiunea:</strong> 2.0
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Company Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                Informații despre Operator
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Operator de Date:</h4>
                  <p className="text-gray-600">DrainMaster Express SRL</p>
                  <p className="text-gray-600">CUI: RO12345678</p>
                  <p className="text-gray-600">Nr. Reg. Com.: J18/123/2024</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Contact DPO:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <span>dpo@drainmaster.ro</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span>+40 123 456 789</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-blue-600" />
                      <span>Târgu-Jiu, Gorj, România</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Collection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-blue-600" />
                Ce Date Colectăm
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Date de Contact</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Nume și prenume</li>
                    <li>• Număr de telefon</li>
                    <li>• Adresa de email</li>
                    <li>• Adresa fizică (pentru servicii)</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Date de Servicii</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Tipul serviciului solicitat</li>
                    <li>• Detalii despre problemă</li>
                    <li>• Istoricul serviciilor</li>
                    <li>• Preferințe de programare</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Date Tehnice</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Adresa IP</li>
                    <li>• Tipul browserului</li>
                    <li>• Cookie-uri și tehnologii similare</li>
                    <li>• Paginile vizitate pe site</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Usage */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                Cum Utilizăm Datele
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Scopuri Principale:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>✓ Furnizarea serviciilor solicitate</li>
                    <li>✓ Comunicarea cu clienții</li>
                    <li>✓ Programarea intervențiilor</li>
                    <li>✓ Facturarea și contabilitatea</li>
                    <li>✓ Suportul clienților</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900">Scopuri Secundare:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Îmbunătățirea serviciilor</li>
                    <li>• Analize statistice</li>
                    <li>• Marketing direct (cu consimțământ)</li>
                    <li>• Respectarea obligațiilor legale</li>
                    <li>• Prevenirea fraudelor</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Legal Basis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-blue-600" />
                Temeiuri Legale pentru Prelucrare
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Executarea Contractului</h4>
                  <p className="text-sm text-gray-600">
                    Prelucrăm datele pentru a executa contractul de servicii încheiat cu dumneavoastră.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Consimțământul</h4>
                  <p className="text-sm text-gray-600">
                    Pentru marketing și cookie-uri non-esențiale, ne bazăm pe consimțământul dumneavoastră explicit.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Interesul Legitim</h4>
                  <p className="text-sm text-gray-600">
                    Pentru îmbunătățirea serviciilor și securitatea sistemelor noastre.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Retention */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-blue-600" />
                Perioada de Păstrare a Datelor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2">Tipul Datelor</th>
                        <th className="text-left py-2">Perioada de Păstrare</th>
                        <th className="text-left py-2">Motivul</th>
                      </tr>
                    </thead>
                    <tbody className="space-y-2">
                      <tr className="border-b">
                        <td className="py-2">Date de contact</td>
                        <td className="py-2">5 ani după ultimul serviciu</td>
                        <td className="py-2">Obligații fiscale</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Istoricul serviciilor</td>
                        <td className="py-2">10 ani</td>
                        <td className="py-2">Garanții și reclamații</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Date de marketing</td>
                        <td className="py-2">Până la retragerea consimțământului</td>
                        <td className="py-2">Consimțământ</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-2">Cookie-uri</td>
                        <td className="py-2">Maxim 2 ani</td>
                        <td className="py-2">Funcționalitate site</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rights */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                Drepturile Dumneavoastră GDPR
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-3">
                  <div className="border rounded-lg p-3">
                    <h4 className="font-semibold text-sm mb-1">Dreptul de Acces</h4>
                    <p className="text-xs text-gray-600">Să știți ce date avem despre dumneavoastră</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h4 className="font-semibold text-sm mb-1">Dreptul de Rectificare</h4>
                    <p className="text-xs text-gray-600">Să corectați datele incorecte</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h4 className="font-semibold text-sm mb-1">Dreptul de Ștergere</h4>
                    <p className="text-xs text-gray-600">Să solicitați ștergerea datelor</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="border rounded-lg p-3">
                    <h4 className="font-semibold text-sm mb-1">Dreptul de Portabilitate</h4>
                    <p className="text-xs text-gray-600">Să primiți datele într-un format structurat</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h4 className="font-semibold text-sm mb-1">Dreptul de Opoziție</h4>
                    <p className="text-xs text-gray-600">Să vă opuneți prelucrării pentru marketing</p>
                  </div>
                  <div className="border rounded-lg p-3">
                    <h4 className="font-semibold text-sm mb-1">Dreptul de Restricționare</h4>
                    <p className="text-xs text-gray-600">Să limitați prelucrarea în anumite condiții</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Pentru exercitarea drepturilor:</strong> Contactați-ne la dpo@drainmaster.ro sau +40 123 456
                  789. Vom răspunde în maxim 30 de zile.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle>Contact pentru Protecția Datelor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-3">Pentru întrebări despre confidențialitate:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-blue-600" />
                      <span>dpo@drainmaster.ro</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-blue-600" />
                      <span>+40 123 456 789</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Autoritatea de Supraveghere:</h4>
                  <div className="text-sm text-gray-600">
                    <p>Autoritatea Națională de Supraveghere</p>
                    <p>a Prelucrării Datelor cu Caracter Personal</p>
                    <p>www.dataprotection.ro</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
