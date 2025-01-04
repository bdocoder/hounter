import people from "../lib/people";
import CtaIcon from "./cta-icon";
import SearchBox from "./search-box";
import SectionHeading from "./section-heading";

export default function Subscribe() {
  return (
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
  );
}
