import Head from "next/head";
import CenteredCTAText from "../components/ui/CenteredCTAText";
import CTA from "../components/ui/CTA";
import FAQs from "../components/ui/FAQs";
import Features from "../components/ui/Features";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import LogoGrid from "../components/ui/LogoGrid";
import Stats from "../components/ui/Stats";
import Navbar from "../components/ui/Navbar";
import Footer from "../components/ui/Footer";
import Testimonials from "../components/ui/Testimonials";
import JobList from "../components/ui/JobList";
import TopTalent from "../components/ui/TopTalent";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LogoGrid />
      <Testimonials />
      <JobList />
      <TopTalent />
      <FAQs />
      <Footer />
    </>
  );
}
