import styles from "./IntroductionPage.module.css";

import { signal } from "@preact/signals";
import { useLocation } from 'preact-iso';

// this is global an it not reset until your reload a webpage
const count = signal(0);

export const IntroductionPage = () => {
  // preact-iso go to other page
  const { route } = useLocation();

  return (
    <>
      <div className="container">
        <h3>Introduction Page</h3>

        <p>Count: {count}</p>

        <button onClick={() => count.value++}>Increment</button>
        <br /><br />

        <a href="/">Go Home (tag a)</a>
        <br /><br />

        <button onClick={() => route("/")}>Go Home (tag button)</button>
      </div>
    </>
  );
};
