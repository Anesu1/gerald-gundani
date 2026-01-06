import React from "react";

const researchCards = [
  {
    title: "Decentralized Energy Systems",
    description: "Exploring distributed generation, microgrids, and peer-to-peer energy trading to improve energy access and resilience.",
  },
  {
    title: "Control of Renewable Energy Systems",
    description: "Advanced control strategies for solar, wind, and hybrid systems to maximize efficiency and stability.",
  },
  {
    title: "Renewable Energy Adoption & Integration",
    description: "Policies, technologies, and market mechanisms for accelerating renewable energy uptake and seamless grid integration.",
  },
  {
    title: "Smart Grids",
    description: "Digitalization, automation, and intelligent management of power networks for reliability and flexibility.",
  },
  {
    title: "Green Building",
    description: "Design and operation of energy-efficient, low-carbon buildings using renewable energy and sustainable materials.",
  },
  {
    title: "Virtual Power Plants",
    description: "Aggregation of distributed energy resources to provide grid services and participate in energy markets.",
  },
  {
    title: "Sustainability",
    description: "Holistic approaches to energy, water, and resource management for a sustainable future.",
  },
  {
    title: "Utility Scale Energy Storage",
    description: "Large-scale battery and alternative storage solutions for grid stability and renewable integration.",
  },
];

export default function ResearchBentoGrid() {
  return (
    <section className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-10 text-center">Research Interests</h2>
       <p className="text-muted-foreground pb-10 text-center text-[16px]">My research interests focus on innovative technologies which are critical to addressing global energy shortages, carbon emissions, climate change and grid unreliability with a main focus on:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchCards.map((card, i) => (
            <div
              key={i}
              className="rounded-2xl bg-card/80 border border-border shadow-lg p-6 flex flex-col hover:scale-[1.03] hover:shadow-2xl transition-transform min-h-[200px]"
            >
              <h3 className="text-xl font-semibold mb-2 text-primary">{card.title}</h3>
              <p className="text-muted-foreground text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
