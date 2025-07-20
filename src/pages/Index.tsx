import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TeamSection from "@/components/TeamSection";
import GymReviews from "@/components/GymReviews";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-mma-black">
      <Header />
      <Hero />
      <TeamSection />
      <GymReviews />
      <Footer />
    </div>
  );
};

export default Index;
