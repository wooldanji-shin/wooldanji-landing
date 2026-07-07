import { useState } from 'react'
import { ChevronDown, HeadphonesIcon, MapPin, UserCog, Bell } from 'lucide-react'
import { useReveal } from '../hooks/use-reveal'

const faqs = [
  {
    q: '기존 출입 방법은 그대로 사용할 수 있나요?',
    a: '네, 기존 비밀번호와 카드키 등 모든 출입 방법을 그대로 사용하실 수 있습니다. 울단지는 편리한 옵션을 추가로 제공하는 것입니다.',
  },
  {
    q: '이사가 발생되면 어떻게 되나요?',
    a: '안내판의 연락처로 연락 주시면 기존 입주민 정보를 삭제한 후 안내해 드립니다.',
  },
  {
    q: '사용이 어려운 분들(어르신)은 어떻게 하나요?',
    a: '지역별 전담 인력이 직접 찾아뵙고 어르신의 설치와 사용을 도와드립니다.',
  },
  {
    q: '관리실에 추가 업무가 생기나요?',
    a: '관리실 추가 업무는 전혀 없습니다. 지역별 전담자가 배치되어 단말기 A/S, 입주민 문의, 어르신 설치 지원까지 모두 담당합니다.',
  },
]

const management = [
  { icon: MapPin, label: '지역별 전담 인력 배치' },
  { icon: UserCog, label: '단말기 A/S 대응' },
  { icon: Bell, label: '입주민 문의 대응' },
  { icon: HeadphonesIcon, label: '어르신 설치 지원' },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="rounded-2xl border border-border/60 bg-card">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-heading-xs text-foreground">{q}</span>
        <ChevronDown
          className={`size-5 shrink-0 text-primary transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <p className="px-5 pb-5 text-body-sm text-muted-foreground">{a}</p>
      )}
    </div>
  )
}

export function FaqSection() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <section id="faq" className="scroll-mt-16 py-20">
      <div
        ref={ref}
        className={`mx-auto max-w-page px-4 transition-all duration-700 sm:px-6 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-narrow text-center">
          <span className="text-body-xs-bold uppercase tracking-widest text-primary">
            유지 관리 및 Q&amp;A
          </span>
          <h2 className="mt-3 text-balance text-heading-lg text-foreground sm:text-heading-lg-pc">
            관리는 어떻게 되나요?
          </h2>
          <p className="mt-4 text-pretty text-body-md text-muted-foreground">
            관리실 추가 업무는 전혀 없으며, 지역별 전담자가 모든 것을 담당합니다.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-content gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {management.map((m) => (
            <div
              key={m.label}
              className="flex items-center gap-3 rounded-2xl border border-border/60 bg-secondary/40 p-4"
            >
              <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <m.icon className="size-5" aria-hidden="true" />
              </span>
              <span className="text-body-sm-bold text-foreground">{m.label}</span>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-content space-y-3">
          {faqs.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
