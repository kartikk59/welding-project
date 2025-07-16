'use client';
import Navbar from '../components/Navbar'
import Contact from '../components/contact-form/Contact'
import Services from '../components/Services-Section/Services'
import OurWork from '../components/Our-Work/ourWork'
import Footer from '../components/Footer/Footer'
import Reliabilty from '../components/Reliability-Section/reliability';

export default function Home() {
  return (
    <>

      <Navbar />
      <Reliabilty />
      <Services />
      <OurWork />
      <Contact />
      <Footer />
    </>
  );
}
