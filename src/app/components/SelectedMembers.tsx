import { ImageWithFallback } from './figma/ImageWithFallback';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState, useEffect } from 'react';
import member1 from '../../assets/members/c8d85246ef3bad1d6e5f95fab53d5d407b2b61e5 1.png';
import member2 from '../../assets/members/63e47bd0836e773747df275a6cc6405b77e0ad30 1.png';
import member3 from '../../assets/members/03e7a8d3be5ad2614de732df648890672667be28 1.png';
import member4 from '../../assets/members/b988e4eecb863e87f861e5b602bdffd7abe1d43e 1.png';
import member5 from '../../assets/members/37bf613360b8ecd840cd6d8610b9d331d4695267 1.png';
import member6 from '../../assets/members/9de6be44988cda7cad71ab08360e2b41d0b92e35 1.png';
import member7 from '../../assets/members/0b8875f4e47ba917545238466007f4c4ac404246 1.png';
import member8 from '../../assets/9e04cc53ac6b79cc23608748529106d2829aad4b.png';
import member9 from '../../assets/members/258ca15e04cbce674257e87ff2e2eb4ff3c38d20 1.png';
import member10 from '../../assets/members/11cc3d4d9410dab22aa5f1fc27f476ee7b0bb465 1.png';
import member11 from '../../assets/members/00f0e6528337a6c8596821b53225b3472814921c 1.png';
import member12 from '../../assets/members/d1eeaa6f1540dbaadf5082445d41c11779ee7ce4 1.png';
import member13 from '../../assets/members/4246f42c3c2e0ef58dc850a088ea2ed2e05293fb 1.png';
import member14 from '../../assets/members/de5f3a45d4de452d29f1b87d5e43efe26feccf1c 1.png';
import member15 from '../../assets/members/5eb933aa3b8b6b2d340c75dfa45c7b1f9548d458 1.png';
import member16 from '../../assets/members/bd9037808b997bf49f288651e4eec42de7c3b9eb 1.png';
import member17 from '../../assets/members/99c9e66240d89360e5210853376a3e2522129ea5 1.png';
import member18 from '../../assets/members/065314ec8b141d2c6904e58b03af00b15a8cd181 1.png';
import member19 from '../../assets/members/ee993a9cdcb8d8d7c15105e815a9fab5be468336 1.png';
import member20 from '../../assets/members/3903cab1cc753a736891cd06ff28bd56229947a6 1.png';
import member21 from '../../assets/members/19de7866575126f62dbd19f6fbea923f1b88f942 1.png';
import member22 from '../../assets/members/4b7a8355323947cd8e505a0f59b406ccc56e3ba8 1.png';
import member23 from '../../assets/members/8dd432eb780e74be0dfb63cad7130b6e0abbd340 1.png';
import member24 from '../../assets/members/42eea9ab55994baa6e5420d463610569c41241d0 1.png';
import hannesKessel from '../../imports/image-2.png';
import jeremyOkoth from '../../imports/image-3.png';
import marcBorowy from '../../imports/Marc_Borowy.jpeg';
import hendrikKramer from '../../imports/Hendrik_Kramer.jpeg';

interface Member {
  name: string;
  description: string;
  programType: 'Circle';
  image: string;
  linkedin?: string;
}

const members: Member[] = [
  {
    name: 'Irene Klemm',
    description: 'Founder Edurino (€31.5m raised, over 2m products sold)',
    programType: 'Circle',
    image: member17,
    linkedin: 'https://www.linkedin.com/in/ireneklemm/',
  },
  {
    name: 'Lisa Gradow',
    description: 'Serial Founder (Usercentrics with over 100m ARR, Fides (exit))',
    programType: 'Circle',
    image: member24,
    linkedin: 'https://www.linkedin.com/in/lisa-gradow/',
  },
  {
    name: 'Alexander Kölpin',
    description: 'General Partner at seed+speed Ventures (€90m seed fund)',
    programType: 'Circle',
    image: member19,
    linkedin: 'https://www.linkedin.com/in/koelpin/',
  },
  {
    name: 'Seena Amidi',
    description: 'Managing Director at Plug and Play Tech Center (over $1B AUM)',
    programType: 'Circle',
    image: member20,
    linkedin: 'https://www.linkedin.com/in/seenaamidi/',
  },
  {
    name: 'Patrick Eden',
    description: 'Exited Serial Founder (1x Exit to Cisco, 1x still operative)',
    programType: 'Circle',
    image: member23,
    linkedin: 'https://www.linkedin.com/in/patrickeden/',
  },
  {
    name: 'Leon Szeli',
    description: 'Founder Presize (acq. by Meta for $100m)',
    programType: 'Circle',
    image: member4,
    linkedin: 'https://www.linkedin.com/in/leonszeli/',
  },
  {
    name: 'Dr. Jonas Kahlert',
    description: 'Senior Product Manager at Google, Stanford & HSG Alum',
    programType: 'Circle',
    image: member10,
    linkedin: 'https://www.linkedin.com/in/jonas-f-kahlert-5765a034/',
  },
  {
    name: 'Jakob Schreyer',
    description: 'Founder Orderbird (€100m Exit)',
    programType: 'Circle',
    image: member12,
    linkedin: 'https://www.linkedin.com/in/jakob-schreyer-708280b/',
  },
  {
    name: 'Ingmar Klein',
    description: 'Founder Huzzle ($5m ARR in 15 months)',
    programType: 'Circle',
    image: member7,
    linkedin: 'https://www.linkedin.com/in/ingmar-klein/',
  },
  {
    name: 'Michael Bonacina',
    description: '3x Exited Founder, e.g. Virtual Staging (acq. by Zillow, $5m ARR in 18 months)',
    programType: 'Circle',
    image: member1,
    linkedin: 'https://www.linkedin.com/in/michael-bonacina/',
  },
  {
    name: 'Jeremy Okoth',
    description: 'Over 1m followers on TikTok and Instagram',
    programType: 'Circle',
    image: hannesKessel,
    linkedin: 'https://www.linkedin.com/in/jeremy-okoth-b13a3828a/',
  },
  {
    name: 'Johannes Hussak',
    description: 'Founder Kertos - $20m funding, grew 4x, 3x, 3x YoY',
    programType: 'Circle',
    image: member15,
    linkedin: 'https://www.linkedin.com/in/johanneshussak/',
  },
  {
    name: 'Marco Maier',
    description: 'Founder Viscopic (acquired by Teamviewer), VP Sales Engineering at Teamviewer',
    programType: 'Circle',
    image: member21,
    linkedin: 'https://www.linkedin.com/in/marco-maier-25442a99/',
  },
  {
    name: 'Tomislav Tomov',
    description: 'Tech Lead - Gen AI Team at Meta, founder (exited)',
    programType: 'Circle',
    image: member6,
    linkedin: 'https://www.linkedin.com/in/tomislav-tomov/',
  },
  {
    name: 'Fabian Sedlmayr',
    description: 'Founder WH1, McCloy Fellow & MPP at Harvard',
    programType: 'Circle',
    image: member2,
    linkedin: 'https://www.linkedin.com/in/fabiansedlmayr/',
  },
  {
    name: 'Dr. Michael Krause',
    description: 'Global Head of AI Transformation at BCG',
    programType: 'Circle',
    image: member11,
    linkedin: 'https://www.linkedin.com/in/michael-krause-muc/',
  },
  {
    name: 'Lea Frank',
    description: 'Founder anybill (over €10m in funding, 3.2 YoY Revenue Growth)',
    programType: 'Circle',
    image: member18,
    linkedin: 'https://www.linkedin.com/in/lea-martina-frank/',
  },
  {
    name: 'Julian Blessin',
    description: 'Serial Founder, raised $660m (e.g. TIER Mobility - unicorn)',
    programType: 'Circle',
    image: member16,
    linkedin: 'https://www.linkedin.com/in/jblessin/',
  },
  {
    name: 'Patrick Kirchhoff',
    description: 'Founder Replex (acq. by Cisco), Director Engineering at Cisco',
    programType: 'Circle',
    image: member22,
    linkedin: 'https://www.linkedin.com/in/patrickkirchhoff/',
  },
  {
    name: 'Awais Shafique',
    description: 'Exited Serial Entrepreneur, Founder Beyond Presence',
    programType: 'Circle',
    image: member5,
    linkedin: 'https://www.linkedin.com/in/awshafique/',
  },
  {
    name: 'Xaver Lehmann',
    description: 'Serial Founder ($60m Exit, $40m raised)',
    programType: 'Circle',
    image: member13,
    linkedin: 'https://www.linkedin.com/in/xaverlehmann/',
  },
  {
    name: 'Hannes Kessel',
    description: 'Over 1m followers on TikTok and Instagram',
    programType: 'Circle',
    image: jeremyOkoth,
    linkedin: 'https://www.linkedin.com/in/hannes-kessel-40326230b/',
  },
  {
    name: 'Julian Krenge',
    description: 'Founder parcelLab ($117m in funding)',
    programType: 'Circle',
    image: member9,
    linkedin: 'https://www.linkedin.com/in/jkrenge/',
  },
  {
    name: 'Carolin Wais',
    description: 'Partner Plug & Play VC',
    programType: 'Circle',
    image: member3,
    linkedin: 'https://www.linkedin.com/in/carolinwais/',
  },
  {
    name: 'Hendrik Kramer',
    description: 'Founder FERNRIDE (150 employees, €75m raised, acquired by Quantum Systems)',
    programType: 'Circle',
    image: hendrikKramer,
    linkedin: 'https://www.linkedin.com/in/hendrik-kramer/',
  },
  {
    name: 'Marc Borowy',
    description: 'Founder Digital Seals (50 employees, exit to msg)',
    programType: 'Circle',
    image: marcBorowy,
    linkedin: 'https://www.linkedin.com/in/marc-borowy/',
  }
];

// Custom arrow components for the carousel
function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        right: '-60px',
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: 'white',
          border: '1px solid #E5E7EB',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
        }}
        className="hover:border-gray-300 hover:shadow-md"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 5L12.5 10L7.5 15"
            stroke="#374151"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        left: '-60px',
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: 'white',
          border: '1px solid #E5E7EB',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04)',
        }}
        className="hover:border-gray-300 hover:shadow-md"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 5L7.5 10L12.5 15"
            stroke="#374151"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

// Mobile arrow components - positioned inside the container
function MobileNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        right: '10px',
        zIndex: 2,
      }}
      onClick={onClick}
    >
      <div
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          border: '1px solid #E5E7EB',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.5 5L12.5 10L7.5 15"
            stroke="#374151"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

function MobilePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'block',
        left: '10px',
        zIndex: 2,
      }}
      onClick={onClick}
    >
      <div
        style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.95)',
          border: '1px solid #E5E7EB',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 5L7.5 10L12.5 15"
            stroke="#374151"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export function SelectedMembers() {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1280);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth > 768 && windowWidth <= 1279;

  const slidesToShow = isMobile ? 1 : isTablet ? 2 : 3;
  const showArrows = isMobile || windowWidth >= 1280;
  const useMobileArrows = isMobile;

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    arrows: showArrows,
    nextArrow: useMobileArrows ? <MobileNextArrow /> : <NextArrow />,
    prevArrow: useMobileArrows ? <MobilePrevArrow /> : <PrevArrow />,
    centerMode: isMobile,
    centerPadding: isMobile ? '40px' : '0px',
    appendDots: (dots: any) => (
      <div style={{ bottom: '-65px' }}>
        <ul style={{ margin: '0', padding: '0', display: 'flex', justifyContent: 'center', gap: '8px' }}>
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#6B7280',
          opacity: 0.2,
          transition: 'all 0.3s ease',
        }}
        className="slick-dot-custom"
      />
    ),
  };

  return (
    <section className="w-full relative overflow-hidden" style={{ backgroundColor: '#FAFAFA' }}>
      <div className="mx-auto max-w-[1280px] px-6 md:px-16 py-24 md:py-40 pb-40 relative z-10">
        <div className="text-center max-w-[720px] mx-auto mb-20">
          <h2
            className="text-[2.5rem] md:text-[3rem] leading-[1.1] tracking-[-0.025em] mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500, color: '#111827' }}
          >
            Selected Members
          </h2>
          <p
            className="text-[1rem] leading-[1.6] max-w-[540px] mx-auto"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, color: '#6B7280' }}
          >
            A curated community of European leaders shaping technology, business, and innovation.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative px-0 md:px-20">
          <Slider {...settings}>
            {members.map((member, index) => (
              <div key={index} className="px-6">
                <div className="flex flex-col group h-full">
                  {/* Photo Container with Premium Styling */}
                  <div className="mb-8 flex justify-center">
                    <div
                      className="relative overflow-hidden transition-all duration-300"
                      style={{
                        width: '75%',
                        aspectRatio: '1',
                        borderRadius: '12px',
                        backgroundColor: '#F3F4F6',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.03)',
                      }}
                    >
                      <div className="absolute inset-[8%]">
                        <ImageWithFallback
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-all duration-700 hover:scale-105 grayscale hover:grayscale-0"
                          style={{
                            borderRadius: '6px',
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 flex flex-col items-center text-center px-4">
                    {/* Name */}
                    <h3
                      className="text-[1.5rem] md:text-[1.875rem] leading-[1.2] mb-2"
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontWeight: 600,
                        color: '#111827',
                        letterSpacing: '-0.015em',
                      }}
                    >
                      {member.name}
                    </h3>

                    {/* Description */}
                    <p
                      className="text-[0.75rem] md:text-[0.8125rem] leading-[1.6] mb-4"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 400,
                        color: '#6B7280',
                        letterSpacing: '0.002em',
                      }}
                    >
                      {member.description}
                    </p>

                    {/* LinkedIn Icon - Subtle & Below */}
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center transition-all duration-200 hover:opacity-60 mt-1"
                        aria-label={`${member.name}'s LinkedIn profile`}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="#9CA3AF"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style>{`
        .slick-dots li.slick-active .slick-dot-custom {
          opacity: 0.6 !important;
          background-color: #374151 !important;
        }

        .slick-dots li button:before {
          display: none;
        }

        .slick-arrow:before {
          display: none !important;
          content: '' !important;
        }

        .slick-prev:before,
        .slick-next:before {
          display: none !important;
        }

        .slick-track {
          display: flex !important;
          align-items: stretch;
        }

        .slick-slide {
          height: inherit !important;
        }

        .slick-slide > div {
          height: 100%;
        }

        .slick-slide > div > div {
          height: 100%;
        }
      `}</style>
    </section>
  );
}