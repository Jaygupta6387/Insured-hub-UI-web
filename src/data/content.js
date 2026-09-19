export const COMPANY = {
  name: 'Insured Hub',
  tagline: 'We Secure Your Assets',
  since: '2003',
  advisor: 'Suryansh Gupta',
  whatsapp: '9818263535',
  phone: '9212043486',
  landline1: '011-45562535',
  landline2: '011-45532535',
  email: 'info@insuredhub.in',
}

export const whatsappLink = (message = 'Hello Insured Hub, I would like to know more about insurance plans.') =>
  `https://wa.me/91${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`

export const telLink = (num) => `tel:${num.replace(/-/g, '')}`

export const services = [
  {
    id: 'health',
    title: 'Health Insurance',
    short: 'Cashless hospitalisation & family cover',
    description:
      'Protect your family with mediclaim and health plans that cover hospitalisation, modern treatments, and cashless network hospitals across India.',
    price: 'From ₹7,589*',
    priceNote: '4-member family plan',
    icon: 'health',
  },
  {
    id: 'life',
    title: 'Life Insurance',
    short: 'Secure your family’s future',
    description:
      'Term plans, endowment, and LIC policies designed to safeguard your loved ones financially when they need it most.',
    price: 'Custom quotes',
    priceNote: 'Based on age & cover',
    icon: 'life',
  },
  {
    id: 'motor',
    title: 'Motor Insurance',
    short: 'Cars & two-wheelers covered',
    description:
      'Comprehensive and third-party cover for cars and two-wheelers with quick renewals and claim support.',
    price: 'Two-wheeler from ₹888*',
    priceNote: 'Car from ₹2,445*',
    icon: 'motor',
  },
  {
    id: 'marine',
    title: 'Marine Insurance',
    short: 'Cargo & transit protection',
    description:
      'Cover goods in transit by sea, air, or road — ideal for traders, importers, and exporters who need reliable cargo protection.',
    price: 'On request',
    priceNote: 'Shipment-based pricing',
    icon: 'marine',
  },
  {
    id: 'accident',
    title: 'Accident Insurance',
    short: 'Personal accident & income benefit',
    description:
      'Personal accident cover with income loss benefit options so unexpected injuries do not derail your finances.',
    price: 'Flexible plans',
    priceNote: 'Individual & group',
    icon: 'accident',
  },
  {
    id: 'fire',
    title: 'Fire & Property',
    short: 'Home and business assets',
    description:
      'Insure homes, shops, and commercial property against fire, burglary, and allied perils with tailored property covers.',
    price: 'On assessment',
    priceNote: 'Property valuation based',
    icon: 'fire',
  },
  {
    id: 'cyber',
    title: 'Cyber Insurance',
    short: 'Digital risk protection',
    description:
      'Shield businesses and professionals from cyber fraud, data breaches, and digital liability with modern cyber covers.',
    price: 'Business plans',
    priceNote: 'SME friendly',
    icon: 'cyber',
  },
  {
    id: 'invest',
    title: 'Mutual Funds & SIP',
    short: 'Grow wealth alongside cover',
    description:
      'Alongside insurance, we help you start SIPs and mutual fund investments so your money works toward long-term goals.',
    price: 'SIP from ₹500',
    priceNote: 'Goal-based investing',
    icon: 'invest',
  },
]

export const sliderSlides = [
  {
    image: '/images/slide-promo.webp',
    objectPosition: 'center top',
    objectFit: 'contain',
    variant: 'promo',
    eyebrow: 'Insured Hub IMF Pvt Ltd — Since 2003',
    title: 'Insurance & Financial Services',
    subtitle: 'Motor, Health, Life, Home, Marine, Mutual Funds & more — guided by Suryansh Gupta.',
  },
  {
    image: '/images/services-banner.webp',
    objectPosition: 'center center',
    eyebrow: 'Wide Range of Solutions',
    title: 'Insurance & Investment',
    subtitle: 'Cashless hospitalisation, motor cover, life plans, and SIPs under one trusted adviser.',
  },
  {
    image: '/images/award-ceremony.webp',
    objectPosition: 'center 30%',
    eyebrow: 'Recognised Excellence',
    title: 'Trusted Industry Advisers',
    subtitle: 'Award-winning service and partnerships with leading insurers across India.',
  },
  {
    image: '/images/new_logo.jpg',
    objectPosition: 'center center',
    objectFit: 'contain',
    variant: 'logo',
    eyebrow: 'Since 2003',
    title: 'We Secure Your Assets',
    subtitle: 'Health, life, motor, marine & more — guided by a trusted local adviser.',
  },
]

export const whyPoints = [
  {
    title: 'All Types of Cover',
    text: 'Health, life, motor, marine, fire, accident, cyber — plus mutual funds and LIC premium collection.',
  },
  {
    title: 'Personal Guidance',
    text: 'Speak directly with our adviser. We explain policy terms in plain language before you buy.',
  },
  {
    title: 'Claim Support',
    text: 'From documentation to follow-ups, we stay with you through renewals and claim journeys.',
  },
  {
    title: 'Transparent Pricing',
    text: 'Starting prices for popular plans are shared upfront so you can compare with confidence.',
  },
]
