import jQuery from "jquery";
import { useState } from "react";
function Show() {
  const [him, setHim] = useState("Sharif");
  const theName = () => {
    setHim("Sherrif Rollinz");
  };
  jQuery(() => {
    //built in animations
    jQuery("h1").hide(2000);
    jQuery("h1").show(1000);
    jQuery("h2").slideUp(9000);
    jQuery("h2").slideDown(1000);

    //custom animations
    jQuery("p").animate(
      {
        marginLeft: "10px",
        fontSize: "50px",
        fontFamily: "courier",
      },
      4000
    );
  });

  return (
    <>
      <h1>I love God</h1>
      <h2>Sharif and Sharifah</h2>
      <p>we will all die</p>
      <p>my favorite color is red</p>
      <p>{him}</p>
      <button onClick={theName}>his name</button>
    </>
  );
}
export default Show;
