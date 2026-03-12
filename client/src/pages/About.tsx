import Navigation from '@/components/Navigation';

export default function About() {
  return (
    <div className="min-h-screen bg-smun-navy">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            About SMUN 26
          </h1>
          <p className="text-xl text-smun-gold font-serif">
            Understanding the conference and its mission
          </p>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-px gold-divider mx-4" />

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-smun-gold mb-8 text-center">
            Our Mission
          </h2>
          <p className="text-lg text-white/90 font-sans leading-relaxed mb-6">
            Scottish Model United Nations is dedicated to fostering diplomatic excellence and international understanding among young leaders. We believe that through meaningful dialogue, rigorous debate, and collaborative problem-solving, we can develop the next generation of global citizens.
          </p>
          <p className="text-lg text-white/90 font-sans leading-relaxed">
            Our conference provides a platform for students to develop critical thinking, public speaking, and negotiation skills while engaging with real-world global issues. We strive to create an environment where diverse perspectives are valued and where delegates can challenge themselves intellectually and personally.
          </p>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-px gold-divider mx-4" />

      {/* History Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-smun-gold mb-8 text-center">
            Our History
          </h2>
          <div className="space-y-6">
            <div className="glass-card p-6">
              <h3 className="text-xl font-serif font-bold text-smun-gold mb-2">
                Founded in 2077
              </h3>
              <p className="text-white/80 font-sans">
                SMUN began as a small initiative at Bombay Scottish School to introduce students to the world of Model United Nations. What started with just a handful of delegates has grown into one of India's premier MUN conferences.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-serif font-bold text-smun-gold mb-2">
                Growing Reach
              </h3>
              <p className="text-white/80 font-sans">
                Over the years, SMUN has attracted delegations from across India (I think..?). We've hosted hundreds of delegates and created countless memorable experiences and lasting friendships.
              </p>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-serif font-bold text-smun-gold mb-2">
                Commitment to Excellence
              </h3>
              <p className="text-white/80 font-sans">
                Each year, we strive to improve our conference by incorporating feedback from delegates, updating our committees to reflect current global issues, and maintaining the highest standards of organization and hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-px gold-divider mx-4" />

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-smun-gold mb-12 text-center">
            Our Core Values (I think..?)(AI generated for now pls change later)
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-serif font-bold text-smun-gold mb-4">
                Diplomacy
              </h3>
              <p className="text-white/80 font-sans">
                We believe in the power of dialogue and negotiation to resolve conflicts and build understanding between nations.
              </p>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-serif font-bold text-smun-gold mb-4">
                Excellence
              </h3>
              <p className="text-white/80 font-sans">
                We are committed to maintaining the highest standards in all aspects of our conference, from organization to content quality.
              </p>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-serif font-bold text-smun-gold mb-4">
                Inclusivity
              </h3>
              <p className="text-white/80 font-sans">
                We welcome delegates from all backgrounds and experience levels, creating a diverse and welcoming community.
              </p>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-2xl font-serif font-bold text-smun-gold mb-4">
                Growth
              </h3>
              <p className="text-white/80 font-sans">
                We believe in personal and intellectual growth, challenging delegates to step outside their comfort zones and develop new skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-px gold-divider mx-4" />

      {/* Why Attend Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-smun-gold mb-12 text-center">
            Why Attend SMUN 26?
          </h2>
          <div className="space-y-6">
            <div className="glass-card p-6 flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-smun-gold/20">
                  <span className="text-smun-gold font-serif font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-smun-gold mb-2">
                  Develop Leadership Skills
                </h3>
                <p className="text-white/80 font-sans">
                  Learn public speaking, negotiation, and leadership in a supportive environment.
                </p>
              </div>
            </div>

            <div className="glass-card p-6 flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-smun-gold/20">
                  <span className="text-smun-gold font-serif font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-smun-gold mb-2">
                  Expand Your Network
                </h3>
                <p className="text-white/80 font-sans">
                  Connect with like-minded students from across India and the world.
                </p>
              </div>
            </div>

            <div className="glass-card p-6 flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-smun-gold/20">
                  <span className="text-smun-gold font-serif font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-smun-gold mb-2">
                  Engage with Global Issues
                </h3>
                <p className="text-white/80 font-sans">
                  Explore and debate pressing international issues in a structured format.
                </p>
              </div>
            </div>

            <div className="glass-card p-6 flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-smun-gold/20">
                  <span className="text-smun-gold font-serif font-bold">✓</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-smun-gold mb-2">
                  Create Lasting Memories
                </h3>
                <p className="text-white/80 font-sans">
                  Be part of an unforgettable experience that will shape your future.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-smun-gold/20 py-12 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-smun-gold font-serif font-bold mb-4">SMUN 26</h3>
            <p className="text-white/60 font-sans text-sm">
              Scottish Model United Nations Conference
            </p>
          </div>
          <div>
            <h3 className="text-smun-gold font-serif font-bold mb-4">Location</h3>
            <p className="text-white/60 font-sans text-sm">
              Bombay Scottish School<br />
              Mumbai, India
            </p>
          </div>
          <div>
            <h3 className="text-smun-gold font-serif font-bold mb-4">Date</h3>
            <p className="text-white/60 font-sans text-sm">
              28 March 2026
            </p>
          </div>
        </div>
        <div className="border-t border-smun-gold/20 mt-8 pt-8 text-center">
          <p className="text-white/40 font-sans text-sm">
            © 2026 Scottish Model United Nations. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
