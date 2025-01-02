import classNames from "classnames";

export default function HouseAttribute({
  icon,
  children,
  className,
  ...props
}: { icon: string } & React.HTMLProps<HTMLSpanElement>) {
  return (
    <span
      className={classNames(
        className,
        "flex items-center gap-4 text-attribute"
      )}
      {...props}
    >
      <span className="grid w-8 h-8">
        <img className="m-auto" src={`/${icon}.svg`} />
      </span>
      <span className="font-normal">{children}</span>
    </span>
  );
}
