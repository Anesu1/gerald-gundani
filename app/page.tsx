"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import {
  Moon,
  Sun,
  Download,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Award,
  Briefcase,
  GraduationCap,
  Code,
  Zap,
  Users,
  Linkedin,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { InfiniteGridBackground } from "@/components/ui/infinite-grid-background"
import { ContactForm } from "@/components/contact-form"

export default function Portfolio() {
  const [themeColor, setThemeColor] = useState<"light" | "dark">("dark")

  useEffect(() => {
    document.documentElement.classList.toggle("dark", themeColor === "dark")
  }, [themeColor])

  const toggleTheme = () => setThemeColor(themeColor === "light" ? "dark" : "light")

  return (
    <div className="min-h-screen bg-background">
      <div className="pointer-events-none">
        <InfiniteGridBackground />
      </div>
      <div className="relative z-10 pointer-events-auto">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/40">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3"
            >
              <Image
                src="/images/logo.webp"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="font-bold text-xl">Gerald Gundani</span>
            </motion.div>

            <div className="hidden md:flex items-center gap-6">
              <Link href="#about" className="hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#projects" className="hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#certifications" className="hover:text-primary transition-colors">
                Certifications
              </Link>
              <Link href="#experience" className="hover:text-primary transition-colors">
                Experience
              </Link>
              <Link href="#contact" className="hover:text-primary transition-colors">
                Contact
              </Link>
            </div>

            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {themeColor === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
          </div>
        </nav>

        {/* Hero Section with Banner */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/banner.webp" alt="Banner" fill className="object-cover opacity-20" priority />
            <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
          </div>

          <motion.div className="container mx-auto px-4 z-10 pt-20">
            <div className="flex flex-col items-center text-center gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-2xl">
                  <Image src="/images/my-20image.webp" alt="Gerald Gundani" fill className="object-cover" priority />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-4xl"
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Gerald Gundani</h1>
                <div className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  Energy & Power Systems Engineer || IEEE Member || AEE Member || IEEE Power & Energy Society Member ||
                  Entrepreneur || Philanthropist || Volunteer
                </div>
                <div className="flex gap-4 flex-wrap justify-center">
                  <Button size="lg" className="gap-2 group">
                    <Link href="/Gerald Gundani Curriculum Vitae.pdf" className="flex gap-4 flex-wrap justify-center" target="_blank" rel="noopener noreferrer">
                     <Download className="h-4 w-4 group-hover:animate-bounce" />
                      Download CV</Link>
                     
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="#contact">Contact Me</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="py-20 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-8 text-center">Personal Introduction</h2>
              <Card className="backdrop-blur-sm bg-card/50 border-border/40">
                <CardContent className="p-8">
                  <p className="text-lg leading-relaxed text-muted-foreground text-pretty">
                    I am motivated and results-oriented Energy and Power Systems Engineer passionate about advancing
                    renewable energy integration and sustainable power solutions across Africa to drive energy adoption,
                    boost efficiency, and alleviate energy poverty from marginalized and vulnerable communities while
                    advocating for sustainable energy practices that combat climate change in support of SDG-7 and
                    SDG-13. I am Equipped with strong technical, analytical, and project management skills gained
                    through academic excellence and hands-on experience designing, sizing, simulating, optimizing,
                    installing, and commissioning solar photovoltaic systems and battery energy storage systems.
                    Committed to leading Africa's transition toward clean, reliable, and affordable energy systems.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Zap, label: "Solar Projects", value: "600kW+" },
                { icon: Award, label: "Certifications", value: "10+" },
                { icon: Users, label: "Lives Impacted", value: "1000+" },
                { icon: Briefcase, label: "Experience", value: "2+ Years" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  className="text-center"
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-4 text-center"
            >
              Selected Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
            >
              Designed, managed and supervised the installation of Solar PV Systems totaling at least 600kW
            </motion.p>

            {/* Commercial & Industrial Projects */}
            <div className="mb-12">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-bold mb-6"
              >
                Commercial & Industrial Projects
              </motion.h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Collenso / Safeside Farm",
                    system: "100 kW ground mount",
                    location: "Mapinga, Zimbabwe",
                    description: "To power tobacco irrigation pivots",
                    image: "/images/collenso.webp",
                  },
                  {
                    title: "Deborah Farm",
                    system: "100 kW ground mount",
                    location: "Darwendale, Zimbabwe",
                    description: "To power tobacco irrigation pivots",
                    image: "/images/deborahpowerroom.webp",
                  },
                  {
                    title: "Bolden Farm",
                    system: "100 kW ground mount",
                    location: "Darwendale, Zimbabwe",
                    description: "To power tobacco irrigation pivots",
                    image: "/images/boldenpanels.webp",
                  },
                  {
                    title: "Rosscommon Farm",
                    system: "100 kW ground mount",
                    location: "Norton, Zimbabwe",
                    description: "To power tobacco irrigation pivots",
                    image: "/images/roscommonpanels.webp",
                  },
                  {
                    title: "Macheke Farm",
                    system: "30 kW roof mount",
                    location: "Macheke, Zimbabwe",
                    description: "To power tobacco irrigation pivots",
                    image: "/images/30kVAinverter.webp",
                  },
                ].map((project, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    whileHover={{ y: -8 }}
                  >
                    <Card className="overflow-hidden h-full backdrop-blur-sm bg-card/50 border-border/40 hover:border-primary/40 transition-all">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={400}
                          height={300}
                          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-primary font-semibold mb-2 text-sm">{project.system}</p>
                        <p className="text-muted-foreground mb-3 text-sm text-pretty">{project.description}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span>{project.location}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Solar Home Systems */}
            <div className="mb-12">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-bold mb-6"
              >
                Solar Home Systems (SHS) Projects
              </motion.h3>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="text-muted-foreground mb-6"
              >
                Designed, managed and supervised the installation of SHS totaling 200kW in the configuration of
                3kVA-12kVA solar PV systems
              </motion.p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "12kVA Single Phase Solar System",
                    location: "Borrowdale, Zimbabwe",
                    description: "For residential use",
                    image: "/residential-solar-home-system-panels-roof.jpg",
                  },
                  {
                    title: "12kVA 3 Phase Solar System",
                    location: "Sandton, Zimbabwe",
                    description: "For residential load support",
                    image: "/three-phase-solar-system-residential.jpg",
                  },
                  {
                    title: "10kVA Single Phase System",
                    location: "Sandton, Zimbabwe",
                    description: "For water pumping",
                    image: "/solar-water-pumping-system.jpg",
                  },
                ].map((project, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    whileHover={{ y: -8 }}
                  >
                    <Card className="overflow-hidden h-full backdrop-blur-sm bg-card/50 border-border/40 hover:border-primary/40 transition-all">
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={400}
                          height={300}
                          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground mb-3 text-sm text-pretty">{project.description}</p>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span>{project.location}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Research & Design Projects */}
            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                className="text-2xl font-bold mb-6"
              >
                Research & Design Projects
              </motion.h3>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    title: "Smart Parcel Locker with Solar Back-up Power",
                    description: "For last mile delivery with integrated battery energy storage system",
                    image: "/images/smart.webp",
                  },
                  {
                    title: "Real Time Vibration Analysis",
                    description: "For Energy and Power Systems equipment using MATLAB",
                    image: "/matlab-vibration-analysis-power-systems.jpg",
                  },
                ].map((project, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    whileHover={{ y: -8 }}
                  >
                    <Card className="overflow-hidden h-full backdrop-blur-sm bg-card/50 border-border/40 hover:border-primary/40 transition-all">
                      <div className="relative h-80 overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          width={400}
                          height={300}
                          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
                        />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <p className="text-muted-foreground text-sm text-pretty">{project.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-12 text-center"
            >
              Skills & Expertise
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  title: "Electronics & Control",
                  icon: Code,
                  skills: ["PROTEUS", "KiCAD", "ProfiCad", "Arduino IDE"],
                },
                {
                  title: "Renewable Energy",
                  icon: Zap,
                  skills: ["PVSyst", "PVSol", "PVWATTS CALCULATOR"],
                },
                {
                  title: "Power Systems",
                  icon: Briefcase,
                  skills: ["ETAP", "PSCAD"],
                },
                {
                  title: "Electrical Drawing",
                  icon: Code,
                  skills: ["AutoCAD", "SKETCH-UP", "SOLIDWORKS"],
                },
                {
                  title: "Project Management",
                  icon: Users,
                  skills: ["EDRAWMAX", "TRELLO", "MICROSOFT SUITE"],
                },
                {
                  title: "Programming & Coding",
                  icon: Code,
                  skills: ["C++", "VB", "Python", "MATLAB"],
                },
              ].map((category, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                >
                  <Card className="h-full backdrop-blur-sm bg-card/50 border-border/40">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <category.icon className="h-6 w-6 text-primary" />
                        <h3 className="text-xl font-bold">{category.title}</h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, j) => (
                          <motion.span
                            key={j}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ delay: j * 0.05, duration: 0.4 }}
                            whileHover={{ scale: 1.1 }}
                            className="px-3 py-1 bg-primary/10 hover:bg-primary/20 text-foreground rounded-full text-sm font-medium cursor-pointer transition-colors"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="certifications" className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-12 text-center"
            >
              Certifications
            </motion.h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  title: "Renewable Power and Electric Systems",
                  link: "https://www.coursera.org/verify/TO5425BGJ9WX",
                },
                {
                  title: "Renewable Energy and Green Building Entrepreneurship",
                  link: "https://www.coursera.org/verify/TO5425BGJ9WX",
                },
                {
                  title: "Hydro, Wind & Solar: Resource, Variability and Forecast",
                  link: "https://www.coursera.org/verify/SP80NM4QF3PG",
                },
                {
                  title: "Energy and Environment",
                  link: "https://www.coursera.org/verify/X1SNE51XY6EI",
                },
                {
                  title: "Next-Gen Energy Storage- Battery and Hydrogen Technology",
                  link: "https://www.coursera.org/verify/BNGE2SCOFJ11",
                },
                {
                  title: "Electric Power Systems",
                  link: "https://www.coursera.org/verify/FA8VGBE3OLTX",
                },
                {
                  title: "Certified Associate in Project Management (CAPM)® Exam: Unit 1",
                  link: "https://coursera.org/verify/6NKOKX3IBR7E",
                },
                {
                  title: "Certified Associate in Project Management (CAPM)® Exam: Unit 2",
                  link: "https://www.coursera.org/verify/LZ5YJXC032CV",
                },
                {
                  title: "Foundations of Project Management",
                  link: "https://www.coursera.org/verify/X03G7XDSPAJ3",
                },
              ].map((cert, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full backdrop-blur-sm bg-card/50 border-border/40 hover:border-primary/40 transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Award className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2 text-sm leading-tight">{cert.title}</h3>
                          <Link
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-primary hover:underline flex items-center gap-1"
                          >
                            View Certificate <ExternalLink className="h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-12 text-center"
            >
              Professional Experience
            </motion.h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  icon: Briefcase,
                  title: "Full time Graduate Trainee",
                  subtitle: "Renewable Energy and Electrical Power Engineer",
                  org: "Enrapower PLC",
                  period: "Current",
                  location: "Harare, Zimbabwe",
                  color: "bg-blue-500",
                },
                {
                  icon: Briefcase,
                  title: "Part time Graduate Trainee",
                  subtitle: "Renewable Energy Engineer",
                  org: "SFQ",
                  period: "Previous",
                  location: "Harare, Zimbabwe",
                  color: "bg-green-500",
                },
                {
                  icon: Briefcase,
                  title: "Intern",
                  subtitle: "Electrical Engineering",
                  org: "University of Zimbabwe, Support Services",
                  period: "Previous",
                  location: "Harare, Zimbabwe",
                  color: "bg-purple-500",
                },
                {
                  icon: GraduationCap,
                  title: "BSc Honors Degree",
                  subtitle: "Energy and Power Systems Engineering",
                  org: "University of Zimbabwe",
                  period: "August 2020 - July 2024",
                  location: "Harare, Zimbabwe",
                  color: "bg-orange-500",
                },
              ].map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                >
                  <Card className="backdrop-blur-sm bg-card/50 border-border/40 hover:border-primary/40 transition-all">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className={`${exp.color} rounded-full p-3 h-fit`}>
                          <exp.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                          <div className="text-primary font-semibold mb-2">{exp.subtitle}</div>
                          <div className="text-muted-foreground mb-2">{exp.org}</div>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span>{exp.period}</span>
                            <span className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-12 text-center"
            >
              Networks & Membership
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  title: "Association of Energy Engineers International Member (Tier IV)",
                  link: "https://drive.google.com/file/d/1hdupo5CazxZFw-xpjbMTsjTxGA1045bI/view?usp=drivesdk",
                },
                {
                  title: "IEEE Membership",
                  link: "https://drive.google.com/file/d/19DX33doBVkjLpqSs83vRW79dtNLCCp4x/view?usp=drivesdk",
                },
                {
                  title: "IEEE Power & Energy Society Membership",
                  link: "https://drive.google.com/file/d/1iNmiTPuK-NPQnpUC7Fab6HPAKEub9tln/view?usp=drivesdk",
                },
                {
                  title: "Power & Energy Society Expanding Collaboration and Engagement Community, IEEE",
                  link: "https://drive.google.com/file/d/1LgvlwvMguOJs71vXt1R6lj9DhF1jqjQD/view?usp=drivesdk",
                },
              ].map((membership, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                >
                  <Card className="h-full backdrop-blur-sm bg-card/50 border-border/40 hover:border-primary/40 transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3">
                        <Users className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                        <div className="flex-1">
                          <h3 className="font-semibold mb-2 leading-tight">{membership.title}</h3>
                          <Link
                            href={membership.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-primary hover:underline flex items-center gap-1"
                          >
                            View Certificate <ExternalLink className="h-3 w-3" />
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-12 text-center"
            >
              Honors and Awards
            </motion.h2>
            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  title: "Vice-Chancellor's Scholarship",
                  org: "University of Zimbabwe",
                  date: "23/03/2024",
                  description: "Achiever's Assistance scholarship / Merit-Need Award",
                },
                {
                  title: "Certificate of Leadership Excellence",
                  org: "Young Life",
                  date: "27/10/2019",
                  description: "In appreciation of my prowess and tenacity in my conduct as a Young Life Club Leader",
                },
                {
                  title: "Certificate of Excellence in Innovation & Sustainability",
                  org: "FIRST Global",
                  date: "2019",
                  description: "For participating in the FIRST Global Olympic Robotics Challenge, Dubai, UAE",
                  links: [
                    "https://www.sundaymail.co.zw/zim-pupils-out-to-conquer-in-dubai",
                    "https://youtu.be/cCBRwDv5_lM?si=xLeQIE5DdxlBN6px",
                    "https://first.global/2019-nations/zimbabwe-2019/",
                  ],
                },
              ].map((award, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                >
                  <Card className="backdrop-blur-sm bg-card/50 border-border/40 hover:border-primary/40 transition-all">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="bg-amber-500 rounded-full p-3 h-fit">
                          <Award className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-1">{award.title}</h3>
                          <div className="text-primary font-semibold mb-2">{award.org}</div>
                          <div className="text-sm text-muted-foreground mb-2">{award.date}</div>
                          <p className="text-muted-foreground mb-3">{award.description}</p>
                          {award.links && (
                            <div className="flex flex-wrap gap-2">
                              {award.links.map((link, j) => (
                                <Link
                                  key={j}
                                  href={link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-xs text-primary hover:underline flex items-center gap-1"
                                >
                                  Link {j + 1} <ExternalLink className="h-3 w-3" />
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-12 text-center"
            >
              Entrepreneurial Journey
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="backdrop-blur-sm bg-card/50 border-border/40">
                <CardContent className="p-8">
                  <div className="flex gap-4 mb-6">
                    <div className="bg-gradient-to-br from-blue-500 to-green-500 rounded-full p-4 h-fit">
                      <Briefcase className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">Co-Founder of Motion-dash Technologies</h3>
                      <div className="text-primary font-semibold mb-2">20/08/2022 – CURRENT</div>
                      <p className="text-muted-foreground mb-4">
                        A start-up offering sustainable systems solutions in the renewable energy sector
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3 pl-20">
                    <h4 className="font-semibold mb-3">Services:</h4>
                    {[
                      "Solar Home Systems",
                      "Solar Pumping Systems",
                      "Solar Cold Storage Systems",
                      "Commercial & Industrial Solar Systems",
                    ].map((service, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="flex items-center gap-2"
                      >
                        <span className="text-primary">•</span>
                        <span>{service}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-12 text-center"
            >
              Volunteering
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <Card className="backdrop-blur-sm bg-card/50 border-border/40">
                <CardContent className="p-8">
                  <div className="flex gap-4 mb-6">
                    <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-4 h-fit">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">Founder & Chairman of Nyemwerera Trust</h3>
                      <div className="text-primary font-semibold mb-2">20/12/2020 – CURRENT</div>
                      <p className="text-muted-foreground mb-4">
                        A community-based initiative empowering underprivileged children through education, humanitarian
                        support and sustainable living
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3 pl-20">
                    <h4 className="font-semibold mb-3">Duties and Responsibilities:</h4>
                    {[
                      "Leads a team of volunteers empowering underprivileged children through education, humanitarian support and sustainable energy initiatives",
                      "Established a Solar-Powered Learning Hub providing evening study access to rural students",
                      "Advocates for gender equity and environmental stewardship among youth in Zimbabwe",
                    ].map((duty, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: i * 0.1, duration: 0.5 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span className="flex-1">{duty}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-12 text-center"
            >
              Products & Services
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Renewable Energy Solutions",
                    icon: Zap,
                    services: [
                      "Research & Design",
                      "Solar Home Systems (SHS)",
                      "Commercial & Industrial Solar PV Systems",
                      "Utility Scale Energy Storage Systems (BESS)",
                      "E-mobility",
                      "Solar-powered Cold Rooms",
                      "Solar-powered Pumping systems",
                      "Renewable energy systems Integration",
                      "Solar PV installation & Commissioning from 1kVA to Mega-Watts",
                    ],
                  },
                  {
                    title: "Power Systems Solutions",
                    icon: Briefcase,
                    services: [
                      "Research & Design",
                      "Electrical Circuit drawing",
                      "Simulation",
                      "Electrical troubleshooting and fault finding",
                      "Electrical equipment installation",
                      "CAD",
                      "Technical Support",
                    ],
                  },
                  {
                    title: "Electronics & Training",
                    icon: Code,
                    services: [
                      "Schematic Design & Capture",
                      "PCB Design",
                      "Coding - C++, VB, Python",
                      "Solar system design training",
                      "Installation training",
                      "Maintenance and repair training",
                    ],
                  },
                ].map((category, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: i * 0.15, duration: 0.7 }}
                  >
                    <Card className="h-full backdrop-blur-sm bg-card/50 border-border/40">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <category.icon className="h-6 w-6 text-primary" />
                          <h3 className="text-xl font-bold">{category.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {category.services.map((service, j) => (
                            <motion.li
                              key={j}
                              initial={{ opacity: 0, x: 10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true, amount: 0.3 }}
                              transition={{ delay: j * 0.05, duration: 0.4 }}
                              className="flex items-start gap-2 text-sm"
                            >
                              <span className="text-primary mt-0.5">•</span>
                              <span className="text-muted-foreground">{service}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-4 text-center"
            >
              Research Interests
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center text-muted-foreground mb-12 max-w-4xl mx-auto text-pretty"
            >
              My research interests focus on innovative technologies which are critical to addressing global energy
              shortages, carbon emissions, climate change and grid unreliability
            </motion.p>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="backdrop-blur-sm bg-card/50 border-border/40">
                  <CardContent className="p-8">
                    <div className="grid md:grid-cols-2 gap-4">
                      {[
                        "Decentralized Energy systems",
                        "Control of Renewable Energy Systems",
                        "Renewable Energy Adoption & Integration",
                        "Smart Grids",
                        "Green building",
                        "Virtual Power Plants",
                        "Sustainability",
                        "Utility Scale Energy Storage",
                      ].map((interest, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ delay: i * 0.08, duration: 0.5 }}
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/5 transition-colors"
                        >
                          <div className="h-2 w-2 rounded-full bg-primary" />
                          <span className="font-medium">{interest}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold mb-4 text-center"
            >
              Let's Connect
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center text-muted-foreground mb-12 max-w-4xl mx-auto text-pretty"
            >
              If you are a SPONSOR / CLIENT, ENGINEER, ENTREPRENEUR, EMPLOYER, MENTOR searching for a talented
              professional in renewable energy or just curious, let's connect and build something the world can't
              ignore. I am open to learning new skills and exploring opportunities that will advance my skillset as a
              renewable energy and power systems engineer to reach my career goal of becoming a DE-CARBONIZATION leader.
            </motion.p>

            <div className="mb-16">
              <ContactForm />
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
              >
                <Card className="backdrop-blur-sm bg-card/50 border-border/40 h-full">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 rounded-full p-3">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Email</div>
                          <Link
                            href="mailto:gerald210gundani@gmail.com"
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            gerald210gundani@gmail.com
                          </Link>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 rounded-full p-3">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Phone</div>
                          <div className="text-muted-foreground space-y-1">
                            <div>+263714735268 (WhatsApp & Calls)</div>
                            <div>+263778814277 (Calls only)</div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-primary/10 rounded-full p-3">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-semibold mb-1">Location</div>
                          <div className="text-muted-foreground">Harare, Zimbabwe</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
              >
                <Card className="backdrop-blur-sm bg-card/50 border-border/40 h-full">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold mb-6">Services Available</h3>
                    <ul className="space-y-3">
                      {[
                        "Get a quote for your Solar System Package (Fix & Supply)",
                        "Get a quote for Solar System Design & Installation course",
                        "Enquire about any service mentioned above",
                      ].map((item, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ delay: i * 0.1, duration: 0.5 }}
                          className="flex items-start gap-2"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span className="text-muted-foreground">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl mx-auto"
            >
              <Card className="backdrop-blur-sm bg-card/50 border-border/40">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6 text-center">Follow Me on Social Media</h3>
                  <div className="flex flex-wrap justify-center gap-4">
                    {[
                      {
                        icon: Linkedin,
                        label: "LinkedIn",
                        href: "https://www.linkedin.com/in/gerald-gundani-174139268",
                        color: "hover:text-blue-600",
                      },
                      {
                        icon: Instagram,
                        label: "Instagram",
                        href: "https://www.instagram.com/im_just_gerald?igsh=MTQ2cjR4YmdnMTRuYw==",
                        color: "hover:text-pink-600",
                      },
                      {
                        icon: Twitter,
                        label: "X (Twitter)",
                        href: "https://x.com/ImJustGerald?t=VCWzeafA5hb27QluYMXbgg&s=09",
                        color: "hover:text-sky-500",
                      },
                      {
                        icon: Facebook,
                        label: "Facebook",
                        href: "https://www.facebook.com/share/17rheG6gg2/",
                        color: "hover:text-blue-700",
                      },
                      {
                        icon: Code,
                        label: "Threads",
                        href: "https://www.threads.com/@im_just_gerald",
                        color: "hover:text-purple-600",
                      },
                      {
                        icon: Code,
                        label: "TikTok",
                        href: "http://tiktok.com/@im_just_gerald",
                        color: "hover:text-gray-900 dark:hover:text-gray-100",
                      },
                    ].map((social, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: i * 0.05, duration: 0.4 }}
                        whileHover={{ scale: 1.1 }}
                      >
                        <Link
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 transition-colors ${social.color}`}
                        >
                          <social.icon className="h-5 w-5" />
                          <span className="text-sm font-medium">{social.label}</span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-border/40 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src="/images/logo.webp"
                  alt="Logo"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="font-bold">Gerald Gundani</span>
              </div>
              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <Link href="#about" className="hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="#projects" className="hover:text-primary transition-colors">
                  Projects
                </Link>
                <Link href="#skills" className="hover:text-primary transition-colors">
                  Skills
                </Link>
                <Link href="#certifications" className="hover:text-primary transition-colors">
                  Certifications
                </Link>
                <Link href="#experience" className="hover:text-primary transition-colors">
                  Experience
                </Link>
                <Link href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </div>
              <div className="text-sm text-muted-foreground">© 2025 Gerald Gundani. All rights reserved.</div>
              <div className="text-xs text-muted-foreground mt-2 flex items-center justify-center gap-1">
                Made with <span className="text-red-500 mx-1">♥</span> by
                <a
                  href="https://www.linkedin.com/in/anesu-ndoro-a89127209/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-primary ml-1"
                >
                  Anesu
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
