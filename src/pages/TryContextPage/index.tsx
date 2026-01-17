import { useContext } from "preact/hooks";
import { useTryContextPage } from "./TryContextPageContext";

export const TryContextPage = () => {
  const {
    defaultState, 
    TryContextPageContext 
  } = useTryContextPage();

  const context = useContext(TryContextPageContext);

  return (
    <TryContextPageContext.Provider value={defaultState}>
      <div className="container">
        <h3>Try Context Page</h3>
        <p>{context?.message ?? "N/A"}</p>
      </div>
    </TryContextPageContext.Provider>
  );
};
