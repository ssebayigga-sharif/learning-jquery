import jQuery from "jquery";
import "./Entermouse.scss";
function Entermouse() {
  //   jQuery(".h").mouseenter(() => {
  //     jQuery(".h").stop().fadeTo(500, 0.4);
  //   });
  //   jQuery(".h").mouseleave(() => {
  //     jQuery(".h").stop().fadeTo(500, 1);
  // });

  let awesome = jQuery(".h");
  awesome.hover(
    function () {
      jQuery(".h").stop().fadeTo(500, 0.4);
    },
    function () {
      jQuery(".h").stop().fadeTo(500, 1);
    }
  );
  return (
    <>
      <div className="h">me</div>
    </>
  );
}
export default Entermouse;
