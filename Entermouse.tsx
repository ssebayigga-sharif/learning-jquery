import jQuery from "jquery";
import "./Entermouse.scss";
function Entermouse() {
  jQuery(".h").hover(
    function () {
      jQuery(this).stop().fadeTo(500, 0.4);
    },
    function () {
      jQuery(this).stop().fadeTo(500, 1);
    }
  );
  return (
    <>
      <div className="h">me</div>
    </>
  );
}
export default Entermouse;
