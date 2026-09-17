import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'
import ContactSection from '../components/ContactSection'
import ServiceIcon from '../components/ServiceIcon'
import { services, whyPoints, COMPANY } from '../data/content'

export default function Home() {
  const featured = services.slice(0, 4)

  return (
    <>
      <HeroSlider />

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="section-eyebrow">What we cover</p>
            <h2>Insurance for every stage of life</h2>
            <p className="section-lead">
              From family health plans to motor, marine, and investments — {COMPANY.name} helps you
              choose the right protection with clear guidance.
            </p>
          </div>

          <div className="service-grid">
            {featured.map((service) => (
              <article key={service.id} className="service-card">
                <div className="service-card-icon">
                  <ServiceIcon name={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
                <p className="service-price">{service.price}</p>
              </article>
            ))}
          </div>

          <div className="section-cta">
            <Link to="/services" className="btn btn-secondary">
              View all services
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split-panel">
          <div className="split-copy">
            <p className="section-eyebrow">Why Insured Hub</p>
            <h2>Protection that feels personal</h2>
            <p className="section-lead">
              We are not a faceless portal. You speak with an adviser who understands policies,
              claims, and your family’s priorities.
            </p>
            <ul className="check-list">
              {whyPoints.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
            <Link to="/why-insurance" className="btn btn-secondary">
              Learn why insurance matters
            </Link>
          </div>
          <figure className="split-media">
            <img
              src="/images/services-banner.webp"
              alt="Insured Hub insurance and investment solutions"
            />
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container promo-strip">
          <div>
            <p className="section-eyebrow">Popular starting prices</p>
            <h2>Plans that start within reach</h2>
          </div>
          <div className="promo-prices">
            <div>
              <span>Two-wheeler</span>
              <strong>₹888*</strong>
            </div>
            <div>
              <span>Car insurance</span>
              <strong>₹2,445*</strong>
            </div>
            <div>
              <span>Family health</span>
              <strong>₹7,589*</strong>
            </div>
          </div>
          <p className="fine-print">*Indicative starting premiums. Final quote depends on profile and insurer.</p>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
