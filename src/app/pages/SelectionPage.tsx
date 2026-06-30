export function SelectionPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#FFFBF3' }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 pt-28 pb-20 md:pt-32 md:pb-24">
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
        <div className="mb-20">
          <h2 className="text-[2rem] md:text-[2.5rem] leading-[1.2] tracking-[-0.015em] mb-8" style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 400, color: '#0D1F3C' }}>
            Eligibility Criteria
          </h2>

          <div className="p-10" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E5E0' }}>
            <p className="text-[1rem] leading-[1.65] mb-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#1A1A1A' }}>
              Applicants must strictly meet <strong>Criteria 1</strong> plus at least one of <strong>Criteria 2, 3, or 4</strong>:
            </p>

            <div className="space-y-8">
              {/* Criteria 1 */}
              <div>
                <h3 className="text-[1.125rem] tracking-[0.005em] mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#0D1F3C' }}>
                  CRITERIA 1: European Connection
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-[0.625rem] mt-1.5" style={{ color: '#0D1F3C' }}>●</span>
                    <span className="text-[0.9375rem] leading-[1.65]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#5A5A5A' }}>
                      Citizen of Europe, Resident in Europe, or professionally active in the European market.
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
                      Founder, owner, or senior executive with full responsibility for a P&L, a significant budget, or a team at a company with substantial impact on European markets
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-[0.625rem] mt-1.5" style={{ color: '#0D1F3C' }}>●</span>
                    <span className="text-[0.9375rem] leading-[1.65]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#5A5A5A' }}>
                      or decision-making authority over capital allocation, strategy, or hiring at a company with substantial impact on European markets
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
                      Established public figure or key decision-maker in politics, (online) media, social impact, sports, public sector, academia.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Selection Process Section */}
        <div className="mb-20">
          <h2 className="text-[2rem] md:text-[2.5rem] leading-[1.2] tracking-[-0.015em] mb-8" style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 400, color: '#0D1F3C' }}>
            Valorian Selection Process
          </h2>

          <div className="p-10" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E5E0' }}>
            <p className="text-[1rem] leading-[1.65] mb-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#1A1A1A' }}>
              Membership is by invitation only. There is no open application. Every candidate enters through an existing member, is assessed against the membership criteria, and is voted on by the Selection Committee. The process runs continuously, with decisions made in fixed cycles so that candidates can be weighed against each other rather than waved through one at a time.
            </p>

            <div className="space-y-8">
              <div>
                <h3 className="text-[1.125rem] tracking-[0.005em] mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#0D1F3C' }}>
                  Stage 1: Nomination (rolling)
                </h3>
                <p className="text-[0.9375rem] leading-[1.65]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#5A5A5A' }}>
                  A candidate enters only when an existing member nominates them. Each nomination is logged with a short profile: name, role, company, and how the candidate maps to the criteria. The nomination carries the name of the nominating member, who vouches for the candidate.
                </p>
              </div>

              <div>
                <h3 className="text-[1.125rem] tracking-[0.005em] mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#0D1F3C' }}>
                  Stage 2: Eligibility Check
                </h3>
                <p className="text-[0.9375rem] leading-[1.65]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#5A5A5A' }}>
                  One or two Founding Members run a quick check against Criteria 1 (Residency) plus at least one of Criteria 2, 3, or 4. This is a pass or fail gate, not a judgment on fit. Nominees who clearly do not meet the threshold are set aside, and the nominating member is informed. Nominees who pass move into the Pending Pool.
                </p>
              </div>

              <div>
                <h3 className="text-[1.125rem] tracking-[0.005em] mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#0D1F3C' }}>
                  Stage 3: Pending Pool
                </h3>
                <p className="text-[0.9375rem] leading-[1.65]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#5A5A5A' }}>
                  Eligible nominees wait in the pool until the next decision cycle. Their profiles are made available to the Selection Committee for review ahead of the vote. The pool gives the committee a real set of candidates to weigh against one another and keeps the bar consistent over time.
                </p>
              </div>

              <div>
                <h3 className="text-[1.125rem] tracking-[0.005em] mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#0D1F3C' }}>
                  Stage 4: Committee Vote (every two weeks)
                </h3>
                <p className="text-[0.9375rem] leading-[1.65]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#5A5A5A' }}>
                  On a fixed two-week cycle, the pending nominees go to the Selection Committee for a decision. Voting is asynchronous and recorded in a structured format (Circle, Notion, or a simple Tally form), with a clear deadline. A nominee is admitted on a simple majority of votes cast. The WhatsApp group is used to flag new nominees and discuss them briefly, but the binding vote is always captured in the structured tool, so every decision is documented.
                </p>
              </div>

              <div>
                <h3 className="text-[1.125rem] tracking-[0.005em] mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, color: '#0D1F3C' }}>
                  Stage 5: Decision and Onboarding
                </h3>
                <p className="text-[0.9375rem] leading-[1.65]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#5A5A5A' }}>
                  Admitted nominees receive their invitation and move into onboarding. The nominating member can be told the outcome so they can welcome the new member personally. A nominee the committee likes but cannot place yet can be held for the following cycle rather than declined outright.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Governance Section */}
        <div>
          <h2 className="text-[2rem] md:text-[2.5rem] leading-[1.2] tracking-[-0.015em] mb-8" style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 400, color: '#0D1F3C' }}>
            Governance
          </h2>

          <div className="p-10" style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8E5E0' }}>
            <p className="text-[0.9375rem] leading-[1.65] mb-6" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#5A5A5A' }}>
              The Selection Committee is made up of the Founding Members plus a small number of selected Members. Decisions are made by simple majority of votes cast.
            </p>
            <p className="text-[0.9375rem] leading-[1.65]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#5A5A5A' }}>
              During the founding phase, a veto is reserved for the three Co-Founders (Nico, Leon, Fabian) and is exercised only with at least two of the three in agreement. This protects the culture and standard of the founding cohort while the network finds its footing. Once Valorian is established, the committee can review whether to relax the veto or hand it to the wider Founding Member group.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}