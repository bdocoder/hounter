import Reviews from "./reviews";
import SectionHeading from "./section-heading";
import Subheading from "./subheading";

export default function ReviewsSection() {
  return (
    <section>
      <Subheading direction="vertical">See our review</Subheading>
      <SectionHeading className="mb-10 text-center">
        What our users say about us
      </SectionHeading>

      <Reviews />
    </section>
  );
}
