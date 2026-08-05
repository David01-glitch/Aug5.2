import { PageHero, Section } from '../components/Section.jsx'
import * as img from '../assets/images/index.js'

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About the magazine"
        title="An independent editorial magazine about coastal travel."
        subtitle="Lighthouse Explorer exists to make coastal travel a little more thoughtful — for readers who prefer a foggy headland at dawn to a busy pier at noon."
        image={img.travel.interior}
        alt="Interior desk with map and camera in warm coastal light"
      />

      <Section eyebrow="Our story" title="How this project started">
        <div className="prose-warm max-w-3xl">
          <p>
            The magazine started as a shared folder of photographs — one lighthouse at dawn every few months, taken
            on trips that we half-planned around visits to distant lights. When the folder filled a hard drive we
            decided to rewrite the notes in public.
          </p>

          <h2>Our mission</h2>
          <p>
            Coastal content on the open web has become unusually noisy. Every drive is "the most beautiful", every
            beach is "hidden", every list is "top 10". Our mission is quieter: to help more people plan a slow coastal
            trip that actually works — where the tide is right, the lighthouse is open, and the drive between stops is
            short enough to enjoy.
          </p>

          <h2 id="editorial">Editorial standards &amp; policy</h2>
          <p>
            Every article is written or edited by a contributor and reviewed by a second pair of eyes before it is
            published. When we make factual claims we cite widely accepted references — the U.S. Coast Guard Light
            List, the Northern Lighthouse Board, the Commissioners of Irish Lights, Kystverket (Norway), and long-
            established coastal travel resources such as Coastal Living and Lonely Planet. Opinions are labelled as
            opinions.
          </p>

          <h2>Research methodology</h2>
          <p>
            For a destination guide we cross-reference at least three primary sources: the lighthouse operator, an
            official tourism board, and one recent first-hand traveller report (from a reader letter, a well-moderated
            forum, or an accredited travel journalist). Historical claims are checked against at least two independent
            references.
          </p>

          <h2>Travel philosophy</h2>
          <p>
            We believe the best coastal trips are shorter than most itineraries suggest, slower than most brochures
            recommend, and built around one or two signature stops rather than a checklist. Two nights in a coastal
            town, one long drive, two more nights — that rhythm makes a coastal trip restful.
          </p>

          <h2>Content update process</h2>
          <p>
            Every destination guide is reviewed at least once a year for accuracy and freshness. Time-sensitive pieces
            (ferry schedules, keeper-cottage bookings) are reviewed before each shoulder season. Substantially revised
            articles carry a <em>Last updated</em> date at the bottom.
          </p>

          <h2>Corrections</h2>
          <p>
            If we get something wrong, we correct it in the article and note the correction at the bottom. Please
            email <a className="link-underline text-gold-700" href="mailto:lighthouseexplorer@gmail.com">lighthouseexplorer@gmail.com</a> with{' '}
            <em>Correction</em> in the subject line — we acknowledge within 3 business days.
          </p>

          <h2 id="accessibility">Accessibility statement</h2>
          <p>
            Lighthouse Explorer targets <strong>WCAG 2.2 Level AA</strong>. Every page ships a skip-to-content link;
            all interactive elements are reachable with a keyboard; focus rings are visible; every content image has
            descriptive alt text; the palette meets 4.5:1 contrast on body text and 3:1 on large text; the site is
            fully usable at 200% zoom without horizontal scroll. If you encounter a barrier, please email us with the
            URL and a short description — we aim to fix reported issues within 14 days.
          </p>

          <h2 id="community">Community guidelines</h2>
          <p>
            We ask everyone who writes to us to keep the tone kind, curious and specific. Do share context (which
            coast, which season, what you tried). Don’t pitch us paid placements, share identifying information about
            other readers without permission, or send content that infringes copyright. We do not currently host
            public comments; reader letters are printed with the writer’s explicit permission and can be withdrawn at
            any time.
          </p>

          <h2>Contact</h2>
          <p>
            Email <a className="link-underline text-gold-700" href="mailto:lighthouseexplorer@gmail.com">lighthouseexplorer@gmail.com</a>.
            Phone number and postal address are available on request via email. We reply to every message within a few
            business days.
          </p>
        </div>
      </Section>
    </>
  )
}
