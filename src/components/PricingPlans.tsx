import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Check, Sparkles, Crown, Zap, MonitorSmartphone } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PlanBase {
  id: string
  name: string
  price: number
  period: string
  icon: React.ElementType
  discount?: string
  popular?: boolean
  bestValue?: boolean
  badge?: string
  glowEffect?: boolean
}

const plans1Tela: PlanBase[] = [
  { id: 'monthly', name: 'Mensal', price: 34.90, period: '/mês', icon: Zap },
  { id: 'quarterly', name: 'Trimestral', price: 89.90, period: '/3 meses', icon: Sparkles, discount: '14% OFF' },
  { id: 'semiannual', name: 'Semestral', price: 139.90, period: '/6 meses', popular: true, badge: 'MAIS POPULAR', icon: MonitorSmartphone },
  { id: 'yearly', name: 'Anual', price: 209.90, period: '/ano', bestValue: true, badge: 'MELHOR CUSTO-BENEFÍCIO', glowEffect: true, icon: Crown, discount: '50% OFF' }
]

const plans2Telas: PlanBase[] = [
  { id: 'monthly', name: 'Mensal', price: 44.90, period: '/mês', icon: Zap },
  { id: 'quarterly', name: 'Trimestral', price: 139.90, period: '/3 meses', icon: Sparkles },
  { id: 'semiannual', name: 'Semestral', price: 209.90, period: '/6 meses', popular: true, badge: 'MAIS POPULAR', icon: MonitorSmartphone },
  { id: 'yearly', name: 'Anual', price: 269.90, period: '/ano', bestValue: true, badge: 'MELHOR CUSTO-BENEFÍCIO', glowEffect: true, icon: Crown, discount: '50% OFF' }
]

const baseFeatures = [
  '2.000+ canais ao vivo',
  '40.000+ filmes e séries',
  'Qualidade 4K/HD',
  'Suporte VIP via WhatsApp',
  'Sem contrato de fidelidade'
]

export function PricingPlans() {
  const [screens, setScreens] = useState<1 | 2>(1)
  const currentPlans = screens === 1 ? plans1Tela : plans2Telas
  const monthlyPrice = currentPlans.find(p => p.id === 'monthly')?.price ?? 0
  const quarterlyPrice = currentPlans.find(p => p.id === 'quarterly')?.price ?? 0
  const yearlyPrice = currentPlans.find(p => p.id === 'yearly')?.price ?? 0
  const deviceText = screens === 1 ? '1 dispositivo simultâneo' : '2 dispositivos simultâneos'

  return (
    <section className="py-20 bg-background relative overflow-hidden" id="planos">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,_oklch(0.25_0.1_145),_transparent_40%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Escolha seu plano ideal
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Todos os planos incluem acesso completo ao catálogo e garantia de 7 dias
          </p>

          {/* Toggle 1 TELA / 2 TELAS */}
          <div className="inline-flex items-center justify-center p-1.5 bg-muted/50 rounded-full border border-border backdrop-blur-sm">
            <button
              onClick={() => setScreens(1)}
              className={cn(
                'px-8 py-3 rounded-full text-sm font-bold transition-all',
                screens === 1
                  ? 'bg-primary text-primary-foreground shadow-lg scale-100'
                  : 'text-muted-foreground hover:text-foreground hover:bg-background/50 scale-95'
              )}
            >
              1 TELA
            </button>
            <button
              onClick={() => setScreens(2)}
              className={cn(
                'px-8 py-3 rounded-full text-sm font-bold transition-all',
                screens === 2
                  ? 'bg-primary text-primary-foreground shadow-lg scale-100'
                  : 'text-muted-foreground hover:text-foreground hover:bg-background/50 scale-95'
              )}
            >
              2 TELAS
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {currentPlans.map((plan) => {
            const Icon = plan.icon

            // Generate full features list
            const planFeatures = [...baseFeatures, deviceText]

            return (
              <div
                key={plan.id}
                className={cn(
                  'relative bg-card border rounded-2xl p-6 flex flex-col transition-all hover:scale-105',
                  plan.popular && 'border-primary ring-1 ring-primary/20',
                  plan.bestValue && 'border-primary ring-2 ring-primary/30 shadow-2xl shadow-primary/20 scale-105 z-10'
                )}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-[10px] font-bold shadow-lg whitespace-nowrap uppercase tracking-wider">
                    {plan.badge}
                  </div>
                )}

                {/* Glow effect para o plano anual */}
                {plan.glowEffect && (
                  <div className="absolute -inset-1 bg-primary/20 rounded-2xl blur-xl -z-10" />
                )}

                {/* Header */}
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>

                  {/* Discount badge */}
                  {plan.discount && (
                    <div className="inline-block bg-primary/20 text-primary px-3 py-0.5 rounded-full text-xs font-bold mb-3">
                      {plan.discount}
                    </div>
                  )}

                  {/* Price */}
                  <div className="mb-2 mt-2">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-4xl font-bold text-foreground">
                        {plan.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                      </span>
                      <span className="text-muted-foreground text-sm font-medium">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  {plan.id === 'yearly' && (
                    <p className="text-xs text-primary font-medium mt-1">
                      Apenas {(plan.price / 12).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}/mês
                    </p>
                  )}
                  {plan.id === 'semiannual' && (
                    <p className="text-xs text-primary font-medium mt-1 opacity-80">
                      Apenas {(plan.price / 6).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}/mês
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {planFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <Check className="w-2.5 h-2.5 text-primary" />
                      </div>
                      <span className="text-foreground text-sm leading-tight">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  size="lg"
                  className={cn(
                    'w-full font-bold text-sm h-12 rounded-xl',
                    plan.bestValue &&
                    'bg-primary hover:bg-primary/90 shadow-lg shadow-primary/30 ring-2 ring-primary/50'
                  )}
                  onClick={() => window.open('https://wa.me/5511910437332', '_blank')}
                >
                  ASSINAR AGORA
                </Button>

                {/* Trust badge */}
                <p className="text-center text-xs text-muted-foreground mt-4 font-medium">
                  🛡️ Garantia de 7 dias
                </p>
              </div>
            )
          })}
        </div>

        {/* Comparação de economia */}
        <div className="mt-20 max-w-4xl mx-auto bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 shadow-xl">
          <h3 className="text-xl font-bold text-foreground text-center mb-8 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            Compare a economia em 1 Ano
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-border">
            <div className="pt-4 sm:pt-0">
              <p className="text-muted-foreground text-sm mb-2 font-medium">Pagando Mensalmente</p>
              <p className="text-3xl font-bold text-foreground mb-1">
                {(monthlyPrice * 12).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </p>
              <p className="text-xs text-muted-foreground bg-muted inline-block px-2 py-1 rounded-md">12 x {monthlyPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
            </div>

            <div className="pt-6 sm:pt-0 relative">
              <p className="text-muted-foreground text-sm mb-2 font-medium">Pagando Trimestralmente</p>
              <p className="text-3xl font-bold text-foreground mb-1">
                {(quarterlyPrice * 4).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </p>
              <div className="flex flex-col items-center gap-1">
                <p className="text-xs text-muted-foreground">4 x {quarterlyPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
                {((monthlyPrice * 12) - (quarterlyPrice * 4)) > 0 &&
                  <p className="text-xs text-primary font-bold bg-primary/10 px-2 py-1 rounded-md">
                    Economize {((monthlyPrice * 12) - (quarterlyPrice * 4)).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} no ano
                  </p>}
              </div>
            </div>

            <div className="pt-6 sm:pt-0 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 sm:-top-6 bg-primary text-primary-foreground px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase shadow-lg z-10">
                MELHOR OPÇÃO
              </div>
              <p className="text-muted-foreground text-sm mb-2 font-medium">Pagando o Plano Anual</p>
              <p className="text-3xl font-black text-primary mb-1">
                {yearlyPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
              </p>
              <p className="text-xs text-primary font-bold bg-primary/20 px-2 py-1 rounded-md inline-block">
                Economize {((monthlyPrice * 12) - yearlyPrice).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })} no ano
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

