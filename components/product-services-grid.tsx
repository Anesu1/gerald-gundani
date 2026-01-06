import { Zap, Sun, BatteryCharging, Car, Snowflake, Droplets, Plug, Settings, Cpu, Code, GraduationCap, Users } from "lucide-react";
import React from "react";

const services = [
  {
    icon: <Sun className="h-8 w-8 text-primary" />, // Renewable Energy
    title: "Renewable Energy Solutions",
    description:
      "Research & Design, Solar Home Systems (SHS), Commercial & Industrial Solar PV, Utility Scale Energy Storage (BESS), E-mobility, Solar-powered Cold Rooms, Pumping systems, Integration, Installation & Commissioning (1kVA to MW).",
  },
  {
    icon: <Plug className="h-8 w-8 text-primary" />, // Power Systems
    title: "Power Systems Solutions",
    description:
      "Research & Design, Electrical Circuit Drawing, Simulation, Troubleshooting, Equipment Installation, CAD, Technical Support.",
  },
  {
    icon: <Cpu className="h-8 w-8 text-primary" />, // Electronics
    title: "Electronics Solutions",
    description:
      "Schematic Design & Capture, PCB Design, Coding (C++, VB, Python).",
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />, // Education
    title: "Education & Training",
    description:
      "Training for individuals and teams in solar system design, installation, maintenance, and repair.",
  },
];

export default function ProductServicesGrid() {
  return (
    <section className="py-20 bg-muted/5">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">Products & Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="rounded-2xl bg-card/80 border border-border shadow-lg p-8 flex flex-col items-center text-center hover:scale-[1.03] hover:shadow-2xl transition-transform min-h-[260px]"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-primary">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
