import classNames from "classnames";
import people from "../lib/people";
import reviews from "../lib/reviews";

export default function Review({
  order,
  className,
  style,
  ...props
}: { order: number } & React.HTMLProps<HTMLDivElement>) {
  const { img, title, content, author, stars } = reviews[order];

  return (
    <div
      className={classNames(className, "relative")}
      style={{ ...style, aspectRatio: "1.85 / 1" }}
      {...props}
    >
      <img
        src={img}
        className="object-cover object-center w-full h-full rounded-[8px]"
      />

      <div
        className="absolute p-8 bg-white bottom-0 translate-y-[42%] left-16 right-16 grid gap-6 rounded-[16px]"
        style={{ boxShadow: "0 9px 32px 0 #595CDB0D" }}
      >
        <div>
          <h3 className="text-xl leading-[25px] font-medium text-heading mb-4">
            {title}
          </h3>
          <p className="text-sm leading-[24px] font-light text-text-1 tracking-wide">
            {content}
          </p>
        </div>
        <div className="flex items-center gap-6">
          <img src={people[author].img} className="w-10 h-10 rounded-full" />
          <div className="grid flex-grow gap-1">
            <h4 className="text-sm leading-[22px] font-normal text-heading-2">
              {people[author].name}
            </h4>
            <span className="text-sm leading-[22px] font-normal text-text-2">
              {people[author].role}
            </span>
          </div>
          <div className="flex self-end gap-4">
            <img className="w-7 h-7" src="/star.svg" />
            <span className="text-xl leading-[28px] font-medium text-attribute">
              {stars}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
