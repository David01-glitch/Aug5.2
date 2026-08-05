import { PageHero, Section } from '../components/Section.jsx'

export default function Terms() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of use &amp; affiliate disclosure."
        subtitle="The rules for using this website, and an honest description of how the small trickle of affiliate income works."
        kicker="Last updated: 2026-08-05" />
      <Section>
        <div className="prose-warm max-w-3xl">
          <h2>1. Acceptance</h2>
          <p>By using this website you agree to these terms. If you do not agree, please do not use the site.</p>

          <h2>2. Editorial nature of the site</h2>
          <p>Lighthouse Explorer is an editorial travel magazine. It is not a travel agency, tour operator, ferry booking service, accommodation provider, or licensed travel-advisory service. We publish independent editorial opinions about coastal travel and lighthouses; we do not sell trips.</p>

          <h2>3. Not professional advice</h2>
          <p>Everything on this site is general information for reading, not personalised advice. Always verify current conditions with the operator, the relevant tourism board, or a licensed local authority before you travel — especially for coastal safety, tide-affected roads, ferry schedules and access to remote lighthouses.</p>

          <h2>4. Accuracy of information</h2>
          <p>We work hard to keep information current, but coastal access changes seasonally and after storms. Ferry schedules, keeper-cottage bookings and tour times change without notice. If you spot an inaccuracy, please email us at <a className="link-underline text-gold-700" href="mailto:lighthouseexplorer@gmail.com">lighthouseexplorer@gmail.com</a>.</p>

          <h2>5. Intellectual property</h2>
          <p>Text on this site is © Lighthouse Explorer unless otherwise noted. Photographs are either licensed for editorial use, taken by our contributors, or in the public domain. Short quotations with attribution and a link back are permitted; republishing whole articles requires prior written permission.</p>

          <h2>6. User conduct</h2>
          <p>Do not attempt to disrupt the site, scrape it at high volume, submit malicious content, or misrepresent yourself in correspondence.</p>

          <h2>7. Third-party links</h2>
          <p>The site links to third-party websites — operator sites, tourism boards, booking platforms. We do not control and are not responsible for third-party content or practices; their terms apply on their sites.</p>

          <h2 id="affiliate">8. Affiliate disclosure</h2>
          <p>Some outbound links on this site are <strong>affiliate links</strong>. If you click one and complete a booking or purchase, Lighthouse Explorer may earn a small commission at no additional cost to you.</p>
          <ul>
            <li>Affiliate income does <strong>not</strong> influence which lighthouses, routes or destinations we recommend.</li>
            <li>Our editorial team selects the shortlist first; commercial links are added afterwards only where a reputable partner exists.</li>
            <li>We do not accept payment for a favourable review, a placement in a shortlist, or a mention in an itinerary. Sponsored content, if it ever appears, will be clearly labelled as such at the top of the article.</li>
            <li>Affiliate partners we may work with include general travel-booking platforms and photography-equipment retailers.</li>
          </ul>

          <h2>9. Limitation of liability</h2>
          <p>To the maximum extent permitted by law, we are not liable for any losses arising from your use of this site or reliance on its content. Coastal environments carry real risks — always exercise your own judgement and defer to posted signage and local authorities.</p>

          <h2>10. Indemnity</h2>
          <p>You agree to indemnify Lighthouse Explorer and its contributors against any claim arising from your misuse of the site or your breach of these terms.</p>

          <h2>11. Governing law</h2>
          <p>These terms are governed by the laws of the United States. Disputes will be resolved in the appropriate court of that jurisdiction.</p>

          <h2>12. Changes</h2>
          <p>We may update these terms from time to time. The updated date appears at the top of this page. Continued use after changes constitutes acceptance.</p>

          <h2>13. Contact</h2>
          <p>Questions about these terms: <a className="link-underline text-gold-700" href="mailto:lighthouseexplorer@gmail.com">lighthouseexplorer@gmail.com</a>.</p>
        </div>
      </Section>
    </>
  )
}
