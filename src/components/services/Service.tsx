import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const services: ServiceSection[] = [
  {
    id: "1",
    title: "Strike-Offs & Samples",
    subtitle: "See. Feel. Perfect Your Design.",
    image:
      "https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/extra_images/service1.webp",
    description: `
      At Modern Nature Design Nepal, we know that perfection begins with the smallest detail. That's why we offer strike-offs and samples — your opportunity to experience the true color, texture, and craftsmanship of your rug before full production.<br /><br />
      Our strike-offs showcase every element — yarn quality, pile height, and weaving precision — so you can confidently finalize your design. Available in <strong>30×30 cm</strong>, <strong>60×60 cm</strong>, or custom sizes, they ensure your rug turns out exactly as envisioned.<br /><br />
      We also offer expert color matching services, allowing us to perfectly replicate shades from swatches, yarn samples, tufts, or fabric references you provide. Every hue is matched with precision to bring your creative vision to life.<br />
      We value our clients and partners — that's why we provide special discounts or even free strike-offs for regular clients, depending on sample value.<br /><br />
      ✨ From concept to craftsmanship, every detail is woven to perfection.
    `,
  },
  {
    id: "2",
    title: "Color Poms & Tufts",
    subtitle: "Bring Your Colors to Life",
    image:
      "https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/extra_images/service2.jpeg",
    description: `
      We match any shade — from fabric swatches, yarns, leather, or Pantone codes — in wool, silk, or other materials. Create your custom color kits or mini rug swatches for a perfect preview.<br /><br />
      Instant access to a world of shades:<br />
      <strong>ARS 1200 Wool Box</strong> - 1,200 colors<br />
      <strong>ARS 700 Viscose Box</strong> - 700 colors<br />
      <strong>ARS 1000 Viscose Box</strong> - 1,000 colors<br /><br />
      ✨ Turn your vision into vibrant reality — one perfect shade at a time.
    `,
  },
  {
    id: "3",
    title: "Online Color Customizer",
    subtitle: "Your Vision, Your Colors — Instantly",
    image:
      "https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/extra_images/service3.png",
    description: `
      No color kits? No problem. Our Online Color Customizer lets you choose, adjust, and share your color preferences directly online — making communication seamless and precise. Whether you're exploring new palettes or matching existing shades, our digital tool ensures your colors are clear, consistent, and ready for creation.<br /><br />
      ✨ Design from anywhere — we'll bring your colors to life.
    `,
  },
  {
    id: "4",
    title: "Renderings & CAD",
    subtitle: "Where Imagination Meets Precision",
    image:
      "https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/extra_images/service4.jpeg",
    description: `
      Every great rug begins with a vision. Our exclusive rendering and CAD service transforms your ideas into detailed, lifelike designs that capture the essence of your concept before weaving begins.<br /><br />
      Whether inspired by fabric colors, artworks, wall hangings, or real photographs, our skilled designers translate any reference into elegant rug compositions that mirror your imagination with stunning accuracy.<br /><br />
      Each design is your exclusive property, safeguarded under your copyright.<br /><br />
      <strong>Note:</strong> Rendering and CAD services are offered only to clients who produce rugs with us. Designs are not sold separately.<br /><br />
      ✨ Your imagination, beautifully designed — the first step to a masterpiece.
    `,
  },
  {
    id: "5",
    title: "Shipment & Delivery",
    subtitle: "Your Rugs, Anywhere in the World",
    image:
      "https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/extra_images/service5.jpeg",
    description: `
      We ship your rugs as agreed — small orders via couriers (door-to-door) or air cargo, larger shipments via the same fast, reliable channels.<br /><br />
      <strong>FedEx, DHL, UPS:</strong> 3-5 days<br />
      <strong>Air cargo:</strong> 5-7 days to your nearest airport.<br /><br />
      Shipping cost depends on weight or volume, and we provide all documents - invoice, packing list, GSP form, and certificate of origin — for smooth customs clearance.<br /><br />
      Classified under <strong>HS Code 5701.10.4000</strong> and registered under the <strong>EU REX system</strong>, our rugs qualify for generalized tariff preferences.<br /><br />
      ✨ Fast, compliant, and ready to deliver your handcrafted masterpiece anywhere in the world.
    `,
  },
];

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<ServiceSection | null>(null);

  useEffect(() => {
    document.body.style.overflow = activeService ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeService]);

  const firstRowServices = services.slice(0, 3);
  const secondRowServices = services.slice(3);

  return (
    <section className="relative z-30 min-h-screen py-28 flex justify-center bg-cover bg-center bg-no-repeat bg-[url('https://pub-c2cf1f77f6a849c7a4b53fbc7d6573d1.r2.dev/extra_images/1c4725c6-9f4d-4f84-a439-197e6e827a29.jpg')]">
      <div className="w-11/12 md:w-4/5">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
          Our Services
        </h1>

        {/* First Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-10 place-items-center">
          {firstRowServices.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-[380px] bg-gray-200 rounded-2xl shadow-md overflow-hidden border cursor-pointer"
              onClick={() => setActiveService(service)}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold">{service.title}</h2>
                <p className="text-lg">{service.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center ml-40 mr-40">
          {secondRowServices.map((service) => (
            <motion.div
              key={service.id}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="w-[380px] bg-gray-200 rounded-2xl shadow-md overflow-hidden border cursor-pointer"
              onClick={() => setActiveService(service)}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold">{service.title}</h2>
                <p className="text-lg">{service.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {activeService && (
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm flex items-center justify-center p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl flex flex-col md:flex-row overflow-hidden"
                initial={{ scale: 0.95, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.95, y: 50, opacity: 0 }}
              >
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="md:w-1/2 h-64 md:h-auto object-cover"
                />

                <div className="md:w-1/2 p-8 overflow-y-auto max-h-[90vh]">
                  <div className="flex justify-between mb-4">
                    <h2 className="text-3xl font-semibold">
                      {activeService.title}
                    </h2>
                    <button onClick={() => setActiveService(null)}>
                      <X size={28} />
                    </button>
                  </div>

                  <p className="text-lg mb-6">
                    {activeService.subtitle}
                  </p>

                  <div
                    className="text-gray-700"
                    dangerouslySetInnerHTML={{
                      __html: activeService.description,
                    }}
                  />

                  {activeService.id === "3" && (
                    <div className="mt-8 flex justify-center">
                      <Link
                        to="/products"
                        className="inline-flex items-center px-6 py-2 rounded-xl text-lg font-bold shadow-md transition-all duration-300
                        bg-gradient-to-r from-gray-400 via-gray-200 to-gray-400 hover:scale-105"
                      >
                        COLOR CUSTOMIZER
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Services;
