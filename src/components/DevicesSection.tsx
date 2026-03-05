import { Tv, Smartphone, Tablet, Monitor, Box } from 'lucide-react'

const devices = [
  {
    icon: Tv,
    name: 'Smart TV',
    description: 'Samsung, LG, Sony e mais'
  },
  {
    icon: Box,
    name: 'TV Box',
    description: 'Android, Apple TV, Fire Stick'
  },
  {
    icon: Smartphone,
    name: 'Celular',
    description: 'iOS e Android'
  },
  {
    icon: Tablet,
    name: 'Tablet',
    description: 'iPad e tablets Android'
  },
  {
    icon: Monitor,
    name: 'Computador',
    description: 'Windows, Mac, Linux'
  }
]

export function DevicesSection() {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Assista em qualquer dispositivo
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Uma única assinatura, acesso ilimitado em todos os seus aparelhos
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {devices.map((device) => {
            const Icon = device.icon
            return (
              <div
                key={device.name}
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary transition-all hover:scale-105 cursor-pointer"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1">
                      {device.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {device.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Feature badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">📱</div>
            <h3 className="font-bold text-foreground mb-2">Multi-tela</h3>
            <p className="text-sm text-muted-foreground">
              Assista em até 3 dispositivos simultaneamente
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold text-foreground mb-2">Download Offline</h3>
            <p className="text-sm text-muted-foreground">
              Baixe seus filmes e assista sem internet
            </p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="text-4xl mb-3">🎯</div>
            <h3 className="font-bold text-foreground mb-2">Instalação Fácil</h3>
            <p className="text-sm text-muted-foreground">
              Configure em menos de 5 minutos
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
