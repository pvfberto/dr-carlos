import { useState, useEffect } from 'react';
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
  ChevronLeft,
  CheckCircle2,
  Search,
  MessageSquare,
  Target,
  CheckCircle
} from 'lucide-react';
import Modal from './components/Modal';
import { AuroraBackground } from './components/ui/aurora-background';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const clinicImages = [
    '/dr-carlos_teixeira_3_otm.png',
    '/dr-carlos_teixeira_4_otm.png',
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % clinicImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + clinicImages.length) % clinicImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-white">
      <Modal isOpen={isModalOpen} onClose={closeModal} />

      {/* SEÇÃO 1 - HERO */}
      <AuroraBackground>
        <section className="py-12 md:py-20 relative w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 md:gap-12 items-center">
            <div className="md:col-span-3 space-y-6">
              <div className="space-y-2">
                <p className="text-[#052659] font-black" style={{fontWeight: 900, fontSize: '30px'}}>Dr. Carlos Teixeira</p>
                <p className="text-gray-600 text-lg">
                  Oftalmologista | Especialista em Catarata e Cirurgia Refrativa
                </p>
                <p className="text-gray-500 text-sm">CRM-PR 27.489 | CRM-SP 138.042 | RQE 21.034</p>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#052659] leading-tight">
                Livre-se dos óculos e volte a viver sem limitações
              </h1>

              <p className="text-xl md:text-2xl text-gray-700">
                Mais de 12.000 cirurgias realizadas com segurança, precisão e cuidado
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Título de Especialista pela AMB e Conselho Brasileiro de Oftalmologia. Ex-preceptor de cirurgia de catarata do Hospital de Olhos do Paraná, formando dezenas de oftalmologistas na arte de operar com excelência.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 relative z-10">
                <div className="glass-card-blue rounded-lg p-4 flex items-start gap-3">
                  <Award className="text-[#052659] flex-shrink-0 mt-1" size={24} />
                  <p className="text-[#052659] font-semibold text-sm">12.000+ Cirurgias</p>
                </div>
                <div className="glass-card-blue rounded-lg p-4 flex items-start gap-3">
                  <GraduationCap className="text-[#052659] flex-shrink-0 mt-1" size={24} />
                  <p className="text-[#052659] font-semibold text-sm">Título de Especialista CBO/AMB</p>
                </div>
                <div className="glass-card-blue rounded-lg p-4 flex items-start gap-3">
                  <Users className="text-[#052659] flex-shrink-0 mt-1" size={24} />
                  <p className="text-[#052659] font-semibold text-sm">Ex-Preceptor Hospital de Olhos do Paraná</p>
                </div>
                <div className="glass-card-blue rounded-lg p-4 flex items-start gap-3">
                  <Microscope className="text-[#052659] flex-shrink-0 mt-1" size={24} />
                  <p className="text-[#052659] font-semibold text-sm">Equipamentos de Última Geração</p>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={openModal}
                  className="glass-button text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 w-full md:w-auto"
                >
                  AGENDAR SUA CONSULTA AGORA!
                </button>

                <p className="text-gray-500 text-sm flex items-center gap-2">
                  <Phone size={14} />
                  Atendimento rápido
                </p>
              </div>
            </div>

            <div className="md:col-span-2 relative z-10">
              <img
                src="/dr-carlos_teixeira_1_otm.png"
                alt="Dr. Carlos Teixeira"
                className="rounded-2xl w-full h-auto shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
        </section>
      </AuroraBackground>

      {/* SEÇÃO 2 - BARRA DE SERVIÇOS */}
      <section className="bg-[#C1E8FF] py-16 noise-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            <div className="glass-card rounded-xl p-8 hover:shadow-2xl transition-all">
              <Diamond className="text-[#052659] mb-4" size={40} />
              <h3 className="text-xl font-bold text-[#052659] mb-3">Cirurgia de Catarata</h3>
              <p className="text-gray-700">
                Recupere sua visão com lentes de última geração. Liberdade dos óculos para perto e longe.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 hover:shadow-2xl transition-all">
              <Sparkles className="text-[#052659] mb-4" size={40} />
              <h3 className="text-xl font-bold text-[#052659] mb-3">Cirurgia Refrativa</h3>
              <p className="text-gray-700">
                Elimine miopia, astigmatismo e hipermetropia. Viva sem óculos ou lentes de contato.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 hover:shadow-2xl transition-all">
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
      <section className="bg-white py-16 md:py-24 noise-texture">
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
              className="glass-button text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
            >
              QUERO FAZER MINHA AVALIAÇÃO
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 - MECANISMO VISÃO LIVRE */}
      <section className="bg-[#C1E8FF] py-20 md:py-24 noise-texture">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#052659] text-center mb-6">
            O Mecanismo Visão Livre (MVL)
          </h2>

          <p className="text-xl md:text-2xl text-[#1F2937] text-center mb-12 max-w-4xl mx-auto">
            O protocolo exclusivo que elimina o grau do seu olho e os óculos da sua vida
          </p>

          <div className="max-w-4xl mx-auto mb-16">
            <div className="glass-card-highlight rounded-xl p-8 md:p-10">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                O <strong>Mecanismo Visão Livre</strong> é um protocolo que desenvolvi para eliminar todo o grau de <strong>Miopia, Astigmatismo, Hipermetropia e Presbiopia</strong> do seu olho.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ao eliminar o grau do seu olho, o óculos é eliminado da sua vida. <strong>Esse é o objetivo final do Visão Livre:</strong> eliminar o óculos da sua vida de maneira segura, técnica e previsível.
              </p>
            </div>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-[#052659] text-center mb-12">
            O Mecanismo Visão Livre é baseado em 3 Pilares:
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-16 relative z-10">
            <div className="glass-card rounded-xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#052659] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
              </div>
              <div className="flex justify-center mb-6">
                <Search className="text-[#052659]" size={64} />
              </div>
              <h4 className="text-xl font-bold text-[#052659] text-center mb-4">
                Avaliação Completa
              </h4>
              <p className="text-gray-700 text-center leading-relaxed">
                Exames detalhados com equipamentos de última geração para entender com precisão cada característica do seu olho.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#052659] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  2
                </div>
              </div>
              <div className="flex justify-center mb-6">
                <MessageSquare className="text-[#052659]" size={64} />
              </div>
              <h4 className="text-xl font-bold text-[#052659] text-center mb-4">
                Entrevista Detalhada
              </h4>
              <p className="text-gray-700 text-center leading-relaxed">
                Conversa aprofundada sobre suas necessidades, expectativas, rotina e objetivos visuais para personalizar o tratamento.
              </p>
            </div>

            <div className="glass-card rounded-xl p-8 hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#052659] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  3
                </div>
              </div>
              <div className="flex justify-center mb-6">
                <Target className="text-[#052659]" size={64} />
              </div>
              <h4 className="text-xl font-bold text-[#052659] text-center mb-4">
                Planejamento Individualizado
              </h4>
              <p className="text-gray-700 text-center leading-relaxed">
                Estratégia totalmente personalizada para o seu caso específico, potencializando resultados e segurança.
              </p>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-[#052659] bg-opacity-95 backdrop-blur-sm rounded-xl p-8 md:p-10 text-center shadow-xl border border-white border-opacity-20">
              <p className="text-white text-lg md:text-xl leading-relaxed">
                Após esse protocolo rigoroso de avaliação e planejamento, é realizada uma <strong>cirurgia minimamente invasiva</strong> que eliminará todo o grau do seu olho — com precisão, segurança e resultados previsíveis.
              </p>
            </div>
          </div>

          <h3 className="text-3xl md:text-4xl font-bold text-[#052659] text-center mb-12">
            O que você ganha com o Mecanismo Visão Livre:
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
            <div className="glass-card rounded-xl p-6 flex items-start gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="text-[#10B981]" size={32} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#052659] mb-2">
                  Excelente visão em todas as distâncias
                </h4>
                <p className="text-gray-700">
                  Perto, longe, intermediário — sem limitações
                </p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 flex items-start gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="text-[#10B981]" size={32} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#052659] mb-2">
                  Independência total de óculos
                </h4>
                <p className="text-gray-700">
                  Liberdade para viver sem depender de lentes
                </p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 flex items-start gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="text-[#10B981]" size={32} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#052659] mb-2">
                  Melhora significativa na qualidade de vida
                </h4>
                <p className="text-gray-700">
                  Sem perder mais nenhum momento importante
                </p>
              </div>
            </div>

            <div className="glass-card rounded-xl p-6 flex items-start gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="text-[#10B981]" size={32} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-[#052659] mb-2">
                  Resultados seguros e previsíveis
                </h4>
                <p className="text-gray-700">
                  Baseado em planejamento técnico individualizado
                </p>
              </div>
            </div>
          </div>

          <p className="text-lg text-[#1F2937] text-center leading-relaxed max-w-4xl mx-auto mb-10">
            O Mecanismo Visão Livre não é uma cirurgia padrão. É um <strong>método exclusivo</strong> que coloca VOCÊ e suas necessidades no centro de todo o processo — garantindo que cada decisão seja tomada com base no que é melhor para o SEU caso específico.
          </p>

          <div className="flex justify-center">
            <button
              onClick={openModal}
              className="glass-button text-white px-10 py-5 rounded-lg font-bold text-xl transition-all transform hover:scale-105"
            >
              QUERO CONHECER O MECANISMO VISÃO LIVRE
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 - DIFERENCIAIS */}
      <section className="bg-white py-16 md:py-24 noise-texture">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#052659] text-center mb-12">
            Por que pacientes escolhem o Dr. Carlos Teixeira?
          </h2>

          <div className="space-y-8 relative z-10">
            <div className="glass-card rounded-xl p-8 hover:shadow-2xl transition-all">
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

            <div className="glass-card rounded-xl p-8 hover:shadow-2xl transition-all">
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

            <div className="glass-card rounded-xl p-8 hover:shadow-2xl transition-all">
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

            <div className="glass-card rounded-xl p-8 hover:shadow-2xl transition-all">
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

            <div className="glass-card rounded-xl p-8 hover:shadow-2xl transition-all">
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

            <div className="glass-card-highlight rounded-xl p-8">
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
              className="glass-button text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
            >
              QUERO ESSA SEGURANÇA E CUIDADO
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 - QUEM É O DR. CARLOS */}
      <section className="bg-[#EFF6FF] py-16 md:py-24 noise-texture">
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

            <div className="md:col-span-2 relative z-10">
              <img
                src="/dr-carlos_teixeira_2_otm.png"
                alt="Dr. Carlos Teixeira"
                className="rounded-2xl w-full h-auto shadow-2xl object-cover sticky top-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 7 - DEPOIMENTOS */}
      <section className="bg-white py-16 md:py-24 noise-texture">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#052659] text-center mb-12">
            O que dizem pacientes do Dr. Carlos Teixeira
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-12 relative z-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass-card-blue rounded-xl p-8">
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
              className="glass-button text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
            >
              QUERO MEU RESULTADO TAMBÉM
            </button>
          </div>
        </div>
      </section>

      {/* SEÇÃO 8 - CLÍNICA */}
      <section className="bg-[#C1E8FF] py-16 md:py-24 noise-texture">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#052659] text-center mb-8">
            Conheça a Clínica UNIQUE
          </h2>

          <div className="flex justify-center mb-8">
            <div
              className="inline-block p-6 rounded-2xl bg-white border border-white/60"
              style={{
                boxShadow: '0 8px 32px 0 rgba(5, 38, 89, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.7), 0 4px 6px -1px rgba(0, 0, 0, 0.05)'
              }}
            >
              <img
                src="/logo_clinica_unique_otm.png"
                alt="Logo Clínica UNIQUE"
                className="h-24 w-auto"
              />
            </div>
          </div>

          <p className="text-gray-700 text-lg text-center mb-12 max-w-3xl mx-auto">
            Estrutura completa e moderna, com equipamentos de última geração para diagnóstico preciso e planejamento cirúrgico personalizado. Ambiente acolhedor e profissional, onde você recebe toda a atenção que merece.
          </p>

          {/* Slider de Imagens da Clínica */}
          <div className="mb-16 relative z-10">
            <div className="max-w-md mx-auto relative">
              {/* Container do slider com efeito de alto relevo */}
              <div className="relative rounded-2xl shadow-2xl bg-white p-3" style={{
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3), 0 10px 30px rgba(0, 0, 0, 0.2), inset 0 1px 2px rgba(255, 255, 255, 0.8)'
              }}>
                <div className="relative overflow-hidden rounded-xl aspect-[440/600]">
                  {/* Imagens */}
                  {clinicImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-500 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`Clínica Unique ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}

                  {/* Botões de navegação */}
                  <button
                    onClick={prevSlide}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#052659] p-2 rounded-full shadow-lg transition-all z-10"
                    aria-label="Imagem anterior"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-[#052659] p-2 rounded-full shadow-lg transition-all z-10"
                    aria-label="Próxima imagem"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>

                {/* Indicadores */}
                <div className="flex justify-center gap-2 mt-4">
                  {clinicImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide
                          ? 'bg-[#052659] w-8'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Ir para imagem ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8 relative z-10">
            <div className="glass-card rounded-xl p-8 space-y-6">
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

            <div className="glass-card rounded-xl p-8 space-y-6">
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

          <div className="rounded-2xl overflow-hidden shadow-xl bg-white p-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.3316525419414!2d-49.97807178736336!3d-23.158092578991834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c027303fcd5119%3A0x19c82a07e5a908ed!2sCl%C3%ADnica%20Unique!5e0!3m2!1spt-BR!2sbr!4v1765457319714!5m2!1spt-BR!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* SEÇÃO 9 - CTA FINAL */}
      <section className="bg-[#052659] py-16 md:py-24 noise-texture">
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
              className="glass-button text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105"
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
      <footer className="bg-[#052659] py-12 border-t border-[#0a3a7d] noise-texture">
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
