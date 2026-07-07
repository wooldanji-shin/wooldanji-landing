import { ClipboardCheck, Wrench, Users, FileText, CheckCircle2 } from 'lucide-react'
import { useReveal } from '../hooks/use-reveal'

const stages = [
  {
    icon: ClipboardCheck,
    title: '무료 체험',
    desc: '아무 조건 없이 부담 없는 무료 체험으로 먼저 사용해 보세요.',
  },
  {
    icon: Wrench,
    title: '전체 설치 결정',
    desc: '체험 후 도입을 결정하면 단말기를 무상으로 설치·지원합니다.',
  },
  {
    icon: Users,
    title: '입주민 무료 사용',
    desc: '입주민은 무료로 사용하고, 입대위·관리자는 성과를 얻습니다.',
  },
]

const detailSteps = [
  { label: '단말기 설치', by: '울단지' },
  { label: '안내판 부착', by: '울단지' },
  { label: '어플 설치', by: '입주민' },
  { label: '사용자 신청 (관리비 영수증 첨부)', by: '입주민' },
  { label: '사용 승인', by: '울단지' },
  { label: '입주민 사용', by: '입주민' },
]

export function ProcessSection() {
  const { ref, visible } = useReveal<HTMLDivElement>()
  return (
    <section id="process" className="scroll-mt-16 border-t border-border/60 bg-surface-muted py-20">
      <div
        ref={ref}
        className={`mx-auto max-w-page px-4 transition-all duration-700 sm:px-6 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="mx-auto max-w-narrow text-center">
          <span className="text-body-xs-bold uppercase tracking-widest text-primary">
            도입 절차
          </span>
          <h2 className="mt-3 text-balance text-heading-lg text-foreground sm:text-heading-lg-pc">
            부담 없이 &lsquo;무료 체험&rsquo; 후 고민하셔도 됩니다
          </h2>
          <p className="mt-4 text-pretty text-body-md text-muted-foreground">
            전체 진행 단계는 간단합니다. 관리실의 추가 업무는 전혀 없습니다.
          </p>
        </div>

        {/* Main stages */}
        <div className="mx-auto mt-12 grid max-w-content gap-4 md:grid-cols-3">
          {stages.map((s, i) => (
            <div
              key={s.title}
              className="rounded-2xl border border-border/60 bg-card p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <s.icon className="size-6" aria-hidden="true" />
                </span>
                <span className="text-body-sm-bold text-primary">STEP {i + 1}</span>
              </div>
              <h3 className="mt-4 text-heading-sm text-foreground">{s.title}</h3>
              <p className="mt-2 text-body-sm text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed steps */}
        <div className="mx-auto mt-10 max-w-content rounded-2xl border border-border/60 bg-card p-6">
          <div className="flex items-center gap-2">
            <FileText className="size-5 text-primary" aria-hidden="true" />
            <h3 className="text-heading-sm text-foreground">세부 진행 과정</h3>
          </div>
          <ol className="mt-5 space-y-3">
            {detailSteps.map((step, i) => (
              <li key={step.label} className="flex items-center gap-3">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-body-sm-bold text-primary">
                  {i + 1}
                </span>
                <span className="flex-1 text-body-sm-bold text-foreground">
                  {step.label}
                </span>
                <span className="rounded-full bg-secondary px-3 py-1 text-body-xs-bold text-secondary-foreground">
                  {step.by}
                </span>
              </li>
            ))}
          </ol>
          <div className="mt-5 flex items-center gap-2 rounded-xl bg-primary/5 p-4 text-body-sm text-foreground">
            <CheckCircle2 className="size-4 shrink-0 text-primary" aria-hidden="true" />
            <span>사용 승인 후 입주민은 바로 공동현관문을 열 수 있습니다.</span>
          </div>
        </div>
      </div>
    </section>
  )
}
