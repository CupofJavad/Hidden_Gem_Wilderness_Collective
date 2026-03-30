export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-cream py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-medium text-ink mb-8">Disclaimer</h1>
        
        <div className="bg-white rounded-xl p-8 space-y-6 text-ink/80 leading-relaxed">
          <section>
            <h2 className="text-2xl font-medium text-ink mb-4">Nature of Service</h2>
            <p>
              Hidden Gem Wilderness Collective is <strong>not a commercial guiding service</strong>. We are a peer-organized 
              community that facilitates connections between outdoor enthusiasts. All experiences are self-guided or 
              peer-organized, with participants acting as independent adults responsible for their own decisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-ink mb-4">Personal Responsibility</h2>
            <p className="mb-3">By participating in any Hidden Gem activity, you acknowledge that:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>You are responsible for your own safety, preparation, and decision-making</li>
              <li>Outdoor recreation involves inherent risks including injury or death</li>
              <li>You possess the skills, fitness, and equipment necessary for your chosen activity</li>
              <li>You will research conditions, permits, and regulations independently</li>
              <li>Hidden Gem does not provide professional guiding, instruction, or supervision</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-ink mb-4">Itinerary Information</h2>
            <p>
              Route descriptions, maps, and guides are provided for informational purposes only. Conditions change 
              rapidly in wilderness environments. You must verify current conditions, access restrictions, and 
              hazards before any trip. Hidden Gem is not liable for inaccurate or outdated information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-ink mb-4">Event Participation</h2>
            <p>
              "Trip anchors" or "event coordinators" are fellow community members, not professional guides. They 
              facilitate logistics but do not assume legal responsibility for participant safety. All participants 
              share collective responsibility for group well-being.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-ink mb-4">Medical & Emergency Situations</h2>
            <p>
              Hidden Gem does not provide medical services. Some trip anchors may have wilderness first aid training 
              as volunteers, but this does not create a duty of care. In emergencies, participants should contact 
              911 and local search and rescue.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-medium text-ink mb-4">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Hidden Gem Wilderness Collective, its founder Javad Khoshnevisan, 
              and all affiliated individuals disclaim liability for any injury, loss, or damage arising from participation 
              in community activities or use of provided information.
            </p>
          </section>

          <div className="bg-[#FFF9E6] rounded-lg p-6 border-l-4 border-[#D88B2A] mt-8">
            <p className="text-sm">
              <strong>Last updated:</strong> March 30, 2026<br />
              <strong>Questions?</strong> Contact hello@hiddengemcollective.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
