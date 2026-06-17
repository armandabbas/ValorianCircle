import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    // Check if there's a hash in the URL to auto-open a specific FAQ
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        const index = faqs.findIndex(faq => faq.id === hash);
        if (index !== -1) {
          setOpenIndex(index);
          // Small delay to ensure DOM is ready
          setTimeout(() => {
            document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    // Run on mount
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const faqs: Array<{
    id?: string;
    question: string;
    answer: string[];
  }> = [
    {
      id: 'eligibility',
      question: 'What are the eligibility criteria?',
      answer: [
        'Applicants must meet <strong>Criteria 1</strong> plus at least one of <strong>Criteria 2, 3, or 4</strong>:',
        '',
        '<strong>CRITERIA 1: Residency</strong>',
        '• Resident in Europe, or professionally active in the European market.',
        '',
        '<strong>CRITERIA 2: Financial Independence</strong> (meet one)',
        '• Minimum EUR 1,000,000 in liquid assets',
        '• or EUR 5,000,000 in illiquid assets (startup equity or real estate)',
        '',
        '<strong>CRITERIA 3: Professional Responsibility</strong> (meet one)',
        '• Minimum EUR 200,000 annual gross income',
        '• or equivalent position of significant economic responsibility',
        '',
        '<strong>CRITERIA 4: Public Standing</strong> (meet one)',
        '• Established public figure or key decision-maker in politics, media, social impact, sports, public sector, or the creator economy.'
      ]
    },
    {
      id: 'benefits-fees',
      question: 'What are the fees?',
      answer: [
        'We charge a yearly membership fee plus a one-time onboarding fee.',
        '',
        'For all applications submitted before <strong>July 1, 2026</strong>, the onboarding fee will be <em>fully waived</em>.',
        '',
        'Most members expense this via their business or employer.',
        '',
        'Considering the caliber of our members and the scale at which they operate, typically <em>one meaningful introduction</em> provides immediate value.'
      ]
    },
    {
      id: 'financial-eligibility',
      question: 'Why is there an application process?',
      answer: [
        'Valorian is designed as a <strong>confidential, high-trust environment</strong>. To preserve this standard, every application is <strong>reviewed manually</strong> based on:',
        '• the information provided in the application,',
        '• desk research using publicly available sources, and',
        '• a referrer, where applicable.'
      ]
    },
    {
      question: 'Is there a Circle for my specific topic?',
      answer: [
        'If none of the <strong>10+ active <a href="/circles" style="color: #355E3B; text-decoration: none; transition: opacity 0.2s;" onmouseover="this.style.opacity=0.7" onmouseout="this.style.opacity=1">Circles</a></strong> currently match your interests, you are welcome to <strong>propose a new one</strong>.',
        '',
        'As the community grows, we continuously launch additional Circles, including <strong>highly specialised topics</strong>, once sufficient critical mass is reached.'
      ]
    },
    {
      question: 'Is participation in Circles or Curated Introductions mandatory?',
      answer: [
        '<strong>No.</strong>',
        '',
        'But in case you do decide to sign up for a Circle, we do expect you to attend 4 out of the 6 annual Circle sessions to ensure high engagement and meaningful discussion for all members.'
      ]
    },
    {
      question: 'How many Circles can I join?',
      answer: [
        'You can join as many Circles as you want as long as you can assure that you will be able to attend at least 4 out of 6 annual sessions.'
      ]
    },
    {
      question: 'What should I expect from a Curated Introduction?',
      answer: [
        'Highly <em>relevant</em> connections, designed to save your time and foster meaningful relationships.',
        '',
        'Each introduction is <em>manually selected</em> by our team, based on shared context, current priorities, and mutual relevance.',
        '',
        '<strong>How it works:</strong>',
        '• At least one curated introduction per month',
        '• Manual selection by the Valorian team',
        '• Mutual opt-in on both sides',
        '• Clear framing and context provided with every introduction',
        '',
        'No cold outreach. No pitching. <em>No obligation.</em>',
        '',
        'Curated Introductions exist to create meaningful conversations, not transactions.'
      ]
    }
  ];

  const formatLine = (line: string) => {
    if (line.startsWith('• ')) {
      const content = line.substring(2);
      return (
        <div className="flex items-start gap-3 ml-4">
          <span className="flex-shrink-0 text-[0.625rem] mt-1.5" style={{ color: '#0D1F3C' }}>●</span>
          <span dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      );
    }
    if (line === '') {
      return null;
    }
    return <span dangerouslySetInnerHTML={{ __html: line }} />;
  };

  return (
    <section className="w-full" style={{ backgroundColor: '#F9F8F5' }}>
      <div className="mx-auto max-w-[1200px] px-6 md:px-12 py-20 md:py-28">
        <h2 className="text-[2rem] md:text-[2.5rem] leading-[1.2] tracking-[-0.015em] mb-12 md:mb-16" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, color: '#0D1F3C' }}>
          Frequently Asked Questions
        </h2>
        <div className="max-w-[800px]">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              id={faq.id}
              className="border-t first:border-t-0"
              style={{ borderColor: '#E8E5E0' }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-6 flex justify-between items-start text-left group"
              >
                <span
                  className="text-[1.0625rem] tracking-[0.005em] pr-8 transition-colors group-hover:opacity-70"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400, color: '#0D1F3C' }}
                >
                  {faq.question}
                </span>
                <span
                  className="text-[1.5rem] flex-shrink-0 transition-transform duration-200"
                  style={{
                    color: '#0D1F3C',
                    transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                    fontFamily: 'Cormorant Garamond, serif',
                    fontWeight: 300
                  }}
                >
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{
                  maxHeight: openIndex === index ? '1000px' : '0',
                  opacity: openIndex === index ? 1 : 0
                }}
              >
                <div className="pb-6">
                  {faq.answer.map((line, lineIndex) => (
                    <div
                      key={lineIndex}
                      className={`text-[1rem] leading-[1.65] tracking-[0.005em] ${line === '' ? 'h-4' : ''}`}
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, color: '#5A5A5A' }}
                    >
                      {formatLine(line)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}