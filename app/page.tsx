import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/Placeholder.svg?height=32&width=32"
              alt="MechaFusion Logo"
              width={32}
              height={32}
              className="rounded-sm"
            />
            <span className="text-xl font-bold">MechaFusion</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#home" className="text-sm font-medium transition-colors hover:text-primary">
              Acasa
            </a>
            <a href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              Despre
            </a>
            <a href="#gallery" className="text-sm font-medium transition-colors hover:text-primary">
              Galerie
            </a>
            <a href="#join"  className="text-sm font-medium transition-colors hover:text-primary">
              Inscrie-te
            </a>
          </nav>
          <Button className="hidden md:inline-flex">Contact</Button>
          <Button variant="outline" size="icon" className="md:hidden">
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Futuristic Robot Background"
              fill
              className="object-cover brightness-[0.3] blur-[2px]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-black/70" />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center py-24 md:py-32 lg:py-40 text-center text-white">
            <div className="mb-6 flex items-center justify-center animate-fade-in">
              <Image
                src="/placeholder.svg?height=120&width=120"
                alt="MechaFusion Logo"
                width={120}
                height={120}
                className="rounded-lg shadow-lg shadow-blue-500/20"
              />
            </div>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
              MechaFusion
            </h1>
            <p className="mb-8 max-w-[700px] text-lg md:text-xl text-gray-200">
              Robotics Club of Universitatea Politehnica Timișoara
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/30"
              >
                Learn More
              </Button>
              <a href="#join" className="text-sm font-medium transition-colors hover:text-primary">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-black hover:bg-white/10 transition-all duration-300 hover:text-white"
              >
                Join Us
              </Button>
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-white py-16 md:py-24">
          <div className="container">
            <div className="mx-auto max-w-[800px] text-center">
              <div className="inline-block mb-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Our Mission
              </div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-900">
                About MechaFusion
              </h2>
              <p className="mb-12 text-lg text-gray-600 leading-relaxed">
                Our mission is to promote innovation, engineering, and collaboration in robotics. We provide a platform
                for students to develop practical skills, work on cutting-edge projects, and participate in national and
                international competitions.
              </p>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="rounded-xl border border-gray-200 bg-card p-6 text-card-foreground shadow-md hover:shadow-lg transition-all duration-300 hover:border-blue-200">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">Innovation</h3>
                  <p className="text-sm text-gray-500">
                    We encourage creative thinking and innovative approaches to solving complex engineering challenges.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-card p-6 text-card-foreground shadow-md hover:shadow-lg transition-all duration-300 hover:border-blue-200">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                      <path d="M2 12h20"></path>
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">Engineering</h3>
                  <p className="text-sm text-gray-500">
                    We apply theoretical knowledge to practical applications, developing real-world engineering skills.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 bg-card p-6 text-card-foreground shadow-md hover:shadow-lg transition-all duration-300 hover:border-blue-200">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-blue-600"
                    >
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">Collaboration</h3>
                  <p className="text-sm text-gray-500">
                    We foster teamwork and interdisciplinary collaboration among students from various engineering
                    fields.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="bg-gray-50 py-16 md:py-24">
          <div className="container">
            <div className="text-center mb-10">
              <div className="inline-block mb-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                Our Work
              </div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-900">
                Our Gallery
              </h2>
            </div>
            <div className="mx-auto max-w-[800px]">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                  value="robotics-projects"
                  className="border border-gray-200 rounded-lg mb-4 overflow-hidden"
                >
                  <AccordionTrigger className="text-lg font-medium px-6 py-4 hover:bg-gray-100 transition-all">
                    Robotics Projects
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pt-2 pb-6">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      <div className="overflow-hidden rounded-lg shadow-md">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Robotics Project 1"
                          width={300}
                          height={200}
                          className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                      </div>
                      <div className="overflow-hidden rounded-lg shadow-md">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Robotics Project 2"
                          width={300}
                          height={200}
                          className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                      </div>
                      <div className="overflow-hidden rounded-lg shadow-md">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Robotics Project 3"
                          width={300}
                          height={200}
                          className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="workshops" className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                  <AccordionTrigger className="text-lg font-medium px-6 py-4 hover:bg-gray-100 transition-all">
                    Workshops
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pt-2 pb-6">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      <div className="overflow-hidden rounded-lg shadow-md">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Workshop 1"
                          width={300}
                          height={200}
                          className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                      </div>
                      <div className="overflow-hidden rounded-lg shadow-md">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Workshop 2"
                          width={300}
                          height={200}
                          className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                      </div>
                      <div className="overflow-hidden rounded-lg shadow-md">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Workshop 3"
                          width={300}
                          height={200}
                          className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="competitions" className="border border-gray-200 rounded-lg overflow-hidden">
                  <AccordionTrigger className="text-lg font-medium px-6 py-4 hover:bg-gray-100 transition-all">
                    Competitions
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pt-2 pb-6">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                      <div className="overflow-hidden rounded-lg shadow-md">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Competition 1"
                          width={300}
                          height={200}
                          className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                      </div>
                      <div className="overflow-hidden rounded-lg shadow-md">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Competition 2"
                          width={300}
                          height={200}
                          className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                      </div>
                      <div className="overflow-hidden rounded-lg shadow-md">
                        <Image
                          src="/placeholder.svg?height=200&width=300"
                          alt="Competition 3"
                          width={300}
                          height={200}
                          className="h-full w-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section id="join" className="relative py-16 md:py-24 text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900"></div>
          <div className="absolute inset-0 opacity-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          <div className="container relative z-10">
            <div className="mx-auto max-w-[600px] text-center">
              <div className="inline-block mb-2 px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium backdrop-blur-sm">
                Join Our Team
              </div>
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">Join MechaFusion</h2>
              <p className="mb-8 text-lg text-blue-100">
                Become a member of MechaFusion and be part of an exciting journey into the world of robotics!
              </p>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-xl">
                <form className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      placeholder="Name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-white"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 focus:border-white"
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      placeholder="Message"
                      className="bg-white/10 border-white/20 text-white placeholder:text-blue-200 min-h-[120px] focus:border-white"
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-white text-blue-600 hover:bg-blue-50 transition-all duration-300 font-medium"
                  >
                    Become a member of MechaFusion!
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/placeholder.svg?height=32&width=32"
                  alt="MechaFusion Logo"
                  width={32}
                  height={32}
                  className="rounded-sm"
                />
                <span className="text-xl font-bold text-white">MechaFusion</span>
              </div>
              <p className="text-sm text-gray-400 max-w-[300px]">
                The official robotics club of Universitatea Politehnica din Timișoara, dedicated to innovation and
                excellence in robotics.
              </p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span>Piața Victoriei 2, Timișoara, Romania</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span>contact@mechafusion.ro</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span>+40 256 403 000</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-sm hover:text-blue-400 transition-colors flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-sm hover:text-blue-400 transition-colors flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    About
                  </a>
                </li>
                <li>
                  <a href="#gallery" className="text-sm hover:text-blue-400 transition-colors flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#join" className="text-sm hover:text-blue-400 transition-colors flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-3 w-3"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    Join Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} MechaFusion. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
