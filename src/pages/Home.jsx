import { Link } from 'react-router-dom'
import { Section } from '../components/Section.jsx'
import { Accordion } from '../components/Accordion.jsx'
import * as img from '../assets/images/index.js'
import { GLOBAL_FAQS } from '../data/faqs.js'
import { trackEvent } from '../utils/analytics.js'

const featuredLighthouses = [
  { name: 'Portland Head Light',   where: 'Cape Elizabeth, Maine',           img: img.lighthouses.tall,   note: 'Commissioned 1791, the oldest lighthouse in Maine. Working navigation aid; museum in the former keeper’s dwelling.' },
  { name: 'Heceta Head Light',     where: 'Florence, Oregon',                img: img.lighthouses.cliff,  note: '1894 first-order Fresnel lens, still in service. The keeper’s cottage is a working bed & breakfast — book months ahead.' },
  { name: 'Peggys Cove',           where: 'Nova Scotia, Canada',             img: img.lighthouses.rocky,  note: 'The most-photographed lighthouse in Canada, set on a bed of pink granite. Visit at sunrise before the tour buses.' },
  { name: 'Neist Point',           where: 'Isle of Skye, Scotland',          img: img.lighthouses.harbor, note: 'A dramatic clifftop light at the western tip of Skye. The walk in is 40 minutes each way; the reward is nearly always worth the weather.' }
]

const popularRoutes = [
  { name: 'US-1 through coastal Maine',     note: 'Kittery to Bar Harbor via Rockport, Camden, Bath and Boothbay — five days, twelve lighthouses.', img: img.roads.drive },
  { name: 'Oregon Coast Highway (US-101)',  note: 'Astoria to Brookings — 590 km of Pacific cliffs, sea stacks and eleven public lighthouses.',    img: img.coast.blue },
  { name: 'Cabot Trail, Nova Scotia',       note: 'A 298 km loop around Cape Breton Highlands. Best in early October for autumn colour.',            img: img.roads.highway },
  { name: 'Scotland NC500',                 note: '830 km around the northern Highlands. Allow at least a week; ideally two.',                       img: img.coast.cliff },
  { name: 'Wild Atlantic Way, Ireland',     note: 'The full 2,500 km takes three weeks; Kerry + West Cork alone is a wonderful ten-day trip.',       img: img.coast.sunset },
  { name: 'Norwegian Coastal Route (Fv17)', note: 'From Steinkjer to Bodø via seven ferries and forty islands — one of Europe’s slowest, most beautiful drives.', img: img.roads.trail }
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-canvas border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32 grid gap-12 md:grid-cols-5 items-center">
          <div className="md:col-span-3">
            <span className="pill">Independent editorial coastal magazine</span>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-7xl leading-[1.02] text-navy-950">
              A slower way
              <span className="block text-gold-600">to follow the coast.</span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-ink/80 max-w-2xl">
              Lighthouse Explorer is an editorial travel magazine about the world’s most beautiful lighthouses,
              coastal road trips, seaside towns and scenic viewpoints. Written for people who prefer a headland at
              sunrise to a queue at a viewpoint.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link to="/destinations" className="inline-flex items-center justify-center rounded-2xl px-6 py-3.5 font-medium text-snow bg-navy-900 hover:bg-navy-800 transition">
                Explore destinations
              </Link>
              <Link to="/travel-guides" className="inline-flex items-center justify-center rounded-2xl px-6 py-3.5 font-medium border border-border text-ink hover:bg-sand transition">
                Read the guides
              </Link>
            </div>
            <dl className="mt-14 grid grid-cols-3 gap-4 max-w-lg">
              <div><dt className="text-xs uppercase tracking-widest text-ink/50">Free to read</dt><dd className="font-display text-xl text-navy-950 mt-1">Every guide</dd></div>
              <div><dt className="text-xs uppercase tracking-widest text-ink/50">Advertising</dt><dd className="font-display text-xl text-navy-950 mt-1">None on-site</dd></div>
              <div><dt className="text-xs uppercase tracking-widest text-ink/50">Editorial</dt><dd className="font-display text-xl text-navy-950 mt-1">Independent</dd></div>
            </dl>
          </div>
          <div className="md:col-span-2">
            <div className="rounded-3xl overflow-hidden shadow-card border border-border">
              <img src={img.hero.lighthouse} alt="Lighthouse silhouette against golden coastal sky" className="w-full h-auto block" />
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL PROMISE */}
      <Section eyebrow="What this magazine is" title="An independent editorial publication about coastal travel">
        <div className="prose-warm max-w-3xl">
          <p>
            Lighthouse Explorer is an <strong>independent editorial travel magazine</strong>. Everything here is
            informational reading and personal opinion — not travel-agency, booking, ticketing, financial, medical,
            maritime-safety or legal advice. Always confirm access, tides, opening times and conditions with the
            operator or a licensed local authority before you travel.
          </p>
          <ul>
            <li>We do not sell tickets, tours, accommodation or any physical product.</li>
            <li>We do not accept paid product placements or sponsored posts.</li>
            <li>Some outbound links may be affiliate links — always clearly marked (see <Link to="/terms#affiliate" className="link-underline">Affiliate Disclosure</Link>).</li>
            <li>Full contact details and editorial standards are on the <Link to="/about" className="link-underline">About</Link> page.</li>
          </ul>
        </div>
      </Section>

      {/* FEATURED LIGHTHOUSES */}
      <Section eyebrow="Featured lighthouses" title="Four lighthouses worth planning a trip around" intro="A short, opinionated shortlist. Each is easy to reach from a modest airport, welcomes visitors during the season, and photographs beautifully at either end of the day.">
        <div className="grid gap-6 md:grid-cols-2">
          {featuredLighthouses.map(l => (
            <article key={l.name} className="card overflow-hidden md:grid md:grid-cols-5">
              <img src={l.img} alt={l.name} loading="lazy" className="md:col-span-2 w-full h-full object-cover aspect-[4/3]" />
              <div className="md:col-span-3 p-6">
                <h3 className="font-display text-xl">{l.name}</h3>
                <p className="text-xs uppercase tracking-widest text-gold-600 mt-1">{l.where}</p>
                <p className="mt-3 text-ink/80 text-[15px]">{l.note}</p>
                <Link to="/destinations" className="mt-4 inline-block text-sm text-gold-700 link-underline">See in Destinations →</Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* POPULAR COASTAL ROUTES */}
      <Section eyebrow="Popular coastal routes" title="Six coastal drives to plan around a lighthouse" intro="From an unhurried weekend to a three-week road trip. Each drive strings together working lighthouses, quiet seaside towns and viewpoints most tour buses skip.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {popularRoutes.map((r) => (
            <Link key={r.name} to="/destinations" onClick={() => trackEvent('route_click', { name: r.name })} className="card overflow-hidden block">
              <img src={r.img} alt={r.name} loading="lazy" className="w-full aspect-[4/3] object-cover" />
              <div className="p-6">
                <h3 className="font-display text-xl">{r.name}</h3>
                <p className="mt-2 text-ink/75 text-sm">{r.note}</p>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* TRAVEL TIPS */}
      <Section eyebrow="Travel tips" title="Four small habits of a happy coastal traveller">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { t: 'Check the tide before you park',   b: 'Beach parking is often submerged at high tide. A five-second glance at a tide app saves an expensive tow.' },
            { t: 'Golden hour beats midday',         b: 'Lighthouses look flat at noon and cinematic at sunrise or sunset. Plan your visit around the light.' },
            { t: 'Layer more than you think',        b: 'Coastal wind reduces perceived temperature by 5–8°C. A packable shell over a merino base beats a heavy coat.' },
            { t: 'Small towns for meals',            b: 'The tourist port has $28 fish-and-chips. The next headland along has a $14 chowder that is genuinely better.' }
          ].map(x => (
            <div key={x.t} className="card p-6">
              <h3 className="font-display text-lg">{x.t}</h3>
              <p className="mt-3 text-ink/80 text-[15px]">{x.b}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PHOTOGRAPHY SHOWCASE */}
      <Section eyebrow="Photography showcase" title="A visual moment">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl overflow-hidden shadow-card border border-border md:row-span-2">
            <img src={img.coast.sunset} alt="Sun setting behind a coastal headland" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-card border border-border">
            <img src={img.beaches.aerial} alt="Aerial view of a sandy beach with waves" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-card border border-border">
            <img src={img.coast.tidepool} alt="Rocky tidepool with a hint of the sea beyond" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-card border border-border">
            <img src={img.lighthouses.cliff} alt="Lighthouse perched on a coastal cliff" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="rounded-3xl overflow-hidden shadow-card border border-border">
            <img src={img.beaches.dunes} alt="Sand dunes at the edge of a beach" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
        <p className="mt-6 text-sm text-ink/70 max-w-2xl">
          All photographs are used under the Unsplash license and stored locally. Where a specific place, keeper or
          contributor appears in an image, we have their written permission on file. Please email if you would like
          your photograph removed — we honour every reasonable request within 14 days.
        </p>
      </Section>

      {/* TRAVELER STORIES */}
      <Section eyebrow="Traveler stories" title="Notes from readers on the road">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { q: 'Drove US-1 in October — every lighthouse was ours alone at 7 am.',  by: 'A reader in Vermont' },
            { q: 'Rented the Heceta Head keeper’s cottage. Woke to fog and one deer on the lawn.', by: 'A reader in California' },
            { q: 'Peggys Cove at sunrise before the buses is the trip I recommend most.', by: 'A reader in Halifax' }
          ].map((t, i) => (
            <figure key={i} className="card p-6">
              <blockquote className="text-ink/85 leading-relaxed">“{t.q}”</blockquote>
              <figcaption className="mt-4 text-sm text-gold-700">— {t.by}</figcaption>
            </figure>
          ))}
        </div>
        <p className="mt-6 text-xs text-ink/60">Reader quotes are lightly edited excerpts from correspondence, published with permission. No compensation was offered or received.</p>
      </Section>

      {/* NEWSLETTER */}
      <Section eyebrow="Optional email updates" title="A slow, quarterly coastal letter">
        <div className="warm-panel p-8 md:p-10 grid gap-6 md:grid-cols-5 items-center">
          <div className="md:col-span-3">
            <p className="text-ink/85">
              A short letter once a season — four times a year — with one lighthouse worth planning a trip around, one
              coastal drive, and one seasonal note. Your email is only used to send the letter, never sold or shared.
              We publish no fake subscriber counts.
            </p>
          </div>
          <form
            className="md:col-span-2 flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => {
              e.preventDefault()
              const em = (e.currentTarget.elements.email.value || '').trim()
              if (!em) return
              trackEvent('newsletter_signup', {})
              window.location.href = `mailto:lighthouseexplorer@gmail.com?subject=${encodeURIComponent('Please add me to the quarterly coastal letter')}&body=${encodeURIComponent(`Please add this address to the Lighthouse Explorer quarterly letter:\n\n${em}\n`)}`
            }}
          >
            <label htmlFor="nl-email" className="sr-only">Email address</label>
            <input id="nl-email" name="email" type="email" required placeholder="you@example.com" className="flex-1 rounded-xl px-4 py-3 bg-paper border border-border focus:border-gold-500 focus:outline-none" />
            <button type="submit" className="rounded-xl px-5 py-3 font-medium bg-navy-900 text-snow hover:bg-navy-800 transition">Request to join</button>
          </form>
        </div>
      </Section>

      {/* FAQ */}
      <Section eyebrow="Frequently asked" title="Reader questions on coastal travel">
        <Accordion items={GLOBAL_FAQS} idPrefix="home-faq" />
      </Section>

      {/* CONTACT CTA */}
      <Section eyebrow="Get in touch" title="Write to the editors">
        <div className="card p-8 md:p-10 text-center max-w-2xl mx-auto">
          <p className="text-ink/85 text-lg">
            Corrections, a lighthouse we should visit, or a first-light photograph of your own coastal trip — we read
            every message and reply within a few business days.
          </p>
          <div className="mt-6">
            <Link to="/contact" className="inline-flex items-center justify-center rounded-2xl px-6 py-3.5 font-medium bg-navy-900 text-snow hover:bg-navy-800 transition">
              Contact page
            </Link>
          </div>
          <p className="mt-4 text-sm text-ink/60">
            or write directly: <a className="link-underline text-gold-700" href="mailto:lighthouseexplorer@gmail.com">lighthouseexplorer@gmail.com</a>
          </p>
        </div>
      </Section>
    </>
  )
}
