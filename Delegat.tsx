import jQuery from "jquery";
function Delegat() {
  jQuery("p").click(function () {
    jQuery(this).slideUp();
    jQuery("h1").append(" <p>my mom will come</p>");
  });
  return (
    <>
      <p>paragraphs</p>
      <h1>this is my first heading</h1>
      <p>this is my second paragraph</p>
      <h2>this is my second heading</h2>
    </>
  );
}

export default Delegat;
