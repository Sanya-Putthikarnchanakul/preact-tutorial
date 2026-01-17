import { createContext } from "preact";
import { useEffect } from "preact/hooks";

interface TryContextPageState {
  message?: string;
}

const defaultState: TryContextPageState = {
  message: null,
};

const TryContextPageContext = createContext<TryContextPageState>(defaultState);

export const useTryContextPage = () => {
  useEffect(() => {
    console.log("TryContextPageContext initialized");
  }, []);

  return {
    defaultState,
    TryContextPageContext,
  };
};
