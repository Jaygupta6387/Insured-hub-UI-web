import { Link } from 'react-router-dom'
import ContactSection from '../components/ContactSection'
import { COMPANY } from '../data/content'

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <p className="section-eyebrow">About us</p>
          <h1>Insured Hub</h1>
          <p className="section-lead">
            Insurance & financial advisers helping families and businesses secure what matters —
            since {COMPANY.since}.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container split-panel reverse">
          <figure className="split-media portrait">
            <img
              src="/images/advisor-portrait.webp"
              alt={`${COMPANY.advisor}, insurance adviser at Insured Hub`}
            />
          </figure>
          <div className="split-copy">
            <p className="section-eyebrow">Our adviser</p>
            <h2>{COMPANY.advisor}</h2>
            <p className="section-lead">
              Meet the face behind Insured Hub. We bring hands-on experience with leading insurers,
              award recognition, and a commitment to clear, honest advice.
            </p>
            <p>
              Whether you need a family mediclaim, motor renewal, life cover, marine cargo policy,
              or help depositing an LIC premium — we guide you through options that fit your budget
              and goals.
            </p>
            <Link to="/contact" className="btn btn-primary">
              Speak with us
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split-panel">
          <div className="split-copy">
            <p className="section-eyebrow">Recognition</p>
            <h2>Trusted by leading insurers</h2>
            <p className="section-lead">
              Our work with major insurance brands has earned industry recognition — a reflection of
              consistent service and client trust.
            </p>
            <ul className="check-list">
              <li>
                <strong>Multi-insurer advisory</strong>
                <span>Access plans across health, life, motor, and specialty lines.</span>
              </li>
              <li>
                <strong>LIC premium point</strong>
                <span>Authorised premium collection support for policyholders.</span>
              </li>
              <li>
                <strong>Long-term relationships</strong>
                <span>Serving clients with renewals, endorsements, and claim assistance.</span>
              </li>
            </ul>
          </div>
          <figure className="split-media">
            <img
              src="/images/award-ceremony.webp"
              alt="Insured Hub team receiving industry recognition"
            />
          </figure>
        </div>
      </section>

      <ContactSection compact />
    </>
  )
}
