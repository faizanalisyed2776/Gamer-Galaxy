
'use client';

import HeroSection from './components/HeroSection';
import TrendingNow from './components/TrendingNow';
import ExclusiveDeals from './components/ExclusiveDeals';
import GenresGrid from './components/GenresGrid';
import GameTrailers from './components/GameTrailers';
import GearUpZone from './components/GearUpZone';
import CommunityHighlights from './components/CommunityHighlights';
import EditorsPicks from './components/EditorsPicks';
import RecommendedForYou from './components/RecommendedForYou';
import GameBundleBuilder from './components/GameBundleBuilder';
import NewsletterCTA from './components/NewsletterCTA';
import MegaFooter from './components/MegaFooter';
import Header from './components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <HeroSection />
      <TrendingNow />
      <ExclusiveDeals />
      <GenresGrid />
      <GameTrailers />
      <GearUpZone />
      <CommunityHighlights />
      <EditorsPicks />
      <RecommendedForYou />
      <GameBundleBuilder />
      <NewsletterCTA />
      <MegaFooter />
    </div>
  );
}
