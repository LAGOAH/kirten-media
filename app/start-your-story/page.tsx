import { Section } from "@/components/ui/section";
import { Heading } from "@/components/ui/heading";
import { Text } from "@/components/ui/text";
import { Card } from "@/components/ui/card";

export default function StartYourStoryPage() {
  return (
    <>
      {/* Hero */}
      <Section className="min-h-[40vh] flex items-center justify-center bg-black text-white border-b border-white/5">
        <div className="text-center max-w-4xl mx-auto">
          <div className="w-12 h-px bg-white/20 mx-auto mb-6" />
          <Heading as="h1" size="5xl" className="mb-4">
            Start Your Story
          </Heading>
          <Text variant="lead" className="text-neutral-400">
            Let's create compelling visual stories that communicate your impact, preserve your legacy, and inspire action.
          </Text>
        </div>
      </Section>

      {/* Form Section */}
      <Section className="bg-black text-white">
        <div className="max-w-2xl mx-auto">
          <Card variant="outline" className="border-neutral-800 bg-neutral-900/30 p-8">
            <Heading as="h2" size="2xl" className="mb-2">
              Tell Us About Your Project
            </Heading>
            <Text variant="body" className="text-neutral-400 mb-6">
              Fill in the details below and we'll get back to you within 24 hours.
            </Text>

            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-300 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-white/50 transition-colors"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-white/50 transition-colors"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-neutral-300 mb-1.5">
                  Organization / Company
                </label>
                <input
                  type="text"
                  id="company"
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-white/50 transition-colors"
                  placeholder="Your organization name"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-neutral-300 mb-1.5">
                  Service Interest *
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white focus:outline-none focus:border-white/50 transition-colors"
                  required
                >
                  <option value="">Select a service...</option>
                  <option value="documentary">Documentary Production</option>
                  <option value="corporate">Corporate & Brand Films</option>
                  <option value="photography">Photography</option>
                  <option value="commercial">Commercial & Advertising</option>
                  <option value="social-media">Social Media Content</option>
                  <option value="event">Event Coverage</option>
                  <option value="consulting">Media & Communication Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-300 mb-1.5">
                  Tell Us About Your Vision *
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-white placeholder-neutral-500 focus:outline-none focus:border-white/50 transition-colors resize-none"
                  placeholder="What story do you want to tell? What impact do you want to create?"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black font-semibold py-3.5 rounded-lg hover:bg-neutral-200 transition-colors text-base"
              >
                Submit Your Story
              </button>

              <Text variant="small" className="text-neutral-500 text-center block">
                We'll respond within 24 hours. All information is confidential.
              </Text>
            </form>
          </Card>
        </div>
      </Section>
    </>
  );
}
