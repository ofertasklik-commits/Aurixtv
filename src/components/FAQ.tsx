import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Como faço para instalar o serviço?',
    answer:
      'A instalação é super simples! Após a confirmação do pagamento, você receberá um email com as credenciais de acesso e um guia passo a passo. Para Smart TVs, basta baixar nosso aplicativo na loja. Para TV Box, você instala via APK que enviamos. O processo todo leva menos de 5 minutos!'
  },
  {
    question: 'Quanto tempo demora para ativar minha assinatura?',
    answer:
      'Sua assinatura é ativada automaticamente assim que o pagamento é confirmado! Para pagamentos via PIX, a ativação é instantânea. Para cartão de crédito, pode levar até 2 horas. Você receberá um email com seus dados de acesso assim que estiver tudo pronto.'
  },
  {
    question: 'Preciso de antena parabólica ou algo especial?',
    answer:
      'Não! Você só precisa de uma conexão de internet estável (recomendamos no mínimo 10 Mbps para qualidade HD e 25 Mbps para 4K) e um dispositivo compatível (Smart TV, TV Box, celular, tablet ou computador). Nada de antenas, cabos especiais ou instaladores!'
  },
  {
    question: 'Posso assistir em mais de um dispositivo ao mesmo tempo?',
    answer:
      'Sim! O Plano Mensal permite 1 dispositivo simultâneo, o Plano Trimestral permite 2 dispositivos e o Plano Anual permite até 3 dispositivos assistindo ao mesmo tempo. Você pode instalar em quantos dispositivos quiser, mas só poderá assistir no número de telas permitido pelo seu plano.'
  },
  {
    question: 'Como funciona a garantia de 7 dias?',
    answer:
      'Se por qualquer motivo você não ficar satisfeito com o serviço nos primeiros 7 dias, basta entrar em contato com nosso suporte que devolveremos 100% do seu dinheiro, sem perguntas. É simples assim! Queremos que você teste sem riscos.'
  },
  {
    question: 'O serviço funciona fora do Brasil?',
    answer:
      'Sim! Nosso serviço funciona em qualquer lugar do mundo onde você tenha acesso à internet. Perfeito para quem viaja ou mora no exterior e quer continuar assistindo seus programas favoritos em português.'
  },
  {
    question: 'Vocês oferecem suporte técnico?',
    answer:
      'Com certeza! Temos suporte técnico disponível 24 horas por dia, 7 dias por semana. No Plano Mensal, atendemos via sistema de tickets. No Plano Trimestral, você tem prioridade no atendimento. No Plano Anual, oferecemos suporte VIP direto pelo WhatsApp com resposta em minutos!'
  },
  {
    question: 'Posso cancelar minha assinatura a qualquer momento?',
    answer:
      'Sim! Não temos contrato de fidelidade. Você pode cancelar sua assinatura quando quiser através da área do cliente ou entrando em contato com o suporte. O serviço continuará ativo até o final do período já pago.'
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tire suas dúvidas sobre nosso serviço de IPTV
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg overflow-hidden transition-all hover:border-primary"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-muted/30"
              >
                <span className="font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-primary flex-shrink-0 transition-transform',
                    openIndex === index && 'rotate-180'
                  )}
                />
              </button>

              <div
                className={cn(
                  'grid transition-all',
                  openIndex === index
                    ? 'grid-rows-[1fr] opacity-100'
                    : 'grid-rows-[0fr] opacity-0'
                )}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-5 text-muted-foreground">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA após FAQ */}
        <div className="mt-16 max-w-3xl mx-auto bg-card border border-primary/50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ainda tem dúvidas?
          </h3>
          <p className="text-muted-foreground mb-6">
            Nossa equipe de suporte está pronta para te ajudar! Entre em contato
            via WhatsApp, email ou chat ao vivo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-lg transition-colors">
              💬 Falar no WhatsApp
            </button>
            <button className="px-6 py-3 bg-card hover:bg-muted border border-border text-foreground font-semibold rounded-lg transition-colors">
              📧 Enviar Email
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
