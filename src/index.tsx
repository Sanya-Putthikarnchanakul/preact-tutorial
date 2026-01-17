import {
  LocationProvider,
  Router,
  Route,
  hydrate,
  prerender as ssr,
} from "preact-iso";

import { HomePage } from "./pages/HomePage";
import { IntroductionPage } from "./pages/IntroductionPage";
import { TodoPage } from "./pages/TodoPage";
import { NotFound } from "./pages/_404";

import "./style.css";
import { TryReducerPage } from "./pages/TryReducerPage";
import { TryCustomHookPage } from "./pages/TryCustomHookPage";
import { TryContextPage } from "./pages/TryContextPage";
import { TryContextPageContext } from "./pages/TryContextPage/TryContextPageContext";

export function App() {
  return (
    <LocationProvider>
      <Router>
        <Route path="/" component={HomePage} />
        <Route path="/introduction" component={IntroductionPage} />
        <Route path="/todos" component={TodoPage} />
        <Route path="/try-reducer" component={TryReducerPage} />
        <Route path="/try-custom-hook" component={TryCustomHookPage} />
        <Route path="/try-context" component={TryContextPage} />
        <Route default component={NotFound} />
      </Router>
    </LocationProvider>
  );
}

if (typeof window !== "undefined") {
  hydrate(<App />, document.getElementById("app"));
}

export async function prerender(data) {
  return await ssr(<App {...data} />);
}
