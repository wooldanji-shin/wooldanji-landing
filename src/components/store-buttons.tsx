const APP_STORE_URL = 'https://apps.apple.com/kr/app/%EC%9A%B8%EB%8B%A8%EC%A7%80/id6754814822'
const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.wooldanji.app'

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 384 512" className={className} fill="currentColor" aria-hidden="true">
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  )
}

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M3.6 2.1c-.2.2-.3.5-.3.9v18c0 .4.1.7.3.9l.1.1L14 12.1v-.2L3.7 2z" fill="#00d2ff" />
      <path d="M17.5 15.5 14 12.1v-.2l3.5-3.4.1.1 4.1 2.3c1.2.7 1.2 1.8 0 2.5z" fill="#ffce00" />
      <path d="M17.6 15.4 14 12 3.6 22.1c.4.4 1 .5 1.8.1l12.2-6.8" fill="#ff3a44" />
      <path d="M17.6 8.6 5.4 1.8C4.6 1.4 4 1.5 3.6 1.9L14 12z" fill="#00e676" />
    </svg>
  )
}

export function StoreButtons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 rounded-xl bg-neutral-950 px-5 py-3 text-white transition-transform duration-200 hover:scale-[1.02] active:scale-95"
      >
        <AppleIcon className="size-7" />
        <span className="text-left leading-tight">
          <span className="block text-[11px] font-medium text-white/70">Download on the</span>
          <span className="block text-lg font-bold">App Store</span>
        </span>
      </a>
      <a
        href={GOOGLE_PLAY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 rounded-xl bg-neutral-950 px-5 py-3 text-white transition-transform duration-200 hover:scale-[1.02] active:scale-95"
      >
        <GooglePlayIcon className="size-6" />
        <span className="text-left leading-tight">
          <span className="block text-[11px] font-medium text-white/70">GET IT ON</span>
          <span className="block text-lg font-bold">Google Play</span>
        </span>
      </a>
    </div>
  )
}
