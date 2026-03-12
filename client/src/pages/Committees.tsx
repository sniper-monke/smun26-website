import Navigation from '@/components/Navigation';

interface Committee {
  id: string;
  name: string;
  agenda: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
}

const committees: Committee[] = [
  {
    id: '1',
    name: 'United Nations Security Council',
    agenda: 'Resolving international conflicts and maintaining global peace',
    difficulty: 'Advanced',
    description: 'The most prestigious and challenging committee. Delegates represent permanent and non-permanent members of the UNSC and grapple with critical geopolitical issues.',
  },
  {
    id: '2',
    name: 'World Health Organization',
    agenda: 'Addressing global health crises and pandemic response',
    difficulty: 'Intermediate',
    description: 'Focus on international health cooperation, disease prevention, and emergency response. Highly relevant to contemporary global challenges.',
  },
  {
    id: '3',
    name: 'International Court of Justice',
    agenda: 'Settling disputes between nations and upholding international law',
    difficulty: 'Advanced',
    description: 'A unique committee where delegates argue cases before the court. Requires strong legal knowledge and argumentation skills.',
  },
  {
    id: '4',
    name: 'United Nations General Assembly',
    agenda: 'Discussing sustainable development and climate action',
    difficulty: 'Beginner',
    description: 'The most inclusive committee, perfect for first-time delegates. Covers a wide range of global issues and allows for diverse participation.',
  },
  {
    id: '5',
    name: 'UNESCO',
    agenda: 'Promoting education, culture, and scientific cooperation',
    difficulty: 'Intermediate',
    description: 'Focus on cultural preservation, educational access, and scientific advancement. Ideal for those passionate about global development.',
  },
  {
    id: '6',
    name: 'International Labour Organization',
    agenda: 'Advancing workers\' rights and employment standards',
    difficulty: 'Beginner',
    description: 'Explore labor rights, fair wages, and working conditions globally. Great for understanding social and economic justice issues.',
  },
];

export default function Committees() {
  return (
    <div className="min-h-screen bg-smun-navy">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Our Committees
          </h1>
          <p className="text-xl text-smun-gold font-serif">
            Explore the diverse committees at SMUN 26
          </p>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-px gold-divider mx-4" />

      {/* Introduction */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-white/80 font-sans leading-relaxed">
            SMUN 26 offers six distinct committees, each providing a unique diplomatic experience. Whether you're a first-time delegate or a seasoned MUN veteran, we have the perfect committee for you.
          </p>
        </div>
      </section>

      {/* Committees Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {committees.map((committee, index) => (
              <div
                key={committee.id}
                className={`glass-card p-8 hover:scale-105 transition-transform duration-300 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-serif font-bold text-smun-gold">
                      {committee.name}
                    </h2>
                    <span
                      className={`px-4 py-2 rounded-full text-sm font-serif font-bold ${
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

                  <div className="mb-6">
                    <h3 className="text-sm font-sans uppercase tracking-widest text-white/50 mb-2">
                      Agenda
                    </h3>
                    <p className="text-lg text-smun-gold font-serif">
                      {committee.agenda}
                    </p>
                  </div>

                  <p className="text-lg text-white/80 font-sans leading-relaxed mb-6">
                    {committee.description}
                  </p>

                  <div className="flex gap-4">
                    <button className="px-6 py-2 bg-smun-gold text-smun-navy font-serif font-bold rounded-lg hover:bg-smun-gold-light transition-all duration-300">
                      Learn More
                    </button>
                    <button className="px-6 py-2 border-2 border-smun-gold text-smun-gold font-serif font-bold rounded-lg hover:bg-smun-gold/10 transition-all duration-300">
                      Select Committee
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-px gold-divider mx-4" />

      {/* Difficulty Guide */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-smun-gold mb-12 text-center">
            Difficulty Levels Explained
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 rounded-full bg-green-500/40"></div>
                <h3 className="text-xl font-serif font-bold text-green-300">
                  Beginner
                </h3>
              </div>
              <p className="text-white/70 font-sans">
                Perfect for first-time delegates. These committees have broader agendas and more flexible debate formats.
              </p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 rounded-full bg-yellow-500/40"></div>
                <h3 className="text-xl font-serif font-bold text-yellow-300">
                  Intermediate
                </h3>
              </div>
              <p className="text-white/70 font-sans">
                For delegates with some MUN experience. These committees require deeper research and more sophisticated diplomacy.
              </p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 rounded-full bg-red-500/40"></div>
                <h3 className="text-xl font-serif font-bold text-red-300">
                  Advanced
                </h3>
              </div>
              <p className="text-white/70 font-sans">
                For experienced delegates seeking a challenge. These committees demand extensive preparation and advanced negotiation skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gold Divider */}
      <div className="h-px gold-divider mx-4" />

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-smun-gold mb-6">
            Ready to Join?
          </h2>
          <p className="text-lg text-white/90 font-sans mb-8">
            Select your committee and register for SMUN 26 today.
          </p>
          <a
            href="/delegation-portal"
            className="inline-block px-10 py-4 bg-smun-gold text-smun-navy font-serif font-bold text-lg rounded-lg hover:bg-smun-gold-light transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
          >
            Go to Delegation Portal
          </a>
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
