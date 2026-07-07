import { Phone, DoorOpen, Check } from 'lucide-react'
import { useReveal } from '../hooks/use-reveal'

const points = [
  '문 열림 서비스 무료 제공',
  '무료 체험 가능',
  '입주민에게는 오직 혜택',
  '입주 대표·관리자의 성과',
  '지역 착한 가게와 협업',
]

export function ContactSection() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <section id="contact" className="scroll-mt-16 py-20">
      <div
        ref={ref}
        className={`mx-auto max-w-page px-4 transition-all duration-700 sm:px-6 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-content overflow-hidden rounded-[2rem] bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-1.5 text-body-sm-bold">
            <DoorOpen className="size-4" aria-hidden="true" />
            OPEN · 손가락만 까딱
          </span>
          <h2 className="mt-6 text-balance text-display-sm sm:text-display-sm-pc">
            공동현관문 열림 서비스,
            <br />
            지금 무료로 시작하세요
          </h2>

          <ul className="mx-auto mt-8 flex max-w-narrow flex-wrap justify-center gap-x-5 gap-y-2">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-1.5 text-body-sm-bold">
                <Check className="size-4" aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col items-center gap-3">
            <p className="text-body-sm text-primary-foreground/80">언제라도 연락 부탁드립니다</p>
            <a
              href="tel:010-7528-8254"
              className="relative inline-flex items-center gap-3 rounded-full bg-background px-8 py-4 text-heading-lg text-primary transition-transform duration-200 hover:scale-[1.03] active:scale-95"
            >
              <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-background/40" />
              <Phone className="size-6" aria-hidden="true" />
              010-7528-8254
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-surface-muted">
      <div className="mx-auto flex max-w-page flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <div className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <DoorOpen className="size-4" aria-hidden="true" />
          </span>
          <span className="text-heading-xxs text-foreground">울단지</span>
          <span className="text-body-sm text-muted-foreground">우리단지 생활도우미</span>
        </div>
        <p className="text-body-sm text-muted-foreground">
          문의: 010-7528-8254 · © {new Date().getFullYear()} 울단지. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
