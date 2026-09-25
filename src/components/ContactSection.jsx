import { COMPANY, telLink, whatsappLink } from '../data/content'

export default function ContactSection({ compact = false }) {
  return (
    <section className={`contact-band ${compact ? 'is-compact' : ''}`} id="contact-home">
      <div className="container contact-band-inner">
        <div>
          <p className="section-eyebrow">Get in touch</p>
          <h2>Talk to {COMPANY.advisor}</h2>
          <p className="section-lead">
            Need a quote, renewal, or claim help? Call or message us — we respond quickly on
            WhatsApp and phone.
          </p>
        </div>

        <div className="contact-actions">
          <a className="contact-pill" href={telLink(COMPANY.primaryPhone)}>
            <span>Primary Call</span>
            <strong>{COMPANY.primaryPhone}</strong>
          </a>
          <a className="contact-pill contact-pill-wa" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
            <span>WhatsApp</span>
            <strong>{COMPANY.whatsapp}</strong>
          </a>
          <a className="contact-pill" href={telLink(COMPANY.phone)}>
            <span>Call</span>
            <strong>{COMPANY.phone}</strong>
          </a>
          {COMPANY.landline1 && (
            <a className="contact-pill" href={telLink(COMPANY.landline1)}>
              <span>Landline</span>
              <strong>{COMPANY.landline1}</strong>
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
