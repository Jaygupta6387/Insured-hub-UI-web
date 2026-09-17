import { useState } from 'react'
import { COMPANY, telLink, whatsappLink } from '../data/content'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    interest: 'Health Insurance',
    message: '',
  })

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const text = `Hello Insured Hub,\nName: ${form.name}\nPhone: ${form.phone}\nInterest: ${form.interest}\nMessage: ${form.message}`
    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <p className="section-eyebrow">Contact</p>
          <h1>Contact Insured Hub</h1>
          <p className="section-lead">
            Reach {COMPANY.advisor} for quotes, renewals, LIC premium deposits, and claim support.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-layout">
          <div className="contact-info-panel">
            <h2>Call or message</h2>
            <p className="section-lead">
              Prefer WhatsApp for the fastest response. All numbers below are active for client
              support.
            </p>

            <div className="contact-list">
              <a className="contact-row highlight" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <span>WhatsApp</span>
                <strong>{COMPANY.whatsapp}</strong>
              </a>
              <a className="contact-row" href={telLink(COMPANY.phone)}>
                <span>Mobile</span>
                <strong>{COMPANY.phone}</strong>
              </a>
              <a className="contact-row" href={telLink(COMPANY.landline1)}>
                <span>Landline</span>
                <strong>{COMPANY.landline1}</strong>
              </a>
              <a className="contact-row" href={telLink(COMPANY.landline2)}>
                <span>Landline</span>
                <strong>{COMPANY.landline2}</strong>
              </a>
            </div>

            <div className="hours-box">
              <h3>Advisor</h3>
              <p>{COMPANY.advisor}</p>
              <h3>Tagline</h3>
              <p>{COMPANY.tagline}</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            <h2>Send a WhatsApp enquiry</h2>
            <p className="section-lead">
              Fill this form and we will open WhatsApp with your message ready to send — no backend
              required.
            </p>

            <label>
              Full name
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                required
                placeholder="Your name"
                autoComplete="name"
              />
            </label>

            <label>
              Phone number
              <input
                name="phone"
                value={form.phone}
                onChange={onChange}
                required
                placeholder="Your mobile number"
                autoComplete="tel"
              />
            </label>

            <label>
              Interest
              <select name="interest" value={form.interest} onChange={onChange}>
                <option>Health Insurance</option>
                <option>Life Insurance</option>
                <option>Motor Insurance</option>
                <option>Marine Insurance</option>
                <option>Mutual Funds / SIP</option>
                <option>LIC Premium Deposit</option>
                <option>Other</option>
              </select>
            </label>

            <label>
              Message
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={4}
                placeholder="Tell us what you need help with"
              />
            </label>

            <button type="submit" className="btn btn-primary">
              Open WhatsApp
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
