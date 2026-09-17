import { Link } from 'react-router-dom'
import ServiceIcon from '../components/ServiceIcon'
import ContactSection from '../components/ContactSection'
import { services } from '../data/content'

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <p className="section-eyebrow">Services</p>
          <h1>All types of insurance</h1>
          <p className="section-lead">
            Health, life, motor, marine, fire, accident, cyber — plus mutual funds and SIP guidance
            under one roof.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-grid service-grid-full">
            {services.map((service) => (
              <article key={service.id} className="service-card service-card-detailed" id={service.id}>
                <div className="service-card-icon">
                  <ServiceIcon name={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-meta">
                  <span>{service.price}</span>
                  <small>{service.priceNote}</small>
                </div>
              </article>
            ))}
          </div>

          <div className="section-cta">
            <Link to="/contact" className="btn btn-primary">
              Request a free quote
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container banner-frame">
          <img
            src="/images/banner-outdoor.webp"
            alt="Insured Hub outdoor brand banner — We Secure Your Assets"
          />
        </div>
      </section>

      <ContactSection compact />
    </>
  )
}
