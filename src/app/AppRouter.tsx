import { Route, Router } from "preact-iso";

import { NotFound } from "../pages/_404";
import { TodosPage } from "../pages/TodoPage";

export const AppRouter = () => {
  return (
    <Router>
      <Route path="/" component={TodosPage} />
      <Route default component={NotFound} />
    </Router>
  );
};
