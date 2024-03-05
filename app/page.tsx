import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/(pages)/home/Hero';
import Services from '@/components/(pages)/home/Services';
import Steps from '@/components/(pages)/home/Steps';
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Steps />
      </main>
      <Footer />
    </>
  );
}
