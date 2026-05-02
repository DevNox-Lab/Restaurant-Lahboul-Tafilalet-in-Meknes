import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustStats from "./components/TrustStats";
import ExperienceSection from "./components/ExperienceSection";
import MenuSection from "./components/MenuSection";
import ReservationSection from "./components/ReservationSection";
import GroupDiningSection from "./components/GroupDiningSection";
import ReviewsSection from "./components/ReviewsSection";
import LocationSection from "./components/LocationSection";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-warm-50">
      <Header />
      <main>
        <Hero />
        <TrustStats />
        <ExperienceSection />
        <MenuSection />
        <ReservationSection />
        <GroupDiningSection />
        <ReviewsSection />
        <LocationSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
