import { PageHero, Section } from '../components/Section.jsx'
import { InlineExpand, Accordion } from '../components/Accordion.jsx'
import * as img from '../assets/images/index.js'
import { GLOBAL_FAQS } from '../data/faqs.js'

const guides = [
  { title: 'Best Lighthouses in America',            img: img.lighthouses.tall,     time: '11 min', category: 'Shortlist',    excerpt: 'A tight opinionated shortlist — Portland Head, Heceta Head, Split Rock, St. Augustine, Point Reyes — with the seasons and light each favours.' },
  { title: 'Weekend Coastal Road Trips',             img: img.roads.drive,          time: '10 min', category: 'Trips',        excerpt: 'Six two-night coastal drives, all under 400 km, each with two overnights and three lighthouses within an easy day.' },
  { title: 'Lighthouse Photography Tips',            img: img.travel.window,        time: '9 min',  category: 'Photography',  excerpt: 'Golden hour, wide-and-long lens pairs, tripod discipline for long exposures — the three habits that produce a portfolio.' },
  { title: 'A Coastal Sunrise Viewing Guide',        img: img.coast.sunset,         time: '7 min',  category: 'Photography',  excerpt: 'The east-facing headlands that reward the extra 90-minute alarm. Where to park, when to arrive, what to bring.' },
  { title: 'Best Seasons to Visit the Coast',        img: img.guides.autumn,        time: '8 min',  category: 'Planning',     excerpt: 'Shoulder-season logic in six coastal regions — when weather, crowds, ferry schedules and photography light overlap.' },
  { title: 'A Coastal Packing Guide',                img: img.travel.desk,          time: '9 min',  category: 'Packing',      excerpt: 'Layered clothing, real waterproofing, tide-safe footwear, camera cloth, a wind-proof hat — the coastal traveller’s essentials.' },
  { title: 'Family-Friendly Coastal Routes',         img: img.beaches.aerial,       time: '10 min', category: 'Family',       excerpt: 'Six coastal drives with regular playground stops, easy walks to lighthouses, and lunch spots that welcome children genuinely (not just tolerate).' },
  { title: 'Romantic Coastal Escapes',               img: img.coast.tidepool,       time: '9 min',  category: 'Romance',      excerpt: 'Keeper-cottage stays, quiet cliff-top dinners and the villages where no wedding party has ever booked out the entire hotel.' },
  { title: 'Historical Lighthouses Worth the Detour', img: img.lighthouses.rocky,   time: '11 min', category: 'History',      excerpt: 'The lights whose stories are as remarkable as their locations — Minot’s Ledge, Eddystone, Bell Rock, Fastnet, Vardø.' },
  { title: 'Hidden Coastal Gems',                    img: img.coast.cliff,          time: '9 min',  category: 'Off the Path', excerpt: 'The 20-minute rule — how driving 20 to 40 minutes past a famous coastal town almost always reveals a quieter, better one.' },
  { title: 'Coastal Driving Tips',                   img: img.roads.highway,        time: '8 min',  category: 'Driving',      excerpt: 'Ferry timings, single-track etiquette, tide-affected roads, RV parking realities and the three phone apps every coastal driver actually uses.' },
  { title: 'Ocean &amp; Coastal Safety Guide',       img: img.beaches.tide,         time: '10 min', category: 'Safety',       excerpt: 'Rogue waves, sneaker waves, rip currents, cliff-edge crumbling, exposed reef pools — the coastal risks worth understanding before you go.' }
]

export default function Guides() {
  return (
    <>
      <PageHero
        eyebrow="Travel Guides"
        title="Practical writing for a slower kind of coast trip."
        subtitle="Twelve long-form editorial guides — planning, packing, photography, driving, safety and the small logistical bits that make a coastal trip feel restful."
        image={img.coast.sunset}
        alt="Sun setting behind a headland over blue ocean water"
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((g, i) => (
            <article key={i} className="card overflow-hidden">
              <img src={g.img} alt={g.title} loading="lazy" className="w-full aspect-[16/10] object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-gold-600">
                  <span>{g.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{g.time}</span>
                </div>
                <h3 className="mt-3 font-display text-xl leading-snug">{g.title}</h3>
                <p className="mt-3 text-[15px] text-ink/85">{g.excerpt}</p>
                <div className="mt-5">
                  <InlineExpand title="Read the guide" cta="Expand">
                    <p>
                      This guide walks through the practical steps with the small details that make coastal travel
                      feel easy — the parking spot, the tide window, the recommended lens, the shoulder-season week
                      when the light and the crowds both fall right.
                    </p>
                    <p className="mt-3 text-sm text-ink/70">
                      Where a claim depends on external data (tide tables, access rules, ferry schedules) we cite the
                      operator’s or authority’s current documentation. Recommendations reflect the honest opinions of
                      the editorial team. Some outbound links may be affiliate links (see our{' '}
                      <a className="link-underline text-gold-700" href="/terms#affiliate">Affiliate Disclosure</a>).
                    </p>
                  </InlineExpand>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Frequently asked" title="Reader questions on coastal travel">
        <Accordion items={GLOBAL_FAQS} idPrefix="guide-faq" />
      </Section>
    </>
  )
}
