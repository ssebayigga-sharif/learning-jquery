import { useState } from "react";
import jQuery from "jquery";

function Cope() {
  const [her, setHer] = useState("All of my friends are coming tommorow");
  const myAnimals = ["Sheep", "Goat", "cow", "Dog"];
  console.log(myAnimals);
  jQuery(() => {
    jQuery("h1").fadeOut(5000);
    jQuery("h1").fadeIn(5000);
    jQuery("h1").fadeTo(5000, 0.4);
    jQuery("h2").fadeOut(5000);
    jQuery("h2").fadeIn(5000);
    jQuery("h2").fadeTo(5000, 0.4);
    // custom jquery animations
    jQuery("p").animate(
      {
        marginLeft: "200px",
        fontSize: "50px",
        fontWeight: "italic",
      },
      2000
    );
  });
  return (
    <>
      <h1>Sharif is my name</h1>
      <p>We live in kayunga Wakiso district</p>
      <p>I can not ride anything in life</p>
      <h2>{her}</h2>
    </>
  );
}
export default Cope;
