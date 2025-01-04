import FeaturedHouses from "./components/featured-houses";
import Footer from "./components/footer";
import Header from "./components/header";
import ReviewsSection from "./components/reviews-section";
import Subscribe from "./components/subscribe";
import Tips from "./components/tips";
import Tour from "./components/tour";

export default function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <FeaturedHouses />
      <Tour />
      <ReviewsSection />
      <Tips />
      <Subscribe />
      <Footer />
    </div>
  );
}
