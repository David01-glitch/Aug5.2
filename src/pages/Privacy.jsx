import { PageHero, Section } from '../components/Section.jsx'

export default function Privacy() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy &amp; cookie policy."
        subtitle="A plain-English description of what we collect, why we collect it, and how you can ask us to stop."
        kicker="Last updated: 2026-08-05" />
      <Section>
        <div className="prose-warm max-w-3xl">
          <h2>1. Who we are</h2>
          <p>Lighthouse Explorer (“we”, “us”, “our”) is an independent editorial travel magazine. Contact us at <a className="link-underline text-gold-700" href="mailto:lighthouseexplorer@gmail.com">lighthouseexplorer@gmail.com</a>.</p>

          <h2>2. Scope</h2>
          <p>This policy applies to this website and any subdomains we operate. It does not apply to third-party websites we may link to.</p>

          <h2>3. What we collect</h2>
          <ul>
            <li><strong>Analytics data</strong> — anonymised pageviews, referrers, browser type and country, via Google Analytics 4 (property ID <code>G-4J046JXWVC</code>), only after you accept the cookie banner.</li>
            <li><strong>Contact-form data</strong> — the name, email and message you voluntarily send using the contact form. This form opens your email client; the site itself never stores the message.</li>
            <li><strong>Server logs</strong> — IP address, user agent and requested URL, retained for up to 14 days for security purposes.</li>
          </ul>

          <h2>4. What we do not collect</h2>
          <p>We do not collect payment information (we sell nothing), we do not use device fingerprinting, we do not track you across other websites, and we do not sell or share your personal data with advertisers.</p>

          <h2 id="cookies">5. Cookie policy</h2>
          <p>Before you make a choice in the cookie banner, this site sets Google Consent Mode v2 to <strong>denied</strong> for <code>ad_storage</code>, <code>ad_user_data</code>, <code>ad_personalization</code> and <code>analytics_storage</code>. This means no analytics events are recorded and no advertising cookies are set until you accept.</p>
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1rem' }}>
            <thead>
              <tr style={{ textAlign: 'left', borderBottom: '2px solid #d99a3a' }}>
                <th style={{ padding: '.5rem 0' }}>Cookie</th><th>Purpose</th><th>Set when</th><th>Expires</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid #e3d8bd' }}><td style={{ padding: '.5rem 0' }}><code>lhe_consent_v1</code></td><td>Remembers your cookie choice</td><td>Always (first-party, localStorage)</td><td>12 months</td></tr>
              <tr style={{ borderBottom: '1px solid #e3d8bd' }}><td style={{ padding: '.5rem 0' }}><code>_ga</code></td><td>Distinguishes users (GA)</td><td>Only after you accept</td><td>2 years</td></tr>
              <tr style={{ borderBottom: '1px solid #e3d8bd' }}><td style={{ padding: '.5rem 0' }}><code>_ga_4J046JXWVC</code></td><td>Persists session state (GA4)</td><td>Only after you accept</td><td>2 years</td></tr>
            </tbody>
          </table>
          <p>Clear your browser’s site data for this domain to remove the consent cookie. The banner will reappear on your next visit and you can choose again.</p>

          <h2>6. How long we keep data</h2>
          <p>Analytics data is retained for 14 months. Emails sent to us are kept for up to 24 months.</p>

          <h2>7. Your rights (GDPR / CCPA)</h2>
          <p>You may request a copy of your data, ask for correction, or ask us to delete it. Write to <a className="link-underline text-gold-700" href="mailto:lighthouseexplorer@gmail.com">lighthouseexplorer@gmail.com</a> with <em>Privacy request</em> in the subject line. We respond within 30 days.</p>

          <h2>8. Children</h2><p>Our audience is adults. We do not knowingly collect data from anyone under 13.</p>
          <h2>9. Data location</h2><p>Website hosting is provided in the United States. Google Analytics data is processed by Google LLC.</p>
          <h2>10. Security</h2><p>The site is served over HTTPS. Data is protected with commercially reasonable measures. No system is perfectly secure.</p>
          <h2>11. Changes</h2><p>Material changes are noted with an updated date at the top.</p>
          <h2>12. Contact</h2><p>Questions: <a className="link-underline text-gold-700" href="mailto:lighthouseexplorer@gmail.com">lighthouseexplorer@gmail.com</a>.</p>
        </div>
      </Section>
    </>
  )
}
