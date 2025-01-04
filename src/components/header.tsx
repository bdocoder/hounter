import people from "../lib/people";
import Brand from "./brand";
import HeaderCard from "./header-card";
import SearchBox from "./search-box";
import SectionHeading from "./section-heading";

export default function Header() {
  return (
    <header className="relative grid lg:grid-cols-2 gap-28">
      <img src="/vector-7.svg" className="absolute top-0 left-0 -z-10" />
      <img src="/vector-8.svg" className="absolute top-0 left-0 -z-10" />
      <div className="flex flex-col py-10 my-auto pl-max-2">
        <Brand className="absolute top-10" />
        <SectionHeading
          order={1}
          className="mt-[100px] mb-6 tracking-tight max-w-96"
        >
          find the place to live{" "}
          <span
            style={{
              WebkitTextFillColor: "white",
              WebkitTextStrokeColor: "var(--color-heading-1)",
              WebkitTextStrokeWidth: "1px",
              fontFamily: "sans-serif",
              color: "var(--color-heading-1)",
            }}
          >
            your dreams
          </span>{" "}
          easily here
        </SectionHeading>

        <p className="mb-8 tracking-tight text-text-2 max-w-[496px]">
          Everything you need about finding your place to live will be here,
          where it will be easier for you
        </p>

        <SearchBox
          icon="/location.svg"
          placeholder="Search for the location you want!"
          buttonIcon="/chevron-right-light.svg"
        >
          search
        </SearchBox>

        <div>
          <span className="font-light leading-[32px] text-text-2">
            Our Partnership
          </span>
          <div className="flex h-16 gap-8">
            <img src="/partner-1.svg" />
            <img src="/partner-2.svg" />
            <img src="/partner-3.svg" />
            <img src="/partner-4.svg" />
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden aspect-square">
        <img src="/hero-bg.svg" className="w-full" />
        {/* these inset values are hardcoded from the design */}
        <div className="absolute w-[73%] h-[50%] left-[11.5%] top-[18.5%]">
          <img src="/hero-bg-pattern.svg" className="w-full h-full" />
        </div>

        <div className="absolute flex items-center justify-center w-full top-10 gap-14">
          <div className="flex gap-6">
            <button className="bg-white/10 border-white/30 border px-4 py-2 rounded-full text-sm leading-[17.5px] font-medium text-hr">
              About us
            </button>
            <button className="bg-white/10 border-white/30 border px-4 py-2 rounded-full text-sm leading-[17.5px] font-medium text-hr">
              Articles
            </button>
            <button className="bg-white/10 border-white/30 border px-4 py-2 rounded-full text-sm leading-[17.5px] font-medium text-hr">
              Property
            </button>
          </div>

          <button className="bg-primary-light text-primary-dark text-sm leading-[22px] font-medium rounded-full px-6 py-3">
            Sign up!
          </button>
        </div>

        <div className="absolute bottom-12 left-12 h-[104px] w-full flex gap-4">
          <HeaderCard
            title="1K+ People"
            description="Successfully Getting Home"
          >
            <div className="relative w-[112px] h-14">
              <img
                className="absolute left-0 w-14 h-14 rounded-full box-border border-[3px] border-white"
                src={people.darlene.img}
              />
              <img
                className="absolute left-7 w-14 h-14 rounded-full box-border border-[3px] border-white"
                src={people.robert.img}
              />
              <img
                className="absolute left-14 w-14 h-14 rounded-full box-border border-[3px] border-white"
                src={people.ronald.img}
              />
            </div>
          </HeaderCard>
          <HeaderCard title="56 Houses" description="Sold Monthly">
            <img
              className="shrink-0 w-14 h-14 rounded-[24px]"
              src="/post-4.jpg"
            />
          </HeaderCard>
          <HeaderCard title="4K+" description="People Looking for New Homes">
            <img
              className="w-14 h-14 rounded-full border-[3px] border-white"
              src={people.courtney.img}
            />
          </HeaderCard>
        </div>
      </div>
    </header>
  );
}
