export default function FooterColumn({
  title,
  links,
}: { title: string; links: string[] } & React.ComponentProps<"div">) {
  return (
    <div>
      <p className="text-lg leading-[22.5px] font-medium text-heading-2 mb-6">
        {title}
      </p>
      {links.map((link) => (
        <p
          key={link}
          className="text-sm leading-[17.5px] font-light text-text-2 mb-[18px]"
        >
          {link}
        </p>
      ))}
    </div>
  );
}
