import { useState } from "react";

export default function Tour() {
  const [current, setCurrent] = useState(1);

  return (
    <div className="relative flex-grow max-w-[480px] [&>img]:rounded ml-auto aspect-[1/1]">
      <img
        src={`/tour-${current}.jpg`}
        className="absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] w-full h-full object-cover"
      />
      <img
        src="/play.svg"
        className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] z-10 backdrop-blur-[5px]"
      />
      <div className="absolute z-20 bottom-0 translate-y-[85%] -left-16 h-full max-h-32">
        <div className="flex w-full h-full gap-4">
          {[1, 2, 3, 4].map((x) =>
            x === current ? null : (
              <img
                key={x}
                src={`/tour-${x}.jpg`}
                className="object-cover w-auto h-full"
                onClick={() => setCurrent(x)}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
