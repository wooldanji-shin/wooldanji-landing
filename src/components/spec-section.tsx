import { Cpu } from 'lucide-react'
import { useReveal } from '../hooks/use-reveal'

const specs = [
  { label: '설치 위치', value: '자동문 상부' },
  { label: '전원 사양', value: 'DC 12~24V' },
  { label: '통신 방식', value: 'Bluetooth® v5.2 · ARM® Cortex®-M4' },
  { label: '동작 온도', value: '-20°C ~ +70°C' },
  { label: '치수', value: '271mm(L) × 59mm(H) × 41mm(W)' },
]

export function SpecSection() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <section className="border-t border-border/60 bg-surface-muted py-20">
      <div
        ref={ref}
        className={`mx-auto max-w-page px-4 transition-all duration-700 sm:px-6 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-content">
          <div className="flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Cpu className="size-6" aria-hidden="true" />
            </span>
            <div>
              <span className="text-body-md-bold uppercase tracking-widest text-primary">
                장비 사양서
              </span>
              <h2 className="text-heading-md text-foreground sm:text-heading-md-pc">
                안정적으로 설계된 전용 단말기
              </h2>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border/60 bg-card">
            {specs.map((s, i) => (
              <div
                key={s.label}
                className={`grid grid-cols-3 text-body-md ${
                  i % 2 === 0 ? 'bg-card' : 'bg-secondary/20'
                }`}
              >
                <div className="p-4 font-bold text-foreground">{s.label}</div>
                <div className="col-span-2 p-4 text-muted-foreground">{s.value}</div>
              </div>
            ))}
          </div>

          <p className="mt-4 text-center text-body-md text-muted-foreground">
            단말기는 자동문 상부에 설치되며, 공동현관문과 관리소에 담당자 연락처
            안내판을 함께 부착합니다.
          </p>
        </div>
      </div>
    </section>
  )
}
