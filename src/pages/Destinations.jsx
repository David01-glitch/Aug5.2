import { PageHero, Section } from '../components/Section.jsx'
import { InlineExpand, Accordion } from '../components/Accordion.jsx'
import * as img from '../assets/images/index.js'
import { GLOBAL_FAQS } from '../data/faqs.js'

const destinations = [
  {
    name: 'Maine',                img: img.lighthouses.tall,
    history: 'Maine has more than 60 historic lighthouses along 5,600 km of tidal coastline — the highest density of any U.S. state. The oldest, Portland Head Light, was commissioned by George Washington in 1791 and remains active.',
    when: 'Late May through mid-October. Peak autumn colour on the coast is early October.',
    highlights: ['Portland Head Light', 'Nubble Light (Cape Neddick)', 'Pemaquid Point Light', 'Bass Harbor Head (Acadia)'],
    photoSpots: 'Portland Head at dawn from Fort Williams Park. Nubble at last light from Sohier Park. Pemaquid Point from the tide-pools on the north side of the lighthouse.',
    tips: 'Base yourself in Portland for the southern lights, and again in Bar Harbor for Acadia and Bass Harbor. Ferry to Monhegan is a memorable day-trip.'
  },
  {
    name: 'Oregon Coast',         img: img.coast.blue,
    history: 'The Oregon Coast Highway (US-101) was completed in 1932 and is entirely public — Oregon is one of the few U.S. states with a state law guaranteeing beach access from the mean high-tide line seaward. Eleven historic lighthouses remain along the 590 km route.',
    when: 'Late spring (whales) and September (warmest, driest, fewest crowds). Winter storms are dramatic but many viewpoints close.',
    highlights: ['Heceta Head Light', 'Yaquina Head Light', 'Cape Meares Light', 'Cape Blanco Light', 'Tillamook Rock (offshore, view-only)'],
    photoSpots: 'Heceta Head from the pull-out south of Devils Elbow. Yaquina Head at low tide (tidepools + lighthouse). Cannon Beach for Haystack Rock at any tide.',
    tips: 'Drive north-to-south for the sun over your right shoulder in afternoon. Book keeper’s cottages 6+ months ahead in summer.'
  },
  {
    name: 'California',            img: img.coast.sunset,
    history: 'California’s coast has been lit by 30+ lighthouses since the 1854 first-order Fresnel at Alcatraz. Point Reyes, Point Sur and Pigeon Point are among the most photographed of the surviving stations.',
    when: 'April–June for wildflowers on Point Reyes and Big Sur. Northern-California coast is famously foggy in July–August — great atmosphere, poor visibility.',
    highlights: ['Point Reyes Lighthouse', 'Pigeon Point Light Station', 'Point Sur Light Station (tours only)', 'Point Arena Lighthouse'],
    photoSpots: 'Point Reyes from the 308-step descent (mind the wind). Pigeon Point at dawn with the tide out. Big Sur’s McWay Falls just south of Point Sur.',
    tips: 'PCH between Cambria and Monterey has active landslides — check Caltrans QuickMap the morning you drive.'
  },
  {
    name: 'Nova Scotia',           img: img.lighthouses.rocky,
    history: 'Nova Scotia has more than 160 lighthouses — the highest density of any Canadian province. Peggys Cove (1915) and Cape Forchu (1962) are the most recognisable; the Lighthouse Route follows the entire South Shore from Halifax to Yarmouth.',
    when: 'Early October for autumn colour + storm season starting. July–August for warmest water and full ferry schedules.',
    highlights: ['Peggys Cove', 'Cape Forchu', 'Louisbourg Light (near the reconstructed fortress)', 'Cape George Point'],
    photoSpots: 'Peggys at sunrise before the buses (05:30 in July). Cape Forchu on a windy afternoon from the trail south of the light. Cabot Trail overlooks between Ingonish and Cape North.',
    tips: 'The Lighthouse Route is 350 km; allow four days minimum. The Cabot Trail is a separate 298 km loop on Cape Breton — worth its own week.'
  },
  {
    name: 'Scotland',              img: img.coast.cliff,
    history: 'Scotland’s lighthouses were largely designed and built by the Stevenson family engineering firm — the same family that produced Robert Louis Stevenson. The Northern Lighthouse Board still operates the network from headquarters in Edinburgh.',
    when: 'May–September for long daylight hours. October for autumn colour + storm-photography light. Winter road access to some Highland lights is unreliable.',
    highlights: ['Neist Point (Skye)', 'Ardnamurchan (mainland UK’s westernmost)', 'Duncansby Head (near John o’ Groats)', 'Bell Rock (offshore, tours only)'],
    photoSpots: 'Neist Point one hour before sunset. Ardnamurchan on a clear evening with Rum and Eigg visible. The Callanish standing stones with the coast beyond as a bonus.',
    tips: 'Rent a small car — Highland single-track roads reward it. Book Skye accommodation 6+ months ahead in summer.'
  },
  {
    name: 'Ireland',               img: img.coast.tidepool,
    history: 'Ireland’s Commissioners of Irish Lights maintain 65 lighthouses around the coast, several of which offer public access, guided tours or accommodation in the former keeper’s cottages under the "Great Lighthouses of Ireland" programme.',
    when: 'May–September. July is warmest but busiest; September has the best light and the fewest coach tours.',
    highlights: ['Fastnet Rock (offshore, boat tour)', 'Hook Head (one of the world’s oldest working lights)', 'Fanad Head', 'Loop Head'],
    photoSpots: 'Hook Head lit at dusk from the eastern car park. Fanad Head from the small walk to the promontory (blue-hour is unbeatable). Cliffs of Moher two hours before sunset from O’Brien’s Tower.',
    tips: 'Book keeper’s cottage stays (Loop Head, Wicklow Head, Blackhead) 9+ months ahead. Full Wild Atlantic Way is 2,500 km — pick Kerry + West Cork or Donegal for a manageable trip.'
  },
  {
    name: 'Norway',                img: img.roads.trail,
    history: 'Norway’s 200+ historic lighthouses ("fyr") once formed the essential navigation network for the country’s 25,000 km of fjord-cut coastline. Kystverket (the Norwegian Coastal Administration) still operates the active stations; many decommissioned lights have been repurposed as guesthouses.',
    when: 'June–August for the midnight sun north of the Arctic Circle. February–March for the northern lights above Vardø and Andøya lights.',
    highlights: ['Lindesnes (Norway’s southernmost mainland light)', 'Kråkenes (dramatic west coast)', 'Slettnes (world’s northernmost mainland light)', 'Alnes on Godøya'],
    photoSpots: 'Lindesnes on a windy afternoon from the visitor centre. Kråkenes in a storm from behind the safety fence (never in front). Vesterålen for northern-lights-over-lighthouse compositions.',
    tips: 'The Norwegian Coastal Route (Fv17) is one of Europe’s slowest and most beautiful drives — seven ferries, forty islands. Or take Hurtigruten as a foot-passenger for the same coast without driving.'
  }
]

export default function Destinations() {
  return (
    <>
      <PageHero
        eyebrow="Destinations"
        title="Seven coasts worth planning a trip around."
        subtitle="Loose editorial guides — each with a signature lighthouse, the season that suits it, and the practical bits (routes, photography spots, tour-bus timing) that keep the planning easy."
        image={img.coast.blue}
        alt="Blue coastal water crashing against rocks"
      />

      <Section>
        <div className="grid gap-8">
          {destinations.map(d => (
            <article key={d.name} className="card overflow-hidden md:grid md:grid-cols-5">
              <img src={d.img} alt={d.name} loading="lazy" className="md:col-span-2 w-full h-full object-cover aspect-[4/3]" />
              <div className="md:col-span-3 p-6 md:p-8">
                <h2 className="font-display text-2xl md:text-3xl text-navy-950">{d.name}</h2>
                <h3 className="mt-4 text-sm uppercase tracking-widest text-gold-600">History</h3>
                <p className="mt-2 text-ink/85 text-[15px]">{d.history}</p>
                <h3 className="mt-4 text-sm uppercase tracking-widest text-gold-600">Best time to visit</h3>
                <p className="mt-2 text-ink/85 text-[15px]">{d.when}</p>
                <h3 className="mt-4 text-sm uppercase tracking-widest text-gold-600">Highlights</h3>
                <ul className="mt-2 grid sm:grid-cols-2 gap-x-4 gap-y-1 text-sm text-ink/80 list-disc pl-4">
                  {d.highlights.map(h => <li key={h}>{h}</li>)}
                </ul>
                <div className="mt-5">
                  <InlineExpand title="Photography spots &amp; travel tips" cta="Show">
                    <p><strong className="text-navy-950">Photography spots.</strong> {d.photoSpots}</p>
                    <p className="mt-3"><strong className="text-navy-950">Travel tips.</strong> {d.tips}</p>
                    <p className="mt-3 text-sm text-ink/70">
                      Editorial note: coastal access, opening times and safety recommendations change seasonally and
                      after storms. Always confirm with the operator or a licensed local authority before you travel.
                    </p>
                  </InlineExpand>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Frequently asked" title="Reader questions on coastal destinations">
        <Accordion items={GLOBAL_FAQS} idPrefix="dest-faq" />
      </Section>
    </>
  )
}
