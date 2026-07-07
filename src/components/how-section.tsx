import { Smartphone, MousePointerClick, Ruler } from 'lucide-react'
import { useReveal } from '../hooks/use-reveal'

const methods = [
  {
    tag: '방법 1',
    icon: Smartphone,
    title: '화면 켜서 문 열기',
    desc: '스마트폰 화면을 켜기만 하면 위젯 버튼이 나타납니다. 버튼을 누르면 공동현관문이 바로 열립니다.',
  },
  {
    tag: '방법 2',
    icon: MousePointerClick,
    title: '밀어서 문 열기',
    desc: '잠금 화면에서 슬라이드 한 번으로 문을 열 수 있습니다. 화면이 꺼져 있어도 간편하게 사용하세요.',
  },
]

export function HowSection() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <section id="how" className="scroll-mt-16 py-20">
      <div
        ref={ref}
        className={`mx-auto max-w-page px-4 transition-all duration-700 sm:px-6 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <span className="text-body-xs-bold uppercase tracking-widest text-primary">
              시스템 소개
            </span>
            <h2 className="mt-3 text-balance text-heading-lg text-foreground sm:text-heading-lg-pc">
              울단지는 어떻게 동작하나요?
            </h2>
            <p className="mt-4 text-pretty text-body-md text-muted-foreground">
              최대 1~5M 거리에서 손가락만 까닥하면 공동현관문이 열립니다.
              두 가지 방법 중 편한 방식을 선택하세요.
            </p>

            <div className="mt-8 space-y-4">
              {methods.map((m) => (
                <div
                  key={m.tag}
                  className="flex gap-4 rounded-2xl border border-border/60 bg-card p-5 transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <m.icon className="size-6" aria-hidden="true" />
                  </span>
                  <div>
                    <span className="text-body-xs-bold uppercase tracking-wide text-primary">
                      {m.tag}
                    </span>
                    <h3 className="text-heading-sm text-foreground">{m.title}</h3>
                    <p className="mt-1 text-body-sm text-muted-foreground">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-2 rounded-xl bg-secondary/60 p-4 text-body-sm text-muted-foreground">
              <Ruler className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <p>
                * 안드로이드폰 사용 가능, 아이폰은 위젯을 사용해 동작합니다.
              </p>
            </div>
          </div>

          <div className="relative order-1 mx-auto max-w-sm lg:order-2">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/10 blur-2xl" />
            <img
              src="/phone-widget.png"
              alt="스마트폰 위젯으로 공동현관문을 여는 앱 화면"
              width={520}
              height={640}
              className="w-full rounded-[1.75rem] border border-border/60 object-cover shadow-2xl shadow-primary/10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
