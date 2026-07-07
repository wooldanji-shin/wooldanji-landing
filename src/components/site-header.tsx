import { useEffect, useState } from 'react'
import { DoorOpen, Menu, X } from 'lucide-react'

const navItems = [
  { label: '도입 배경', href: '#why' },
  { label: '사용 방법', href: '#how' },
  { label: '무료 제공', href: '#free' },
  { label: '차별점', href: '#difference' },
  { label: '도입 절차', href: '#process' },
  { label: '자주 묻는 질문', href: '#faq' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // At top: black background with light text. Scrolled: white background with dark text.
  const solid = scrolled || open

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        solid
          ? 'border-b border-border/60 bg-background/90 backdrop-blur-md'
          : 'border-b border-transparent bg-neutral-950'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-page items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <DoorOpen className="size-5" aria-hidden="true" />
          </span>
          <span
            className={`text-heading-xxs transition-colors ${
              solid ? 'text-foreground' : 'text-white'
            }`}
          >
            울단지
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="주요 메뉴">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-body-sm transition-colors ${
                solid
                  ? 'text-muted-foreground hover:text-foreground'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-body-sm-bold text-primary-foreground transition-opacity hover:opacity-90 sm:flex"
          >
            무료 체험 신청
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`flex size-10 items-center justify-center rounded-lg transition-colors lg:hidden ${
              solid ? 'text-foreground' : 'text-white'
            }`}
            aria-label="메뉴 열기"
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background lg:hidden">
          <nav className="mx-auto flex max-w-page flex-col px-4 py-3" aria-label="모바일 메뉴">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-body-sm text-foreground hover:bg-secondary"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-body-sm-bold text-primary-foreground"
            >
              무료 체험 신청
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
