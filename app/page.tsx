import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/(pages)/home/Hero';
import Services from '@/components/(pages)/home/Services';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
      </main>
      <Footer />
    </>
  );
}
