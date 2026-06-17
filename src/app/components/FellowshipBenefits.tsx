import React from 'react';
import { Euro, Target, Users, Network, Trophy, Clock } from 'lucide-react';

export const FellowshipBenefits: React.FC = () => {
  const benefits = [
    {
      icon: Euro,
      label: 'Living Cost Stipend',
      detail: 'EUR 15,000 over 100 days'
    },
    {
      icon: Target,
      label: 'Project Budget',
      detail: 'EUR 10,000'
    },
    {
      icon: Users,
      label: 'Senior Mentors',
      detail: 'Assigned from Valorian network'
    },
    {
      icon: Network,
      label: 'Network Access',
      detail: 'Full Valorian membership included'
    },
    {
      icon: Trophy,
      label: 'Goal',
      detail: 'Co-found a company in your field'
    },
    {
      icon: Clock,
      label: 'Duration',
      detail: '100 days'
    }
  ];

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
          What Fellows Receive
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '1.5rem'
                }}
              >
                <Icon
                  size={48}
                  style={{
                    color: '#355E3B',
                    marginBottom: '1rem'
                  }}
                />
                <h3
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#0D1F3C',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    marginBottom: '0.5rem'
                  }}
                >
                  {benefit.label}
                </h3>
                <p
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    color: '#1A1A1A',
                    fontSize: '1rem',
                    lineHeight: '1.6'
                  }}
                >
                  {benefit.detail}
                </p>
              </div>
            );
          })}
        </div>

        <p
          style={{
            fontFamily: 'Inter, sans-serif',
            color: '#1A1A1A',
            fontSize: '1.125rem',
            lineHeight: '1.8',
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center'
          }}
        >
          Fellowships are open to experts in fields that are economically significant but still underdigitalized: healthcare, law, manufacturing, public administration, logistics, and education. The goal is to co-found a company in that field. Valorian provides the network, resources, and mentorship. Fellows bring the domain expertise.
        </p>
      </div>
    </section>
  );
};

