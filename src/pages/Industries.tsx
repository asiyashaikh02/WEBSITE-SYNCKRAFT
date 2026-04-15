import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { IndustrySolutions } from '../components/IndustrySolutions';
import { useTheme } from '../components/ThemeProvider';

// ✅ Proper type
type ThemeType = {
  theme: 'dark' | 'light';
};

const Industries = () => {
  const { theme } = useTheme() as ThemeType;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ✅ Helmet outside main wrapper (safer) */}
      <Helmet>
        <title>Industries | Synckraft Business OS</title>
        <meta
          name="description"
          content="Discover how Synckraft's AI-powered Business Operating Systems transform Real Estate, Healthcare, Restaurants, and Retail."
        />
        <link rel="canonical" href="https://synckraft.in/industries" />
      </Helmet>

      <div className="pt-24 min-h-screen bg-surface text-on-surface">
        <div className="text-center py-20 px-8 max-w-4xl mx-auto">
          
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            OS built for <span className="text-primary">your</span> sector.
          </h1>

          <p className="text-xl font-light text-on-surface/70">
            No generic software. Just highly specialized, AI-driven systems designed for your industry.
          </p>

        </div>

        {/* ✅ Pass theme safely */}
        <IndustrySolutions theme={theme} />
      </div>
    </>
  );
};

export default Industries;