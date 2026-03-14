import { Button } from '@/components/ui/button'
import { Play, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { TrialModal } from './TrialModal'

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative min-h-screen flex items-start md:items-center justify-center overflow-hidden pt-28 pb-20">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_oklch(0.25_0.15_145),_transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Logo Principal */}
          <div className="flex justify-center mb-6">
            <img
              src="/logo.png"
              alt="AurixTV Logo"
              className="h-20 md:h-28 w-auto animate-logo-glow rounded-3xl"
            />
          </div>

          {/* Badge de destaque */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              Teste Grátis - Sem compromisso
            </span>
          </div>

          {/* Título principal */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            O entretenimento do cinema,{' '}
            <span className="text-primary">agora na sua casa</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Mais de 2.000 canais ao vivo e 40.000+ filmes e séries em qualidade 4K.
            Sem travamentos, sem limites.
          </p>

          {/* Botão de CTA */}
          <div className="flex justify-center">
            <Button
              size="lg"
              className="h-16 px-10 text-lg font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/30 transition-all hover:scale-105 active:scale-95"
              onClick={() => setIsModalOpen(true)}
            >
              <Play className="w-6 h-6 mr-2 fill-current" />
              QUERO MEU ACESSO IMEDIATO
            </Button>
          </div>

          <TrialModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

          {/* Social proof */}
          <div className="flex flex-col items-center justify-center gap-4 text-sm text-muted-foreground pt-4">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background overflow-hidden bg-muted"
                  >
                    <img
                      src={`/avatars/avatar${i}.png`}
                      alt={`Cliente ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <span className="font-medium text-foreground">+10.000 clientes ativos</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              <span>4.9/5.0 avaliação média</span>
            </div>
          </div>

          {/* Garantia */}
          <div className="inline-flex items-center gap-2 bg-muted/30 rounded-lg px-6 py-3 border border-border">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="text-2xl">🛡️</span>
            </div>
            <div className="text-left">
              <p className="font-semibold text-foreground">Garantia de 7 dias</p>
              <p className="text-sm text-muted-foreground">ou seu dinheiro de volta</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[linear-gradient(to_top,_oklch(0.15_0_0),_transparent)]" />
    </section>
  )
}
