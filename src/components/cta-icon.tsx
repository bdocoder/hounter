import classNames from "classnames";

export default function CtaIcon({
  src,
  className,
  width = 36,
  ...props
}: React.HTMLProps<HTMLImageElement>) {
  return (
    <img
      src={src}
      className={classNames(
        className,
        "absolute rounded-[24px] border-2 border-white"
      )}
      style={{ width: width, height: width }}
      {...props}
    />
  );
}
