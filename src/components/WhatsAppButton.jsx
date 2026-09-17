import { COMPANY, whatsappLink } from '../data/content'

export default function WhatsAppButton() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp at ${COMPANY.whatsapp}`}
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.1 3C9.3 3 3.8 8.5 3.8 15.3c0 2.1.5 4.1 1.6 5.9L3 29l7.9-2.1c1.7.9 3.6 1.4 5.5 1.4 6.8 0 12.3-5.5 12.3-12.3S22.9 3 16.1 3zm0 22.4c-1.7 0-3.4-.5-4.9-1.3l-.4-.2-4.7 1.2 1.3-4.5-.2-.4c-1-1.5-1.5-3.3-1.5-5.1 0-5.5 4.5-10 10-10s10 4.5 10 10-4.5 10.3-9.6 10.3zm5.6-7.5c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2s-.8 1-.9 1.1c-.2.2-.3.2-.6.1-1.7-.8-2.9-1.5-4-3.4-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.6s-.7-1.7-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.2.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.2-.6-.4z"
        />
      </svg>
      <span>WhatsApp</span>
    </a>
  )
}
