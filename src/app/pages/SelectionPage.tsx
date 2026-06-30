export function SelectionPage() {
  return (
    <div className="min-h-screen pt-24" style={{ backgroundColor: '#FFFBF3' }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-20 md:py-28">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-[2.5rem] md:text-[3.5rem] leading-[1.2] tracking-[-0.015em] mb-6" style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 400, color: '#0D1F3C' }}>
            Pricing & <span style={{ fontStyle: 'italic' }}>Eligibility</span>
          </h1>
          <p className="text-[1rem] leading-[1.65] max-w-[700px]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#1A1A1A' }}>
            Detailed information about membership fees and eligibility criteria.
          </p>
        </div>

        {/* Pricing Section */}
        <div className="mb-20">
          <h2 className="text-[2rem] md:text-[2.5rem] leading-[1.2] tracking-[-0.015em] mb-8" style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 400, color: '#0D1F3C' }}>
            Membership Fees
          </h2>

          {/* Fee Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Onboarding Fee */}
            <div className="p-8" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E5E0' }}>
              <div className="mb-4">
                <p className="text-[0.75rem] uppercase tracking-[0.12em] mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: '#0D1F3C' }}>
                  One-Time Onboarding
                </p>
                <p className="text-[2.5rem] leading-[1.2] tracking-[-0.02em]" style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 500, color: '#0D1F3C' }}>
                  €1,000
                </p>
                <p className="text-[0.875rem]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#5A5A5A' }}>
                  excl. VAT
                </p>
              </div>
              <div className="px-4 py-3 mb-4" style={{ backgroundColor: '#FFFBF3', border: '1px solid #E8E5E0' }}>
                <p className="text-[0.875rem] leading-[1.65]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: '#355E3B' }}>
                  <span style={{ fontStyle: 'italic' }}>Fully waived</span> for all applications submitted before July 1, 2026
                </p>
              </div>
            </div>

            {/* Annual Fee */}
            <div className="p-8" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E5E0' }}>
              <div className="mb-4">
                <p className="text-[0.75rem] uppercase tracking-[0.12em] mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: '#0D1F3C' }}>
                  Annual Membership
                </p>
                <p className="text-[2.5rem] leading-[1.2] tracking-[-0.02em]" style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 500, color: '#0D1F3C' }}>
                  €2,500
                </p>
                <p className="text-[0.875rem]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#5A5A5A' }}>
                  excl. VAT per year
                </p>
              </div>
              <p className="text-[0.9375rem] leading-[1.65]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#1A1A1A' }}>
                Renews annually. Most members expense this via their business or employer.
              </p>
            </div>
          </div>

          {/* Household Membership */}
          <div className="p-8 mb-12" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E5E0' }}>
            <div className="mb-4">
              <p className="text-[0.75rem] uppercase tracking-[0.12em] mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: '#0D1F3C' }}>
                Household Membership
              </p>
              <p className="text-[2.5rem] leading-[1.2] tracking-[-0.02em]" style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 500, color: '#0D1F3C' }}>
                €1,000
              </p>
              <p className="text-[0.875rem]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#5A5A5A' }}>
                excl. VAT per year
              </p>
            </div>
            <p className="text-[0.9375rem] leading-[1.65]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#1A1A1A' }}>
              Add your partner. No additional onboarding fee. Partner must meet eligibility criteria.
            </p>
          </div>

          {/* What's Included */}
          <div className="p-10" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E5E0' }}>
            <h3 className="text-[1.5rem] tracking-[-0.01em] mb-6" style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 500, color: '#0D1F3C' }}>
              What's <span style={{ fontStyle: 'italic' }}>Included</span>
            </h3>

            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 text-[0.625rem] mt-1.5" style={{ color: '#0D1F3C' }}>●</span>
                <div>
                  <p className="text-[1rem] leading-[1.65] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: '#0D1F3C' }}>
                    Bi-Monthly Circles
                  </p>
                  <p className="text-[0.9375rem] leading-[1.65]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#5A5A5A' }}>
                    Peer advisory groups (6-10 members) with professionally trained coaches every two months.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 text-[0.625rem] mt-1.5" style={{ color: '#0D1F3C' }}>●</span>
                <div>
                  <p className="text-[1rem] leading-[1.65] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: '#0D1F3C' }}>
                    Monthly Curated Introductions
                  </p>
                  <p className="text-[0.9375rem] leading-[1.65]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#5A5A5A' }}>
                    One carefully curated 1:1 introduction per month to members who match your professional scope and interests.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 text-[0.625rem] mt-1.5" style={{ color: '#0D1F3C' }}>●</span>
                <div>
                  <p className="text-[1rem] leading-[1.65] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, color: '#0D1F3C' }}>
                    Regular Events
                  </p>
                  <p className="text-[0.9375rem] leading-[1.65]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#5A5A5A' }}>
                    Exclusive dinners, workshops, and talks.
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8 pt-6" style={{ borderTop: '1px solid #E8E5E0' }}>
              <p className="text-[0.9375rem] leading-[1.65] italic" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#5A5A5A' }}>
                Considering the caliber of our members and the scale at which they operate, typically one meaningful introduction provides immediate value.
              </p>
            </div>
          </div>
        </div>

        {/* Eligibility Section */}
        <div>
          <h2 className="text-[2rem] md:text-[2.5rem] leading-[1.2] tracking-[-0.015em] mb-8" style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 400, color: '#0D1F3C' }}>
            Eligibility Criteria
          </h2>

          <div className="p-10" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E5E0' }}>
            <p className="text-[1rem] leading-[1.65] mb-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#1A1A1A' }}>
              Applicants must meet <strong>Criteria 1</strong> plus at least one of <strong>Criteria 2, 3, or 4</strong>:
            </p>

            <div className="space-y-8">
              {/* Criteria 1 */}
              <div>
                <h3 className="text-[1.125rem] tracking-[0.005em] mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#0D1F3C' }}>
                  CRITERIA 1: Residency
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-[0.625rem] mt-1.5" style={{ color: '#0D1F3C' }}>●</span>
                    <span className="text-[0.9375rem] leading-[1.65]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#5A5A5A' }}>
                      Resident in Europe, or professionally active in the European market.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Criteria 2 */}
              <div>
                <h3 className="text-[1.125rem] tracking-[0.005em] mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#0D1F3C' }}>
                  CRITERIA 2: Financial Independence <span style={{ fontWeight: 400, fontSize: '0.875rem' }}>(meet one)</span>
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-[0.625rem] mt-1.5" style={{ color: '#0D1F3C' }}>●</span>
                    <span className="text-[0.9375rem] leading-[1.65]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#5A5A5A' }}>
                      Minimum EUR 1,000,000 in liquid assets
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-[0.625rem] mt-1.5" style={{ color: '#0D1F3C' }}>●</span>
                    <span className="text-[0.9375rem] leading-[1.65]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#5A5A5A' }}>
                      or EUR 5,000,000 in illiquid assets (startup equity or real estate)
                    </span>
                  </li>
                </ul>
              </div>

              {/* Criteria 3 */}
              <div>
                <h3 className="text-[1.125rem] tracking-[0.005em] mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#0D1F3C' }}>
                  CRITERIA 3: Professional Responsibility <span style={{ fontWeight: 400, fontSize: '0.875rem' }}>(meet one)</span>
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-[0.625rem] mt-1.5" style={{ color: '#0D1F3C' }}>●</span>
                    <span className="text-[0.9375rem] leading-[1.65]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#5A5A5A' }}>
                      Minimum EUR 200,000 annual gross income
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-[0.625rem] mt-1.5" style={{ color: '#0D1F3C' }}>●</span>
                    <span className="text-[0.9375rem] leading-[1.65]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#5A5A5A' }}>
                      or equivalent position of significant economic responsibility
                    </span>
                  </li>
                </ul>
              </div>

              {/* Criteria 4 */}
              <div>
                <h3 className="text-[1.125rem] tracking-[0.005em] mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#0D1F3C' }}>
                  CRITERIA 4: Public Standing <span style={{ fontWeight: 400, fontSize: '0.875rem' }}>(meet one)</span>
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-[0.625rem] mt-1.5" style={{ color: '#0D1F3C' }}>●</span>
                    <span className="text-[0.9375rem] leading-[1.65]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#5A5A5A' }}>
                      Established public figure or key decision-maker in politics, media, social impact, sports, public sector, or the creator economy.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6" style={{ borderTop: '1px solid #E8E5E0' }}>
              <p className="text-[0.875rem] leading-[1.65]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#5A5A5A' }}>
                Every application is reviewed manually based on the information provided, desk research using publicly available sources, and a referrer where applicable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}