import About from "./_components/about";
import ContactCta from "./_components/contact-cta";
import Hero from "./_components/hero";
import Marquee from "./_components/marquee";
import Process from "./_components/process";
import Services from "./_components/services";
import SiteFooter from "./_components/site-footer";
import SiteHeader from "./_components/site-header";
import WhyMe from "./_components/why-me";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Marquee />
        <Services />
        <Process />
        <WhyMe />
        <ContactCta />
      </main>
      <SiteFooter />
    </>
  );
}
