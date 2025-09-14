import jQuery from "jquery";
import "./Multiple.scss";
function Multiple() {
  jQuery("html").on("click keydown", function () {
    console.log("we will make it one day friends");
  });
  jQuery(".k").on("click", function () {
    jQuery(".k").fadeTo(200, 0.2);
  });
  return (
    <>
      <h2>I can die any time from now </h2>
      <div className="k">Ride</div>
    </>
  );
}
export default Multiple;
