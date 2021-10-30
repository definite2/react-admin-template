import { useCallback, useMemo } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { parse, stringfy } from "query-string";

export const useQueryParams = () => {
  const { replace } = useHistory();
  const location = useLocation();
  const currentState = useMemo(
    () =>
      parse(location.search, {
        arrayFormat: "comma",
        parseBooleans: true,
        parseNumbers: true,
      }),
    [location.search]
  );
  const stringfyFormat = useCallback(
    (params) =>
      stringify(params, {
        arrayFormat: "comma",
        skipEmtyString: true,
        skipNull: true,
        sort: (a, b) => a.localeCompare(b),
      }),
    []
  );
  const replaceUrlIfNeeded = useCallback(
    (newState) => {
      const stringifiedParams = stringfyFormat(newState);
      const searchToCompare = location.search || "?";
      if (searchToCompare !== `?${stringifiedParams}`) {
        replace(`${location.pathname}?${stringifiedParams}`);
      }
    },
    [replace, location.pathname, location.search, stringfyFormat]
  );
  const setQueryParams = useCallback(
    (nextParams) => {
      replaceUrlIfNeeded({ ...currentState, ...nextParams });
    },
    [currentState, replaceUrlIfNeeded]
  );
  const replaceQueryParams = useCallback(
    (nextParams) => {
      replaceUrlIfNeeded({ ...nextParams });
    },
    [replaceUrlIfNeeded]
  );
  return {
    queryParams: currentState,
    replaceQueryParams,
    setQueryParams,
  };
};
