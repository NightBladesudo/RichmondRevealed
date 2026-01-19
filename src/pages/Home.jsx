import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import HeroSection from '../components/home/HeroSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
    </div>
  );
}