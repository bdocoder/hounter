import classNames from "classnames";
import people from "../lib/people";

export default function HouseCard({
  className,
  src,
  type,
  title,
  price,
  owner,
  ...props
}: {
  type: "new" | "popular" | "best";
  title: string;
  price: string;
  src: string;
  owner: keyof typeof people;
} & React.ComponentProps<"div">) {
  return (
    <div className={classNames(className, "grid gap-6")} {...props}>
      <div className="w-[340px] h-[382px] relative">
        <img src={src} className="rounded-[24px] w-full h-full" />
        <span
          className={classNames(
            "px-4 py-2 flex items-center gap-2.5 absolute bottom-4 left-4 rounded-full",
            type === "popular" && "bg-alert-light text-alert",
            type === "new" && "bg-info-light text-info",
            type === "best" && "bg-primary-light text-primary"
          )}
        >
          <img
            src={
              type === "popular"
                ? "/popular.svg"
                : type === "new"
                ? "/house-blue.svg"
                : "/deal.svg"
            }
          />
          {type === "popular"
            ? "Popular"
            : type === "new"
            ? "New House"
            : "Best Deals"}
        </span>
      </div>
      <div className="grid gap-2">
        <h3 className="text-heading-2 text-2xl leading-[32px] font-normal">
          {title}
        </h3>
        <span className="text-xl leading-[32px] font-normal text-attribute">
          {price}
        </span>
      </div>

      <div className="flex gap-4">
        <img src={people[owner].img} className="w-10 h-10 rounded-full" />
        <div className="grid gap-1">
          <h4 className="text-heading-2 text-lg leading-[24px] font-medium">
            {people[owner].name}
          </h4>
          <span className="text-sm leading-[22px] font-medium text-text-2">
            {people[owner].address}
          </span>
        </div>
      </div>
    </div>
  );
}
