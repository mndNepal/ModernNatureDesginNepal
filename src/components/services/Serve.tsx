import React from "react";
import { Store, Wrench, Users, Home, Handshake } from "lucide-react";

export default function WhoWeServe() {
  const items = [
    { icon: <Users size={32} />, title: "Rug Collectors" },
    { icon: <Store size={32} />, title: "Rug Retailers" },
    { icon: <Handshake size={32} />, title: "Rug Sourcing Agents" },
    { icon: <Home size={32} />, title: "Home Owners and Rug Lovers" },
    { icon: <Wrench size={32} />, title: "Interior Designers" },
  ];

  const Card = ({ icon, title }) => (
    <div
      className="bg-white border border-[#dce3ea] rounded-xl shadow-sm p-10
                 flex flex-col items-center justify-center text-center
                 hover:shadow-md transition-all duration-300
                  max-w-md  w-[320px] h-[180px]"
    >
      <span className="text-[#1f3b5c] mb-3">{icon}</span>
      <h3 className="text-lg font-medium text-[#1f3b5c]'">{title}</h3>
    </div>
  );

  return (
    <section className="bg-[url('/public/assets/images/services/shyala.jpg')] w-full py-20 bg-[#eef2f5]">
      <h2 className="text-center text-3xl font-semibold text-[#1f3b5c] mb-12">
        WHO WE SERVE ?
      </h2>

      <div className="max-w-6xl mx-auto px-4">
        {/* Top row: exactly 3 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.slice(0, 3).map((item, i) => (
            <Card key={i} icon={item.icon} title={item.title} />
          ))}
        </div>

        {/* Bottom row: center the two cards under the top row */}
        <div className="mt-8 flex justify-center gap-16">
          {items.slice(3).map((item, i) => (
            <Card key={i + 3} icon={item.icon} title={item.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
