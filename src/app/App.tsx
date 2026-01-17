import { LocationProvider } from "preact-iso";
import { AppRouter } from "./AppRouter";

export function App() {
  return (
    <LocationProvider>
      <AppRouter />
    </LocationProvider>
  );
}
