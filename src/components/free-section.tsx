import { Fragment } from 'react'
import { Store, Gift, Heart, Award, ArrowRight } from 'lucide-react'
import { useReveal } from '../hooks/use-reveal'

const flow = [
  {
    icon: Store,
    title: '뜻을 함께하는 착한 가게',
    desc: '필라테스, 피아노 레슨 등 아파트 단지 인근의 착한 가게가 지역 광고에 참여합니다.',
  },
  {
    icon: Gift,
    title: '지역 광고 수익 발생',
    desc: '광고 수익으로 앱 개발·유지관리, 통신 단말기 및 설치 비용을 모두 충당합니다.',
  },
  {
    icon: Award,
    title: '입주민에게는 오직 혜택',
    desc: '입주민은 무료로 서비스를 사용하고, 입주 대표·관리자는 성과를 얻습니다.',
  },
]

export function FreeSection() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <section id="free" className="scroll-mt-16 border-y border-border/60 bg-surface-muted py-20">
      <div
        ref={ref}
        className={`mx-auto max-w-page px-4 transition-all duration-700 sm:px-6 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-narrow text-center">
          <span className="text-body-md-bold uppercase tracking-widest text-primary">
            비즈니스 모델
          </span>
          <h2 className="mt-3 text-balance text-heading-lg text-foreground sm:text-heading-lg-pc">
            어떻게 &lsquo;무료&rsquo;로 서비스를 제공하나요?
          </h2>
          <p className="mt-4 text-pretty text-body-md text-muted-foreground">
            지역 광고 수익으로 입주민에게 혜택을 드리는 구조입니다. 입주민의 비용
            부담은 전혀 없습니다.
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-content flex-col gap-4 md:flex-row md:items-stretch">
          {flow.map((f, i) => (
            <Fragment key={f.title}>
              <div className="relative flex-1 rounded-2xl border border-border/60 bg-card p-6 transition-transform duration-300 hover:-translate-y-1">
                <span className="absolute right-5 top-5 text-display-sm text-primary/15">
                  {i + 1}
                </span>
                <span className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <f.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-heading-sm text-foreground">{f.title}</h3>
                <p className="mt-2 text-body-md text-muted-foreground">
                  {f.desc}
                </p>
              </div>
              {i < flow.length - 1 && (
                <div className="hidden shrink-0 items-center justify-center md:flex" aria-hidden="true">
                  <ArrowRight className="size-5 text-primary/40" />
                </div>
              )}
            </Fragment>
          ))}
        </div>

        <div className="mx-auto mt-6 flex max-w-content flex-col items-center gap-4 rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center sm:flex-row sm:text-left">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Heart className="size-6" aria-hidden="true" />
          </span>
          <div>
            <h3 className="text-heading-sm text-foreground">
              문을 편하게 여는 것만으로 아이들을 도울 수 있습니다
            </h3>
            <p className="mt-1 text-body-md text-muted-foreground">
              수익의 일부를 월드비전을 통해 어려움에 처한 아동을 후원합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
