import React, { useState } from "react";
import { AlphaAmpereLogo } from "./Logos";
import { 
  Phone, Mail, MapPin, CheckCircle2,
  Facebook, Linkedin, Twitter, MessageCircle
} from "lucide-react";

interface FooterProps {
  setActivePage: (page: string) => void;
  lang: "EN" | "UR";
  settings: any;
  onOpenAdmin?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage, lang, settings }) => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setNewsletterSuccess(true);
      setNewsletterEmail("");
      setTimeout(() => setNewsletterSuccess(false), 5000);
    }
  };

  const navTo = (page: string) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cInfo = settings?.contactInfo || {
    phone: "+92 309 8000565",
    secondaryPhone: "+92 344 6760259",
    email: "metalectrics@gmail.com",
    infoEmail: "info@metalectrics.com",
    officeAddress: "Faisalabad Road, Okara, Punjab, Pakistan",
    factoryAddress: "Faisalabad Road, Okara, Punjab, Pakistan"
  };

  const t = {
    EN: {
      about: "ABOUT METALECTRICS",
      aboutDesc: "Pakistan's premier clean-energy lithium-ion battery design and manufacturing company. Engineering tomorrow's safe Alpha Ampere LiFePO4 power backups.",
      links: "QUICK LINKS",
      contact: "HEADQUARTERS CONTACT",
      newsletter: "ENGINEERING DISPATCH",
      newsletterDesc: "Get monthly technical battery datasheets, price updates, and energy storage guidelines.",
      newsletterPlaceholder: "Enter your email address",
      newsletterBtn: "Subscribe",
      rights: "© 2026 Metalectrics. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      whatsAppText: "Chat on WhatsApp"
    },
    UR: {
      about: "میٹالیکٹرکس کے بارے میں",
      aboutDesc: "پاکستان میں متبادل توانائی اور لیتھیم بیٹری مینوفیکچرنگ کی پیشرو کمپنی۔ الفا ایمپیئر لیتھیم بیٹری کی تیار کنندہ۔",
      links: "ضروری لنکس",
      contact: "ہیڈ کوارٹرز سے رابطہ",
      newsletter: "ٹیکنیکل نیوز لیٹر",
      newsletterDesc: "ماہانہ بنیادوں پر لیتھیم بیٹری کی قیمتوں اور ٹیکنیکل معلومات کی ای میل حاصل کریں۔",
      newsletterPlaceholder: "اپنی ای میل درج کریں",
      newsletterBtn: "سبسکرائب کریں",
      rights: "© 2026 میٹالیکٹرکس۔ تمام حقوق محفوظ ہیں۔",
      privacy: "رازداری کی پالیسی",
      terms: "شرائط و ضوابط",
      whatsAppText: "واٹس ایپ پر رابطہ کریں"
    }
  }[lang];

  return (
    <footer className="relative bg-[#020202] text-white border-t border-zinc-900 pt-16 pb-12" id="footer-section">
      
      {/* Footer Top Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
        
        {/* Col 1: Brand & Desc */}
        <div className="md:col-span-4 space-y-5 text-left">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navTo("home")}>
            <AlphaAmpereLogo size={42} />
            <div className="flex flex-col">
              <span className="font-sans font-black text-lg tracking-wider text-white">ALPHA AMPERE</span>
              <span className="text-[9px] text-[#F6B91E] tracking-widest uppercase font-mono font-bold">METALECTRIC PK</span>
            </div>
          </div>
          <p className="text-zinc-500 text-sm leading-relaxed">
            {t.aboutDesc}
          </p>

          <div className="flex items-center space-x-3">
            <a 
              href={settings?.socialLinks?.facebook || "#"} 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-zinc-950 border border-zinc-900 flex items-center justify-center text-zinc-500 hover:text-[#F6B91E] hover:border-zinc-800 transition-all"
            >
              <Facebook size={16} />
            </a>
            <a 
              href={settings?.socialLinks?.linkedin || "#"} 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-zinc-950 border border-zinc-900 flex items-center justify-center text-zinc-500 hover:text-[#F6B91E] hover:border-zinc-800 transition-all"
            >
              <Linkedin size={16} />
            </a>
            <a 
              href={settings?.socialLinks?.twitter || "#"} 
              target="_blank" 
              rel="noreferrer"
              className="w-9 h-9 rounded-lg bg-zinc-950 border border-zinc-900 flex items-center justify-center text-zinc-500 hover:text-[#F6B91E] hover:border-zinc-800 transition-all"
            >
              <Twitter size={16} />
            </a>
          </div>
        </div>

        {/* Col 2: Navigation Pathways */}
        <div className="md:col-span-3 space-y-3 text-left">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#F6B91E]">
            {t.links}
          </h4>
          <ul className="space-y-2.5 text-sm text-zinc-400">
            <li>
              <button onClick={() => navTo("home")} className="hover:text-white transition-colors">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => navTo("calculator")} className="hover:text-white transition-colors">
                Battery Sizing Calculator
              </button>
            </li>
            <li>
              <button onClick={() => navTo("products")} className="hover:text-white transition-colors">
                LiFePO4 Products Catalog
              </button>
            </li>
            <li>
              <button onClick={() => navTo("solutions")} className="hover:text-white transition-colors">
                Energy Solutions
              </button>
            </li>
            <li>
              <button onClick={() => navTo("support")} className="hover:text-white transition-colors">
                Support & FAQs
              </button>
            </li>
            <li>
              <button onClick={() => navTo("about")} className="hover:text-white transition-colors">
                About Metalectrics
              </button>
            </li>
            <li>
              <button onClick={() => navTo("contact")} className="hover:text-white transition-colors">
                Contact Us
              </button>
            </li>
          </ul>
        </div>

        {/* Col 3: Contacts */}
        <div className="md:col-span-5 space-y-4 text-left text-sm text-zinc-400">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#F6B91E]">
            {t.contact}
          </h4>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <Phone size={16} className="text-[#F6B91E] mt-1 shrink-0" />
              <div>
                <span className="block text-[10px] uppercase font-mono text-zinc-500">PHONE & WHATSAPP</span>
                <span className="text-zinc-200 font-mono font-bold block">{cInfo.phone}</span>
                {cInfo.secondaryPhone && <span className="text-zinc-400 font-mono text-xs">{cInfo.secondaryPhone}</span>}
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <Mail size={16} className="text-[#F6B91E] mt-1 shrink-0" />
              <div>
                <span className="block text-[10px] uppercase font-mono text-zinc-500">EMAIL SUPPORT</span>
                <span className="text-zinc-200 font-mono block">{cInfo.email}</span>
                {cInfo.infoEmail && <span className="text-zinc-400 font-mono text-xs">{cInfo.infoEmail}</span>}
              </div>
            </li>
            <li className="flex items-start space-x-3">
              <MapPin size={16} className="text-[#F6B91E] mt-1 shrink-0" />
              <div>
                <span className="block text-[10px] uppercase font-mono text-zinc-500">OFFICE & FACTORY ADDRESS</span>
                <span className="text-zinc-300 leading-snug">{cInfo.officeAddress}</span>
              </div>
            </li>
          </ul>
        </div>

      </div>

      {/* Footer Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-900/80 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500">
        <p className="mb-4 md:mb-0">
          {t.rights}
        </p>
        <div className="flex space-x-6">
          <button className="hover:text-zinc-300 transition-colors">
            {t.privacy}
          </button>
          <span>•</span>
          <button className="hover:text-zinc-300 transition-colors">
            {t.terms}
          </button>
        </div>
      </div>

      {/* Floating Sticky Smart WhatsApp Badge */}
      <a
        href={`https://wa.me/${(settings?.whatsAppNumber || "+923098000565").replace(/[^0-9]/g, "")}`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#128C7E] hover:bg-[#075e54] text-white px-4 py-3 rounded-full font-bold text-xs flex items-center space-x-2 shadow-2xl transition-all duration-300 hover:scale-105"
        title="WhatsApp Support"
      >
        <MessageCircle size={18} fill="currentColor" />
        <span className="hidden sm:inline font-sans">{t.whatsAppText}</span>
      </a>

    </footer>
  );
};
