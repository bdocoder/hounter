import classNames from "classnames";

export default function SectionHeading({
  order = 2,
  className,
  ...props
}: { order?: 1 | 2 } & React.HTMLProps<HTMLHeadingElement>) {
  return (
    <h1
      className={classNames(
        className,
        "font-medium tracking-tight capitalize text-heading",
        order === 1 ? "text-4xl" : "text-3xl"
      )}
      {...props}
    />
  );
}
