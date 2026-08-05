import { useEffect, useState } from 'react'
import { loadConsent, saveConsent } from '../utils/consent.js'
import { Link } from 'react-router-dom'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)
  const [showDetail, setShowDetail] = useState(false)

  useEffect(() => { if (!loadConsent()) setVisible(true) }, [])
  if (!visible) return null

  const accept = () => { saveConsent('granted'); setVisible(false) }
  const reject = () => { saveConsent('denied'); setVisible(false) }

  return (
    <div role="dialog" aria-live="polite" aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-[60] md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md">
      <div className="card p-5 md:p-6">
        <h3 className="font-display text-lg text-navy-950">Cookies &amp; analytics</h3>
        <p className="mt-2 text-sm text-ink/75 leading-relaxed">
          We use Google Analytics 4 to understand which coastal destinations readers find most useful. No cookies are
          set until you accept. Rejecting keeps every page fully available. See our{' '}
          <Link to="/privacy#cookies" className="link-underline">Cookie Policy</Link>.
        </p>
        {showDetail && (
          <ul className="mt-3 text-xs text-ink/70 space-y-1 list-disc pl-4">
            <li><strong>Strictly necessary</strong> — none, the site works without them</li>
            <li><strong>Analytics</strong> — Google Analytics 4, only after consent</li>
            <li><strong>Advertising</strong> — none set; ad_storage stays denied</li>
            <li><strong>Duration</strong> — consent choice remembered for 12 months</li>
          </ul>
        )}
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <button onClick={accept} className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium bg-navy-900 text-snow hover:bg-navy-800 transition">Accept analytics</button>
          <button onClick={reject} className="inline-flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium border border-border text-ink hover:bg-sand transition">Reject</button>
          <button onClick={() => setShowDetail(v => !v)} className="text-xs text-ink/70 underline underline-offset-2">
            {showDetail ? 'Hide' : 'Customize'}
          </button>
        </div>
      </div>
    </div>
  )
}
