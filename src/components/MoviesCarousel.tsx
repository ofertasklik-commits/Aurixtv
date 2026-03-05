import { useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, Play, Info } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Movie {
  id: number
  title: string
  year: string
  genre: string
  rating: string
  image: string
}

const movies: Movie[] = [
  {
    id: 1,
    title: 'Stranger Things 5',
    year: '2025',
    genre: 'Terror/Ficção',
    rating: '9.9',
    image: 'https://images.weserv.nl/?url=https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg'
  },
  {
    id: 2,
    title: 'Vingadores: Doomsday',
    year: '2026',
    genre: 'Ação/Marvel',
    rating: '9.8',
    image: 'https://images.weserv.nl/?url=https://image.tmdb.org/t/p/w500/u0Hw7574Wp2hQ3GryvX94gG59A9.jpg'
  },
  {
    id: 3,
    title: 'Avatar: Fogo e Cinzas',
    year: '2025',
    genre: 'Ficção Científica',
    rating: '9.5',
    image: 'https://images.weserv.nl/?url=https://image.tmdb.org/t/p/w500/1HwV5D28V6Tqj4G8P6N6F816o6S.jpg'
  },
  {
    id: 4,
    title: 'Superman',
    year: '2025',
    genre: 'Ação/Herói',
    rating: '9.4',
    image: 'https://images.weserv.nl/?url=https://image.tmdb.org/t/p/w500/vHe69Yid00P20jO83qYJpS8Y1zW.jpg'
  },
  {
    id: 5,
    title: 'The Last of Us: Parte II',
    year: '2025',
    genre: 'Drama/Ação',
    rating: '9.7',
    image: 'https://images.weserv.nl/?url=https://image.tmdb.org/t/p/w500/rcvG3eWd5y1yD5g5oU79x9H1kH.jpg'
  },
  {
    id: 6,
    title: 'Duna: Messias',
    year: '2026',
    genre: 'Ficção Científica',
    rating: '9.6',
    image: 'https://images.weserv.nl/?url=https://image.tmdb.org/t/p/w500/sz6vI39Wv90C8T1yqYyLAsv3L4k.jpg'
  },
  {
    id: 7,
    title: 'Mandalorian & Grogu',
    year: '2025',
    genre: 'Star Wars/Aventura',
    rating: '9.2',
    image: 'https://images.weserv.nl/?url=https://image.tmdb.org/t/p/w500/eU1i6eHXlzMOlEq0ku1Rzq7Y4wA.jpg'
  },
  {
    id: 8,
    title: 'Missão Impossível 8',
    year: '2025',
    genre: 'Ação/Suspense',
    rating: '9.0',
    image: 'https://images.weserv.nl/?url=https://image.tmdb.org/t/p/w500/qXcpG5J1Q2YQ2fI5K8M2Y9T2I8.jpg'
  },
  {
    id: 9,
    title: 'Casa do Dragão T3',
    year: '2026',
    genre: 'Fantasia/HBO',
    rating: '9.5',
    image: 'https://images.weserv.nl/?url=https://image.tmdb.org/t/p/w500/k5K2E7T5V4C1S0N7D6Y0G4N3Q0.jpg'
  },
  {
    id: 10,
    title: 'Quarteto Fantástico',
    year: '2025',
    genre: 'Ação/Marvel',
    rating: '9.3',
    image: 'https://images.weserv.nl/?url=https://image.tmdb.org/t/p/w500/g4iSlC7W3SrQRkNw2fRizMBrmsu.jpg'
  }
]

export function MoviesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -800 : 800
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const checkScroll = () => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
        setCanScrollLeft(scrollLeft > 0)
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
      }
    }

    const scrollElement = scrollRef.current
    scrollElement?.addEventListener('scroll', checkScroll)
    checkScroll()

    return () => scrollElement?.removeEventListener('scroll', checkScroll)
  }, [])

  return (
    <section className="py-16 bg-background relative">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            Lançamentos de 2025/2026
          </h2>
          <p className="text-muted-foreground">
            Os maiores sucessos do cinema e streaming na palma da sua mão
          </p>
        </div>

        <div className="relative group">
          {/* Botão esquerdo */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background border border-border rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
          )}

          {/* Botão direito */}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background/80 hover:bg-background border border-border rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          )}

          {/* Carrossel */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="flex-shrink-0 w-64 group/card cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg bg-card border border-border transition-all duration-300 hover:scale-105 hover:border-primary">
                  <div className="relative aspect-[2/3]">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay com gradiente */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_top,_oklch(0.15_0_0)_0%,_transparent_50%)] opacity-0 group-hover/card:opacity-100 transition-opacity" />

                    {/* Ações ao hover */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover/card:translate-y-0 transition-transform">
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          className="flex-1 bg-primary hover:bg-primary/90"
                        >
                          <Play className="w-4 h-4 mr-1" />
                          Assistir
                        </Button>
                        <Button
                          size="sm"
                          variant="secondary"
                          className="aspect-square p-0"
                        >
                          <Info className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Rating badge */}
                    <div className="absolute top-2 right-2 bg-primary/90 backdrop-blur-sm rounded-md px-2 py-1">
                      <span className="text-xs font-bold text-primary-foreground">
                        ⭐ {movie.rating}
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-bold text-foreground mb-1 line-clamp-1">
                      {movie.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {movie.year} • {movie.genre}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
