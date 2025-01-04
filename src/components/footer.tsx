import Brand from "./brand";
import FooterColumn from "./footer-column";

export default function Footer() {
  return (
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

      <FooterColumn title="Property" links={["House", "Apartment", "Villa"]} />
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
  );
}
