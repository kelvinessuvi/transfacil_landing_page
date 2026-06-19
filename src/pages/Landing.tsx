import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import {
  MapPin, Zap, CreditCard, Clock, Star, Menu, X, Shield, Smartphone,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import logoSrc from "@/imports/logo.png";
import logoSrcHeader from "@/imports/logo-header.png";
import screenshotSrc from "@/imports/screenshot.png";

const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Recursos", href: "#recursos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Contactos", href: "/contactos" },
];

const FEATURES = [
  {
    icon: <MapPin className="w-5 h-5" />,
    title: "Reservas de viagens",
    desc: "Reserve o seu lugar nas rotas universitárias. Escolha o horário e garanta o seu assento com antecedência.",
  },
  {
    icon: <CreditCard className="w-5 h-5" />,
    title: "Bilhete digital",
    desc: "O seu bilhete digital na palma da mão. Subscreva um plano e receba o QR Code para embarcar.",
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "Transporte para eventos",
    desc: "Transporte para eventos universitários. Reserve ida e volta para festas, seminários e encontros académicos.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Pagamento simples",
    desc: "Pague por transferência bancária e envie o comprovativo pela app. Rápido, seguro e sem complicações.",
  },
];

const STEPS = [
  {
    num: "01",
    title: "Crie a sua conta",
    desc: "Registe-se com o seu email em menos de 2 minutos.",
  },
  {
    num: "02",
    title: "Active a subscrição",
    desc: "Escolha o plano de subscrição e faça o pagamento.",
  },
  {
    num: "03",
    title: "Reserve e embarque",
    desc: "Escolha a viagem, reserve e use o QR Code para embarcar",
  },
];

const TESTIMONIALS = [
  {
    name: "Ana Luísa S.",
    course: "Engenharia — Universidade Agostinho Neto",
    text: "Economizo Kz 5.000 por mês com o bilhete digital. Nunca mais perdi o autocarro.",
    avatar: "AL",
  },
  {
    name: "Pedro Mota",
    course: "Direito — Universidade Mandume ya Ndemufayo",
    text: "A função de tempo real mudou a minha rotina. Saio de casa na hora certa todos os dias.",
    avatar: "PM",
  },
  {
    name: "Camila R.",
    course: "Medicina — Universidade Katyavala Bwila",
    text: "Cheguei atrasada a um estágio por causa do horário errado. Com o transfácil isso nunca mais aconteceu.",
    avatar: "CR",
  },
];

const STATS = [
  { value: "50k+", label: "estudantes ativos" },
  { value: "98%", label: "de pontualidade" },
  { value: "200+", label: "rotas mapeadas" },
  { value: "Kz 0", label: "de taxa de cadastro" },
];

const FOOTER_COLUMNS = [
  {
    title: "APP",
    links: [
      { label: "Recursos", href: "#" },
      { label: "Como funciona", href: "#" },
      { label: "Preços", href: "#" },
      { label: "Novidades", href: "#" },
    ],
  },
  {
    title: "Suporte",
    links: [
      { label: "Termos de uso", href: "/termos" },
      { label: "Privacidade", href: "/politica-privacidade" },
      { label: "Contacto", href: "#" },
    ],
  },
];

function PhoneMockup() {
  return (
    <div className="relative w-[280px] h-[580px] rounded-[44px] border-2 border-white/10 shadow-2xl overflow-hidden flex-shrink-0">
      <img
        src={screenshotSrc}
        alt="App TransFácil"
        className="w-full h-full object-cover"
      />
    </div>
  );
}

export default function Landing() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      {/* ── NAVBAR ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          "bg-white border-b border-black/8"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <ImageWithFallback
              src={logoSrcHeader}
              alt="TransFácil — fácil e seguro"
              className="h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-black/55 hover:text-black text-sm font-body font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="#"
              className="bg-[#CCFF00] text-[#0D0D0D] text-sm font-bold px-4 py-2 rounded-sm hover:bg-[#D8FF33] transition-colors"
            >
              Baixar app
            </a>
          </div>

          <button className="md:hidden text-black p-1" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-black/8 px-6 py-6 flex flex-col gap-4"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-black/65 hover:text-black font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#"
              className="bg-[#CCFF00] text-[#0D0D0D] font-bold px-4 py-3 text-center rounded-sm mt-2"
            >
              Baixar app grátis
            </a>
          </motion.div>
        )}
      </header>

      {/* ── HERO ── */}
      <section className="relative min-h-screen bg-[#0D0D0D] flex items-center overflow-hidden">
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#CCFF00 1px, transparent 1px), linear-gradient(90deg, #CCFF00 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* Glow */}
        <div className="absolute top-1/3 right-0 w-[700px] h-[700px] bg-[#CCFF00]/[0.04] rounded-full blur-[140px] translate-x-1/2" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-indigo-500/[0.04] rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left: copy */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 bg-[#CCFF00]/10 border border-[#CCFF00]/20 text-[#CCFF00] text-[11px] font-bold uppercase tracking-[0.15em] px-3 py-1.5 rounded-sm mb-8">
              <Zap className="w-3 h-3" /> Para estudantes
            </span>

            <h1 className="font-display font-black text-[clamp(3.5rem,8vw,6rem)] text-white leading-[0.93] tracking-tight mb-6">
              Mobilidade<br />
              <span className="text-[#CCFF00]">estudantil</span><br />
              simplificada.
            </h1>

            <p className="text-white/55 text-lg leading-relaxed max-w-[420px] mb-10 font-body">
              Planifique as suas rotas, use o seu bilhete digital e acompanhe o autocarro em tempo real — numa app feita para a sua rotina universitária.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-12">
              <a
                href="#"
                className="flex items-center gap-3 bg-white text-[#0D0D0D] px-5 py-3.5 rounded-sm hover:bg-[#CCFF00] transition-all duration-200 font-bold text-sm group"
              >
                <AppleIcon className="w-5 h-5" />
                <span>App Store</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 bg-[#CCFF00] text-[#0D0D0D] px-5 py-3.5 rounded-sm hover:bg-[#CAFF40] transition-all duration-200 font-bold text-sm"
              >
                <PlayIcon className="w-5 h-5" />
                <span>Google Play</span>
              </a>
            </div>

            {/* Mini stats */}
            <div className="flex items-center flex-wrap gap-6 pt-8 border-t border-white/10">
              {STATS.map((s, i) => (
                <div key={i} className="flex flex-col">
                  <span className="font-display font-black text-2xl text-white leading-none">{s.value}</span>
                  <span className="text-white/40 text-xs mt-0.5 font-body">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="hidden lg:flex justify-center items-center relative"
          >
            <PhoneMockup />

            {/* Floating cards */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="absolute -right-6 top-24 bg-[#1A1A1A] border border-white/10 rounded-xl p-3.5 shadow-2xl"
            >
              <div className="text-[9px] text-white/40 uppercase tracking-widest font-body mb-1">Economia mensal</div>
              <div className="font-display font-black text-2xl text-[#CCFF00]">Kz 5.000</div>
              <div className="text-[9px] text-white/30 font-body mt-0.5">vs. tarifa normal</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute -left-8 bottom-28 bg-[#1A1A1A] border border-white/10 rounded-xl p-3.5 shadow-2xl"
            >
              <div className="text-[9px] text-white/40 uppercase tracking-widest font-body mb-1">Próximo autocarro</div>
              <div className="font-display font-black text-2xl text-white">8 min</div>
              <div className="flex gap-0.5 mt-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-2.5 h-2.5 text-[#CCFF00] fill-[#CCFF00]" />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURES ── */}
      <section id="recursos" className="py-28 bg-[#F5F1E8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#0D0D0D]/35 mb-5 block font-body">
                Recursos
              </span>
              <h2 className="font-display font-black text-[clamp(2.8rem,5vw,4.5rem)] text-[#0D0D0D] leading-[0.95] mb-6">
                Tudo o que<br />precisa para se<br />mover bem.
              </h2>
              <p className="text-[#0D0D0D]/55 text-lg leading-relaxed max-w-sm font-body">
                Pensamos em cada detalhe da rotina estudantil. De segunda a sexta, no seu ritmo.
              </p>

              <div className="mt-10 inline-flex items-center gap-2 bg-[#0D0D0D] text-[#CCFF00] px-5 py-3 rounded-sm text-sm font-bold hover:bg-[#1A1A1A] transition-colors cursor-pointer">
                Ver todos os recursos →
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {FEATURES.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="group bg-white border border-[#0D0D0D]/8 rounded-sm p-6 hover:border-[#CCFF00] hover:shadow-lg transition-all duration-200"
                >
                  <div
                    className="w-10 h-10 bg-[#0D0D0D] text-[#CCFF00] rounded-sm flex items-center justify-center mb-4 group-hover:bg-[#CCFF00] group-hover:text-[#0D0D0D] transition-all duration-200"
                  >
                    {f.icon}
                  </div>
                  <h3 className="font-display font-bold text-lg text-[#0D0D0D] mb-2">{f.title}</h3>
                  <p className="text-[#0D0D0D]/55 text-sm leading-relaxed font-body">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="como-funciona" className="py-28 bg-[#0D0D0D] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#CCFF00 1px, transparent 1px), linear-gradient(90deg, #CCFF00 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#CCFF00]/50 mb-5 block font-body">
              Como funciona
            </span>
            <h2 className="font-display font-black text-[clamp(2.8rem,5vw,5rem)] text-white leading-[0.95]">
              Três passos.<br />Sem complicações.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-8 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-[#CCFF00]/20 via-[#CCFF00]/40 to-[#CCFF00]/20" />

            {STEPS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative z-10"
              >
                <div className="w-16 h-16 border border-[#CCFF00]/30 rounded-sm flex items-center justify-center mb-6 bg-[#CCFF00]/5">
                  <span className="font-display font-black text-2xl text-[#CCFF00]">{s.num}</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white mb-3">{s.title}</h3>
                <p className="text-white/45 text-base leading-relaxed font-body">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── 
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#0D0D0D]/35 mb-5 block font-body">
                Depoimentos
              </span>
              <h2 className="font-display font-black text-[clamp(2.8rem,5vw,4.5rem)] text-[#0D0D0D] leading-[0.95]">
                Quem já usa<br />ama de verdade.
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-[#CCFF00] fill-[#CCFF00]" />
                ))}
              </div>
              <span className="font-display font-black text-2xl text-[#0D0D0D]">4.8</span>
              <span className="text-[#0D0D0D]/40 text-sm font-body">nas lojas</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[#F5F1E8] p-8 rounded-sm border border-[#0D0D0D]/5 hover:border-[#0D0D0D]/15 transition-colors"
              >
                <div className="flex gap-0.5 mb-6">
                  {[1, 2, 3, 4, 5].map((j) => (
                    <Star key={j} className="w-4 h-4 text-[#CCFF00] fill-[#CCFF00]" />
                  ))}
                </div>
                <p className="text-[#0D0D0D] text-base leading-relaxed mb-8 font-body">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#0D0D0D] text-[#CCFF00] rounded-full flex items-center justify-center font-display font-black text-xs">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-[#0D0D0D] text-sm font-body">{t.name}</div>
                    <div className="text-[#0D0D0D]/45 text-xs font-body mt-0.5">{t.course}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="bg-[#CCFF00] py-20 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(#0D0D0D 1px, transparent 1px), linear-gradient(90deg, #0D0D0D 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="font-display font-black text-[clamp(2.5rem,5vw,4.5rem)] text-[#0D0D0D] leading-[0.93] mb-3">
              Descarregue agora.<br />É grátis.
            </h2>
            <p className="text-[#0D0D0D]/60 text-lg font-body">Disponível para iOS e Android. Sem mensalidade.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="#"
              className="flex items-center gap-3 bg-[#0D0D0D] text-white px-6 py-4 rounded-sm hover:bg-[#1A1A1A] transition-colors font-bold text-sm"
            >
              <AppleIcon className="w-5 h-5 text-white" />
              App Store
            </a>
            <a
              href="#"
              className="flex items-center gap-3 bg-[#0D0D0D] text-white px-6 py-4 rounded-sm hover:bg-[#1A1A1A] transition-colors font-bold text-sm"
            >
              <PlayIcon className="w-5 h-5 text-white" />
              Google Play
            </a>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-[#0A0A0A] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between gap-12 mb-12">
            <div className="max-w-xs">
              <div className="mb-5">
                <Link to="/">
                  <ImageWithFallback
                    src={logoSrc}
                    alt="TransFácil"
                    className="h-8 w-auto object-contain"
                  />
                </Link>
              </div>
              <p className="text-white/35 text-sm leading-relaxed font-body">
                Fácil e seguro
              </p>
              <div className="flex gap-3 mt-6">
                {["IG", "TW", "TK"].map((s) => (
                  <a
                    key={s}
                    href="#"
                    className="w-8 h-8 border border-white/15 rounded-sm flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors text-[10px] font-bold font-body"
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
              {FOOTER_COLUMNS.map((col) => (
                <div key={col.title}>
                  <h4 className="text-white font-body font-bold text-[10px] uppercase tracking-[0.15em] mb-5">
                    {col.title}
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {col.links.map((link) => (
                      <li key={link.label}>
                        {link.href.startsWith("/") ? (
                          <Link
                            to={link.href}
                            className="text-white/35 text-sm font-body hover:text-white/65 transition-colors"
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            className="text-white/35 text-sm font-body hover:text-white/65 transition-colors"
                          >
                            {link.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-white/25 text-xs font-body">© 2026 Transfácil. Todos os direitos reservados.</p>
            <p className="text-white/25 text-xs font-body">Feito com amor para todos angolanos 🇦🇴</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M3.18 23.76c.3.17.64.22.99.14l12.7-7.34-2.87-2.87L3.18 23.76zM.54 1.52C.2 1.86 0 2.4 0 3.1v17.8c0 .7.2 1.24.54 1.58l.08.08 9.97-9.97v-.24L.62 1.44l-.08.08zm21.33 9.34l-2.84-1.64-3.19 3.19 3.19 3.19 2.86-1.65c.82-.47.82-1.24-.02-1.69zM4.17.24L16.87 7.58l-2.87 2.87L4.17.31A1.13 1.13 0 0 1 4.17.24z" />
    </svg>
  );
}
