import people from "../lib/people";
import HouseAttribute from "./house-attribute";
import SectionHeading from "./section-heading";
import Subheading from "./subheading";
import TourImages from "./tour-images";

export default function Tour() {
  return (
    <section className="px-max">
      <div className="overflow-hidden">
        <img src="/vector-4.svg" className="absolute right-0 -top-48" />
        <img src="/vector-6.svg" className="absolute right-0 -top-64" />
      </div>

      <div className="flex flex-col items-center lg:flex-row">
        <div className="grid gap-8">
          <div className="grid gap-4">
            <div>
              <Subheading>Ready to sell</Subheading>
              <SectionHeading className="mb-4">
                Let&rsquo;s tour and see our house!
              </SectionHeading>
              <p className="leading-[28px] font-light text-text-1 max-w-[415px]">
                Houses recommended by our partners that have been curated to
                become the home of your dreams!
              </p>
            </div>
            <div className="max-w-[440px] grid grid-cols-2 gap-[16px_53px]">
              <p className="col-span-2">House Details</p>
              <HouseAttribute icon="bedrooms">4 Bedrooms</HouseAttribute>
              <HouseAttribute icon="bathrooms">2 Bathrooms</HouseAttribute>
              <HouseAttribute icon="carports">1 Carport</HouseAttribute>
              <HouseAttribute icon="floors">2 Floors</HouseAttribute>
            </div>
          </div>

          <hr className="h-0.5 border-hr w-full max-w-[440px]" />

          <div className="flex items-center max-w-[440px] gap-6">
            <img src={people.robert.img} className="rounded-full h-14 w-14" />
            <div className="grid gap-1">
              <h3>{people.dianne.name}</h3>
              <p>{people.dianne.role}</p>
            </div>
            <div className="flex-grow"></div>
            <button className="flex items-center h-12 gap-4 px-4 text-white rounded-full bg-primary">
              <img src="/phone.svg" />
              <span>Contact Now</span>
            </button>
          </div>
        </div>

        <TourImages />
      </div>
    </section>
  );
}
