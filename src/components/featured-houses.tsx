import { useState } from "react";
import HouseCard from "./house-card";
import SectionHeading from "./section-heading";
import Subheading from "./subheading";

export default function FeaturedHouses() {
  const [current, setCurrent] = useState(0);

  return (
    <section className="pl-max">
      <div className="flex items-end justify-between mb-10 pr-max">
        <div>
          <Subheading>Our recommendation</Subheading>
          <SectionHeading>Featured House</SectionHeading>
        </div>
        <div className="flex justify-between gap-8 h-[52px]">
          <button className="box-border flex items-center gap-2 px-6 border rounded-full bg-primary-light text-primary border-primary-light">
            <img src="/house-green.svg" />
            <span>House</span>
          </button>
          <button className="box-border flex items-center gap-2 px-6 bg-white border rounded-full text-text-2 border-light">
            <img src="/villa.svg" />
            <span>Villa</span>
          </button>
          <button className="box-border flex items-center gap-2 px-6 bg-white border rounded-full text-text-2 border-light">
            <img src="/apartment.svg" />
            <span>Apartment</span>
          </button>
        </div>
        <div className="flex gap-4 h-[52px]">
          <button
            className="px-4 py-3 rounded-full bg-light"
            onClick={() => setCurrent(Math.min(Math.max(0, current - 1), 6))}
          >
            <div className="grid w-7 h-7">
              <img src="/chevron-left.svg" className="m-auto" />
            </div>
          </button>
          <button
            className="px-4 py-3 text-white rounded-full bg-primary"
            onClick={() => setCurrent(Math.min(Math.max(0, current + 1), 6))}
          >
            <div className="grid w-7 h-7">
              <img src="/chevron-right.svg" className="m-auto" />
            </div>
          </button>
        </div>
      </div>

      <div className="flex gap-10">
        <HouseCard
          style={{ left: `${-current * 380}px` }}
          className="relative transition-[left]"
          owner="dianne"
          price="$ 35.000.000"
          src="/featured-1.jpg"
          title="Roselands House"
          type="popular"
        />

        <HouseCard
          className="relative transition-[left]"
          style={{ left: `${-current * 380}px` }}
          owner="robert"
          price="$ 20.000.000"
          src="/featured-2.jpg"
          title="Woodlandside"
          type="new"
        />

        <HouseCard
          className="relative transition-[left]"
          style={{ left: `${-current * 380}px` }}
          owner="ronald"
          price="$ 44.000.000"
          src="/featured-3.jpg"
          title="The Old Lighthouse"
          type="best"
        />

        <HouseCard
          className="relative transition-[left]"
          style={{ left: `${-current * 380}px` }}
          owner="jenny"
          price="$ 22.000.000"
          src="/featured-4.jpg"
          title="Cosmo's House"
          type="popular"
        />

        <HouseCard
          className="relative transition-[left]"
          style={{ left: `${-current * 380}px` }}
          owner="cameron"
          price="$ 27.000.000"
          src="/review-1.png"
          title="Willow's Edge"
          type="best"
        />

        <HouseCard
          className="relative transition-[left]"
          style={{ left: `${-current * 380}px` }}
          owner="ronald"
          price="$ 19.000.000"
          src="/post-2.jpg"
          title="Starlight Haven"
          type="new"
        />

        <HouseCard
          className="relative transition-[left]"
          style={{ left: `${-current * 380}px` }}
          owner="courtney"
          price="$ 31.000.000"
          src="/post-1.jpg"
          title="Seabreeze Manor"
          type="new"
        />
      </div>
    </section>
  );
}
