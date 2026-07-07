import { Check, X } from 'lucide-react'
import { useReveal } from '../hooks/use-reveal'

const compareRows = [
  {
    label: '기본 동작',
    others: '부정확한 GPS로 동작 오류 많음',
    uldanji: '화면켜짐 100% 동작',
  },
  {
    label: '배터리 소모',
    others: 'GPS 24시간 ON으로 급격한 배터리 소모',
    uldanji: 'GPS 미사용으로 배터리 소모 없음',
  },
  {
    label: '사용자 평점',
    others: '1.4 ~ 2.7점',
    uldanji: '4.8점',
  },
  {
    label: 'A/S 대응',
    others: '연락 두절, 대응 안 됨',
    uldanji: '지역별 전담 인력 배치',
  },
]

// const sideEffects = [
//   'GPS 위치 오차로 문이 잘 열리지 않는 동작 오류',
//   'GPS·지속 BLE 동작으로 스마트폰 배터리가 빨리 소모',
//   '자동 감지 한계로 멀리서 또는 지나가는데 문이 열림',
//   'GPS 개인 위치 24시간 추적에 대한 입주민 불만·오해',
// ]

export function DifferenceSection() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <section id="difference" className="scroll-mt-16 py-20">
      <div
        ref={ref}
        className={`mx-auto max-w-page px-4 transition-all duration-700 sm:px-6 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
      >
        <div className="mx-auto max-w-narrow text-center">
          <span className="text-body-md-bold uppercase tracking-widest text-primary">
            울단지의 차별점
          </span>
          <h2 className="mt-3 text-balance text-heading-lg text-foreground sm:text-heading-lg-pc">
            GPS 미사용으로 부작용을 원천 봉쇄합니다
          </h2>
          <p className="mt-4 text-pretty text-body-md text-muted-foreground">
            유사 서비스의 부작용으로 인한 &lsquo;민원&rsquo;이 울단지에는 없습니다.
          </p>
        </div>

        {/* Comparison table */}
        <div className="mx-auto mt-12 max-w-content overflow-hidden rounded-2xl border border-border/60">
          <div className="grid grid-cols-3 bg-secondary/60 text-body-md-bold">
            <div className="p-4 text-muted-foreground">항목</div>
            <div className="p-4 text-center text-muted-foreground">유사 서비스</div>
            <div className="bg-primary/10 p-4 text-center text-primary">울단지</div>
          </div>
          {compareRows.map((row, i) => (
            <div key={row.label} className="grid grid-cols-3 text-body-md">
              <div
                className={`p-4 font-semibold text-foreground ${i % 2 === 0 ? 'bg-card' : 'bg-secondary/20'}`}
              >
                {row.label}
              </div>
              <div
                className={`flex items-center gap-2 p-4 text-muted-foreground ${i % 2 === 0 ? 'bg-card' : 'bg-secondary/20'
                  }`}
              >
                <X className="size-4 shrink-0 text-destructive" aria-hidden="true" />
                <span>{row.others}</span>
              </div>
              <div className="flex items-center gap-2 bg-primary/[0.06] p-4 font-semibold text-foreground">
                <Check className="size-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{row.uldanji}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Rating callout */}
        {/* <div className="mx-auto mt-6 flex max-w-content flex-col items-center gap-6 rounded-2xl bg-primary p-8 text-center text-primary-foreground sm:flex-row sm:justify-between sm:text-left"> */}
        {/* <div>
            <p className="text-display-md sm:text-display-md-pc">
              4.8<span className="text-heading-md text-primary-foreground/50">점</span>
            </p>
            <div className="mt-2 flex items-center justify-center gap-0.5 sm:justify-start" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-primary-foreground text-primary-foreground" />
              ))}
            </div>
            <p className="mt-2 text-body-md text-primary-foreground/70">울단지 사용자 평점</p>
          </div> */}
        {/* <p className="max-w-xs text-body-md text-primary-foreground/80 sm:text-right">
            유사 서비스 평점은 1.4~2.7점.
            <br className="hidden sm:block" /> 울단지는 부작용이 없어 만족도가 압도적으로 높습니다.
          </p> */}
        {/* </div> */}

        {/* Side effects list */}
        {/* <div className="mx-auto mt-10 max-w-content rounded-2xl border border-border/60 bg-card p-6">
          <h3 className="text-heading-sm text-foreground">
            유사 서비스의 실제 부작용 사례
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {sideEffects.map((s) => (
              <li key={s} className="flex items-start gap-2 text-body-md text-muted-foreground">
                <X className="mt-0.5 size-4 shrink-0 text-destructive" aria-hidden="true" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </section>
  )
}
