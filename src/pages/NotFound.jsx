import { Link } from 'react-router-dom'
import { PageHero, Section } from '../components/Section.jsx'
import * as img from '../assets/images/index.js'

export default function NotFound() {
  return (
    <>
      <PageHero
        eyebrow="404"
        title="Wrong lighthouse, perhaps."
        subtitle="The page you were looking for does not appear on our chart. Have a look at the sections below and find a coast worth exploring instead."
        image={img.coast.cliff}
        alt="Empty coastline with a rocky headland fading into sea fog"
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Link to="/" className="card p-6 hover:shadow-lg transition">
            <div className="text-xs uppercase tracking-widest text-gold-600">Home</div>
            <div className="mt-2 font-display text-xl">The magazine front page</div>
          </Link>
          <Link to="/destinations" className="card p-6 hover:shadow-lg transition">
            <div className="text-xs uppercase tracking-widest text-gold-600">Destinations</div>
            <div className="mt-2 font-display text-xl">Seven coasts to plan around</div>
          </Link>
          <Link to="/travel-guides" className="card p-6 hover:shadow-lg transition">
            <div className="text-xs uppercase tracking-widest text-gold-600">Travel Guides</div>
            <div className="mt-2 font-display text-xl">Twelve long-form guides</div>
          </Link>
          <Link to="/contact" className="card p-6 hover:shadow-lg transition">
            <div className="text-xs uppercase tracking-widest text-gold-600">Contact</div>
            <div className="mt-2 font-display text-xl">Write to the editors</div>
          </Link>
        </div>
      </Section>
    </>
  )
}
