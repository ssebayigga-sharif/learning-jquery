import { useState } from "react";
import jQuery from "jquery";

function Eventz() {
  const [any, setAny] = useState("home");
  const them = () => {
    setAny("wherever you want");
  };
  jQuery(".check").click(() => {
    alert("button clicked");
  });
  jQuery(".ye").click(() => {
    jQuery("p").fadeTo(4000, 0.5);
  });
  return (
    <>
      <button className="check">my button</button>
      <h1>count</h1>
      <button className="ye">fade</button>
      <p>we can go {any}</p>
      <button onClick={them}>click it</button>
    </>
  );
}
export default Eventz;
