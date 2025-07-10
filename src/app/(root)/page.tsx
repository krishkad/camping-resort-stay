
import Blog from '@/components/Blog';
import BookingSection from '@/components/BookingSection';
import CampListings from '@/components/CampListings';
import ContactSection from '@/components/ContactSection';
import DayTimelineSection from '@/components/DayTimelineSection';
// import ExperienceWalkthrough from '@/components/ExperienceWalkthrough';
import Gallery from '@/components/Gallery';
import HeroSection from '@/components/HeroSection';
import TestimonialsSection from '@/components/TestimonialsSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-cream-100">
      <HeroSection />
      <CampListings />
      {/* <ExperienceWalkthrough /> */}
      <DayTimelineSection />
      <Gallery />
      <BookingSection />
      <TestimonialsSection />
      <Blog />
      <ContactSection />
    </div>
  );
};

export default Home;