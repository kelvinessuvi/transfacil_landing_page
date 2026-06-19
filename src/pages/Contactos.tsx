import { useState, FormEvent } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import logoSrc from "@/imports/logo-header.png";

const API_URL = "https://transfacil-backend.onrender.com/api/contact";

export default function Contactos() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setFeedback(null);

    if (name.trim().length < 3) {
      setFeedback({ type: "error", text: "O nome deve ter pelo menos 3 caracteres." });
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      setFeedback({ type: "error", text: "Informe um email válido." });
      return;
    }
    if (phone.trim().length < 1) {
      setFeedback({ type: "error", text: "O telefone é obrigatório." });
      return;
    }
    if (subject.trim().length < 3) {
      setFeedback({ type: "error", text: "O assunto deve ter pelo menos 3 caracteres." });
      return;
    }
    if (message.trim().length < 10) {
      setFeedback({ type: "error", text: "A mensagem deve ter pelo menos 10 caracteres." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, subject, message }),
      });
      const data = await res.json();
      if ((res.status === 200 || res.status === 201) && data.success) {
        setFeedback({ type: "success", text: "Mensagem enviada com sucesso! Entraremos em contacto brevemente." });
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
      } else {
        setFeedback({ type: "error", text: data.error || "Ocorreu um erro ao enviar a mensagem. Tente novamente." });
      }
    } catch {
      setFeedback({ type: "error", text: "Erro de conexão. Verifique a sua internet e tente novamente." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Header */}
      <header className="bg-white border-b border-black/8">
        <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <ImageWithFallback
              src={logoSrc}
              alt="TransFácil"
              className="h-8 w-auto object-contain"
            />
          </Link>
          <Link to="/" className="text-black/55 text-sm font-medium hover:text-black transition-colors">
            Voltar ao início
          </Link>
        </nav>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="font-display font-black text-4xl text-[#0D0D0D] mb-4">Suporte</h1>
        <p className="text-[#0D0D0D]/55 text-lg mb-10">
          Tem alguma dúvida, sugestão ou precisa de ajuda? Envie-nos uma mensagem.
        </p>

        {/* FAQ */}
        <section className="mb-14">
          <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mb-6">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {[
              { q: "Como faço para reservar uma viagem?", a: "Aceda ao separador \"Viagens\" na aplicação, escolha a rota e clique em \"Reservar\". Necessita de uma subscrição activa." },
              { q: "Como activo a minha subscrição?", a: "Vá a \"Painel\" > \"Subscrição\", escolha um plano e faça o upload do comprovativo de pagamento. Após validação, a subscrição será activada." },
              { q: "Como obtenho o código QR para embarque?", a: "Após aprovação da reserva, o QR Code será gerado automaticamente e estará disponível nos detalhes da viagem na aplicação." },
              { q: "Posso cancelar uma reserva?", a: "Para cancelar uma reserva, contacte o suporte através do formulário abaixo ou envie um email para suporte@transfacil.app." },
              { q: "Quais os métodos de pagamento aceites?", a: "Actualmente aceitamos transferência bancária. Após o pagamento, envie o comprovativo através da aplicação para validação." },
            ].map((faq, i) => (
              <details key={i} className="group border border-black/10 rounded-sm">
                <summary className="cursor-pointer text-sm font-medium text-[#0D0D0D] px-5 py-4 list-none flex items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="text-black/30 text-lg shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="px-5 pb-4 text-sm text-[#0D0D0D]/60 leading-relaxed border-t border-black/5 pt-3">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        <div className="max-w-xl">
          <div className="mb-10 p-5 bg-[#F5F1E8] border border-black/8 rounded-sm">
            <p className="text-sm font-medium text-[#0D0D0D]/70 mb-2">Também pode contactar-nos através de:</p>
            <p className="text-[#0D0D0D]">
              <a href="mailto:suporte@transfacil.app" className="underline hover:text-[#0D0D0D]/70 transition-colors">suporte@transfacil.app</a>
            </p>
            <p className="text-[#0D0D0D] mt-1">
              <a href="tel:+244923010067" className="underline hover:text-[#0D0D0D]/70 transition-colors">+244 923 010 067</a>
            </p>
          </div>

          {feedback && (
            <div
              className={`mb-6 px-5 py-4 rounded-sm text-sm font-medium ${
                feedback.type === "success"
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {feedback.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#0D0D0D]/70 mb-1.5">
                Nome completo
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="O seu nome"
                className="w-full border border-black/15 rounded-sm px-4 py-2.5 text-sm text-[#0D0D0D] placeholder:text-black/30 outline-none focus:border-[#CCFF00] focus:ring-1 focus:ring-[#CCFF00]/50 transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#0D0D0D]/70 mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="seu@email.com"
                  className="w-full border border-black/15 rounded-sm px-4 py-2.5 text-sm text-[#0D0D0D] placeholder:text-black/30 outline-none focus:border-[#CCFF00] focus:ring-1 focus:ring-[#CCFF00]/50 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#0D0D0D]/70 mb-1.5">
                  Telefone
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+244 900 000 000"
                  className="w-full border border-black/15 rounded-sm px-4 py-2.5 text-sm text-[#0D0D0D] placeholder:text-black/30 outline-none focus:border-[#CCFF00] focus:ring-1 focus:ring-[#CCFF00]/50 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-[#0D0D0D]/70 mb-1.5">
                Assunto
              </label>
              <input
                id="subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Ex: Dúvida sobre passes"
                className="w-full border border-black/15 rounded-sm px-4 py-2.5 text-sm text-[#0D0D0D] placeholder:text-black/30 outline-none focus:border-[#CCFF00] focus:ring-1 focus:ring-[#CCFF00]/50 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#0D0D0D]/70 mb-1.5">
                Mensagem
              </label>
              <textarea
                id="message"
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Descreva a sua questão ou sugestão..."
                className="w-full border border-black/15 rounded-sm px-4 py-2.5 text-sm text-[#0D0D0D] placeholder:text-black/30 outline-none focus:border-[#CCFF00] focus:ring-1 focus:ring-[#CCFF00]/50 transition-colors resize-y"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-[#CCFF00] text-[#0D0D0D] font-bold px-6 py-3 rounded-sm text-sm hover:bg-[#D8FF33] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "A enviar..." : "Enviar mensagem"}
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] py-8 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white/25 text-xs">© 2026 transfácil. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
