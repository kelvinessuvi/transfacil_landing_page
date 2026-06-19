import { Link } from "react-router";
import logoSrc from "@/imports/logo-header.png";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* Simple header */}
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
        <h1 className="font-display font-black text-4xl text-[#0D0D0D] mb-8">Política de Privacidade</h1>

        <div className="prose prose-gray max-w-none space-y-6 text-[#0D0D0D]/75 leading-relaxed">
          <p className="text-sm uppercase tracking-widest text-[#0D0D0D]/40 font-bold">Última actualização: Junho de 2026</p>

          <p className="text-[#0D0D0D]/75">
            A presente Política de Privacidade descreve como a <strong>INOYETU — COMÉRCIO E SERVIÇOS (SU), LDA.</strong>, proprietária e operadora da plataforma TransFácil (doravante designada por "TransFácil", "Nós" ou "Nosso"), recolhe, utiliza, armazena e protege os dados pessoais dos seus utilizadores (doravante designados por "Utilizador" ou "Você"). A TransFácil está empenhada em proteger a sua privacidade e em tratar os seus dados pessoais em conformidade com a <strong>Lei n.º 22/11, de 17 de Junho — Lei de Protecção de Dados Pessoais da República de Angola</strong>, e demais legislação aplicável. Ao aceder ou utilizar a Plataforma TransFácil, o Utilizador concorda com os termos desta Política de Privacidade.
          </p>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">1. Definições</h2>
            <p>Para efeitos desta Política de Privacidade, os termos abaixo terão o seguinte significado:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Dados Pessoais:</strong> Qualquer informação, de qualquer natureza e independentemente do suporte, incluindo som e imagem, relativa a uma pessoa singular identificada ou identificável (titular dos dados).</li>
              <li><strong>Tratamento de Dados Pessoais:</strong> Qualquer operação ou conjunto de operações efectuadas sobre dados pessoais, por meios total ou parcialmente automatizados ou não automatizados, tais como a recolha, o registo, a organização, a conservação, a adaptação ou alteração, a recuperação, a consulta, a utilização, a comunicação por transmissão, por difusão ou por qualquer outra forma de colocação à disposição, com comparação ou interconexão, bem como o bloqueio, apagamento ou destruição.</li>
              <li><strong>Titular dos Dados:</strong> A pessoa singular a quem os dados pessoais dizem respeito.</li>
              <li><strong>Responsável pelo Tratamento:</strong> A pessoa singular ou colectiva que determina as finalidades e os meios de tratamento dos dados pessoais. No caso da TransFácil, a <strong>INOYETU — COMÉRCIO E SERVIÇOS (SU), LDA.</strong>.</li>
              <li><strong>Subcontratante:</strong> A pessoa singular ou colectiva que trate dados pessoais por conta do responsável pelo tratamento.</li>
              <li><strong>Consentimento:</strong> Qualquer manifestação de vontade, livre, específica e informada, pela qual o titular dos dados aceita, mediante declaração ou acto positivo inequívoco, que os dados pessoais que lhe dizem respeito sejam objecto de tratamento.</li>
              <li><strong>Plataforma:</strong> Refere-se ao website <a href="https://transfacil.app" className="underline">transfacil.app</a>, aplicações móveis e todos os serviços disponibilizados através da TransFácil.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">2. Responsável pelo Tratamento de Dados</h2>
            <p>
              O Responsável pelo Tratamento dos seus dados pessoais é a <strong>INOYETU — COMÉRCIO E SERVIÇOS (SU), LDA.</strong>, sociedade constituída ao abrigo das leis da República de Angola, com os seguintes dados:
            </p>
            <p className="mt-4 text-sm leading-relaxed">
              <strong>NIF:</strong> 5001780620<br />
              <strong>Sede:</strong> Província de Luanda, Município de Cazenga, Distrito Urbano e Bairro Hoji Ya Henda, Av. Ngola Kiluanji, casa s/n.º (junto ao Banco BFA do Hoji Ya Henda)
            </p>
            <p className="mt-2">
              Pode contactar-nos através do email: <a href="mailto:suporte@transfacil.app" className="underline">suporte@transfacil.app</a>.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">3. Dados Pessoais Recolhidos</h2>
            <p>
              A TransFácil recolhe dados pessoais que são fornecidos directamente por si ou gerados pela utilização dos nossos serviços. Estes podem incluir, mas não se limitam a:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Dados de Identificação:</strong> Nome completo, data de nascimento, fotografia.</li>
              <li><strong>Dados de Contacto:</strong> Endereço de email, número de telefone.</li>
              <li><strong>Dados Académicos:</strong> Universidade, curso, número de estudante.</li>
              <li><strong>Dados de Utilização:</strong> Histórico de viagens, reservas, preferências de rotas, passes adquiridos.</li>
              <li><strong>Dados de Pagamento:</strong> Comprovativos de transferência bancária (apenas para validação).</li>
              <li><strong>Dados de Localização:</strong> Recolhidos mediante consentimento prévio, para acompanhamento de rotas em tempo real.</li>
              <li><strong>Conteúdo do Utilizador:</strong> Informações que submeta na Plataforma, como mensagens de suporte ou avaliações.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">4. Finalidades do Tratamento de Dados</h2>
            <p>Os seus dados pessoais são recolhidos e tratados pela TransFácil para as seguintes finalidades:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Gestão e Prestação de Serviços:</strong> Para permitir o acesso e a utilização da Plataforma, incluindo a criação de conta, aquisição de passes, reserva de viagens e eventos, e geração de QR Codes para embarque.</li>
              <li><strong>Comunicação:</strong> Para enviar notificações importantes sobre a sua conta, reservas, activação de passes, actualizações e informações de suporte.</li>
              <li><strong>Melhoria da Plataforma:</strong> Para analisar o uso da Plataforma e melhorar a experiência do utilizador, desenvolver novas funcionalidades e optimizar os serviços.</li>
              <li><strong>Marketing e Publicidade:</strong> Com o seu consentimento, para enviar comunicações sobre promoções, novos planos ou funcionalidades que possam ser do seu interesse.</li>
              <li><strong>Cumprimento Legal:</strong> Para cumprir com obrigações legais e regulamentares, incluindo a prevenção de fraudes e a resposta a pedidos de autoridades competentes.</li>
              <li><strong>Segurança:</strong> Para garantir a segurança da Plataforma e proteger os utilizadores contra actividades fraudulentas ou maliciosas.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">5. Fundamentos de Licitude para o Tratamento de Dados</h2>
            <p>O tratamento dos seus dados pessoais pela TransFácil baseia-se nos seguintes fundamentos de licitude, conforme a Lei n.º 22/11:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Consentimento do Titular dos Dados (Art. 14.º, alínea a)):</strong> Quando o Utilizador deu o seu consentimento inequívoco para o tratamento dos seus dados pessoais para uma ou mais finalidades específicas.</li>
              <li><strong>Execução de Contrato (Art. 14.º, alínea b)):</strong> Quando o tratamento é necessário para a execução do contrato de prestação de serviços celebrado com o Utilizador, nomeadamente a gestão de passes e reservas.</li>
              <li><strong>Cumprimento de Obrigação Legal (Art. 14.º, alínea c)):</strong> Quando o tratamento é necessário para o cumprimento de uma obrigação legal a que a TransFácil esteja sujeita.</li>
              <li><strong>Interesses Legítimos (Art. 14.º, alínea f)):</strong> Quando o tratamento é necessário para a prossecução dos interesses legítimos da TransFácil, desde que não prevaleçam os interesses ou direitos e liberdades fundamentais do titular dos dados.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">6. Direitos dos Titulares dos Dados</h2>
            <p>De acordo com a Lei n.º 22/11, o Utilizador, como titular dos dados, tem os seguintes direitos:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Direito de Informação (Art. 19.º):</strong> Tem o direito de ser informado sobre a identidade do responsável pelo tratamento, as finalidades do tratamento, os destinatários dos dados, o carácter obrigatório ou facultativo das respostas e os direitos de acesso e retificação.</li>
              <li><strong>Direito de Acesso (Art. 20.º):</strong> Tem o direito de obter da TransFácil a confirmação de que os dados pessoais que lhe dizem respeito são ou não objecto de tratamento e, em caso afirmativo, de aceder aos seus dados pessoais e a informações relativas às finalidades do tratamento, categorias de dados, destinatários, período de conservação, entre outros.</li>
              <li><strong>Direito de Oposição (Art. 21.º):</strong> Tem o direito de se opor, a qualquer momento, por razões ponderosas e legítimas relacionadas com a sua situação particular, ao tratamento dos dados pessoais que lhe digam respeito. Em particular, pode opor-se ao tratamento dos seus dados para fins de marketing directo.</li>
              <li><strong>Direito de Rectificação, Actualização e Eliminação (Art. 22.º):</strong> Tem o direito de exigir a rectificação de dados inexactos, a actualização de dados desactualizados e a eliminação de dados cujo tratamento não cumpra o disposto na lei.</li>
            </ul>
            <p className="mt-3">
              Para exercer qualquer um destes direitos, o Utilizador deverá enviar um pedido por escrito para <a href="mailto:suporte@transfacil.app" className="underline">suporte@transfacil.app</a>. A TransFácil responderá ao seu pedido no prazo legalmente estabelecido.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">7. Partilha e Transferência de Dados</h2>
            <p>A TransFácil poderá partilhar os seus dados pessoais com:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Prestadores de Serviços:</strong> Terceiros que prestam serviços em nome da TransFácil, como alojamento de dados, processamento de pagamentos, envio de notificações e suporte ao cliente. Estes prestadores estão contratualmente obrigados a proteger os seus dados e a utilizá-los apenas para as finalidades especificadas pela TransFácil.</li>
              <li><strong>Parceiros de Transporte:</strong> Em caso de viagens organizadas em parceria, os dados relevantes poderão ser partilhados com os motoristas ou operadores de transporte envolvidos, sempre quando necessário para a execução do serviço.</li>
              <li><strong>Autoridades Legais:</strong> Quando exigido por lei ou em resposta a um processo legal válido, como uma ordem judicial.</li>
            </ul>
            <p className="mt-3">
              <strong>Transferências Internacionais de Dados:</strong> A TransFácil poderá transferir os seus dados pessoais para países fora da República de Angola. Tais transferências só ocorrerão se o país de destino garantir um nível de protecção de dados equivalente ou superior, ou se forem implementadas salvaguardas apropriadas (como cláusulas contratuais-tipo) e em conformidade com os arts. 33.º e 34.º da Lei n.º 22/11.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">8. Segurança dos Dados</h2>
            <p>
              A TransFácil implementa medidas de segurança técnicas e organizativas adequadas para proteger os seus dados pessoais contra acesso não autorizado, alteração, divulgação ou destruição acidental ou ilícita, em conformidade com o Art. 13.º da Lei n.º 22/11.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">9. Período de Conservação dos Dados</h2>
            <p>
              A TransFácil conservará os seus dados pessoais apenas pelo tempo necessário para cumprir as finalidades para as quais foram recolhidos, incluindo para efeitos de cumprimento de quaisquer obrigações legais, fiscais ou contabilísticas. Após o término do período de conservação, os dados serão eliminados ou anonimizados de forma segura.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">10. Alterações à Política de Privacidade</h2>
            <p>
              A TransFácil reserva-se o direito de actualizar ou modificar esta Política de Privacidade a qualquer momento. Quaisquer alterações serão publicadas na Plataforma com a indicação da data da última actualização. Recomendamos que reveja periodicamente esta Política para se manter informado sobre como protegemos os seus dados.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">11. Contactos</h2>
            <p>
              Para quaisquer questões relacionadas com esta Política de Privacidade ou com o tratamento dos seus dados pessoais, por favor contacte-nos através de:
            </p>
            <p className="mt-3 leading-relaxed">
              <strong>INOYETU — COMÉRCIO E SERVIÇOS (SU), LDA.</strong><br />
              NIF: 5001780620<br />
              Av. Ngola Kiluanji, s/n.º, Hoji Ya Henda, Cazenga, Luanda — Angola<br />
              Email: <a href="mailto:suporte@transfacil.app" className="underline">suporte@transfacil.app</a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#0A0A0A] py-8 mt-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-white/25 text-xs">© 2026 Transfácil. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
