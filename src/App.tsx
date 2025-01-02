import Brand from "./components/brand";
import CtaIcon from "./components/cta-icon";
import FeaturedHouses from "./components/featured-houses";
import FooterColumn from "./components/footer-column";
import HeaderCard from "./components/header-card";
import HouseAttribute from "./components/house-attribute";
import Reviews from "./components/reviews";
import SearchBox from "./components/search-box";
import SectionHeading from "./components/section-heading";
import Subheading from "./components/subheading";
import people from "./lib/people";

export default function App() {
  return (
    <div className="overflow-hidden">
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

      <FeaturedHouses />

      <section className="px-max">
        <div className="overflow-hidden">
          <img src="/vector-4.svg" className="absolute right-0 -top-48" />
          <img src="/vector-6.svg" className="absolute right-0 -top-64" />
        </div>

        <div className="grid grid-cols-2">
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

          <div className="relative [&>img]:rounded ml-auto">
            <img src="/tour-1.png" />
            <img
              src="/play.svg"
              className="absolute top-[50%] left-[220px] translate-y-[-50%] z-10 backdrop-blur-[5px]"
            />
            <div className="absolute z-20 -bottom-10 -left-10">
              <div className="flex items-end w-full h-full">
                {/* TODO: fix these images */}
                <img src="/tour-2.png" className="mr-3" />
                <img src="/tour-4.png" className="mr-2" />
                <img src="/tour-3.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Subheading direction="vertical">See our review</Subheading>
        <SectionHeading className="mb-10 text-center">
          What our users say about us
        </SectionHeading>

        <Reviews />
      </section>

      <section className="px-max-2">
        <img className="absolute left-0 -z-10 -top-48" src="/vector-5.svg" />
        <img className="absolute top-0 left-0 -z-10" src="/vector-3.svg" />

        <Subheading direction="vertical">
          see tips and tricks from our partners
        </Subheading>
        <SectionHeading className="mb-6 mx-auto text-center max-w-[422px]">
          Find out more about selling and buying homes
        </SectionHeading>

        <button className="text-sm mx-auto block leading-[22px] font-medium bg-primary text-white px-4 py-3 rounded-full mb-10">
          More Artikel
        </button>

        <div className="grid xl:grid-cols-2 gap-[68px]">
          <div className="flex flex-col gap-[42px]">
            <div className="flex gap-8">
              <img src="/post-1.jpg" className="rounded-[16px] w-[200px]" />
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <div className="flex items-center gap-4">
                    <img
                      src={people.dianne.img}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm leading-[22px] font-light text-attribute">
                      {people.dianne.name}
                    </span>
                  </div>

                  <h3 className="text-lg leading-[32px] font-normal text-heading">
                    The things we need to check when we want to buy a house
                  </h3>
                </div>
                <div className="flex gap-3.5 items-center">
                  <img src="/time.svg" />
                  <span className="text-sm leading-[24px] font-light text-text-2">
                    4 min read | 25 Apr 2021
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-8">
              <img src="/post-2.jpg" className="rounded-[16px] w-[200px]" />
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <div className="flex items-center gap-4">
                    <img
                      src={people.courtney.img}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm leading-[22px] font-light text-attribute">
                      {people.courtney.name}
                    </span>
                  </div>

                  <h3 className="text-lg leading-[32px] font-normal text-heading">
                    7 Ways to distinguish the quality of the house we want to
                    buy{" "}
                  </h3>
                </div>
                <div className="flex gap-3.5 items-center">
                  <img src="/time.svg" />
                  <span className="text-sm leading-[24px] font-light text-text-2">
                    6 min read | 24 Apr 2021
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-8">
              <img src="/post-3.jpg" className="rounded-[16px] w-[200px]" />
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <div className="flex items-center gap-4">
                    <img
                      src={people.darlene.img}
                      className="w-8 h-8 rounded-full"
                    />
                    <span className="text-sm leading-[22px] font-light text-attribute">
                      {people.dianne.name}
                    </span>
                  </div>

                  <h3 className="text-lg leading-[32px] font-normal text-heading">
                    The best way to know the quality of the house we want to buy
                  </h3>
                </div>
                <div className="flex gap-3.5 items-center">
                  <img src="/time.svg" />
                  <span className="text-sm leading-[24px] font-light text-text-2">
                    2 min read | 24 Apr 2021
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <img
              src="/post-4.jpg"
              className="rounded-[16px] w-full h-auto max-h-[280px] max-w-[560px] object-cover"
              style={{ aspectRatio: "1.5 / 1" }}
            />
            <div className="grid gap-4">
              <div className="grid gap-3">
                <div className="flex items-center gap-4">
                  <img
                    className="w-8 h-8 rounded-full"
                    src={people.cameron.img}
                  />
                  <span className="text-sm leading-[22px] font-light text-attribute">
                    {people.cameron.name}
                  </span>
                </div>

                <h3 className="text-lg leading-[32px] font-normal text-heading">
                  12 Things to know before buying a house
                </h3>

                <p className="text-sm leading-[24px] font-light text-text-1">
                  Want to buy a house but are unsure about what we should know,
                  here I will try to explain what we should know and check when
                  we want to buy a house
                </p>
              </div>

              <div className="flex gap-3.5 items-center">
                <img src="/time.svg" />
                <span className="text-sm leading-[24px] font-light text-text-2">
                  8 min read | 25 Apr 2021
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mx-max-2 h-[312px] rounded-[32px] flex flex-col items-center justify-center"
        style={{
          backgroundImage: 'url("/cta-pattern.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <SectionHeading className="leading-[48px] max-w-[422px] text-center mb-8">
          Subscribe For More Info and update from Hounter
        </SectionHeading>

        <SearchBox icon="/mail.svg" placeholder="Your email here">
          Subscribe now
        </SearchBox>

        <CtaIcon className="top-10 left-10" src="/cta-1.jpg" width={81} />
        <CtaIcon className="top-48 left-16" src={people.dianne.img} />
        <CtaIcon
          className="hidden top-20 left-52 xl:block"
          src={people.ronald.img}
        />
        <CtaIcon
          className="hidden top-44 left-48 xl:block"
          src="/cta-2.jpg"
          width={54}
        />

        <CtaIcon
          className="hidden xl:block top-11 right-52"
          src="/cta-3.jpg"
          width={70}
        />
        <CtaIcon
          className="hidden xl:block top-36 right-52"
          src={people.courtney.img}
        />
        <CtaIcon className="top-28 right-20" src={people.robert.img} />
        <CtaIcon className="top-48 right-20" src="/cta-4.jpg" width={55} />
      </section>

      <footer className="flex gap-[88px] px-max-2 items-start pb-max-2">
        <img className="absolute bottom-0 right-10" src="/vector-1.svg" />
        <img className="absolute bottom-0 right-0" src="/vector-2.svg" />

        <div>
          <Brand className="mb-4" />
          <p className="text-sm leading-[24px] font-light text-text-1 mb-6 max-w-80">
            We provide information about properties such as houses, villas and
            apartments to help people find their dream home
          </p>
          <div className="flex gap-6">
            <div className="grid w-8 h-8 place-items-center">
              <img src="/facebook.svg" />
            </div>
            <div className="grid w-8 h-8 place-items-center">
              <img src="/twitter.svg" />
            </div>
            <div className="grid w-8 h-8 place-items-center">
              <img src="/instagram.svg" />
            </div>
          </div>
        </div>

        <div className="flex-grow"></div>

        <FooterColumn
          title="Property"
          links={["House", "Apartment", "Villa"]}
        />
        <FooterColumn
          title="Article"
          links={[
            "New Articles",
            "Popular Articles",
            "Most Read",
            "Tips & Tricks",
          ]}
        />
        <FooterColumn
          title="Contact"
          links={[
            "2464 Royal Ln. Mesa, New Jersey 45463",
            "(671) 555-0110",
            "info@hounter.com",
          ]}
        />
      </footer>
    </div>
  );
}
