import classNames from "classnames";

export default function Brand({
  className,
  ...props
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={classNames(className, "flex items-center space-x-3")}
      {...props}
    >
      <img src="/logo.svg" alt="logo" width={38} height={38} />
      <span className="font-bold">Hounter</span>
    </div>
  );
}
