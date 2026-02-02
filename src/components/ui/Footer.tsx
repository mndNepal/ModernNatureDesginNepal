// src/components/Footer.tsx
import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../ui/Container";
import { FaThreads } from "react-icons/fa6";

export default function Footer(): JSX.Element {
  const footerRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedElements, setAnimatedElements] = useState<Set<string>>(new Set());
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"terms" | "blog">("terms");
  const navigate = useNavigate();
  const [showFullBlog, setShowFullBlog] = useState(false);

  const handleCloseModal = () => {
  setShowModal(false);
  setShowFullBlog(false);
};

  const legalText = `At Modern Nature Design Nepal, your trust, privacy, and creativity are our top priorities. Here’s everything you need to know when interacting with our website and services:
  
1. Privacy & Your Information
• Your Info Stays Safe: Any details you share-through orders or inquiries-are completely confidential.
• Secure & Protected: Our website is SSL encrypted.
• Delivery Made Easy: We may share delivery info with couriers.
• Your Designs, Your Rights: Your rug ideas remain private.

2. Ethical & Cruelty-Free Commitment
• Sheep are sheared safely.
• No animals are harmed.
• Ethical standards are upheld.

3. Copyright & Intellectual Property
• All content belongs to Modern Nature Design Nepal.
• Customer designs remain your property.
• Written permission required for commercial use.

By using our website, you agree to respect our policies and creative integrity.`;

  /** FOOTER animations */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          const elements = ["brand", "links", "social", "bottom"];
          elements.forEach((el, idx) => {
            setTimeout(() => {
              setAnimatedElements(prev => new Set([...prev, el]));
            }, idx * 150);
          });
        }
      },
      { threshold: 0.1, rootMargin: "50px 0px -50px 0px" }
    );

    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  /** Footer links */
  const footerLinks = {
    links: {
      title: "Quick Links",
      links: [
        { name: "Collections", action: () => navigate("/collections") },
        { name: "About", action: () => navigate("/about") },
        { name: "Services", action: () => navigate("/services") },
        { name: "Contact", action: () => navigate("/contact") },
        { name: "Color Customizer", action: () => navigate("/color-customizer") },
      ],
    },
    about: {
      title: "About",
      links: [
        {
          name: "Our Story",
          action: () => navigate("/about", { state: { scrollTo: "ourstory-section" } }),
        },
        {
          name: "Craftmanship",
          action: () => navigate("/", { state: { scrollTo: "craftmanship-section" } }),
        },
        {
          name: "Blog",
          action: () => {
            setModalType("blog");
            setShowModal(true);
          },
        },
        {
          name: "Terms & Policy",
          action: () => {
            setModalType("terms");
            setShowModal(true);
          },
        },
      ],
    },
    support: {
      title: "Contact",
      links: [
        { name: "+977-9801037585", icon: <Phone className="w-4 h-4 mr-2" />, action: () => { } },
        { name: "Thaiba-14, Lalitpur, Nepal", icon: <MapPin className="w-4 h-4 mr-2" />, action: () => { } },
        { name: "info@modernnaturedesignnepal.com", icon: <Mail className="w-4 h-4 mr-2" />, action: () => { } },
        { name: "modernnaturedesignnepal@gmail.com", icon: <Mail className="w-4 h-4 mr-2" />, action: () => { } },
      ],
    },
  };

  const socialLinks = [
    { icon: <Instagram className="w-4 h-4" />, href: "https://www.instagram.com/mndnepal" },
    { icon: <Facebook className="w-4 h-4" />, href: "https://www.facebook.com/profile.php?id=61558296209990" },
    { icon: <FaThreads className="w-4 h-4" />, href: "https://www.threads.com/@mndnepal" },
  ];

  return (
    <footer
      ref={footerRef}
      className="bg-charcoal text-off-white relative overflow-hidden"
      style={{
        background: isVisible
          ? "linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 50%, #2c2c2c 100%)"
          : "#2c2c2c",
        transition: "background 1.2s ease-out",
      }}
    >
      <Container>
        <div className="py-8 lg:pt-8 lg:pb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 items-start">
            {/* BRAND */}
            <div
              className={`lg:col-span-2 transform transition-all duration-800 ease-out ${animatedElements.has("brand")
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
                }`}
            >
              <div className="flex flex-column gap-2">
                <img src="/assets/images/navbar/MND_Logo.png" className="h-8 w-8" />
                <h2 className="font-serif text-xl mb-3">
                  Modern Nature Design Nepal
                </h2>
              </div>
              <p className="text-off-white/70 text-sm mb-4">
                Hand-Knotted in Nepal, each rug is a masterpiece of heritage and
                precision, seamlessly blending traditional weaving artistry with
                contemporary design. Crafted for discerning interiors around the
                world, Our rugs embody timeless elegance, exceptional quality and
                ethical craftmanship - a statement of sophistication for
                generations to come.
              </p>
            </div>

            {/* FOOTER NAV LINKS */}
            {Object.entries(footerLinks).map(([_, group], idx) => (
              <div
                key={idx}
                className={`transform transition-all duration-800 ${animatedElements.has("links")
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
                  }`}
              >
                <h3 className="font-medium mb-3 text-sm">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.links.map((l, index) => (
                    <li key={index} className="flex items-center space-x-2 whitespace-nowrap">
                      {l.icon && <span>{l.icon}</span>}
                      <button
                        onClick={l.action}
                        className="text-off-white/70 hover:text-gray-400 text-sm whitespace-nowrap"
                      >
                        {l.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div
              className={`transform transition-all duration-800 ${animatedElements.has("social")
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
                }`}
            >
              <h3 className="font-medium mb-3 text-sm ml-28">Follow Us</h3>
              <div className="flex space-x-6 ml-24">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    className="w-4 h-8 flex items-center justify-center hover:scale-110"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-off-white/20 py-4 text-center text-sm text-off-white/50">
          © {new Date().getFullYear()} Modern Nature Design Nepal. All rights
          reserved.
        </div>
      </Container>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          {/* MODAL WRAPPER */}
          <div className="relative bg-white text-black rounded-xl max-w-3xl w-full max-h-[85vh]">

            <button
              onClick={handleCloseModal}
              aria-label="Close"
              className="absolute top-4 right-4 z-30 w-9 h-9 flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 hover:text-black transition"
            >
              <span className="text-xl leading-none">×</span>
            </button>

            {/* SCROLLABLE CONTENT */}
            <div className="p-6 overflow-y-auto max-h-[85vh]">
              <div className="pb-4 mb-4 border-b border-gray-200 pr-12">
                <h2 className="text-xl font-bold">
                  {modalType === "terms"
                    ? "Legal & Terms - Modern Nature Design Nepal"
                    : "Blog - Modern Nature Design Nepal"}
                </h2>
              </div>

              {modalType === "terms" ? (
                <div style={{ whiteSpace: "pre-line" }} className="text-sm leading-relaxed">
                  {legalText}
                </div>
              ) : (
                <article className="text-sm leading-relaxed space-y-10">
                  {/* INTRO */}
                  <section className="space-y-4">
                    <h3 className="font-serif text-[22px]">
                      A Buyer’s Guide to Working with Hand-Knotted Rug Exporters in Nepal
                    </h3>
                    <p>
                      Hand-knotted rugs are not simply floor coverings-they are handcrafted artworks that reflect generations of skill, culture, and patience. For buyers who value authenticity, quality, and long-term performance, Nepal has earned a strong reputation as one of the world’s most trusted sources for premium hand-knotted rugs.
                    </p>
                    <p>
                      With a rich weaving tradition and a well-established export industry, Nepal supplies hand-knotted rugs to luxury homes, hotels, architects, interior designers, and retailers across global markets. However, sourcing handmade rugs requires the right knowledge and the right manufacturing partner.
                    </p>
                    <p>
                      This guide will help you understand how to work confidently with hand-knotted rug exporters in Nepal and make informed buying decisions.
                    </p>
                  </section>

                  {!showFullBlog && (
                    <div className="flex mt-2">
                      <button
                        onClick={() => setShowFullBlog(true)}
                        className="px-6 py-2 text-sm font-medium border border-black rounded-full hover:bg-black hover:text-white transition"
                      >
                        Read more
                      </button>
                    </div>
                  )}

                  {showFullBlog && (
                    <div className="space-y-4">
                      {/* SECTION 1 — IMAGE FIRST */}
                      <section className="space-y-4">
                        <img
                          src="/blog/1.jpeg"
                          className="w-full h-72 bg-gray-200 rounded-xl object-cover"
                        />

                        <p className="text-xs text-charcoal/60">
                          <strong>Image:</strong> Artisans spinning and preparing yarn<br />
                          Skilled Nepalese artisans preparing hand-spun yarn—an essential step in hand-knotted rug making.
                        </p>

                        <h4 className="font-serif text-xl">
                          Why Hand-Knotted Rugs from Nepal Stand Out
                        </h4>

                        <p>
                          Nepalese hand-knotted rugs are known for their balance of traditional Tibetan weaving techniques and modern design sensibility. Each rug is made by skilled artisans who focus on durability, texture, and fine detailing.
                        </p>

                        <p>
                          Key qualities that define Nepalese hand-knotted rugs include:
                        </p>

                        <ul className="list-disc pl-5 space-y-1">
                          <li>High knot density for strength, structure, and detailed patterns</li>
                          <li>Premium materials such as Himalayan wool, silk, and wool–silk blends</li>
                          <li>Eco-conscious dyeing processes with excellent colorfastness</li>
                          <li>Designs ranging from traditional Tibetan and Persian styles to contemporary and abstract aesthetics</li>
                        </ul>

                        <p>
                          These characteristics make Nepalese rugs ideal for luxury residential interiors and high-traffic hospitality environments.
                        </p>
                      </section>

                      {/* SECTION 2 — BUYING GUIDE PART 1 */}
                      <section className="space-y-4">
                        <h4 className="font-serif text-xl">
                          How to Buy Hand-Knotted Rugs from Nepal
                        </h4>

                        <h5 className="font-medium">
                          1. Choose an Experienced Rug Exporter
                        </h5>

                        <p>
                          The success of your purchase depends heavily on selecting the right exporter. A reliable hand-knotted rug manufacturer in Nepal should offer:
                        </p>

                        <ul className="list-disc pl-5 space-y-1">
                          <li>Proven experience with international clients</li>
                          <li>In-house production and strict quality control</li>
                          <li>Clear and professional communication</li>
                          <li>Customization options for size, color, and design</li>
                        </ul>

                        <p>
                          At Modern Nature Design Nepal, every rug is produced with careful attention to quality, consistency, and client requirements.
                        </p>

                        <img
                          src="/blog/2.jpeg"
                          className="w-full h-72 bg-gray-200 rounded-xl object-cover"
                        />

                        <p className="text-xs text-charcoal/60">
                          <strong>Image:</strong> Interior space featuring a hand-knotted rug<br />
                          A hand-knotted Nepalese rug enhancing a refined interior with warmth, texture, and natural elegance.
                        </p>
                      </section>

                      {/* SECTION 3 — NO IMAGE */}
                      <section className="space-y-4">
                        <h5 className="font-medium">
                          2. Understand Materials and Design Options
                        </h5>

                        <p>
                          Before placing an order, it is important to understand what materials and styles the exporter specializes in. Confirm details such as:
                        </p>

                        <ul className="list-disc pl-5 space-y-1">
                          <li>Wool, silk, or wool–silk blended rugs</li>
                          <li>Traditional, modern, or bespoke designs</li>
                          <li>Capability to handle small custom orders or large-scale hospitality projects</li>
                        </ul>

                        <p>
                          Request catalogs, close-up images, or samples to assess the rug’s texture, finish, and craftsmanship.
                        </p>

                        <h5 className="font-medium">
                          3. Ask the Right Technical Questions
                        </h5>

                        <p>
                          Clear technical understanding helps ensure consistent quality. Important questions include:
                        </p>

                        <ul className="list-disc pl-5 space-y-1">
                          <li>What is the knot density (KPSI – knots per square inch)?</li>
                          <li>Is the yarn hand-spun or machine-spun?</li>
                          <li>Are natural or synthetic dyes used?</li>
                          <li>What is the production and delivery timeline?</li>
                        </ul>

                        <p>
                          A professional exporter will always provide transparent and detailed answers.
                        </p>
                      </section>

                      {/* SECTION 4 — IMAGE */}
                      <section className="space-y-4">
                        <h5 className="font-medium">
                          4. Customization for Projects and Brands
                        </h5>

                        <p>
                          One of Nepal’s biggest strengths is its ability to produce fully customized hand-knotted rugs. Experienced exporters can tailor:
                        </p>

                        <ul className="list-disc pl-5 space-y-1">
                          <li>Sizes, shapes, and proportions</li>
                          <li>Color palettes and design details</li>
                          <li>Logos or branding elements for commercial projects</li>
                        </ul>

                        <p>
                          Providing accurate measurements, color references, and design files ensures precise execution.
                        </p>

                        <img
                          src="/blog/3.jpeg"
                          className="w-full h-72 bg-gray-200 rounded-xl object-cover"
                        />

                        <p className="text-xs text-charcoal/60">
                          <strong>Image:</strong> Close-up of hand-knotted rug texture and border detail<br />
                          Detail view of hand-knotted craftsmanship showing precise knotting, texture, and finishing.
                        </p>
                      </section>

                      {/* SECTION 5 — FINAL */}
                      <section className="space-y-4">
                        <h5 className="font-medium">
                          5. Payment, Shipping, and Export Process
                        </h5>

                        <ul className="list-disc pl-5 space-y-1">
                          <li>Pro-forma invoices and payment terms (usually 30–50% advance)</li>
                          <li>Export documentation for wool and silk rugs</li>
                          <li>Secure packaging, insurance, and international shipping</li>
                        </ul>

                        <p>
                          Always confirm quality checks, damage protection, and replacement policies before shipment.
                        </p>

                        <h5 className="font-medium">
                          Tips for a Successful Buying Experience
                        </h5>

                        <ul className="list-disc pl-5 space-y-1">
                          <li>Start with a sample or trial order</li>
                          <li>Request photo or video updates during production</li>
                          <li>Build long-term partnerships for better pricing and priority service</li>
                          <li>Choose exporters committed to ethical and sustainable production practices</li>
                        </ul>

                        <h4 className="font-serif text-xl">
                          Final Thoughts
                        </h4>

                        <p>
                          Working with a trusted hand-knotted rug exporter in Nepal gives you access to exceptional craftsmanship, premium materials, and designs that stand the test of time.
                        </p>

                        <p>
                          Modern Nature Design Nepal brings Nepal’s weaving heritage into modern interiors through thoughtfully designed, carefully crafted hand-knotted rugs—made with skill, integrity, and care.
                        </p>
                      </section>

                      <div className="flex">
                        <button
                          onClick={() => setShowFullBlog(false)}
                          className="px-6 py-2 text-sm font-medium border border-black rounded-full hover:bg-black hover:text-white transition"
                        >
                          See less
                        </button>
                      </div>

                    </div>
                  )}
                </article>
              )}

              <div className="flex justify-end mt-6">
                <button
                  onClick={handleCloseModal}
                  className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
