import { Link } from 'react-router-dom'
import { COMPANY, whatsappLink, telLink } from '../data/content'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand footer-brand-row">
            <img
              className="brand-logo"
              src="/images/new_logo.jpg"
              alt="Insured Hub"
            />
            <span className="brand-text">
              <strong>Insured Hub</strong>
              <small>{COMPANY.tagline}</small>
            </span>
          </div>
          <p>
            Your trusted insurance & financial adviser for health, life, motor, marine, and
            investment solutions since {COMPANY.since}.
          </p>
        </div>

        <div>
          <h3>Explore</h3>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/why-insurance">Why Insurance</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>
          <ul className="footer-links">
            <li>
              <a href={telLink(COMPANY.primaryPhone)}>Call: {COMPANY.primaryPhone}</a>
            </li>
            <li>
              <a href={whatsappLink()}>WhatsApp: {COMPANY.whatsapp}</a>
            </li>
            <li>
              <a href={telLink(COMPANY.phone)}>Phone: {COMPANY.phone}</a>
            </li>
            {COMPANY.landline1 && (
              <li>
                <a href={telLink(COMPANY.landline1)}>Landline: {COMPANY.landline1}</a>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} Insured Hub. All rights reserved.</p>
          <p>Authorised premium collection & multi-insurer advisory.</p>
        </div>
      </div>
    </footer>
  )
}
