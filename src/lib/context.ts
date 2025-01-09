import noval, { useDispatch, useSelector } from "noval";

type Filter = "all" | "house" | "villa" | "apartment";

export const Provider = noval(
  {
    filter: "all",
  },
  ({ type, payload }, { update }) => {
    function setFilter() {
      const { filter } = payload;
      update({ filter });
    }

    switch (type) {
      case "setFilter":
        return setFilter();
      default:
        break;
    }
  }
);

export function useFilter() {
  const filter = useSelector("filter") as Filter;
  const { dispatch } = useDispatch();

  function setFilter(value: string) {
    return dispatch("setFilter", { filter: value });
  }

  return [filter, setFilter] as const;
}
