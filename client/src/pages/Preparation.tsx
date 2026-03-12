import Navigation from '@/components/Navigation';

interface Committee {
  id: string;
  name: string;
  agenda: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

const committees: Committee[] = [
  {
    id: '1',
    name: 'United Nations Security Council',
    agenda: 'Resolving international conflicts and maintaining global peace',
    difficulty: 'Advanced',
  },
  {
    id: '2',
    name: 'World Health Organization',
    agenda: 'Addressing global health crises and pandemic response',
    difficulty: 'Intermediate',
  },
  {
    id: '3',
    name: 'International Court of Justice',
    agenda: 'Settling disputes between nations and upholding international law',
    difficulty: 'Advanced',
  },
  {
    id: '4',
    name: 'United Nations General Assembly',
    agenda: 'Discussing sustainable development and climate action',
    difficulty: 'Beginner',
  },
  {
    id: '5',
    name: 'UNESCO',
    agenda: 'Promoting education, culture, and scientific cooperation',
    difficulty: 'Intermediate',
  },
  {
    id: '6',
    name: 'International Labour Organization',
    agenda: 'Advancing workers\' rights and employment standards',
    difficulty: 'Beginner',
  },
];

export default function Preparation() {
  return (
    <div className="min-h-screen bg-smun-navy">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Preparation & Registration
          </h1>
          <p className="text-xl text-smun-gold font-serif">
            Everything you need to prepare for SMUN 26
          </p>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-px gold-divider mx-4" />

      {/* Position Papers Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-smun-gold mb-8 text-center">
            Position Papers
          </h2>
          <p className="text-lg text-white/90 mb-8 font-sans leading-relaxed text-center">
            Position papers are a crucial part of your preparation. They demonstrate your understanding of your country's stance on key issues and help you engage in meaningful debate.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="text-xl font-serif font-bold text-smun-gold mb-4">
                Position Paper Guidelines
              </h3>
              <p className="text-white/80 font-sans mb-4">
                Learn how to write effective position papers that showcase your diplomatic skills.
              </p>
              <button className="px-6 py-2 bg-smun-gold text-smun-navy font-serif font-bold rounded-lg hover:bg-smun-gold-light transition-all duration-300">
                Download Guidelines
              </button>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-xl font-serif font-bold text-smun-gold mb-4">
                Sample Position Paper
              </h3>
              <p className="text-white/80 font-sans mb-4">
                Review a sample position paper to understand the expected format and content.
              </p>
              <button className="px-6 py-2 bg-smun-gold text-smun-navy font-serif font-bold rounded-lg hover:bg-smun-gold-light transition-all duration-300">
                Download Sample
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-px gold-divider mx-4" />

      {/* Registration Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-smun-gold mb-8 text-center">
            Registration & Application Process
          </h2>
          <div className="space-y-6">
            <div className="glass-card p-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-smun-gold/20">
                    <span className="text-smun-gold font-serif font-bold text-lg">1</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-smun-gold mb-2">
                    Select Your Committee
                  </h3>
                  <p className="text-white/80 font-sans">
                    Choose from our diverse range of committees based on your interests and experience level.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-smun-gold/20">
                    <span className="text-smun-gold font-serif font-bold text-lg">2</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-smun-gold mb-2">
                    Prepare Your Position Paper
                  </h3>
                  <p className="text-white/80 font-sans">
                    Write a compelling position paper outlining your country's stance on the committee agenda.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-smun-gold/20">
                    <span className="text-smun-gold font-serif font-bold text-lg">3</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-smun-gold mb-2">
                    Submit Your Application
                  </h3>
                  <p className="text-white/80 font-sans">
                    Complete the registration form and submit your position paper before the deadline.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-smun-gold/20">
                    <span className="text-smun-gold font-serif font-bold text-lg">4</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-smun-gold mb-2">
                    Attend the Conference
                  </h3>
                  <p className="text-white/80 font-sans">
                    Join us on 28 March 2026 for an unforgettable experience in diplomacy and international relations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-px gold-divider mx-4" />

      {/* Committee List Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-smun-gold mb-12 text-center">
            Available Committees
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {committees.map((committee) => (
              <div
                key={committee.id}
                className="glass-card p-6 hover:scale-105 transition-transform duration-300"
              >
                <h3 className="text-xl font-serif font-bold text-smun-gold mb-3">
                  {committee.name}
                </h3>
                <p className="text-white/80 font-sans mb-4">
                  {committee.agenda}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-sans uppercase tracking-widest text-white/60">
                    Difficulty
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-serif font-bold ${
                      committee.difficulty === 'Beginner'
                        ? 'bg-green-500/20 text-green-300'
                        : committee.difficulty === 'Intermediate'
                          ? 'bg-yellow-500/20 text-yellow-300'
                          : 'bg-red-500/20 text-red-300'
                    }`}
                  >
                    {committee.difficulty}
                  </span>
                </div>
              </div>
            ))}
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
