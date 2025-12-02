import { useState } from 'react';
import {
  Award,
  GraduationCap,
  Users,
  Microscope,
  Diamond,
  Sparkles,
  Eye,
  Zap,
  MapPin,
  Clock,
  Phone,
  Mail,
  Instagram,
  Facebook,
  ChevronRight,
  CheckCircle2
} from 'lucide-react';
import Modal from './components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Modal isOpen={isModalOpen} onClose={closeModal} />

      {/* SEÇÃO 1 - HERO */}
      <section
        className="bg-white py-12 md:py-20 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/background_2_otm.png)',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(255, 255, 255, 0.85)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
            <div className="md:col-span-3 space-y-6">
              <div className="space-y-2">
                <p className="text-[#052659] font-semibold text-lg">Dr. Carlos Teixeira</p>
                <p className="text-gray-600 text-sm">
                  Oftalmologista | Especialista em Catarata e Cirurgia Refrativa
                </p>
                <p className="text-gray-500 text-xs">CRM-PR 27.489 | CRM-SP 138.042</p>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#052659] leading-tight">
                Livre-se dos óculos e volte a viver sem limitações
              </h1>

              <p className="text-xl md:text-2xl text-gray-700">
                Mais de 12.000 cirurgias realizadas com segurança, precisão e cuidado
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                Título de Especialista pela AMB e Conselho Brasileiro de Oftalmologia. Ex-preceptor de cirurgia de catarata do Hospital de Olhos do Paraná, formando dezenas de oftalmologistas na arte de operar com excelência.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="bg-[#C1E8FF] border-2 border-[#052659] rounded-lg p-4 flex items-start gap-3">
                  <Award className="text-[#052659] flex-shrink-0 mt-1" size={24} />
                  <p className="text-[#052659] font-semibold text-sm">12.000+ Cirurgias</p>
                </div>
                <div className="bg-[#C1E8FF] border-2 border-[#052659] rounded-lg p-4 flex items-start gap-3">
                  <GraduationCap className="text-[#052659] flex-shrink-0 mt-1" size={24} />
                  <p className="text-[#052659] font-semibold text-sm">Título de Especialista CBO/AMB</p>
                </div>
                <div className="bg-[#C1E8FF] border-2 border-[#052659] rounded-lg p-4 flex items-start gap-3">
                  <Users className="text-[#052659] flex-shrink-0 mt-1" size={24} />
                  <p className="text-[#052659] font-semibold text-sm">Ex-Preceptor Hospital de Olhos do Paraná</p>
                </div>
                <div className="bg-[#C1E8FF] border-2 border-[#052659] rounded-lg p-4 flex items-start gap-3">
                  <Microscope className="text-[#052659] flex-shrink-0 mt-1" size={24} />
                  <p className="text-[#052659] font-semibold text-sm">Equipamentos de Última Geração</p>
                </div>
              </div>

              <button
                onClick={openModal}
                className="bg-[#10B981] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#059669] transition-all transform hover:scale-105 shadow-lg w-full md:w-auto"
              >
                AGENDAR MINHA AVALIAÇÃO GRATUITA
              </button>

              <p className="text-sm text-gray-600 flex items-center gap-2">
                <Phone size={16} />
                WhatsApp: (43) 99906-2449 | Atendimento rápido
              </p>
            </div>

            <div className="md:col-span-2">
              <div className="shimmer-border p-1">
                <img
                  src="/dr-carlos_teixeira_1_otm.png"
                  alt="Dr. Carlos Teixeira"
                  className="rounded-2xl w-full h-auto shadow-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 - BARRA DE SERVIÇOS */}
      <section className="bg-[#C1E8FF] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Diamond className="text-[#052659] mb-4" size={40} />
              <h3 className="text-xl font-bold text-[#052659] mb-3">Cirurgia de Catarata</h3>
              <p className="text-gray-700">
                Recupere sua visão com lentes de última geração. Liberdade dos óculos para perto e longe.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Sparkles className="text-[#052659] mb-4" size={40} />
              <h3 className="text-xl font-bold text-[#052659] mb-3">Cirurgia Refrativa</h3>
              <p className="text-gray-700">
                Elimine miopia, astigmatismo e hipermetropia. Viva sem óculos ou lentes de contato.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Microscope className="text-[#052659] mb-4" size={40} />
              <h3 className="text-xl font-bold text-[#052659] mb-3">Exames Completos</h3>
              <p className="text-gray-700">
                Tecnologia de ponta para diagnóstico preciso. Tudo em um só lugar, na mesma consulta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 - IDENTIFICAÇÃO COM DOR */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#052659] text-center mb-12">
            Você responde SIM para alguma dessas situações?
          </h2>

          <div className="space-y-6 mb-12">
            {[
              'Você sente que os óculos limitam suas atividades do dia a dia?',
              'Tem dificuldade para dirigir à noite ou fazer tarefas simples por causa da visão?',
              'Já pensou em fazer cirurgia mas tem medo do procedimento ou do resultado?',
              'Não sabe se você é um candidato ideal para cirurgia ocular?',
              'Já tentou outros tratamentos mas não teve os resultados que esperava?',
              'Gostaria de acordar enxergando bem, sem depender de óculos ou lentes?',
              'Tem receio de que o grau volte depois da cirurgia?',
              'Não sabe qual médico pode realmente entregar um resultado seguro e duradouro?'
            ].map((question, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0 w-10 h-10 bg-[#052659] text-white rounded-full flex items-center justify-center font-bold">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <p className="text-gray-700 text-lg pt-1.5">{question}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 text-lg text-center mb-8 leading-relaxed">
            Com tecnologia de ponta, mais de 12.000 cirurgias realizadas e uma abordagem cuidadosa e personalizada, posso te ajudar a encontrar a solução ideal para o seu caso — com segurança e tranquilidade.
          </p>

          <div className="flex justify-center">
            <button
              onClick={openModal}
              className="bg-[#10B981] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#059669] transition-all transform hover:scale-105 shadow-lg"
            >
              QUERO FAZER MINHA AVALIAÇÃO
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 - COMO FUNCIONA */}
      <section className="bg-[#C1E8FF] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#052659] text-center mb-12">
            Como funciona a recuperação da sua visão?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Eye className="text-[#052659] mb-4" size={48} />
              <h3 className="text-2xl font-bold text-[#052659] mb-4">Cirurgia de Catarata</h3>
              <p className="text-[#10B981] font-semibold mb-4">
                Para quem tem 50+ anos e quer se livrar dos óculos
              </p>
              <p className="text-gray-700 mb-4">
                A catarata é a opacificação do cristalino (lente natural do olho), causando visão embaçada e dependência de óculos.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-[#052659] mb-2">Como resolve:</h4>
                  <p className="text-gray-700">
                    Substituímos o cristalino opaco por uma lente intraocular de última geração, personalizada para o seu caso.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#052659] mb-2">Resultado:</h4>
                  <p className="text-gray-700">
                    Visão nítida para perto E longe, sem necessidade de óculos. Procedimento seguro, realizado em poucos minutos, com recuperação rápida.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <Zap className="text-[#052659] mb-4" size={48} />
              <h3 className="text-2xl font-bold text-[#052659] mb-4">Cirurgia Refrativa (LASER)</h3>
              <p className="text-[#10B981] font-semibold mb-4">
                Liberdade dos óculos para quem tem miopia, astigmatismo ou hipermetropia
              </p>
              <p className="text-gray-700 mb-4">
                A cirurgia refrativa corrige os erros de refração através de laser de alta precisão, remodelando a córnea.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-[#052659] mb-2">Como resolve:</h4>
                  <p className="text-gray-700">
                    Procedimento rápido, indolor e seguro que corrige definitivamente o grau.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-[#052659] mb-2">Resultado:</h4>
                  <p className="text-gray-700">
                    Liberdade visual imediata. Você acorda no dia seguinte enxergando bem, sem óculos ou lentes de contato. Resultado estável e duradouro.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-gray-700 text-lg text-center italic mb-8 leading-relaxed max-w-4xl mx-auto">
            Cada caso é único. Na sua avaliação completa, vou examinar seus olhos com equipamentos de última geração e explicar qual o melhor caminho para VOCÊ especificamente — sem pressa, com toda atenção e cuidado que você merece.
          </p>

          <div className="flex justify-center">
            <button
              onClick={openModal}
              className="bg-[#10B981] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#059669] transition-all transform hover:scale-105 shadow-lg"
            >
              AGENDAR MINHA AVALIAÇÃO
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 - DIFERENCIAIS */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#052659] text-center mb-12">
            Por que pacientes escolhem o Dr. Carlos Teixeira?
          </h2>

          <div className="space-y-8">
            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <GraduationCap className="text-[#052659] flex-shrink-0 mt-1" size={40} />
                <div>
                  <h3 className="text-xl font-bold text-[#052659] mb-3">
                    Experiência e Formação Reconhecidas
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-[#10B981] flex-shrink-0 mt-1" size={20} />
                      <span>Mais de 12.000 cirurgias realizadas com segurança e precisão</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-[#10B981] flex-shrink-0 mt-1" size={20} />
                      <span>Título de Especialista em Oftalmologia pela Associação Médica Brasileira (AMB) e Conselho Brasileiro de Oftalmologia (CBO)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-[#10B981] flex-shrink-0 mt-1" size={20} />
                      <span>Ex-Preceptor de Cirurgia de Catarata do Hospital de Olhos do Paraná (2014-2021), um dos principais serviços do estado, ensinando dezenas de oftalmologistas a operar com excelência</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Users className="text-[#052659] flex-shrink-0 mt-1" size={40} />
                <div>
                  <h3 className="text-xl font-bold text-[#052659] mb-3">
                    Cuidado e Critério em Cada Decisão
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-[#10B981] flex-shrink-0 mt-1" size={20} />
                      <span>Cada indicação cirúrgica é criteriosa e personalizada para o seu caso específico</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-[#10B981] flex-shrink-0 mt-1" size={20} />
                      <span>Conversa detalhada sobre expectativas, riscos e resultados antes de qualquer procedimento</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-[#10B981] flex-shrink-0 mt-1" size={20} />
                      <span>Você nunca será "mais um número" — seu caso recebe toda a atenção necessária</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Zap className="text-[#052659] flex-shrink-0 mt-1" size={40} />
                <div>
                  <h3 className="text-xl font-bold text-[#052659] mb-3">
                    Agilidade no Atendimento
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-[#10B981] flex-shrink-0 mt-1" size={20} />
                      <span>Sempre com horários disponíveis — você não espera meses para ser atendido</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-[#10B981] flex-shrink-0 mt-1" size={20} />
                      <span>Do primeiro contato à cirurgia: 7 a 15 dias em média</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-[#10B981] flex-shrink-0 mt-1" size={20} />
                      <span>Resolva tudo em uma consulta: exames completos + avaliação + proposta cirúrgica</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <Microscope className="text-[#052659] flex-shrink-0 mt-1" size={40} />
                <div>
                  <h3 className="text-xl font-bold text-[#052659] mb-3">
                    Tecnologia de Ponta para Diagnóstico Preciso
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Equipamentos de última geração que poucos consultórios da região possuem:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    {[
                      'Tomografia de Coerência Óptica (OCT) de mácula, nervo óptico e córnea',
                      'Pentacam (Tomografia de Segmento Anterior)',
                      'Ceratoscopia Computadorizada',
                      'Microscopia Especular',
                      'Paquimetria Ultrassônica',
                      'Angioplex'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="text-[#10B981] flex-shrink-0 mt-1" size={20} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-gray-700 mt-4 font-semibold">
                    Resultado: Diagnóstico preciso e planejamento cirúrgico personalizado baseado em dados reais do seu olho.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#052659] flex-shrink-0 mt-1" size={40} />
                <div>
                  <h3 className="text-xl font-bold text-[#052659] mb-3">
                    Estrutura Completa em um Só Lugar
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-[#10B981] flex-shrink-0 mt-1" size={20} />
                      <span>Todos os exames realizados no local, na mesma consulta</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-[#10B981] flex-shrink-0 mt-1" size={20} />
                      <span>Centro cirúrgico próprio com toda infraestrutura necessária</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ChevronRight className="text-[#10B981] flex-shrink-0 mt-1" size={20} />
                      <span>Localização central em Jacarezinho, fácil acesso e estacionamento</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#C1E8FF] border-2 border-[#052659] rounded-xl p-8">
              <div className="flex items-start gap-4">
                <Award className="text-[#052659] flex-shrink-0 mt-1" size={40} />
                <div>
                  <h3 className="text-2xl font-bold text-[#052659] mb-4">
                    A Maior Prova de Confiança
                  </h3>
                  <p className="text-gray-700 text-lg italic mb-4">
                    "Operou o próprio pai no único olho que ele enxergava."
                  </p>
                  <p className="text-gray-700 mb-3">
                    Quando perguntado por que ele mesmo operou o pai, Dr. Carlos respondeu:
                  </p>
                  <p className="text-[#052659] text-xl font-bold mb-4">
                    "Eu acho que ninguém vai operar melhor que eu e ninguém vai ter mais cuidado que eu na hora de operar."
                  </p>
                  <p className="text-gray-700">
                    Se ele confia na própria técnica para operar a pessoa mais importante da vida dele, você pode confiar também.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-12">
            <button
              onClick={openModal}
              className="bg-[#10B981] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#059669] transition-all transform hover:scale-105 shadow-lg"
            >
              QUERO ESSA SEGURANÇA E CUIDADO
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 - QUEM É O DR. CARLOS */}
      <section className="bg-[#EFF6FF] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#052659] text-center mb-12">
            Quem é o Dr. Carlos Teixeira?
          </h2>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div className="md:col-span-3 space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                Dedicado à oftalmologia há mais de uma década, Dr. Carlos Teixeira se especializou em devolver a qualidade de vida através da visão, com foco em cirurgia de catarata e cirurgia refrativa.
              </p>

              <div>
                <h3 className="text-xl font-bold text-[#052659] mb-4">Formação Acadêmica e Especialização:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-[#10B981] flex-shrink-0 mt-1" size={20} />
                    <span>Graduado em Medicina pela Faculdade de Medicina de Presidente Prudente - UNOESTE (2009)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-[#10B981] flex-shrink-0 mt-1" size={20} />
                    <span>Residência Médica em Oftalmologia pelo Hospital Universitário Evangélico de Curitiba - HUEC (2011-2014)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-[#10B981] flex-shrink-0 mt-1" size={20} />
                    <span>Fellowship de Cirurgia de Catarata e Cirurgia Refrativa pelo Hospital de Olhos do Paraná - HOP (2014)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-[#10B981] flex-shrink-0 mt-1" size={20} />
                    <span>Pós-graduação em Cirurgia de Catarata pela Universidade Positivo (2014)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-[#10B981] flex-shrink-0 mt-1" size={20} />
                    <span>Título de Especialista em Oftalmologia pela Associação Médica Brasileira (AMB) e Conselho Brasileiro de Oftalmologia (CBO)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#052659] mb-4">Experiência e Atuação:</h3>
                <p className="leading-relaxed mb-4">
                  Entre 2014 e 2021, foi Preceptor de Cirurgia de Catarata no Hospital de Olhos do Paraná, o principal serviço de oftalmologia do estado, onde ensinou a arte de operar catarata a dezenas de residentes e oftalmologistas que hoje são colegas de profissão. Essa experiência de 7 anos ensinando cirurgia permitiu refinar técnicas, identificar erros comuns e elevar constantemente o padrão de excelência.
                </p>
                <p className="leading-relaxed mb-4">
                  Realizou projetos em diferentes regiões do Brasil (Pará, Mato Grosso) operando em alto volume, acumulando mais de 12.000 cirurgias ao longo da carreira.
                </p>
                <p className="leading-relaxed">
                  Também coordenou por 2 anos um projeto social de acuidade visual para crianças da 5ª série nas escolas municipais de Jacarezinho, com indicação de óculos quando necessário.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#052659] mb-4">Registro Profissional:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-[#10B981] flex-shrink-0 mt-1" size={20} />
                    <span>CRM-PR: 27.489</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-[#10B981] flex-shrink-0 mt-1" size={20} />
                    <span>CRM-SP: 138.042</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="text-[#10B981] flex-shrink-0 mt-1" size={20} />
                    <span>Membro do Conselho Brasileiro de Oftalmologia (CBO)</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg leading-relaxed font-medium">
                Hoje, atende na Clínica UNIQUE em Jacarezinho-PR, onde oferece atendimento personalizado, tecnologia de ponta e a experiência de quem já operou milhares de pacientes com segurança e cuidado.
              </p>
            </div>

            <div className="md:col-span-2">
              <div className="bg-[#C1E8FF] rounded-2xl aspect-[3/4] flex items-center justify-center shadow-xl sticky top-8">
                <Eye className="text-[#052659]" size={100} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 7 - DEPOIMENTOS */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#052659] text-center mb-12">
            O que dizem pacientes do Dr. Carlos Teixeira
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#C1E8FF] rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 bg-[#052659] rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Users className="text-white" size={32} />
                </div>
                <p className="text-gray-700 text-center italic mb-4">
                  "Depoimento será adicionado em breve"
                </p>
                <p className="text-[#052659] font-semibold text-center">
                  — Nome do Paciente
                </p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button
              onClick={openModal}
              className="bg-[#10B981] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#059669] transition-all transform hover:scale-105 shadow-lg"
            >
              QUERO MEU RESULTADO TAMBÉM
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 8 - CLÍNICA */}
      <section className="bg-[#C1E8FF] py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#052659] text-center mb-8">
            Conheça a Clínica UNIQUE
          </h2>

          <p className="text-gray-700 text-lg text-center mb-12 max-w-3xl mx-auto">
            Estrutura completa e moderna, com equipamentos de última geração para diagnóstico preciso e planejamento cirúrgico personalizado. Ambiente acolhedor e profissional, onde você recebe toda a atenção que merece.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-xl p-8 shadow-lg space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-[#052659] flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-[#052659] mb-2">Endereço:</h3>
                  <p className="text-gray-700">
                    Rua Coronel Figueiredo, 98 - Centro<br />
                    Jacarezinho - Paraná | CEP: 86.400-000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-[#052659] flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-[#052659] mb-2">Horários de Atendimento:</h3>
                  <p className="text-gray-700">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado e Domingo: Fechado
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-[#052659] flex-shrink-0 mt-1" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-[#052659] mb-2">Contatos:</h3>
                  <p className="text-gray-700">
                    Telefone: (43) 3525-5770<br />
                    WhatsApp: (43) 99906-2449<br />
                    E-mail: drcarlosteixeiraoftalmologista@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[#052659] mb-4">Facilidades:</h3>
                <ul className="space-y-2">
                  {[
                    'Localização central, fácil acesso',
                    'Fácil para estacionar (centro da cidade)',
                    'Acessibilidade para cadeirantes',
                    'Todos os exames no local'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="text-[#10B981] flex-shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#052659] mb-4">Convênios Aceitos:</h3>
                <p className="text-gray-700">
                  Unimed • Cassi • Sanepar • SAS • Multisaúde • Atendimento Particular
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <a
              href="https://maps.google.com/?q=Rua+Coronel+Figueiredo,+98,+Jacarezinho,+PR"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#052659] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#041d44] transition-all inline-flex items-center gap-2"
            >
              <MapPin size={24} />
              VER NO GOOGLE MAPS
            </a>
          </div>

          <div className="bg-white rounded-2xl aspect-[16/9] flex items-center justify-center shadow-xl">
            <MapPin className="text-[#052659]" size={80} />
          </div>
        </div>
      </section>

      {/* SEÇÃO 9 - CTA FINAL */}
      <section className="bg-[#052659] py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Dê o primeiro passo para viver sem limitações visuais
          </h2>

          <p className="text-white text-lg mb-8 leading-relaxed">
            Agende sua avaliação completa e descubra qual o melhor tratamento para o seu caso — com tecnologia de ponta, experiência comprovada e todo o cuidado que você merece.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button
              onClick={openModal}
              className="bg-[#10B981] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#059669] transition-all transform hover:scale-105 shadow-lg"
            >
              AGENDAR MINHA AVALIAÇÃO GRATUITA
            </button>

            <a
              href="https://wa.me/5543999062449"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#052659] transition-all"
            >
              FALAR NO WHATSAPP AGORA
            </a>
          </div>

          <p className="text-[#C1E8FF] text-sm">
            Atendimento rápido • Sempre tem horário disponível • Avaliação sem compromisso
          </p>
        </div>
      </section>

      {/* SEÇÃO 10 - RODAPÉ */}
      <footer className="bg-[#052659] py-12 border-t border-[#0a3a7d]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-[#C1E8FF] space-y-2">
              <h3 className="text-white font-bold text-lg mb-4">Informações</h3>
              <p>Dr. Carlos Henrique Amaral Jespersen Teixeira</p>
              <p>CRM-PR: 27.489 | CRM-SP: 138.042</p>
              <p>Especialista em Oftalmologia (CBO/AMB)</p>
              <p className="pt-4">Clínica UNIQUE</p>
              <p>Rua Coronel Figueiredo, 98 - Centro</p>
              <p>Jacarezinho - PR | CEP: 86.400-000</p>
            </div>

            <div className="text-[#C1E8FF] space-y-2">
              <h3 className="text-white font-bold text-lg mb-4">Links</h3>
              <p className="hover:text-white cursor-pointer transition-colors">Política de Privacidade</p>
              <p className="hover:text-white cursor-pointer transition-colors">Termos de Uso</p>
              <p className="hover:text-white cursor-pointer transition-colors">LGPD</p>
            </div>

            <div className="text-[#C1E8FF] space-y-2">
              <h3 className="text-white font-bold text-lg mb-4">Contato</h3>
              <p className="flex items-center gap-2">
                <Phone size={16} />
                (43) 3525-5770
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} />
                (43) 99906-2449
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} />
                drcarlosteixeiraoftalmologista@gmail.com
              </p>
              <div className="pt-4">
                <h4 className="text-white font-bold mb-2">Redes Sociais:</h4>
                <div className="flex gap-4">
                  <a href="#" className="hover:text-white transition-colors">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="hover:text-white transition-colors">
                    <Facebook size={24} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#0a3a7d] pt-8">
            <p className="text-[#C1E8FF] text-sm text-center leading-relaxed">
              Os resultados podem variar de paciente para paciente. Somente uma avaliação oftalmológica completa pode determinar o melhor tratamento para cada caso. Imagens meramente ilustrativas.
            </p>
            <p className="text-[#C1E8FF] text-sm text-center mt-4">
              Clínica UNIQUE - Todos os direitos reservados © 2025
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
