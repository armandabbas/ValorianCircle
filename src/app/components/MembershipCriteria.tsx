import React from 'react';

const MembershipCriteria: React.FC = () => {
  const criteria = [
    {
      label: 'CRITERIA 1',
      heading: 'Residency',
      conditions: ['Resident in Europe, or professionally active in the European market.']
    },
    {
      label: 'CRITERIA 2',
      heading: 'Financial Independence',
      subtitle: '(meet one)',
      conditions: [
        'Minimum EUR 1,000,000 in liquid assets',
        'or EUR 5,000,000 in illiquid assets (startup equity or real estate)'
      ]
    },
    {
      label: 'CRITERIA 3',
      heading: 'Professional Responsibility',
      subtitle: '(meet one)',
      conditions: [
        'Minimum EUR 200,000 annual gross income',
        'or equivalent position of significant economic responsibility'
      ]
    },
    {
      label: 'CRITERIA 4',
      heading: 'Public Standing',
      subtitle: '(meet one)',
      conditions: [
        'Established public figure or key decision-maker in politics, media, social impact, sports, public sector, or the creator economy.'
      ]
    }
  ];

  const TriangleDivider = ({ connector }: { connector?: string }) => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '2rem 0' }}>
      <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 0L11.1962 9.75H0.803848L6 0Z" fill="#355E3B" fillOpacity="0.3" />
      </svg>
      {connector && (
        <div
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '0.875rem',
            fontWeight: '600',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color: '#0D1F3C',
            marginTop: '0.5rem'
          }}
        >
          {connector}
        </div>
      )}
    </div>
  );

  return (
    <section style={{ backgroundColor: '#F9F8F5', padding: '4rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            color: '#0D1F3C',
            fontSize: '2.5rem',
            fontWeight: '600',
            marginBottom: '3rem',
            textAlign: 'center'
          }}
        >
          Membership Eligibility
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '0',
            maxWidth: '1100px',
            margin: '0 auto'
          }}
        >
          {criteria.map((criterion, index) => (
            <React.Fragment key={index}>
              <div
                style={{
                  padding: '2rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  textAlign: 'left'
                }}
              >
                <div
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '0.6875rem',
                    fontWeight: '600',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#355E3B',
                    marginBottom: '0.75rem'
                  }}
                >
                  {criterion.label}
                </div>

                <h3
                  style={{
                    fontFamily: 'Cormorant Garamond, serif',
                    color: '#0D1F3C',
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    marginBottom: '0.25rem',
                    lineHeight: '1.3'
                  }}
                >
                  {criterion.heading}
                </h3>

                {criterion.subtitle && (
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '0.875rem',
                      color: '#666',
                      marginBottom: '0.75rem',
                      fontStyle: 'italic'
                    }}
                  >
                    {criterion.subtitle}
                  </div>
                )}

                <div style={{ marginTop: '0.5rem' }}>
                  {criterion.conditions.map((condition, condIndex) => (
                    <p
                      key={condIndex}
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        color: '#1A1A1A',
                        fontSize: '1rem',
                        lineHeight: '1.7',
                        marginBottom: '0.5rem'
                      }}
                    >
                      {condition}
                    </p>
                  ))}
                </div>
              </div>

              {index < criteria.length - 1 && (
                <div style={{ gridColumn: '1 / -1' }}>
                  <TriangleDivider connector={index === 0 ? 'and' : 'or'} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            color: '#666',
            fontSize: '0.9375rem',
            lineHeight: '1.7',
            maxWidth: '800px',
            margin: '3rem auto 0',
            textAlign: 'center',
            fontStyle: 'italic'
          }}
        >
          Note: Applicants must meet Criteria 1 plus at least one of Criteria 2, 3, or 4.
        </p>
      </div>
    </section>
  );
};

export default MembershipCriteria;
