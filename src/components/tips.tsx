import people from "../lib/people";
import SectionHeading from "./section-heading";
import Subheading from "./subheading";

export default function Tips() {
  return (
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
                  7 Ways to distinguish the quality of the house we want to buy{" "}
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
                here I will try to explain what we should know and check when we
                want to buy a house
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
  );
}
