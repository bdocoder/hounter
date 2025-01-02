import { useState } from "react";
import Review from "./review";
import classNames from "classnames";

function SelectionButton({
  isSelected,
  className,
  ...props
}: { isSelected?: boolean } & React.ComponentProps<"button">) {
  return (
    <button
      className={classNames(
        className,
        "w-2 h-2 rounded-full",
        isSelected ? "bg-attribute" : "bg-light"
      )}
      {...props}
    />
  );
}

export default function Reviews() {
  const [current, setCurrent] = useState(1);

  // TODO: add this interval and make it stop with a button click
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((c) => (c + 1) % 3);
  //   }, 6500);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div
      className="relative overflow-hidden"
      style={
        {
          height: "calc(var(--review-width) / 1.85 + 137px)",
          // TODO: simplify
          "--review-width": "740px",
          "--review-gap": "56px",
        } as React.CSSProperties
      }
    >
      {[0, 1, 2].map((order) => (
        <div
          className="absolute transition-[left]"
          style={{
            left: `calc(50vw - var(--review-width) / 2 - (var(--review-width) + var(--review-gap)) * ${
              current - order
            })`,
          }}
        >
          <Review
            key={order}
            order={order}
            style={{ width: "var(--review-width)" }}
          />
        </div>
      ))}

      {[0, 1, 2].map((order) => (
        <SelectionButton
          className="absolute bottom-0 left-[50%] z-20"
          style={{
            transform: `translateX(calc(-50% - ${(1 - order) * 24}px))`,
          }}
          isSelected={current === order}
          onClick={() => setCurrent(order)}
        />
      ))}
    </div>
  );
}
