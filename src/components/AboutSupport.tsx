import React, { useState } from "react";
import { 
  FileText, ShieldCheck, HelpCircle, FileDown, ArrowRight, CheckCircle, 
  Settings, Award, Cpu, Sparkles, Building2, Zap
} from "lucide-react";

interface AboutSupportProps {
  lang: "EN" | "UR";
  setActivePage: (page: string) => void;
}

export const AboutSupport: React.FC<AboutSupportProps> = ({ lang, setActivePage }) => {
  const [activeTab, setActiveTab] = useState<"story" | "faqs" | "downloads">("story");

  const faqs = [
    {
      q: "Which solar inverters are directly compatible with Alpha Ampere batteries?",
      a: "Our integrated smart BMS supports automatic CAN and RS485 communication protocols with standard premium hybrid inverters sold in Pakistan, including Deye, Victron Energy, Growatt, Solis, SMA, Knox, Fronus, SolarMax, Nitrox, and Voltronic Power."
    },
    {
      q: "What is the lifespan of these LiFePO4 batteries under Pakistan's extreme heat?",
      a: "Traditional lead-acid or tubular batteries fail rapidly under ambient heat exceeding 40°C due to acid degradation. Our Grade-A Lithium Iron Phosphate (LiFePO4) chemistry has a thermal threshold of 60°C. Coupled with custom cell-spacers and automatic high-temperature cut-offs, our battery systems consistently deliver over 8,000 cycles (15+ years of daily cycling)."
    },
    {
      q: "Is it possible to connect multiple batteries in parallel?",
      a: "Yes. Our Alpha BMS supports direct parallel daisy-chaining of up to 16 units using CAN communication cords. The master battery auto-configures load balancing, expanding your energy storage array up to 160 kWh safely."
    },
    {
      q: "Do I need to top up water or do any periodic maintenance?",
      a: "No. Unlike tubular or deep-cycle lead-acid batteries, Alpha Lithium systems are 100% sealed, dry-operating, and require zero water topping, cleaning, or cell-balancing maintenance. The integrated microchip monitors and maintains optimal balances automatically."
    },
    {
      q: "How does the built-in Bluetooth monitoring app work?",
      a: "Each battery pack features a built-in Smart Bluetooth telemetry module. Simply download the mobile app on iOS or Android to view real-time state of charge (SoC), cell voltages, charge/discharge currents, temperature sensors, and health metrics."
    }
  ];

  const downloads = [
    { title: "Alpha Ampere LiFe-48200 Pro Datasheet (PDF)", size: "2.4 MB", type: "Specs Brochure", url: "#" },
    { title: "Standard 19-inch Rack-Rack 48100 Installation Guide", size: "4.1 MB", type: "User Manual", url: "#" },
    { title: "Official Inverter CAN/RS485 Protocol Connection Codes", size: "1.2 MB", type: "Technical Note", url: "#" },
    { title: "Metalectrics Factory Warranty & Policy Document", size: "0.8 MB", type: "Certificate", url: "#" }
  ];

  const t = {
    EN: {
      storyTab: "About Metalectrics",
      faqsTab: "Technical FAQs",
      downloadsTab: "Manuals & Downloads",
      heroTitle: "ENGINEERING EXCELLENCE & SUPPORT",
      heroSubtitle: "Pioneering high-capacity LiFePO4 battery manufacturing and technical energy solutions in Pakistan.",
      quoteCTA: "Build Custom Quote",
      contactCTA: "Contact Technical Support"
    },
    UR: {
      storyTab: "ہمارے بارے میں",
      faqsTab: "ٹیکنیکل سوالات",
      downloadsTab: "ڈاؤن لوڈز",
      heroTitle: "ٹیکنیکل سپورٹ اور میٹالیکٹرکس کے بارے میں",
      heroSubtitle: "پاکستان میں اعلیٰ معیار کی لیتھیم آئرن فاسفیٹ (LiFePO4) بیٹریوں کی مینوفیکچرنگ اور انرجی حل۔",
      quoteCTA: "کوٹ حاصل کریں",
      contactCTA: "ٹیکنیکل سپورٹ سے رابطہ کریں"
    }
  }[lang];

  return (
    <section className="bg-[#050505] text-white py-12 min-h-screen relative" id="about-support-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left mb-10">
          <span className="text-xs font-mono font-bold uppercase text-[#F6B91E] tracking-widest block mb-2">
            METALECTRICS PK
          </span>
          <h1 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
            {t.heroTitle}
          </h1>
          <p className="text-zinc-400 mt-3 text-base sm:text-lg max-w-3xl leading-relaxed">
            {t.heroSubtitle}
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex flex-wrap gap-2 border-b border-zinc-900 pb-4 mb-10">
          <button
            onClick={() => setActiveTab("story")}
            className={`px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center space-x-2 ${
              activeTab === "story"
                ? "bg-[#F6B91E] text-[#050505] shadow-[0_0_20px_rgba(246,185,30,0.2)]"
                : "bg-[#090909] text-zinc-400 border border-zinc-900 hover:text-white"
            }`}
          >
            <Building2 size={16} />
            <span>{t.storyTab}</span>
          </button>

          <button
            onClick={() => setActiveTab("faqs")}
            className={`px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center space-x-2 ${
              activeTab === "faqs"
                ? "bg-[#F6B91E] text-[#050505] shadow-[0_0_20px_rgba(246,185,30,0.2)]"
                : "bg-[#090909] text-zinc-400 border border-zinc-900 hover:text-white"
            }`}
          >
            <HelpCircle size={16} />
            <span>{t.faqsTab}</span>
          </button>

          <button
            onClick={() => setActiveTab("downloads")}
            className={`px-5 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center space-x-2 ${
              activeTab === "downloads"
                ? "bg-[#F6B91E] text-[#050505] shadow-[0_0_20px_rgba(246,185,30,0.2)]"
                : "bg-[#090909] text-zinc-400 border border-zinc-900 hover:text-white"
            }`}
          >
            <FileDown size={16} />
            <span>{t.downloadsTab}</span>
          </button>
        </div>

        {/* TAB 1: STORY / ABOUT US */}
        {activeTab === "story" && (
          <div className="space-y-12 text-left">
            {/* Story Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-mono text-[#F6B91E] font-bold uppercase tracking-widest block">
                  ENGINEERING HERITAGE
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                  Replacing Lead-Acid Weakness with Automotive Grade Lithium
                </h2>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Founded with a vision to solve Pakistan's chronic energy storage challenges, <strong className="text-white">Metalectrics</strong> designs and builds premium <strong className="text-white">Alpha Ampere</strong> series Lithium Iron Phosphate (LiFePO4) power systems.
                </p>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Traditional lead-acid and tubular batteries degrade rapidly under daily load-shedding and ambient temperatures exceeding 40°C. Alpha Ampere batteries are built with Prismatic Grade-A LiFePO4 cells, active Smart BMS balancing, and zero-maintenance sealed enclosures that deliver 8,000+ deep discharge cycles over a 15+ year operational lifespan.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="p-4 rounded-xl bg-[#090909] border border-zinc-900">
                    <span className="block text-2xl font-black text-[#F6B91E]">8,000+</span>
                    <span className="text-xs font-mono text-zinc-500 uppercase">Cycle Life @ 80% DoD</span>
                  </div>
                  <div className="p-4 rounded-xl bg-[#090909] border border-zinc-900">
                    <span className="block text-2xl font-black text-[#F6B91E]">15+ Years</span>
                    <span className="text-xs font-mono text-zinc-500 uppercase">Designed Operational Life</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#090909] border border-zinc-900 rounded-3xl p-8 space-y-6">
                <h3 className="text-lg font-bold text-white uppercase flex items-center space-x-2">
                  <Award className="text-[#F6B91E]" size={20} />
                  <span>Manufacturing Principles</span>
                </h3>
                <ul className="space-y-4 text-xs text-zinc-400">
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={16} className="text-[#F6B91E] shrink-0 mt-0.5" />
                    <span><strong>100% Grade-A Prismatic Cells:</strong> Every cell is QR-verified for internal impedance ≤ 0.5mΩ.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={16} className="text-[#F6B91E] shrink-0 mt-0.5" />
                    <span><strong>Integrated Smart Bluetooth BMS:</strong> Real-time voltage, current, and temperature telemetry directly to your smartphone app.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle size={16} className="text-[#F6B91E] shrink-0 mt-0.5" />
                    <span><strong>Universal Inverter Compatibility:</strong> Direct CAN / RS485 communication with Deye, Victron, Growatt, Solis, and Inverex.</span>
                  </li>
                </ul>

                <button
                  onClick={() => setActivePage("get-quote")}
                  className="w-full py-3.5 rounded-xl bg-[#F6B91E] hover:bg-[#e0a410] text-[#050505] font-bold text-sm transition-all"
                >
                  {t.quoteCTA}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: TECHNICAL FAQS */}
        {activeTab === "faqs" && (
          <div className="space-y-6 max-w-4xl mx-auto text-left">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#090909] border border-zinc-900 rounded-2xl p-6 space-y-3">
                <h3 className="text-base font-bold text-white flex items-start space-x-3">
                  <span className="text-[#F6B91E] font-mono">Q{idx + 1}.</span>
                  <span>{faq.q}</span>
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed pl-7">
                  {faq.a}
                </p>
              </div>
            ))}

            <div className="p-8 rounded-3xl bg-[#090909] border border-zinc-900 text-center space-y-4 mt-8">
              <h3 className="text-lg font-bold text-white">Have additional technical questions?</h3>
              <p className="text-xs text-zinc-400 max-w-xl mx-auto">
                Our power electronics engineering team in Okara is ready to help configure your specific hybrid solar inverter setup.
              </p>
              <button
                onClick={() => setActivePage("contact")}
                className="px-6 py-3 rounded-xl bg-[#F6B91E] text-[#050505] font-bold text-xs uppercase tracking-wider hover:bg-[#e0a410] transition-all inline-flex items-center space-x-2"
              >
                <span>{t.contactCTA}</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        )}

        {/* TAB 3: DOWNLOADS & MANUALS */}
        {activeTab === "downloads" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
            {downloads.map((doc, idx) => (
              <div key={idx} className="bg-[#090909] border border-zinc-900 rounded-2xl p-6 flex items-center justify-between hover:border-zinc-800 transition-all">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold uppercase text-[#F6B91E] tracking-wider block">
                    {doc.type} • {doc.size}
                  </span>
                  <h4 className="text-sm font-bold text-white">
                    {doc.title}
                  </h4>
                </div>
                <a
                  href={doc.url}
                  className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-[#F6B91E] text-xs font-mono text-zinc-300 hover:text-white transition-all shrink-0 ml-4 flex items-center space-x-1"
                >
                  <FileDown size={14} className="text-[#F6B91E]" />
                  <span>PDF</span>
                </a>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
