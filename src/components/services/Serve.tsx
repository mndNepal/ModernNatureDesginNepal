import React from "react";
import { Store, Wrench, Users, Home, Handshake } from "lucide-react";

export default function WhoWeServe() {
  const items = [
    { icon: <Store size={32} />, title: "Rug Retailers" },
    { icon: <Wrench size={32} />, title: "Interior Designers" },
    { icon: <Users size={32} />, title: "Rug Collectors" },
    { icon: <Home size={32} />, title: "Home Owners and Rug Lovers" },
    { icon: <Handshake size={32} />, title: "Rug Sourcing Agents" },
  ];

  return (
    <section className="w-full py-20 bg-[#eef2f5]">
      <h2 className="text-center text-3xl font-semibold text-[#1f3b5c] mb-12">
        WHO WE SERVE ?
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-[#dce3ea] rounded-xl shadow-sm p-10 flex flex-col items-center justify-center text-center hover:shadow-md transition-all duration-300"
          >
            <span className="text-[#1f3b5c] mb-3">{item.icon}</span>
            <h3 className="text-lg font-medium text-[#1f3b5c]">{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
