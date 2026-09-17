import { Link } from 'react-router-dom'
import ContactSection from '../components/ContactSection'

const topics = [
  {
    title: 'Health cover protects savings',
    text: 'A single hospitalisation can wipe out years of savings. Health insurance gives cashless treatment access and protects your family’s emergency fund.',
  },
  {
    title: 'Life insurance is for the people you love',
    text: 'Term and life plans ensure income replacement, loan protection, and children’s education goals continue even if you are not there.',
  },
  {
    title: 'Motor insurance is mandatory — and smart',
    text: 'Third-party cover is a legal requirement. Comprehensive cover adds own-damage protection for accidents, theft, and natural calamities.',
  },
  {
    title: 'Marine & business risks need specialised policies',
    text: 'Cargo in transit, fire at premises, and cyber threats need dedicated covers. Generic personal policies rarely include these risks.',
  },
  {
    title: 'Start early, pay less, stay covered',
    text: 'Younger entry ages usually mean lower premiums. Renewing on time avoids coverage gaps when you need protection most.',
  },
]

export default function WhyInsurance() {
  return (
    <>
      <section className="page-hero">
        <div className="container page-hero-inner">
          <p className="section-eyebrow">Education</p>
          <h1>Why insurance matters</h1>
          <p className="section-lead">
            Insurance is not an expense — it is a safety net that keeps your plans intact when life
            takes an unexpected turn.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container topic-list">
          {topics.map((topic, i) => (
            <article key={topic.title} className="topic-card">
              <span className="topic-index">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h2>{topic.title}</h2>
                <p>{topic.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="container split-panel">
          <div className="split-copy">
            <p className="section-eyebrow">Next step</p>
            <h2>Not sure where to begin?</h2>
            <p className="section-lead">
              Tell us about your family size, vehicles, or business needs. We will recommend a
              practical cover mix — without jargon.
            </p>
            <div className="hero-actions">
              <Link to="/services" className="btn btn-secondary">
                Browse services
              </Link>
              <Link to="/contact" className="btn btn-primary">
                Contact us
              </Link>
            </div>
          </div>
          <figure className="split-media">
            <img
              src="/images/services-banner.webp"
              alt="Wide range of insurance and investment solutions"
            />
          </figure>
        </div>
      </section>

      <ContactSection compact />
    </>
  )
}
