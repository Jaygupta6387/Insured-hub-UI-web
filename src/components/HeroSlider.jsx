import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { COMPANY, sliderSlides, whatsappLink } from '../data/content'

export default function HeroSlider() {
  const [index, setIndex] = useState(0)
  const active = sliderSlides[index]
  const isLogoSlide = active.variant === 'logo'

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % sliderSlides.length)
    }, 5500)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      className={`hero-slider ${isLogoSlide ? 'is-logo-slide' : ''}`}
      aria-label="Featured highlights"
    >
      {sliderSlides.map((slide, i) => (
        <div
          key={slide.image}
          className={`hero-slide ${i === index ? 'is-active' : ''} ${slide.variant === 'logo' ? 'is-logo' : ''}`}
          aria-hidden={i !== index}
        >
          <img
            src={slide.image}
            alt=""
            style={{
              objectPosition: slide.objectPosition,
              objectFit: slide.objectFit || 'cover',
            }}
            className="hero-slide-img"
          />
          <div className="hero-overlay" />
        </div>
      ))}

      <div className="container hero-content">
        <p className="hero-eyebrow">{active.eyebrow}</p>
        <h1 className="hero-brand">{COMPANY.name}</h1>
        <p className="hero-title">{active.title}</p>
        <p className="hero-subtitle">{active.subtitle}</p>
        <div className="hero-actions">
          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
          <a
            className="btn btn-ghost"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Now
          </a>
        </div>
      </div>

      <div className="hero-dots" role="tablist" aria-label="Slider controls">
        {sliderSlides.map((slide, i) => (
          <button
            key={slide.image}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show slide ${i + 1}`}
            className={i === index ? 'is-active' : ''}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  )
}
