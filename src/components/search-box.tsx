import classNames from "classnames";

export default function SearchBox({
  className,
  icon,
  placeholder,
  buttonIcon,
  children,
  ...props
}: { icon: string; placeholder: string; buttonIcon?: string } & Omit<
  React.HTMLProps<HTMLDivElement>,
  "placeholder"
>) {
  return (
    <div
      {...props}
      className={classNames(
        className,
        "flex space-x-4 max-w-[496px] w-full border rounded-full h-14 border-light p-1 pl-6 mb-8 bg-white"
      )}
    >
      <div className="grid self-center w-6 h-6 place-items-center">
        <img src={icon} />
      </div>
      <input
        className="flex-grow placeholder:text-text-2 placeholder:leading-[22px] placeholder:text-sm placeholder:font-normal focus:outline-none"
        placeholder={placeholder}
      />
      <button className="text-sm leading-[22px] font-medium capitalize flex items-center bg-primary text-white px-4 py-3 rounded-full gap-1">
        <span>{children}</span>

        {buttonIcon && (
          <div className="grid w-6 h-6 place-items-center">
            <img src={buttonIcon} />
          </div>
        )}
      </button>
    </div>
  );
}
