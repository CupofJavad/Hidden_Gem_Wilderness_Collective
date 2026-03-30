export default function Participation() {
  return (
    <div className="min-h-screen bg-cream py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-medium text-ink mb-8">Participation Notice</h1>
        
        <div className="bg-white rounded-xl p-8 space-y-6 text-ink/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-medium text-ink mb-4">Assumption of Risk</h2>
            <p className="mb-3">
              Outdoor recreation activities organized through Hidden Gem Wilderness Collective involve inherent and 
              unavoidable risks including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Hazardous terrain, weather, and wildlife encounters</li>
              <li>Equipment failure or user error</li>
              <li>Medical emergencies in remote locations</li>
              <li>Vehicular travel to and from trailheads</li>
              <li>Actions or inactions of other participants</li>
              <li>Errors in route descriptions or outdated information</li>
            </ul>
            <p className="mt-3">
              By participating, you <strong>voluntarily assume all such risks</strong>, whether known or unknown.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-ink mb-4">Participant Requirements</h2>
            <p className="mb-3">All participants must:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Be 18 years or older, or accompanied by a legal guardian</li>
              <li>Possess adequate physical fitness for the stated activity level</li>
              <li>Carry appropriate gear, clothing, food, and water</li>
              <li>Hold valid permits or licenses where required (e.g., fishing license, wilderness permit)</li>
              <li>Have emergency contact information filed with a responsible person not on the trip</li>
              <li>Disclose relevant medical conditions to trip coordinators (optional but recommended)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-ink mb-4">Code of Conduct</h2>
            <p className="mb-3">Participants agree to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Follow Leave No Trace principles</li>
              <li>Respect other participants, land managers, and the public</li>
              <li>Communicate concerns or limitations honestly</li>
              <li>Not participate under the influence of alcohol or drugs</li>
              <li>Respect group decisions regarding pace, route changes, or turnaround times</li>
            </ul>
            <p className="mt-3">
              Violation of conduct standards may result in removal from the trip and/or community membership.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-ink mb-4">Location Information</h2>
            <p>
              Precise trailhead locations and route details are provided to registered participants only. We ask that 
              you <strong>do not publicly share exact coordinates</strong> for sensitive or low-capacity locations. 
              This protects fragile ecosystems and preserves the experience for future visitors.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-ink mb-4">Photography & Social Media</h2>
            <p>
              Group photos may be taken and shared on Hidden Gem platforms. If you prefer not to appear in photos, 
              please inform trip coordinators. Do not post location-specific information (GPS coordinates, detailed 
              directions) for Hidden Gem routes on public social media.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-ink mb-4">Insurance & Waivers</h2>
            <p>
              Hidden Gem does not provide participant insurance. You are strongly encouraged to carry personal health 
              insurance and consider adventure/travel insurance for backcountry activities. Digital waivers may be 
              required for certain events.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-ink mb-4">Cancellations & Refunds</h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Participant cancellation:</strong> Full refund if cancelled 7+ days before event; 50% refund 3-6 days before; no refund within 72 hours</li>
              <li><strong>Organizer cancellation:</strong> Full refund if Hidden Gem cancels for weather, safety, or low enrollment</li>
              <li><strong>No-shows:</strong> Badge fees are non-refundable</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-ink mb-4">Release of Liability</h2>
            <p>
              By registering for an event or purchasing an itinerary, you agree to release and hold harmless Hidden Gem 
              Wilderness Collective, Javad Khoshnevisan, trip coordinators, and all affiliated persons from any claims, 
              demands, or causes of action arising from your participation, <strong>including those caused by negligence</strong> 
              of released parties to the fullest extent permitted by law.
            </p>
          </section>

          <div className="bg-[#FFF9E6] rounded-lg p-6 border-l-4 border-[#D88B2A] mt-8">
            <p className="text-sm">
              <strong>Acknowledgment:</strong> Participation in Hidden Gem activities constitutes your acceptance of 
              this Participation Notice, our Disclaimer, and Terms of Service.<br /><br />
              <strong>Last updated:</strong> March 30, 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
