import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="mt-24 bg-navy-950 text-snow/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="h-9 w-9 rounded-full bg-gold-500 inline-flex items-center justify-center text-navy-950 font-display">L</span>
            <span className="font-display text-lg">Lighthouse Explorer</span>
          </div>
          <p className="mt-4 text-sm text-snow/70 max-w-xs">
            An independent editorial travel magazine about lighthouses, coastal road trips and seaside towns.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-snow">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm text-snow/75">
            <li><Link to="/destinations" className="hover:text-gold-500">Destinations</Link></li>
            <li><Link to="/travel-guides" className="hover:text-gold-500">Travel Guides</Link></li>
            <li><Link to="/about" className="hover:text-gold-500">About</Link></li>
            <li><Link to="/contact" className="hover:text-gold-500">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-snow">Legal &amp; Trust</h4>
          <ul className="mt-4 space-y-2 text-sm text-snow/75">
            <li><Link to="/privacy" className="hover:text-gold-500">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-gold-500">Terms of Use</Link></li>
            <li><Link to="/privacy#cookies" className="hover:text-gold-500">Cookie Policy</Link></li>
            <li><Link to="/terms#affiliate" className="hover:text-gold-500">Affiliate Disclosure</Link></li>
            <li><Link to="/about#editorial" className="hover:text-gold-500">Editorial Policy</Link></li>
            <li><Link to="/about#accessibility" className="hover:text-gold-500">Accessibility</Link></li>
            <li><Link to="/about#community" className="hover:text-gold-500">Community Guidelines</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm uppercase tracking-widest text-snow">Contact</h4>
          <address className="not-italic mt-4 text-sm text-snow/80 space-y-1.5">
            <div><a className="hover:text-gold-500" href="mailto:lighthouseexplorer@gmail.com">lighthouseexplorer@gmail.com</a></div>
            <div>Phone: available on request via email</div>
            <div>Editorial address: available on request via email</div>
          </address>
        </div>
      </div>

      <div className="border-t border-snow/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-snow/60 space-y-3">
          <p>
            <strong className="text-snow/90">Editorial disclosure:</strong> Lighthouse Explorer is an independent
            editorial travel magazine. Content is general informational reading and personal opinion — not
            travel-agency, booking, ticketing, financial, medical, safety or legal advice. Always confirm access,
            tides, opening times and conditions with the site operator or a licensed maritime authority before you
            travel. Some outbound links may be affiliate links (see the{' '}
            <Link to="/terms#affiliate" className="text-gold-500 underline decoration-gold-500/40">Affiliate Disclosure</Link>);
            editorial choices are made independently of any commercial relationship.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} Lighthouse Explorer. All rights reserved.</p>
            <p>Independent magazine. Not affiliated with any lighthouse authority, tour company or trade association.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
