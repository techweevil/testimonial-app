import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection";
import HeroTestimonial from "./components/HeroTestimonial";
import Experience from "./components/Experience";
import SecondHeroTestimonial from "./components/SecondHeroTestimonial"
import SecondExperience from "./components/SecondExperience";


function App() {
  return (
    <div >
      <Header />
      <HeroSection />
      <div className="bg-[#222222]">
        <HeroTestimonial />
      </div>
      <Experience />
      <div className="bg-[#FFF8F5">
        <SecondHeroTestimonial />
      </div>
      <SecondExperience />

    </div>
  );
}

export default App;
