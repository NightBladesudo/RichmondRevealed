import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { base44 } from '@/api/base44Client';
import HeroSection from '../components/home/HeroSection';
import FeatureCards from '../components/home/FeatureCards';
import FeaturedAttractions from '../components/home/FeaturedAttractions';
import UpcomingEvents from '../components/home/UpcomingEvents';
import CallToAction from '../components/home/CallToAction';

export default function Home() {
  const { data: attractions = [] } = useQuery({
    queryKey: ['attractions'],
    queryFn: () => base44.entities.Attraction.list('-created_date', 5),
  });

  const { data: events = [] } = useQuery({
    queryKey: ['events'],
    queryFn: () => base44.entities.Event.list('date', 5),
  });

  return (
    <div>
      <HeroSection />
      <FeatureCards />
      <FeaturedAttractions attractions={attractions} />
      <UpcomingEvents events={events} />
      <CallToAction />
    </div>
  );
}