import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Modal({ isOpen, onClose }: ModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    whatsapp: '',
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    fbp: '',
    fbc: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      const params = new URLSearchParams(window.location.search);

      // Captura parâmetros UTM
      setFormData(prev => ({
        ...prev,
        utm_source: params.get('utm_source') || '',
        utm_medium: params.get('utm_medium') || '',
        utm_campaign: params.get('utm_campaign') || ''
      }));

      // Aguarda um momento para o script de tracking preencher os campos
      setTimeout(() => {
        const fbpField = document.getElementById('campo_fbp') as HTMLInputElement;
        const fbcField = document.getElementById('campo_fbc') as HTMLInputElement;

        setFormData(prev => ({
          ...prev,
          fbp: fbpField?.value || '',
          fbc: fbcField?.value || ''
        }));
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleContinue = () => {
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome || !formData.email || !formData.whatsapp) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://10028.hostoo.net.br/webhook-test/fc236181-3600-4c8d-a888-c86262bff0d4', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const whatsappMessage = encodeURIComponent('Olá, vim do site e gostaria de agendar uma avaliação');
        window.location.href = `https://wa.me/5543999062449?text=${whatsappMessage}`;
      } else {
        throw new Error('Erro ao enviar formulário');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors z-10"
          aria-label="Fechar"
        >
          <X size={24} />
        </button>

        {step === 1 && (
          <div className="p-8 md:p-12">
            <div className="space-y-6">
              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Valorizamos a sua privacidade. Informamos que coletamos apenas dados básicos de contato (nome, e-mail e WhatsApp), <strong>sem qualquer coleta de dados de saúde ou informações sensíveis</strong>.
              </p>

              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Esses dados serão utilizados única e exclusivamente para identificação e para o início do atendimento por meio do WhatsApp.
              </p>

              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Nenhuma informação adicional será solicitada nesta etapa, e seus dados não serão compartilhados com terceiros.
              </p>

              <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                Estamos comprometidos com a segurança das suas informações, respeitando integralmente a Lei Geral de Proteção de Dados (LGPD).
              </p>

              <button
                onClick={handleContinue}
                className="w-full bg-[#052659] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#041d44] transition-colors mt-8"
              >
                CLIQUE AQUI PRA CONTINUAR
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <div className="bg-[#047857] text-white p-6 rounded-t-lg">
              <p className="text-base md:text-lg font-medium">
                Para falar com o Dr. Carlos Teixeira por favor <strong>preencha seu número de WhatsApp corretamente</strong>.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Nome Completo*"
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#052659] focus:border-transparent"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Seu melhor E-mail*"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#052659] focus:border-transparent"
                />
              </div>

              <div>
                <div className="flex gap-2">
                  <div className="flex items-center px-4 py-3 border border-gray-300 rounded-lg bg-gray-50">
                    <span className="text-2xl mr-2">🇧🇷</span>
                    <span className="text-gray-700 font-medium">+55</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="DDD + WhatsApp*"
                    required
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#052659] focus:border-transparent"
                  />
                </div>
                <div className="mt-2 text-sm text-red-600 space-y-1">
                  <p>Exemplo: (11)99262-9030</p>
                  <p>Não usar telefone fixo - só celular</p>
                  <p>Não precisa de código do Brasil (+55)</p>
                </div>
              </div>

              <input type="hidden" value={formData.utm_source} />
              <input type="hidden" value={formData.utm_medium} />
              <input type="hidden" value={formData.utm_campaign} />
              <input type="hidden" id="campo_fbp" name="fbp" value={formData.fbp} />
              <input type="hidden" id="campo_fbc" name="fbc" value={formData.fbc} />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#10B981] text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-[#059669] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'ENVIANDO...' : 'INICIAR CONVERSA'}
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
