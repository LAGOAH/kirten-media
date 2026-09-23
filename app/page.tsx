import Showreel from "@/components/sections/showreel";
import Hero from "@/components/sections/hero";
import Services from "@/components/sections/services";
import Testimonials from "@/components/sections/testimonials";
import ContactForm from "@/components/sections/contact-form";

export default function Home() {
  return (
    <>
      <Showreel />
      <Hero />
      <Services />
      <Testimonials />
      <ContactForm />
    </>
  );
}
