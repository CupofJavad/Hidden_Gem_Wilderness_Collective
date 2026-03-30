export default function Privacy() {
  return (
    <div className="min-h-screen bg-cream py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-medium text-ink mb-8">Privacy Policy</h1>
        
        <div className="bg-white rounded-xl p-8 space-y-6 text-ink/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-medium text-ink mb-4">Information We Collect</h2>
            <p className="mb-3"><strong>Account Information:</strong></p>
            <ul className="list-disc list-inside space-y-2 ml-4 mb-4">
              <li>Name, email address, optional phone number</li>
              <li>Membership tier and payment information (processed via Stripe)</li>
              <li>Event registrations and itinerary purchases</li>
            </ul>
            <p className="mb-3"><strong>Usage Data:</strong></p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Pages visited, time on site, device type</li>
              <li>Referral sources and browsing patterns</li>
              <li>Collected via cookies and analytics (Google Analytics)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-ink mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>To process memberships, event registrations, and purchases</li>
              <li>To send pre-trip logistics, safety updates, and newsletters</li>
              <li>To improve website functionality and user experience</li>
              <li>To communicate about community events and offerings</li>
              <li>To comply with legal obligations (e.g., tax reporting)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-ink mb-4">Information Sharing</h2>
            <p className="mb-3">We do <strong>not sell</strong> your personal information. We share data only with:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Service providers:</strong> Stripe (payments), Mailchimp (newsletters), Discord (community forum)</li>
              <li><strong>Trip coordinators:</strong> Limited contact info for registered event participants</li>
              <li><strong>Legal authorities:</strong> If required by law or to protect safety</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-ink mb-4">Cookies & Tracking</h2>
            <p>
              We use cookies for session management, analytics, and improving site performance. You can disable cookies 
              in your browser settings, though some features may not function properly. We use Google Analytics with 
              IP anonymization enabled.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-ink mb-4">Email Communications</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Transactional emails</strong> (receipts, trip logistics) cannot be unsubscribed</li>
              <li><strong>Marketing emails</strong> (newsletters, event announcements) have unsubscribe links</li>
              <li>We email no more than twice per month unless you're registered for upcoming events</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-ink mb-4">Data Security</h2>
            <p>
              We use industry-standard encryption (SSL/TLS) and secure hosting. Payment information is handled by Stripe 
              and never stored on our servers. However, no system is 100% secure. Use strong passwords and enable 
              two-factor authentication where available.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-ink mb-4">Your Rights</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Update inaccurate information</li>
              <li><strong>Deletion:</strong> Request account deletion (some records retained for legal compliance)</li>
              <li><strong>Portability:</strong> Receive your data in machine-readable format</li>
              <li><strong>Objection:</strong> Opt out of marketing communications</li>
            </ul>
            <p className="mt-3">Email privacy@hiddengemcollective.com to exercise these rights.</p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-ink mb-4">Children's Privacy</h2>
            <p>
              Hidden Gem is not intended for users under 18. We do not knowingly collect data from minors. 
              Parents/guardians must register on behalf of minor participants.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-ink mb-4">California Privacy Rights (CCPA)</h2>
            <p>
              California residents have additional rights under CCPA, including the right to know what personal 
              information is collected, sold, or disclosed, and the right to opt-out of sale (note: we do not sell data). 
              Contact us to exercise CCPA rights.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-ink mb-4">Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically. Material changes will be announced via email and posted 
              on this page with a new "Last Updated" date. Continued use after changes constitutes acceptance.
            </p>
          </section>

          <div className="bg-[#FFF9E6] rounded-lg p-6 border-l-4 border-[#D88B2A] mt-8">
            <p className="text-sm">
              <strong>Last updated:</strong> March 30, 2026<br />
              <strong>Contact:</strong> privacy@hiddengemcollective.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
