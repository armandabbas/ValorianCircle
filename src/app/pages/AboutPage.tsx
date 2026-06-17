export function AboutPage() {
  return (
    <div className="min-h-screen pt-16" style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#F9F8F5' }}>
      {/* Hero Section */}
      <section className="w-full" style={{ backgroundColor: '#0D1F3C' }}>
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 pt-32 md:pt-40 pb-32 md:pb-40">
          <div className="max-w-[900px]">
            <h1 className="text-[3rem] md:text-[4.5rem] leading-[1.1] tracking-[-0.02em] mb-6" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500, color: 'white' }}>
              About Valorian
            </h1>
            <p className="text-[1.25rem] md:text-[1.5rem] leading-[1.7]" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, color: 'rgba(255, 255, 255, 0.9)' }}>
              A curated network for leaders who shape Europe's future.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Content */}
      <section className="w-full">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-20 md:py-32">
          <div className="max-w-[800px]">
            <h2
              className="text-[2.25rem] md:text-[3rem] leading-[1.2] tracking-[-0.015em] mb-8"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: 500,
                color: '#0D1F3C'
              }}
            >
              <span className="italic">A Vision for</span> Europe.
            </h2>

            <div className="space-y-6" style={{ fontSize: '1.0625rem', lineHeight: '1.7', color: '#1A1A1A' }}>
              <p>
                Europe was once a cradle of technology. We are working to make it one again. Valorian brings together the founders, investors, executives, and public leaders who are building that future.
              </p>

              <p>
                Technology leadership takes more than individual brilliance. It needs networks of trust, cross-sector dialogue, and shared institutional memory. Valorian provides the space for that.
              </p>

              <p>
                We run <strong>Circles</strong> for peer advisory and strategic dialogue among experienced leaders who want to strengthen Europe's ability to build, scale, and lead in technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="w-full" style={{ backgroundColor: 'white' }}>
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-20 md:py-24">
          <div className="max-w-[800px]">
            <h2
              className="text-[2.25rem] md:text-[3rem] leading-[1.2] tracking-[-0.015em] mb-8"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: 500,
                color: '#0D1F3C'
              }}
            >
              Our Approach
            </h2>

            <div className="space-y-6" style={{ fontSize: '1.0625rem', lineHeight: '1.7', color: '#1A1A1A' }}>
              <p>
                Valorian is invitation-only. Membership requires financial independence, professional responsibility, or established public standing. This structure ensures depth of experience and alignment of incentives.
              </p>

              <p>
                We enforce a strict no-solicitation policy. Conversations remain candid and free from commercial distraction. Members connect because they share challenges, not because they seek transactions.
              </p>

              <p>
                Our Circles program facilitates peer advisory groups of 6 to 10 members with shared backgrounds, goals, or geography. Six sessions per year, facilitated by our team, focused on strategic decisions and long-term planning.
              </p>

              <p>
                The program launches July 1, 2026. Applications via the website are accepted until launch. After that, membership requires referral from an existing member.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full">
        <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-20 md:py-24">
          <div className="max-w-[800px]">
            <h2
              className="text-[2.25rem] md:text-[3rem] leading-[1.2] tracking-[-0.015em] mb-6"
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontWeight: 500,
                color: '#0D1F3C'
              }}
            >
              Contact
            </h2>

            <p style={{ fontSize: '1.0625rem', lineHeight: '1.7', color: '#1A1A1A', marginBottom: '1.5rem' }}>
              For general inquiries or membership questions:
            </p>

            <a
              href="mailto:info@valoriancircle.com"
              className="inline-block text-[1.0625rem] hover:opacity-70 transition-opacity"
              style={{
                color: '#355E3B',
                fontWeight: 500,
                textDecoration: 'none'
              }}
            >
              info@valoriancircle.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
