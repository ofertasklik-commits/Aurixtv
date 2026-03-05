import { Shield, Gauge, HeadphonesIcon, Globe, Lock, Zap } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Anti-travamento',
    description: 'CDN própria com servidores redundantes em múltiplas regiões',
    highlight: 'Tecnologia exclusiva'
  },
  {
    icon: Gauge,
    title: 'Qualidade 4K/UHD',
    description: 'Streaming em até 4K com HDR para a melhor experiência visual',
    highlight: 'Ultra HD'
  },
  {
    icon: HeadphonesIcon,
    title: 'Suporte 24/7',
    description: 'Equipe disponível todos os dias via WhatsApp, ticket e chat',
    highlight: 'Atendimento rápido'
  },
  {
    icon: Globe,
    title: 'Canais Internacionais',
    description: 'Conteúdo do mundo inteiro com legendas e áudio em português',
    highlight: '180+ países'
  },
  {
    icon: Lock,
    title: 'Conexão Segura',
    description: 'Criptografia de ponta a ponta e proteção de dados',
    highlight: 'SSL/TLS'
  },
  {
    icon: Shield,
    title: 'Atualizações Automáticas',
    description: 'Novos canais e conteúdos adicionados diariamente',
    highlight: 'Sempre atualizado'
  }
]

export function TechnicalFeatures() {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Tecnologia de ponta para você
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Infraestrutura robusta que garante streaming sem interrupções
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-foreground">
                        {feature.title}
                      </h3>
                      <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">
                        {feature.highlight}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
            <p className="text-sm text-muted-foreground">Uptime garantido</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">&lt;5s</div>
            <p className="text-sm text-muted-foreground">Tempo de resposta</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50k+</div>
            <p className="text-sm text-muted-foreground">Canais disponíveis</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">100k+</div>
            <p className="text-sm text-muted-foreground">Filmes e séries</p>
          </div>
        </div>

        {/* Proof of quality */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8">
            <h3 className="text-xl font-bold text-foreground text-center mb-6">
              O que nossos clientes dizem
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-muted/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold">
                    MC
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      Maria C.
                    </p>
                    <p className="text-xs text-muted-foreground">Cliente há 8 meses</p>
                  </div>
                </div>
                <p className="text-sm text-foreground">
                  "Nunca trava, qualidade perfeita! Cancelei minha assinatura de streaming tradicional."
                </p>
                <div className="mt-2 text-primary text-xs">⭐⭐⭐⭐⭐ 5.0</div>
              </div>

              <div className="bg-muted/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold">
                    JS
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      João S.
                    </p>
                    <p className="text-xs text-muted-foreground">Cliente há 1 ano</p>
                  </div>
                </div>
                <p className="text-sm text-foreground">
                  "Instalei em 3 minutos na minha Smart TV. Suporte respondeu em segundos!"
                </p>
                <div className="mt-2 text-primary text-xs">⭐⭐⭐⭐⭐ 5.0</div>
              </div>

              <div className="bg-muted/30 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold">
                    AL
                  </div>
                  <div>
                    <p className="font-medium text-foreground text-sm">
                      Ana L.
                    </p>
                    <p className="text-xs text-muted-foreground">Cliente há 5 meses</p>
                  </div>
                </div>
                <p className="text-sm text-foreground">
                  "Catálogo gigante! Tudo que procuro está aqui, em 4K e sem travar."
                </p>
                <div className="mt-2 text-primary text-xs">⭐⭐⭐⭐⭐ 5.0</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
