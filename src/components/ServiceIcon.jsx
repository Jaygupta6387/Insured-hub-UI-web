const icons = {
  health: (
    <path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 11c0 5.6-7 10-7 10z" />
  ),
  life: (
    <>
      <path d="M12 3v18M8 7h8" />
      <circle cx="12" cy="14" r="5" />
    </>
  ),
  motor: (
    <>
      <path d="M4 14h16l-1.5-5.5A2 2 0 0 0 16.6 7H7.4a2 2 0 0 0-1.9 1.5L4 14z" />
      <circle cx="7.5" cy="16.5" r="1.8" />
      <circle cx="16.5" cy="16.5" r="1.8" />
    </>
  ),
  marine: (
    <>
      <path d="M3 16c2.5-2 5-3 9-3s6.5 1 9 3" />
      <path d="M12 5v8M8 9h8" />
      <path d="M5 19h14" />
    </>
  ),
  accident: (
    <>
      <path d="M12 3v4M12 17v4M4.5 12H8M16 12h3.5" />
      <circle cx="12" cy="12" r="4" />
    </>
  ),
  fire: (
    <path d="M12 21c4 0 6-2.8 6-6.2 0-3.2-2.2-5-2.2-5S15 12 14 9c0 0-1.5 2.5-3.5 4C9 9.5 9 6 9 6c-3 3-4 5.8-4 8.8C5 18.2 8 21 12 21z" />
  ),
  cyber: (
    <>
      <rect x="4" y="6" width="16" height="11" rx="2" />
      <path d="M9 21h6M12 17v4" />
      <path d="M10 11h4" />
    </>
  ),
  invest: (
    <>
      <path d="M4 18V8M10 18V6M16 18v-7M20 18V9" />
      <path d="M3 18h18" />
    </>
  ),
}

export default function ServiceIcon({ name }) {
  return (
    <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {icons[name] || icons.health}
    </svg>
  )
}
