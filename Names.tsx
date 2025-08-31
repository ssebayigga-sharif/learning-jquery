import { useState } from "react";
import jQuery from "jquery";
function Names() {
  const [yes, setYes] = useState("i will play soccer");
  const callMe = () => {
    setYes("you know I love soccer man");
  };

  jQuery(() => {
    jQuery("p").fadeOut(3000); //jquery fades all the paragraphs after three seconds
    jQuery("h1").fadeOut(3000); //jquery fades all the h1 elements on the page after 6 seconds
    jQuery("h1").fadeIn(6000);
    jQuery("p").fadeIn(6000);
    jQuery("p").fadeTo(6000, 0.8);
    jQuery("h1").fadeTo(6000, 0.3);
    jQuery("h2").fadeTo(6000, 0.6);
    jQuery("h3").fadeToggle(8000);
  });
  let me: string = "Sharif Ssebayigga"; //typescript types in javascript
  console.log(me);
  return (
    <>
      <h3>Sharif</h3>
      <h1>I love myself</h1>
      <h2>we will pray when time comes not so</h2>
      <p> you can count on me but am seeing you</p>
      <p>{yes}</p>
      <p>when that buton is clicked then something will happen</p>
      <button onClick={callMe}>change that</button>
    </>
  );
}

export default Names;
