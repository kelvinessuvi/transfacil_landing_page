import { Link } from "react-router";
import logoSrc from "@/imports/logo-header.png";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export default function Termos() {
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
        <h1 className="font-display font-black text-4xl text-[#0D0D0D] mb-8">Termos e Condições</h1>

        <div className="prose prose-gray max-w-none space-y-6 text-[#0D0D0D]/75 leading-relaxed">
          <p className="text-sm uppercase tracking-widest text-[#0D0D0D]/40 font-bold">Última actualização: Junho de 2026</p>

          <p>
            Bem-vindo ao website <a href="https://transfacil.app" className="underline">transfacil.app</a> e à aplicação móvel TransFácil (doravante designados por "Plataforma", "Nós", "Nos" ou "Nosso"), propriedade e operados pela <strong>INOYETU — COMÉRCIO E SERVIÇOS (SU), LDA.</strong> (doravante designada por "Empresa"), com NIF 5001780620 e sede na Província de Luanda, Município de Cazenga, Distrito Urbano e Bairro Hoji Ya Henda, Av. Ngola Kiluanji, casa s/n.º (junto ao Banco BFA do Hoji Ya Henda), República de Angola.
          </p>
          <p>
            A Plataforma é disponibilizada ao Utilizador mediante a aceitação, sem quaisquer alterações, dos termos, condições e avisos aqui contidos (os "Termos"). A aquisição de qualquer passe ou serviço através da Plataforma implica a aceitação plena, irrevogável e sem reservas dos presentes Termos e Condições, os quais se consideram conhecidos e vinculativos para todos os Utilizadores.
          </p>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">1. Introdução</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>A nossa Plataforma é um serviço digital que conecta estudantes e utilizadores gerais a serviços de transporte universitário e para eventos. Os utilizadores da Plataforma são doravante designados por "Utilizador", "Seu/Sua" ou "Utilizadores".</li>
              <li>Ao criar uma conta ou ao adquirir qualquer serviço na Plataforma, o Utilizador concorda em ficar vinculado aos presentes Termos e Condições. Leia atentamente todo este Acordo antes de aceitar os seus Termos. Ao realizar qualquer actividade na Plataforma, o Utilizador concorda em aceitar estes Termos e Condições.</li>
              <li>Ao utilizar esta Plataforma, considera-se que o Utilizador leu e aceitou os presentes Termos e Condições. Quaisquer documentos ou ligações incidentais mencionados serão aceites conjuntamente com estes Termos. O Utilizador concorda em utilizar a Plataforma apenas em estrita conformidade com estes Termos, sendo que quaisquer actos praticados em desconformidade correm por sua conta e risco.</li>
              <li>Estes Termos e Condições fazem parte integrante do Acordo entre o Utilizador e a Empresa. O acesso à Plataforma e/ou a utilização de qualquer Serviço fornecido pela Empresa constitui prova da compreensão, concordância e aceitação integral dos presentes Termos e Condições.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">2. Elegibilidade do Utilizador</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>O Utilizador apenas poderá utilizar os Serviços se tiver capacidade legal para celebrar contratos vinculativos e se cumprir este Acordo e toda a legislação angolana aplicável. Menores de idade deverão obter autorização do seu representante legal.</li>
              <li>É expressamente proibido o acesso ou tentativa de acesso à Plataforma por utilizadores não autorizados. Qualquer utilização não autorizada constitui violação da legislação aplicável.</li>
              <li>A Empresa pode, a seu exclusivo critério, recusar o acesso ou a utilização da Plataforma a qualquer pessoa ou entidade, podendo alterar os critérios de elegibilidade a qualquer momento, nos limites permitidos por lei.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">3. Serviços Disponibilizados pela Plataforma</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>A Empresa disponibiliza aos Utilizadores uma Plataforma para, entre outros, a aquisição de passes de subscrição (mensal, trimestral ou semestral), reserva de lugares em viagens programadas, reserva de transporte para eventos académicos e geração de QR Codes para embarque.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">4. Declarações e Compromissos do Utilizador</h2>
            <p>O Utilizador declara e confirma que:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Utilizará os Serviços da Plataforma apenas para fins lícitos, cumprindo toda a legislação aplicável.</li>
              <li>Fornecerá informações verdadeiras, exactas e completas sempre que solicitado, nomeadamente no momento do registo e da aquisição de passes. A Empresa reserva-se o direito de verificar tais informações a qualquer momento. Caso se verifique que os dados fornecidos não são verdadeiros, total ou parcialmente, a Empresa poderá recusar o registo, cancelar a conta e impedir o acesso aos Serviços, sem aviso prévio.</li>
              <li>Acede e utiliza os Serviços por sua conta e risco, usando o seu melhor critério e prudência antes de realizar qualquer transacção através da Plataforma.</li>
              <li>Compromete-se a não ceder a sua conta a terceiros nem a partilhar as suas credenciais de acesso.</li>
              <li>Compromete-se a não publicar ou transmitir conteúdos ilegais, ameaçadores, abusivos, difamatórios, obscenos ou que incentivem a prática de crimes ou a violação da lei.</li>
              <li>Compromete-se a não alterar, danificar ou eliminar conteúdos que não lhe pertençam, nem interferir com o acesso de outros Utilizadores à Plataforma.</li>
              <li>Compromete-se a indemnizar e a manter a Empresa indemnizada de quaisquer reclamações, perdas ou danos resultantes de actos ou omissões do Utilizador.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">5. Garantias, Representações e Compromissos do Utilizador</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>O Utilizador garante que todas as obrigações assumidas ao abrigo deste Acordo são legais, válidas e executáveis.</li>
              <li>Declara que não existem processos pendentes que possam afectar materialmente a sua capacidade de cumprir as obrigações assumidas.</li>
              <li>Compromete-se a cumprir todos os requisitos legais aplicáveis à sua actividade, incluindo impostos, taxas e direitos.</li>
              <li>Garante possuir todos os direitos necessários, incluindo direitos de propriedade intelectual, para celebrar e cumprir este Acordo, não violando direitos de terceiros.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">6. Direitos de Propriedade Intelectual</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>O Utilizador autoriza expressamente a Empresa a utilizar marcas, logótipos e outros direitos de propriedade intelectual para efeitos de reprodução na Plataforma.</li>
              <li>Todo o conteúdo da Plataforma é propriedade da Empresa ou dos seus licenciadores e encontra-se protegido pela legislação de propriedade intelectual da República de Angola.</li>
              <li>Salvo autorização expressa, o Utilizador não adquire quaisquer direitos sobre os Serviços, conteúdos ou propriedade intelectual da Empresa.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">7. Dados</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>"Dados" incluem todas as informações identificáveis dos Utilizadores, tais como nome, email, número de telefone, dados académicos, serviços utilizados e preferências.</li>
              <li>O Utilizador compromete-se a não revender, divulgar ou utilizar os Dados para fins alheios a este Acordo.</li>
              <li>Ao submeter conteúdos, o Utilizador concede à Empresa um direito perpétuo, irrevogável e gratuito de utilização desses conteúdos para as finalidades da Plataforma.</li>
              <li>A Empresa não garante a exactidão de informações obtidas de terceiros.</li>
              <li>O tratamento de dados pessoais rege-se pela Política de Privacidade da TransFácil, elaborada em conformidade com a Lei n.º 22/11 — Lei de Protecção de Dados Pessoais da República de Angola.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">8. Relação entre as Partes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nada neste Acordo cria uma relação de sociedade, agência, parceria ou vínculo laboral entre as Partes.</li>
              <li>A TransFácil actua como intermediária entre Utilizadores e prestadores de transporte, não estabelecendo qualquer relação de exclusividade ou subordinação com os motoristas parceiros.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">9. Passes, Pagamentos e Reembolsos</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Os passes de subscrição são adquiridos mediante pagamento por transferência bancária. Após a confirmação do pagamento e validação pela Empresa, o passe é activado.</li>
              <li>O Utilizador reconhece que o envio de comprovativos de pagamento é da sua inteira responsabilidade, devendo assegurar-se de que os mesmos são legíveis e correspondem ao valor correcto.</li>
              <li>Os passes adquiridos não são reembolsáveis após activação.</li>
              <li>Cancelamentos de reservas de eventos devem ser solicitados através do suporte, estando sujeitos à análise da Empresa.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">10. Uso do QR Code</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>O QR Code gerado pela Plataforma é válido para uma única utilização e está vinculado ao titular da conta.</li>
              <li>A partilha ou reprodução não autorizada do QR Code é expressamente proibida.</li>
              <li>A Empresa não se responsabiliza pelo uso indevido de QR Codes por terceiros.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">11. Indemnização</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>O Utilizador compromete-se a indemnizar a Empresa por quaisquer perdas, danos ou reclamações decorrentes da violação deste Acordo ou da legislação aplicável.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">12. Exoneração de Responsabilidade</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>O Utilizador renuncia expressamente a quaisquer reclamações contra a Empresa decorrentes da utilização da Plataforma, nos limites permitidos por lei.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">13. Limitação de Responsabilidade</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>A Empresa não será responsável por quaisquer perdas, danos directos ou indirectos, lucros cessantes ou danos consequenciais resultantes da utilização da Plataforma, salvo quando comprovadamente causados por dolo da Empresa.</li>
              <li>A Empresa não se responsabiliza por atrasos, cancelamentos ou quaisquer incidentes ocorridos durante as viagens que estejam fora do seu controlo.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">14. Rescisão</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>O Acordo pode ser rescindido pela Empresa em caso de violação material não sanada no prazo de 15 dias após notificação.</li>
              <li>Qualquer Parte pode rescindir o Acordo mediante aviso prévio escrito de 30 dias.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">15. Efeitos da Rescisão</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Em caso de rescisão, os Serviços serão descontinuados imediatamente e a conta do Utilizador será desactivada.</li>
              <li>A Empresa não será responsável por quaisquer prejuízos resultantes da rescisão.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">16. Lei Aplicável e Resolução de Litígios</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>O presente Acordo rege-se pela legislação da República de Angola.</li>
              <li>Fica estabelecida a competência exclusiva dos tribunais de Luanda para a resolução de quaisquer litígios decorrentes do presente Acordo.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">17. Isenção de Garantias (Disclaimer)</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>A Plataforma é disponibilizada "tal como está", sem garantias expressas ou implícitas quanto à sua exactidão, segurança ou disponibilidade permanentes.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">18. Notificações</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>As notificações à Empresa deverão ser enviadas para <a href="mailto:suporte@transfacil.app" className="underline">suporte@transfacil.app</a> ou para a morada: Av. Ngola Kiluanji, s/n.º, Hoji Ya Henda, Cazenga, Luanda — Angola.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">19. Alterações</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>A Empresa pode alterar estes Termos a qualquer momento, produzindo efeitos 30 dias após a sua publicação na Plataforma. O uso continuado dos Serviços após esse período constitui aceitação dos novos termos.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">20. Força Maior</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Nenhuma das Partes será responsável por incumprimentos resultantes de acontecimentos de força maior, excepto no que respeita a obrigações de pagamento.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-[#0D0D0D] mt-10 mb-4">21. Contactos</h2>
            <p>
              Para esclarecimentos adicionais sobre os Termos e Condições, contacte-nos através dos seguintes meios:
            </p>
            <p className="mt-2 leading-relaxed">
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
