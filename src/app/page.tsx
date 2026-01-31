import { Hero } from '@/components/sections/Hero';
import { Features } from '@/components/sections/Features';
import { MobileApp } from '@/components/sections/MobileApp';
import { Footer } from '@/components/sections/Footer';

const Home = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <MobileApp />
      <Footer />
    </main>
  );
};

export default Home;
