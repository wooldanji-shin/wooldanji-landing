import {
  Hand,
  ShieldCheck,
  HeartPulse,
  Wallet,
  Keyboard,
  AlertTriangle,
  KeyRound,
  CircleDollarSign,
} from 'lucide-react'
import { useReveal } from '../hooks/use-reveal'

const problems = [
  {
    icon: Hand,
    title: '불편',
    desc: '공동현관 키패드를 매번 여러 번 눌러야 합니다. 기존 안면인식 방식은 인식 오류의 한계가 있습니다.',
  },
  {
    icon: KeyRound,
    title: '보안',
    desc: '비밀번호가 그대로 노출되어 입주민이 불안함을 느낍니다.',
  },
  {
    icon: CircleDollarSign,
    title: '비용',
    desc: '키패드 고장 수리비와 출입카드 발급 비용이 계속 발생합니다.',
  },
]

const benefits = [
  {
    icon: Hand,
    title: '편리',
    desc: '원터치로 간편하게. 손가락만 까닥하면 문이 열립니다.',
  },
  {
    icon: ShieldCheck,
    title: '보안 강화',
    desc: '비밀번호 노출이 없어 더욱 안전합니다.',
  },
  {
    icon: HeartPulse,
    title: '감염 방지',
    desc: '키패드에 손을 대지 않는 비접촉 방식입니다.',
  },
  {
    icon: Wallet,
    title: '관리비 절감',
    desc: '출입카드 재발급이 불필요해 비용을 아낍니다.',
  },
  {
    icon: Keyboard,
    title: '키패드 고장 방지',
    desc: '터치 횟수를 현저히 줄여 고장을 예방합니다.',
  },
]

export function BenefitsSection() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <section id="why" className="scroll-mt-16 border-t border-border/60 bg-surface-muted py-20">
      <div
        ref={ref}
        className={`mx-auto max-w-page px-4 transition-all duration-700 sm:px-6 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-narrow text-center">
          <span className="text-body-xs-bold uppercase tracking-widest text-primary">
            제안 배경 및 기대 효과
          </span>
          <h2 className="mt-3 text-balance text-heading-lg text-foreground sm:text-heading-lg-pc">
            왜 &lsquo;울단지&rsquo;를 도입해야 할까요?
          </h2>
          <p className="mt-4 text-pretty text-body-md text-muted-foreground">
            지금 공동현관에서 겪고 있는 불편, 보안, 비용 문제를 한 번에 해결합니다.
          </p>
        </div>

        {/* Problems */}
        <div className="mx-auto mt-12 grid max-w-content gap-4 sm:grid-cols-3">
          {problems.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-destructive/20 bg-card p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-2">
                <span className="flex size-9 items-center justify-center rounded-lg bg-destructive/10 text-destructive">
                  <AlertTriangle className="size-5" aria-hidden="true" />
                </span>
                <h3 className="text-heading-sm text-foreground">{p.title}</h3>
              </div>
              <p className="mt-3 text-body-sm text-muted-foreground">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-14 text-center text-heading-xs text-foreground">
          울단지는 입주민의 삶의 질을 직접적으로 향상시킵니다.
        </p>

        {/* Benefits */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <b.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-heading-xxs text-foreground">{b.title}</h3>
              <p className="mt-2 text-body-sm text-muted-foreground">
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
