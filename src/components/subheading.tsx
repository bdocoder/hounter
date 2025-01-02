import classNames from "classnames";

export default function Subheading({
  direction = "horizontal",
  children,
  ...props
}: {
  direction?: "vertical" | "horizontal";
} & React.HTMLProps<HTMLParagraphElement>) {
  return (
    <p
      className={classNames(
        "text-sm font-normal flex gap-2 items-center text-secondary mb-3",
        direction === "vertical" && "flex-col",
        direction === "horizontal" && "-ml-10"
      )}
      {...props}
    >
      <div className="w-8 h-px bg-secondary"></div>
      {children}
    </p>
  );
}
