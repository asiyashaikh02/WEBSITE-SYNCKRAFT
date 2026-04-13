import { Routes, Route, useLocation } from 'react-router-dom';
import React, { Suspense, lazy, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

// Lazy load pages for performance
const Home = lazy(() => import('./pages/Home'));
const Industries = lazy(() => import('./pages/Industries'));
const Services = lazy(() => import('./pages/Services'));
const Products = lazy(() => import('./pages/Products'));
const Contact = lazy(() => import('./pages/Contact'));

// Industry pages
const Restaurant = lazy(() => import('./pages/industries/Restaurant'));
const RealEstate = lazy(() => import('./pages/industries/RealEstate'));
const Retail = lazy(() => import('./pages/industries/Retail'));
const Furniture = lazy(() => import('./pages/industries/Furniture'));
const Fashion = lazy(() => import('./pages/industries/Fashion'));
const Jewelry = lazy(() => import('./pages/industries/Jewelry'));
const Automobile = lazy(() => import('./pages/industries/Automobile'));
const Education = lazy(() => import('./pages/industries/Education'));
const Healthcare = lazy(() => import('./pages/industries/Healthcare'));
const Gym = lazy(() => import('./pages/industries/Gym'));
const Hospitality = lazy(() => import('./pages/industries/Hospitality'));
const Beauty = lazy(() => import('./pages/industries/Beauty'));
const Supermarket = lazy(() => import('./pages/industries/Supermarket'));
const Obsidian = lazy(() => import('./pages/industries/Obsidian'));

// Utility to handle hash scrolling
function ScrollToHash() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
}

const Loader = () => (
  <div className="min-h-screen flex items-center justify-center bg-surface">
    <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function ServicesMain() {
  return (
    <div className="services-module-wrapper text-slate-900 dark:text-slate-100">
      <Helmet>
        <title>Synckraft Business Automation Services</title>
        <meta name="description" content="AI automation and business operating systems for real estate, restaurants, and healthcare businesses." />
      </Helmet>
      <ScrollToHash />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="industries" element={<Industries />} />
          <Route path="industries/restaurant" element={<Restaurant />} />
          <Route path="industries/real-estate" element={<RealEstate />} />
          <Route path="industries/retail" element={<Retail />} />
          <Route path="industries/furniture" element={<Furniture />} />
          <Route path="industries/fashion" element={<Fashion />} />
          <Route path="industries/jewelry" element={<Jewelry />} />
          <Route path="industries/jewellery" element={<Jewelry />} />
          <Route path="industries/automobile" element={<Automobile />} />
          <Route path="industries/education" element={<Education />} />
          <Route path="industries/healthcare" element={<Healthcare />} />
          <Route path="industries/gym" element={<Gym />} />
          <Route path="industries/hospitality" element={<Hospitality />} />
          <Route path="industries/beauty" element={<Beauty />} />
          <Route path="industries/supermarkets" element={<Supermarket />} />
          <Route path="industries/ai" element={<Obsidian />} />

          <Route path="services" element={<Services />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default ServicesMain;
