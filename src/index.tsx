import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";

import "./style.css";

import { NotFound } from "./pages/_404.jsx";
import { FlexboxIntro } from "./pages/FlexboxIntro/index.js";

export function App() {
  return (
    <LocationProvider>
      <Router>
        <Route path="/" component={() => <p>Loading...</p>} />
        <Route path="/flexbox-intro" component={FlexboxIntro} />
        <Route default component={NotFound} />
      </Router>
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));
