import React, { useState } from "react";
import { 
  Building2, HelpCircle, FileDown, ArrowRight, CheckCircle2, 
  Award, ShieldCheck, Zap, Sparkles, Target, Compass, HeartHandshake, Layers
} from "lucide-react";

interface AboutSupportProps {
  lang: "EN" | "UR";
  setActivePage: (page: string) => void;
  initialTab?: "story" | "faqs" | "downloads";
}

export const AboutSupport: React.FC<AboutSupportProps> = ({ lang, setActivePage, initialTab = "story" }) => {
  const [activeTab, setActiveTab] = useState<"story" | "faqs" | "downloads">(initialTab);

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
    },
    {
      q: "What warranty coverage is included with Metalectric products?",
      a: "All signature Alpha Ampere wall-mount and server-rack lithium batteries come backed by a comprehensive 5-Year factory warranty. Our Okara engineering team handles repair and support directly."
    }
  ];

  const downloads = [
    { title: "Alpha Ampere LiFe-48200 Pro Datasheet (PDF)", size: "2.4 MB", type: "Specs Brochure", url: "#" },
    { title: "Standard 19-inch Rack 48100 Installation Guide", size: "4.1 MB", type: "User Manual", url: "#" },
    { title: "Official Inverter CAN/RS485 Protocol Connection Codes", size: "1.2 MB", type: "Technical Note", url: "#" },
    { title: "Metalectric Factory Warranty & Policy Document", size: "0.8 MB", type: "Certificate", url: "#" },
    { title: "Lithium Battery Sizing & Solar System Integration Guide", size: "3.5 MB", type: "Engineering Guide", url: "#" }
  ];

  const t = {
    EN: {
      storyTab: "About Metalectric",
      faqsTab: "Technical FAQs",
      downloadsTab: "Manuals & Downloads",
      heroTitle: "ABOUT METALECTRIC",
      heroSubtitle: "Engineering the future of energy storage with premium lithium battery solutions in Pakistan.",
      quoteCTA: "Get Custom Sizing Quote",
      contactCTA: "Contact Technical Support Desk"
    },
    UR: {
      storyTab: "ہمارے بارے میں",
      faqsTab: "ٹیکنیکل سوالات",
      downloadsTab: "ڈاؤن لوڈز",
      heroTitle: "میٹالیکٹرک کے بارے میں",
      heroSubtitle: "پاکستان میں اعلیٰ معیار کی لیتھیم آئرن فاسفیٹ (LiFePO4) بیٹریوں کی مینوفیکچرنگ اور انرجی حل۔",
      quoteCTA: "کوٹیشن حاصل کریں",
      contactCTA: "ٹیکنیکل سپورٹ سے رابطہ کریں"
    }
  }[lang];

  return (
    <section className="bg-[#050505] text-white py-12 min-h-screen relative" id="about-support-page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left mb-10">
          <span className="text-xs font-mono font-bold uppercase text-[#F6B91E] tracking-widest block mb-2">
            METALECTRIC PK
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
            
            {/* Key Stats Counter Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-[#090909] border border-zinc-900 rounded-2xl p-6 text-center hover:border-zinc-800 transition-all">
                <span className="block text-3xl sm:text-5xl font-black font-mono text-[#F6B91E]">8+</span>
                <span className="text-xs font-mono font-bold uppercase text-zinc-400 mt-2 block">Years Experience</span>
                <span className="text-[10px] text-zinc-600 mt-1 block">In Lithium Battery Design</span>
              </div>
              <div className="bg-[#090909] border border-zinc-900 rounded-2xl p-6 text-center hover:border-zinc-800 transition-all">
                <span className="block text-3xl sm:text-5xl font-black font-mono text-[#F6B91E]">500+</span>
                <span className="text-xs font-mono font-bold uppercase text-zinc-400 mt-2 block">Batteries Delivered</span>
                <span className="text-[10px] text-zinc-600 mt-1 block">Residential & Commercial</span>
              </div>
              <div className="bg-[#090909] border border-zinc-900 rounded-2xl p-6 text-center hover:border-zinc-800 transition-all">
                <span className="block text-3xl sm:text-5xl font-black font-mono text-[#F6B91E]">499+</span>
                <span className="text-xs font-mono font-bold uppercase text-zinc-400 mt-2 block">Happy Customers</span>
                <span className="text-[10px] text-zinc-600 mt-1 block">Across All Major Cities</span>
              </div>
              <div className="bg-[#090909] border border-zinc-900 rounded-2xl p-6 text-center hover:border-zinc-800 transition-all">
                <span className="block text-3xl sm:text-5xl font-black font-mono text-[#F6B91E]">99%</span>
                <span className="text-xs font-mono font-bold uppercase text-zinc-400 mt-2 block">Satisfaction Rate</span>
                <span className="text-[10px] text-zinc-600 mt-1 block">Proven Quality & Reliability</span>
              </div>
            </div>

            {/* Who We Are & Our Journey */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-mono text-[#F6B91E] font-bold uppercase tracking-widest block mb-1">
                    WHO WE ARE
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                    Forward-Thinking Engineering in Energy Storage
                  </h2>
                </div>
                
                <p className="text-zinc-300 text-sm leading-relaxed">
                  <strong className="text-white">Metalectric</strong> is a forward-thinking engineering company focused on advanced lithium battery technologies. With deep expertise in Lithium Iron Phosphate (LiFePO4) systems, we design and manufacture reliable power solutions for homes, vehicles, and commercial applications. We proudly offer our signature battery brand, <strong className="text-[#F6B91E]">Alpha Ampere</strong>, engineered for safety, performance, and customization.
                </p>

                <div className="border-t border-zinc-900 pt-6">
                  <span className="text-xs font-mono text-[#F6B91E] font-bold uppercase tracking-widest block mb-2">
                    OUR JOURNEY
                  </span>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Our journey began when our founders recognized the growing need for reliable, high-performance batteries in the renewable energy sector. Today, we serve customers across multiple industries, from residential solar installations to commercial motorcycle applications. With over a decade of experience, we've built our reputation on engineering excellence, innovative solutions, and an unwavering commitment to customer satisfaction.
                  </p>
                </div>
              </div>

              {/* Mission & Vision Cards */}
              <div className="lg:col-span-5 space-y-4">
                <div className="bg-[#090909] border border-zinc-900 rounded-3xl p-6 space-y-3">
                  <div className="flex items-center space-x-3 text-[#F6B91E]">
                    <Target size={22} />
                    <h3 className="text-base font-extrabold text-white uppercase tracking-wider">Our Mission</h3>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    To provide cutting-edge lithium battery solutions that empower sustainable energy systems and reliable transportation. We are committed to engineering excellence, safety, and environmental responsibility in every product we deliver.
                  </p>
                </div>

                <div className="bg-[#090909] border border-zinc-900 rounded-3xl p-6 space-y-3">
                  <div className="flex items-center space-x-3 text-[#F6B91E]">
                    <Compass size={22} />
                    <h3 className="text-base font-extrabold text-white uppercase tracking-wider">Our Vision</h3>
                  </div>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    To be the global leader in lithium battery technology, driving the transition to clean energy and sustainable transportation. We envision a world powered by reliable, efficient, and environmentally conscious energy storage solutions.
                  </p>
                </div>

                <button
                  onClick={() => setActivePage("get-quote")}
                  className="w-full py-3.5 rounded-xl bg-[#F6B91E] hover:bg-[#e0a410] text-[#050505] font-black text-xs uppercase tracking-wider transition-all shadow-lg"
                >
                  {t.quoteCTA}
                </button>
              </div>
            </div>

            {/* Core Values Section */}
            <div className="border-t border-zinc-900 pt-10">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="text-xs font-mono font-bold uppercase text-[#F6B91E] tracking-widest block mb-1">
                  OUR GUIDING PRINCIPLES
                </span>
                <h3 className="text-2xl font-black text-white uppercase">Core Values</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-[#090909] border border-zinc-900 rounded-2xl p-6 space-y-3 text-left hover:border-zinc-800 transition-all">
                  <Sparkles className="text-[#F6B91E]" size={24} />
                  <h4 className="font-extrabold text-white text-sm uppercase">Innovation</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Constantly pushing boundaries to deliver cutting-edge lithium solutions and advanced BMS balancing microchips.
                  </p>
                </div>

                <div className="bg-[#090909] border border-zinc-900 rounded-2xl p-6 space-y-3 text-left hover:border-zinc-800 transition-all">
                  <ShieldCheck className="text-[#F6B91E]" size={24} />
                  <h4 className="font-extrabold text-white text-sm uppercase">Reliability</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Rigorous thermal stress testing and impedance matching to ensure maximum performance and safety standards.
                  </p>
                </div>

                <div className="bg-[#090909] border border-zinc-900 rounded-2xl p-6 space-y-3 text-left hover:border-zinc-800 transition-all">
                  <HeartHandshake className="text-[#F6B91E]" size={24} />
                  <h4 className="font-extrabold text-white text-sm uppercase">Customer Focus</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Your success is our priority. We provide personalized sizing solutions for every unique load requirement.
                  </p>
                </div>

                <div className="bg-[#090909] border border-zinc-900 rounded-2xl p-6 space-y-3 text-left hover:border-zinc-800 transition-all">
                  <Award className="text-[#F6B91E]" size={24} />
                  <h4 className="font-extrabold text-white text-sm uppercase">Engineering Excellence</h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Our team of expert engineers ensures every finished battery pack meets ISO-certified manufacturing standards.
                  </p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: TECHNICAL FAQS */}
        {activeTab === "faqs" && (
          <div className="space-y-6 max-w-4xl mx-auto text-left">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#090909] border border-zinc-900 rounded-2xl p-6 space-y-3 hover:border-zinc-800 transition-all">
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
                className="px-6 py-3 rounded-xl bg-[#F6B91E] text-[#050505] font-bold text-xs uppercase tracking-wider hover:bg-[#e0a410] transition-all inline-flex items-center space-x-2 shadow-lg"
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
