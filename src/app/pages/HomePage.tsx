import { Hero } from '../components/Hero';
import { ValueProposition } from '../components/ValueProposition';
import { SelectedMembers } from '../components/SelectedMembers';
import { AdvisoryAreas } from '../components/AdvisoryAreas';
import { FAQ } from '../components/FAQ';
import { FinalCTA } from '../components/FinalCTA';
import { useOutletContext } from 'react-router-dom';

interface OutletContext {
  onApplyClick: () => void;
}

export function HomePage() {
  const { onApplyClick } = useOutletContext<OutletContext>();

  return (
    <div className="min-h-screen pt-16" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Hero onApplyClick={onApplyClick} />
      <SelectedMembers />
      <AdvisoryAreas />
      <ValueProposition />
      <FAQ />
      <FinalCTA onApplyClick={onApplyClick} />
    </div>
  );
}
