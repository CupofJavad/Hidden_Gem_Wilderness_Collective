import { Mail, MapPin, MessageCircle } from 'lucide-react';
import { useSearchParams } from 'react-router';
import { useEffect, useState } from 'react';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const [subject, setSubject] = useState('');

  useEffect(() => {
    const topic = searchParams.get('topic');
    const map: Record<string, string> = {
      membership: 'membership',
      itinerary: 'itinerary',
      event: 'event',
      merch: 'merch',
      newsletter: 'newsletter',
      donation: 'donation',
      feedback: 'feedback',
      partnership: 'partnership',
      other: 'other',
    };
    if (topic && map[topic]) {
      setSubject(map[topic]);
    }
  }, [searchParams]);

  const slug = searchParams.get('slug');
  const plan = searchParams.get('plan');

  return (
    <div className="min-h-screen bg-cream">
      <section className="bg-[#0A3D33] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-medium mb-4">Get in Touch</h1>
          <p className="text-xl text-white/90">
            Questions, feedback, or just want to say hello? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section id="donate" className="py-16 scroll-mt-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-medium text-ink mb-8">Contact Information</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0A3D33] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-ink mb-1">Email</h3>
                    <a href="mailto:hello@hiddengemcollective.com" className="text-[#5A9BC0] hover:text-[#4A8BAF] transition-colors">
                      hello@hiddengemcollective.com
                    </a>
                    <br />
                    <a href="mailto:support@hiddengemcollective.com" className="text-[#5A9BC0] hover:text-[#4A8BAF] transition-colors">
                      support@hiddengemcollective.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0A3D33] flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-ink mb-1">Community</h3>
                    <a 
                      href="https://discord.gg/hiddengemcollective" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#5A9BC0] hover:text-[#4A8BAF] transition-colors"
                    >
                      Join our Discord
                    </a>
                    <br />
                    <a 
                      href="https://instagram.com/hiddengemcollective" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#5A9BC0] hover:text-[#4A8BAF] transition-colors"
                    >
                      Follow on Instagram
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0A3D33] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-medium text-ink mb-1">Mailing Address</h3>
                    <div className="text-ink/70 text-sm">
                      Hidden Gem Wilderness Collective<br />
                      123 Trailhead Lane<br />
                      Sacramento, CA 95814<br />
                      United States
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#FFF9E6] rounded-xl p-6 border-l-4 border-[#D88B2A]">
                <h3 className="font-medium text-ink mb-2">Response Times</h3>
                <p className="text-sm text-ink/70">
                  We typically respond to emails within 48 hours on weekdays. For time-sensitive trip questions, 
                  use Discord for faster community support.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-medium text-ink mb-8">Send a Message</h2>
              {(slug || plan) && (
                <p className="text-sm text-ink/60 mb-6 -mt-4">
                  {slug && (
                    <>
                      Reference: <strong>{slug}</strong>
                      {plan ? ' · ' : ''}
                    </>
                  )}
                  {plan && (
                    <>
                      Plan: <strong>{plan}</strong>
                    </>
                  )}
                </p>
              )}
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-mist focus:border-[#5A9BC0] focus:outline-none focus:ring-2 focus:ring-[#5A9BC0]/20 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg bg-white border border-mist focus:border-[#5A9BC0] focus:outline-none focus:ring-2 focus:ring-[#5A9BC0]/20 transition-colors"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-ink mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-mist focus:border-[#5A9BC0] focus:outline-none focus:ring-2 focus:ring-[#5A9BC0]/20 transition-colors"
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="membership">Membership Question</option>
                    <option value="event">Event Inquiry</option>
                    <option value="itinerary">Itinerary Question</option>
                    <option value="merch">Merch Question</option>
                    <option value="newsletter">Newsletter / list</option>
                    <option value="donation">Support / donation</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-white border border-mist focus:border-[#5A9BC0] focus:outline-none focus:ring-2 focus:ring-[#5A9BC0]/20 transition-colors resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 rounded-lg bg-[#0A3D33] text-white hover:bg-[#0A3D33]/90 transition-colors font-medium"
                >
                  Send Message
                </button>

                <p className="text-xs text-ink/60 text-center">
                  By submitting this form, you agree to our Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
