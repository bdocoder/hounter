import classNames from "classnames";

export default function HeaderCard({
  className,
  title,
  description,
  children,
  ...props
}: { title: string; description: string } & Omit<
  React.ComponentProps<"div">,
  "title"
>) {
  return (
    <div
      className={classNames(className, "rounded-[32px] p-6 bg-white shrink-0")}
      {...props}
    >
      <div className="flex items-center gap-4">
        {children}
        <div className="grid gap-0.5 shrink-0">
          <h2 className="leading-[24px] font-medium text-heading">{title}</h2>
          <p className="text-text-1 text-xs leading-[20px] font-light">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
