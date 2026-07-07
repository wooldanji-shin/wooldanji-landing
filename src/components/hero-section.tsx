import { useEffect, useState } from 'react'
import { Star, Check } from 'lucide-react'
import { StoreButtons } from './store-buttons'

const highlights = ['설치비 0원', 'GPS 미사용', '무료 체험 가능']

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true))
    return () => cancelAnimationFrame(id)
  }, [])

  return (
    <section id="top" className="relative overflow-hidden border-b border-border/60">
      <div className="mx-auto grid max-w-page items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div
          className={`transition-all duration-700 ${
            mounted ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-body-md-bold text-primary">
            우리단지 생활도우미 · 울단지
          </span>
          <h1 className="mt-4 text-pretty text-display-lg leading-[1.15] text-foreground sm:text-display-lg-pc">
            스마트폰으로 여는
            <br />
            우리 아파트 <span className="text-primary">공동현관</span>
          </h1>
          <p className="mt-4 max-w-lg text-pretty text-body-lg text-muted-foreground">
            최신 아파트 기능을 우리 아파트에도. 스마트폰으로 공동현관문을 여는
            편리한 기능을 <strong className="font-bold text-point">무료</strong>로 제공해 드립니다.
          </p>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-body-md-bold text-foreground">
                <span className="flex size-5 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="size-3.5" aria-hidden="true" />
                </span>
                {h}
              </li>
            ))}
          </ul>

          <p className="mt-8 text-body-md-bold text-foreground">
            지금 앱을 다운로드하고 문을 열어보세요
          </p>
          <StoreButtons className="mt-3" />

          <div className="mt-8 flex items-center gap-3">
            <div className="flex items-center gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-body-md text-muted-foreground">
              사용자 평점 <strong className="font-bold text-point">4.8점</strong> · 입주민이 먼저 추천하는 서비스
            </p>
          </div>
        </div>

        <div
          className={`relative transition-all delay-150 duration-700 ${
            mounted ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-6 scale-95 opacity-0'
          }`}
        >
          <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/10 blur-2xl" />
          <img
            src="/hero-door.png"
            alt="스마트폰으로 아파트 공동현관문을 여는 모습"
            width={720}
            height={720}
            className="w-full rounded-[1.75rem] border border-border/60 object-cover shadow-2xl shadow-primary/10"
          />
        </div>
      </div>
    </section>
  )
}
